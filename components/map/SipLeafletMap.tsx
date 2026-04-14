"use client";

import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type TransitionEvent,
} from "react";
import { createPortal } from "react-dom";
import "leaflet/dist/leaflet.css";
import "@/styles/leaflet-sip.css";
import { I18nContext } from "@/components/providers/AppProviders";
import type { Lang, TranslationKey } from "@/components/i18n/translations";
import {
  buildFullscreenMapCatalog,
  CATALOG_DUPLICATE_REGIONAL_IDS,
  countByMapType,
  DEFAULT_FULLSCREEN_TYPE_FILTERS,
  filterCatalogByTypes,
  filterCatalogInFrame,
  FULLSCREEN_MAP_POINT_TYPES,
  type MapPointType,
} from "@/data/sipMap/mapReferencePoints";
import {
  isPlacenameInSipFrame,
  placenameLabel,
  SIP_REGIONAL_PLACENAMES,
} from "@/data/sipMap/sipRegionalPlacenames";
import { getSitePointById, SITE_POINTS, type SitePointCategory } from "@/data/sipMap/sitePointsData";
import { patchLeafletDefaultIcons } from "@/lib/map/leafletDefaultIcon";
import {
  catalogMarkerBaseStyle,
  catalogMarkerHoverStyle,
  poiMarkerHoverStyle,
  poiMarkerStyle,
} from "@/lib/map/sipLayerStyles";
import { MapInfoPanel, type MapInfoSelection } from "@/components/map/MapInfoPanel";
import {
  buildCatalogEntryMiniTooltipHtml,
  buildSitePointMiniTooltipHtml,
} from "@/lib/map/sipPopup";
import {
  BASEMAP_TILES,
  type BasemapId,
  ESRI_REFERENCE_BOUNDARIES_PLACES,
  MAX_BOUNDS_VISCOSITY,
  SIP_MAP_DEFAULT_ZOOM,
  SIP_MAP_MAX_ZOOM,
  SIP_MAP_MIN_ZOOM,
  SIP_MAX_BOUNDS_LAT_LNG,
  SIP_PAN_MAX_BOUNDS_LAT_LNG,
} from "@/lib/map/sipMapConfig";

const fallbackT = (key: TranslationKey) => String(key);

const BASEMAP_IDS: BasemapId[] = ["standard", "topo", "cartoLight", "satellite"];

/** Horizontal space for map chrome: side inset + toggle column + gap (px). */
const PANEL_PAD = 12;
const LEFT_TOGGLE_W = 44;
const PANEL_GAP = 16;

function computeSidePanelWidths(
  boxW: number,
  leftExpanded: boolean,
  rightShown: boolean,
): { leftMax: number; rightMax: number } {
  const maxL = 320;
  const maxR = 420;
  const minL = 200;
  const minR = 240;
  if (boxW <= 0) return { leftMax: maxL, rightMax: maxR };

  if (!rightShown) {
    const lm = leftExpanded
      ? Math.min(maxL, Math.max(160, boxW - PANEL_PAD - LEFT_TOGGLE_W - PANEL_PAD - 8))
      : maxL;
    return { leftMax: lm, rightMax: maxR };
  }

  if (!leftExpanded) {
    const collapsedFromLeft = PANEL_PAD + 56 + PANEL_GAP;
    const rm = Math.min(maxR, Math.max(minR, boxW - collapsedFromLeft - PANEL_PAD));
    return { leftMax: maxL, rightMax: rm };
  }

  const avail = boxW - PANEL_PAD - PANEL_PAD - LEFT_TOGGLE_W - PANEL_GAP;
  if (avail < minL + minR) {
    const a = Math.max(120, Math.floor(avail / 2));
    const b = Math.max(120, avail - a);
    return {
      leftMax: Math.min(maxL, a),
      rightMax: Math.min(maxR, b),
    };
  }
  let rw = Math.min(maxR, avail - minL);
  let lw = avail - rw;
  if (lw < minL) {
    lw = minL;
    rw = Math.min(maxR, avail - lw);
  }
  if (rw < minR) {
    rw = minR;
    lw = Math.min(maxL, Math.max(minL, avail - rw));
  }
  return {
    leftMax: Math.min(maxL, Math.max(minL, lw)),
    rightMax: Math.min(maxR, Math.max(minR, rw)),
  };
}

export type SipLeafletMapVariant = "embedded" | "fullscreen";

type MarkerHighlightRegistryEntry = {
  marker: import("leaflet").CircleMarker;
  base: import("leaflet").CircleMarkerOptions;
  hover: import("leaflet").CircleMarkerOptions;
  matches: (sel: MapInfoSelection | null) => boolean;
};

export function SipLeafletMap({
  className,
  variant = "embedded",
}: {
  className?: string;
  variant?: SipLeafletMapVariant;
}) {
  const i18n = useContext(I18nContext);
  const lang = (i18n?.lang ?? "ru") as Lang;
  const t = i18n?.t ?? fallbackT;
  const elRef = useRef<HTMLDivElement | null>(null);
  const shellRef = useRef<HTMLDivElement | null>(null);
  const [shellW, setShellW] = useState(0);
  const [portalReady, setPortalReady] = useState(false);
  const [selected, setSelected] = useState<MapInfoSelection | null>(null);
  const selectedRef = useRef<MapInfoSelection | null>(null);
  selectedRef.current = selected;

  const markerRegistryRef = useRef<MarkerHighlightRegistryEntry[]>([]);
  const syncHighlightRef = useRef<(() => void) | null>(null);

  const leafletCtlRef = useRef<{
    applyBasemap: (id: BasemapId) => void;
    zoomIn: () => void;
    zoomOut: () => void;
    setPoiOverlayVisible: (visible: boolean) => void;
    getZoom: () => number;
  } | null>(null);

  const [basemapId, setBasemapId] = useState<BasemapId>("standard");
  const [poiOn, setPoiOn] = useState(true);
  const [liveZoom, setLiveZoom] = useState(SIP_MAP_DEFAULT_ZOOM);
  /** Right detail overlay: open state (animate); selection clears on transitionend after close. */
  const [rightOpen, setRightOpen] = useState(false);
  const rightOpenRef = useRef(false);
  rightOpenRef.current = rightOpen;
  /** Fullscreen: hide the wide panel but keep selection + marker highlight (map stays fully usable). */
  const [rightPanelPeek, setRightPanelPeek] = useState(false);

  /** desktop ≥1024, tablet 768–1023, mobile <768 */
  const [layoutTier, setLayoutTier] = useState<"desktop" | "tablet" | "mobile">(() => {
    if (typeof window === "undefined") return "desktop";
    const w = window.innerWidth;
    if (w >= 1024) return "desktop";
    if (w >= 768) return "tablet";
    return "mobile";
  });

  /** Left tools column: open on desktop by default, collapsed on tablet (fullscreen). */
  const [leftExpanded, setLeftExpanded] = useState(true);

  /** Fullscreen mobile: at most one sheet — layers (left) or object info (right). */
  const [mobileSheet, setMobileSheet] = useState<null | "left" | "right">(null);

  const basemapIdRef = useRef(basemapId);
  const poiOnRef = useRef(poiOn);
  basemapIdRef.current = basemapId;
  poiOnRef.current = poiOn;

  const [filters, setFilters] = useState<Record<SitePointCategory, boolean>>({
    overview: true,
    testSite: true,
    excavation: true,
    radiological: true,
  });

  const [typeFilters, setTypeFilters] = useState<Record<MapPointType, boolean>>(() => ({
    ...DEFAULT_FULLSCREEN_TYPE_FILTERS,
  }));

  const fullCatalog = useMemo(() => filterCatalogInFrame(buildFullscreenMapCatalog()), []);

  const filteredPoints = useMemo(() => {
    return SITE_POINTS.filter((p) => filters[p.category]);
  }, [filters]);

  const filteredCatalogPoints = useMemo(() => {
    return filterCatalogByTypes(fullCatalog, typeFilters);
  }, [fullCatalog, typeFilters]);

  const catalogCounts = useMemo(() => countByMapType(fullCatalog), [fullCatalog]);

  const markerLayerSignature = useMemo(() => {
    return variant === "fullscreen"
      ? filteredCatalogPoints.map((p) => p.id).join("|")
      : filteredPoints.map((p) => p.id).join("|");
  }, [variant, filteredCatalogPoints, filteredPoints]);

  useEffect(() => {
    syncHighlightRef.current?.();
  }, [selected]);

  useEffect(() => {
    if (!selected) {
      setRightOpen(false);
      setRightPanelPeek(false);
      setMobileSheet(null);
      return;
    }
    setRightPanelPeek(false);
    if (variant === "fullscreen" && layoutTier === "mobile") {
      setMobileSheet("right");
    }
    const id = requestAnimationFrame(() => setRightOpen(true));
    return () => cancelAnimationFrame(id);
  }, [selected, variant, layoutTier]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setRightPanelPeek(false);
      setRightOpen(false);
      setMobileSheet(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    setPortalReady(true);
  }, []);

  useEffect(() => {
    const upd = () => {
      const w = window.innerWidth;
      setLayoutTier(w >= 1024 ? "desktop" : w >= 768 ? "tablet" : "mobile");
    };
    upd();
    window.addEventListener("resize", upd);
    return () => window.removeEventListener("resize", upd);
  }, []);

  useEffect(() => {
    if (variant !== "fullscreen") return;
    if (layoutTier === "desktop") {
      setLeftExpanded(true);
      setMobileSheet(null);
    } else if (layoutTier === "tablet") {
      setLeftExpanded(false);
      setMobileSheet(null);
    } else {
      setLeftExpanded(false);
      setMobileSheet(selectedRef.current ? "right" : null);
    }
  }, [layoutTier, variant]);

  useEffect(() => {
    if (variant !== "fullscreen") return;
    window.dispatchEvent(new Event("resize"));
  }, [variant, rightPanelPeek, selected, leftExpanded, mobileSheet, shellW]);

  useEffect(() => {
    const el = shellRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect.width ?? 0;
      setShellW(Math.round(w));
    });
    ro.observe(el);
    setShellW(Math.round(el.getBoundingClientRect().width));
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    let mapInstance: ReturnType<typeof import("leaflet").map> | null = null;
    let detachResize: (() => void) | null = null;
    let detachZoom: (() => void) | null = null;
    let cancelled = false;

    void (async () => {
      const L = (await import("leaflet")).default;
      if (cancelled || !elRef.current) return;

      patchLeafletDefaultIcons(L);

      const bounds = L.latLngBounds(SIP_MAX_BOUNDS_LAT_LNG);
      const panLimit = L.latLngBounds(SIP_PAN_MAX_BOUNDS_LAT_LNG);

      const map = L.map(el, {
        zoomControl: false,
        minZoom: SIP_MAP_MIN_ZOOM,
        maxZoom: SIP_MAP_MAX_ZOOM,
        maxBounds: panLimit,
        maxBoundsViscosity: MAX_BOUNDS_VISCOSITY,
      });

      mapInstance = map;

      if (cancelled) {
        map.remove();
        mapInstance = null;
        return;
      }

      const standard = L.tileLayer(BASEMAP_TILES.standard.url, {
        attribution: BASEMAP_TILES.standard.attribution,
        maxZoom: BASEMAP_TILES.standard.maxZoom,
      });

      const topo = L.tileLayer(BASEMAP_TILES.topo.url, {
        attribution: BASEMAP_TILES.topo.attribution,
        maxZoom: BASEMAP_TILES.topo.maxZoom,
      });

      const cartoLight = L.tileLayer(BASEMAP_TILES.cartoLight.url, {
        attribution: BASEMAP_TILES.cartoLight.attribution,
        maxZoom: BASEMAP_TILES.cartoLight.maxZoom,
      });

      const satellite = L.tileLayer(BASEMAP_TILES.satellite.url, {
        attribution: BASEMAP_TILES.satellite.attribution,
        maxZoom: BASEMAP_TILES.satellite.maxZoom,
      });

      const markersLayer = L.layerGroup();

      const baseById: Record<BasemapId, import("leaflet").TileLayer> = {
        standard,
        topo,
        cartoLight,
        satellite,
      };

      map.createPane("sip-labels");
      const labelsPane = map.getPane("sip-labels")!;
      labelsPane.style.zIndex = "360";
      labelsPane.style.pointerEvents = "none";

      map.createPane("sip-placenames");
      const placenamesPane = map.getPane("sip-placenames")!;
      placenamesPane.style.zIndex = "420";
      placenamesPane.style.pointerEvents = "none";

      map.createPane("sip-poi");
      map.getPane("sip-poi")!.style.zIndex = "450";

      const satelliteRefLabels = L.tileLayer(ESRI_REFERENCE_BOUNDARIES_PLACES.url, {
        pane: "sip-labels",
        attribution: ESRI_REFERENCE_BOUNDARIES_PLACES.attribution,
        maxZoom: ESRI_REFERENCE_BOUNDARIES_PLACES.maxZoom,
      });

      const regionalPlacenamesLayer = L.layerGroup();
      const regionalSource =
        variant === "fullscreen"
          ? SIP_REGIONAL_PLACENAMES.filter(
              (place) => !CATALOG_DUPLICATE_REGIONAL_IDS.has(place.id),
            )
          : SIP_REGIONAL_PLACENAMES;

      regionalSource.filter(isPlacenameInSipFrame).forEach((place) => {
        const text = placenameLabel(lang, place);
        const icon = L.divIcon({
          className: "sip-placename-marker",
          html: `<span class="sip-placename-label">${text.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</span>`,
          iconSize: [1, 1],
          iconAnchor: [0, 0],
        });
        L.marker([place.lat, place.lng], {
          pane: "sip-placenames",
          icon,
          interactive: false,
          keyboard: false,
        }).addTo(regionalPlacenamesLayer);
      });

      const syncSatelliteOverlays = (activeBase: import("leaflet").Layer) => {
        const isSat = activeBase === satellite;
        if (isSat) {
          if (!map.hasLayer(satelliteRefLabels)) satelliteRefLabels.addTo(map);
          if (!map.hasLayer(regionalPlacenamesLayer)) regionalPlacenamesLayer.addTo(map);
        } else {
          if (map.hasLayer(satelliteRefLabels)) map.removeLayer(satelliteRefLabels);
          if (map.hasLayer(regionalPlacenamesLayer)) map.removeLayer(regionalPlacenamesLayer);
        }
      };

      const applyBasemap = (id: BasemapId) => {
        for (const key of BASEMAP_IDS) {
          const tl = baseById[key];
          if (map.hasLayer(tl)) map.removeLayer(tl);
        }
        baseById[id].addTo(map);
        syncSatelliteOverlays(baseById[id]);
      };

      applyBasemap(basemapIdRef.current);
      if (poiOnRef.current) {
        markersLayer.addTo(map);
      }

      L.control
        .scale({
          metric: true,
          imperial: false,
          position: "bottomleft",
        })
        .addTo(map);

      const onZoomEnd = () => {
        setLiveZoom(map.getZoom());
      };
      map.on("zoomend", onZoomEnd);
      detachZoom = () => {
        map.off("zoomend", onZoomEnd);
      };

      leafletCtlRef.current = {
        applyBasemap,
        zoomIn: () => {
          map.zoomIn();
        },
        zoomOut: () => {
          map.zoomOut();
        },
        setPoiOverlayVisible: (visible: boolean) => {
          if (visible) {
            if (!map.hasLayer(markersLayer)) markersLayer.addTo(map);
          } else if (map.hasLayer(markersLayer)) {
            map.removeLayer(markersLayer);
          }
        },
        getZoom: () => map.getZoom(),
      };

      markerRegistryRef.current = [];

      const applyMarkerHighlightStyles = () => {
        const sel = selectedRef.current;
        for (const { marker, base, hover, matches } of markerRegistryRef.current) {
          const on = matches(sel);
          if (on) {
            const br = (hover.radius as number) ?? (base.radius as number) ?? 6;
            marker.setStyle({
              ...hover,
              weight: (hover.weight ?? 2) + 1,
              radius: br + 2,
            });
            marker.bringToFront();
          } else {
            marker.setStyle(base);
          }
        }
      };

      if (variant === "fullscreen") {
        filteredCatalogPoints.forEach((entry) => {
          const base = catalogMarkerBaseStyle(entry.mapType);
          const dot = L.circleMarker([entry.lat, entry.lng], { ...base, pane: "sip-poi" });
          const hover = catalogMarkerHoverStyle(entry.mapType, base);
          const matches = (sel: MapInfoSelection | null) => {
            if (!sel) return false;
            if (sel.mode === "catalog" && sel.entry.id === entry.id) return true;
            if (sel.mode === "sip" && entry.sipSiteId && sel.site.id === entry.sipSiteId) return true;
            return false;
          };

          dot.bindTooltip(buildCatalogEntryMiniTooltipHtml(t, entry, lang), {
            direction: "top",
            opacity: 1,
            className: "sip-leaflet-tooltip-mini",
            sticky: true,
            interactive: false,
          });

          dot.on("mouseover", () => {
            const sel = selectedRef.current;
            if (matches(sel)) {
              const br = (hover.radius as number) ?? (base.radius as number) ?? 6;
              dot.setStyle({
                ...hover,
                weight: (hover.weight ?? 2) + 1,
                radius: br + 2,
              });
            } else {
              dot.setStyle(hover);
            }
            dot.bringToFront();
          });
          dot.on("mouseout", () => {
            applyMarkerHighlightStyles();
          });
          dot.on("click", () => {
            if (entry.sipSiteId) {
              const site = getSitePointById(entry.sipSiteId);
              if (site) {
                const next: MapInfoSelection = { mode: "sip", site };
                selectedRef.current = next;
                setSelected(next);
                if (typeof window !== "undefined" && window.innerWidth < 768) {
                  setMobileSheet("right");
                }
              }
            } else {
              const next: MapInfoSelection = { mode: "catalog", entry };
              selectedRef.current = next;
              setSelected(next);
              if (typeof window !== "undefined" && window.innerWidth < 768) {
                setMobileSheet("right");
              }
            }
            applyMarkerHighlightStyles();
          });

          markerRegistryRef.current.push({ marker: dot, base, hover, matches });
          dot.addTo(markersLayer);
        });
      } else {
        filteredPoints.forEach((p) => {
          const base = poiMarkerStyle;
          const hover = poiMarkerHoverStyle;
          const dot = L.circleMarker([p.lat, p.lng], { ...base, pane: "sip-poi" });
          const matches = (sel: MapInfoSelection | null) =>
            Boolean(sel?.mode === "sip" && sel.site.id === p.id);

          dot.bindTooltip(buildSitePointMiniTooltipHtml(t, p), {
            direction: "top",
            opacity: 1,
            className: "sip-leaflet-tooltip-mini",
            sticky: true,
            interactive: false,
          });

          dot.on("mouseover", () => {
            const sel = selectedRef.current;
            if (matches(sel)) {
              const br = (hover.radius as number) ?? (base.radius as number) ?? 6;
              dot.setStyle({
                ...hover,
                weight: (hover.weight ?? 2) + 1,
                radius: br + 2,
              });
            } else {
              dot.setStyle(hover);
            }
            dot.bringToFront();
          });
          dot.on("mouseout", () => {
            applyMarkerHighlightStyles();
          });
          dot.on("click", () => {
            const next: MapInfoSelection = { mode: "sip", site: p };
            selectedRef.current = next;
            setSelected(next);
            applyMarkerHighlightStyles();
          });

          markerRegistryRef.current.push({ marker: dot, base, hover, matches });
          dot.addTo(markersLayer);
        });
      }

      syncHighlightRef.current = applyMarkerHighlightStyles;
      applyMarkerHighlightStyles();

      if (cancelled) {
        map.remove();
        mapInstance = null;
        return;
      }

      map.fitBounds(bounds, { padding: [28, 28], maxZoom: 10 });

      const invalidate = () => {
        try {
          map.invalidateSize({ animate: false });
        } catch {
          /* ignore */
        }
      };
      map.whenReady(() => {
        setLiveZoom(map.getZoom());
        invalidate();
        requestAnimationFrame(invalidate);
      });
      window.addEventListener("resize", invalidate);
      let resizeObserver: ResizeObserver | null = null;
      if (typeof ResizeObserver !== "undefined") {
        resizeObserver = new ResizeObserver(() => invalidate());
        resizeObserver.observe(el);
      }
      const delayedTimers: number[] = [];
      if (variant === "fullscreen") {
        delayedTimers.push(window.setTimeout(invalidate, 100));
        delayedTimers.push(window.setTimeout(invalidate, 400));
        delayedTimers.push(window.setTimeout(invalidate, 900));
      }

      detachResize = () => {
        window.removeEventListener("resize", invalidate);
        resizeObserver?.disconnect();
        delayedTimers.forEach((id) => window.clearTimeout(id));
        delayedTimers.length = 0;
      };

      requestAnimationFrame(() => {
        if (!cancelled) invalidate();
      });
    })();

    return () => {
      cancelled = true;
      markerRegistryRef.current = [];
      syncHighlightRef.current = null;
      leafletCtlRef.current = null;
      detachZoom?.();
      detachZoom = null;
      detachResize?.();
      detachResize = null;
      mapInstance?.remove();
      mapInstance = null;
    };
  }, [lang, t, variant, markerLayerSignature, filteredCatalogPoints, filteredPoints]);

  const beginCloseRightPanel = useCallback(() => {
    setRightPanelPeek(false);
    setRightOpen(false);
    setMobileSheet(null);
  }, []);

  const closeMobileLeftSheet = useCallback(() => {
    setMobileSheet(selectedRef.current ? "right" : null);
  }, []);

  const toggleLeftPanel = useCallback(() => {
    if (variant === "fullscreen" && layoutTier === "mobile") {
      setMobileSheet((s) => {
        if (s === "left") return selectedRef.current ? "right" : null;
        return "left";
      });
      return;
    }
    setLeftExpanded((v) => !v);
  }, [variant, layoutTier]);

  const onRightPanelTransitionEnd = useCallback((e: TransitionEvent<HTMLDivElement>) => {
    if (e.propertyName !== "transform") return;
    if (rightOpenRef.current) return;
    if (!selectedRef.current) return;
    selectedRef.current = null;
    setSelected(null);
    syncHighlightRef.current?.();
  }, []);

  const zoomUi = leafletCtlRef.current?.getZoom() ?? liveZoom;

  const leftOverlayBottom = variant === "fullscreen" ? "bottom-14 sm:bottom-16" : "bottom-4";
  const isMobileFullscreen = variant === "fullscreen" && layoutTier === "mobile";
  const rightTranslateOpen = isMobileFullscreen ? mobileSheet === "right" : rightOpen;
  const showRightChrome = Boolean(selected) && !(variant === "fullscreen" && rightPanelPeek);
  const rightShown = showRightChrome && rightTranslateOpen;
  const isMobileTier = layoutTier === "mobile";

  const { leftMax, rightMax } = useMemo(() => {
    if (isMobileFullscreen) return { leftMax: 320, rightMax: 420 };
    return computeSidePanelWidths(shellW, leftExpanded, rightShown);
  }, [isMobileFullscreen, shellW, leftExpanded, rightShown]);

  return (
    <div
      ref={shellRef}
      className={[
        "relative h-full min-h-0 w-full min-w-0 overflow-hidden",
        variant === "embedded" ? "min-h-[280px] rounded-2xl" : "",
        className ?? "",
      ].join(" ")}
    >
      <div
        ref={elRef}
        className="sip-leaflet-root absolute inset-0 z-0 overflow-hidden"
        role="region"
        aria-label={t("map.titleLine1")}
      />

      {variant === "fullscreen" && isMobileFullscreen && mobileSheet === "left" ? (
        <button
          type="button"
          className="pointer-events-auto absolute inset-0 z-10 border-0 bg-black/35 backdrop-blur-[0.5px] transition-opacity duration-300 ease-in-out"
          aria-label={t("map.sidebar.closeOverlays")}
          onClick={closeMobileLeftSheet}
        />
      ) : null}

      {/* Left: layers, legend, zoom, basemap, POI — collapsible; fullscreen mobile = drawer */}
      <aside
        className={[
          "pointer-events-none z-20",
          isMobileFullscreen
            ? "absolute bottom-0 left-0 top-0 flex min-h-0 w-[min(85vw,320px)] max-w-[85vw] flex-col overflow-hidden py-3 pl-3"
            : ["absolute left-3 top-3 flex max-h-full flex-col", leftOverlayBottom].join(" "),
        ].join(" ")}
        aria-label={t(variant === "embedded" ? "map.sidebar.openEmbedded" : "map.sidebar.openPanel")}
      >
        {isMobileFullscreen && mobileSheet !== "left" ? (
          <button
            type="button"
            className="pointer-events-auto absolute left-3 top-1/2 z-20 flex h-12 w-11 -translate-y-1/2 items-center justify-center rounded-r-[10px] border border-outline-variant/20 bg-primary text-on-primary shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition hover:opacity-95"
            onClick={toggleLeftPanel}
            aria-label={t("map.sidebar.openPanel")}
            aria-expanded={false}
          >
            <span className="material-symbols-outlined text-[22px]" aria-hidden>
              chevron_right
            </span>
          </button>
        ) : null}

        <div
          className={[
            "flex min-h-0 flex-row transition-transform duration-300 ease-in-out",
            isMobileFullscreen
              ? "max-h-full min-h-0 flex-1 items-stretch"
              : "max-h-full items-start",
            isMobileFullscreen
              ? mobileSheet === "left"
                ? "pointer-events-auto translate-x-0"
                : "pointer-events-none -translate-x-[calc(100%+64px)]"
              : leftExpanded
                ? "pointer-events-auto translate-x-0"
                : "pointer-events-auto -translate-x-[calc(100%-44px)]",
          ].join(" ")}
        >
          <div
            className={[
              "flex min-h-0 flex-col gap-2 rounded-[12px] border border-outline-variant/15 bg-white/[0.98] p-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.08)] backdrop-blur",
              isMobileFullscreen
                ? "max-h-full min-h-0 flex-1 overflow-y-auto overflow-x-hidden overscroll-contain touch-pan-y"
                : "max-h-[min(720px,calc(100dvh-7rem))] shrink-0 overflow-y-auto overscroll-contain",
            ].join(" ")}
            style={
              isMobileFullscreen
                ? { width: "min(85vw, 320px)", maxWidth: "85vw" }
                : { width: leftMax, maxWidth: leftMax, minWidth: 0 }
            }
          >
            {isMobileFullscreen && mobileSheet === "left" ? (
              <div className="sticky top-0 z-10 -mx-0.5 mb-1 flex shrink-0 items-center justify-between gap-2 border-b border-outline-variant/15 bg-white/[0.98] px-0.5 pb-2 pt-0">
                <span className="truncate text-[11px] font-extrabold uppercase tracking-wide text-on-surface">
                  {t("map.sidebar.openPanel")}
                </span>
                <button
                  type="button"
                  className="material-symbols-outlined flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-on-surface-variant transition hover:bg-surface-container-low"
                  onClick={closeMobileLeftSheet}
                  aria-label={t("map.points.close")}
                >
                  close
                </button>
              </div>
            ) : null}
            {variant === "embedded" ? (
              <div className="shrink-0 rounded-[10px] border border-outline-variant/12 bg-white/90 px-2.5 py-2">
                <div className="mb-1.5 text-[11px] font-bold tracking-tight text-on-surface">
                  {t("map.points.filtersTitle")}
                </div>
                <div className="grid grid-cols-1 gap-1.5 text-[11px] leading-tight text-on-surface">
                  {(["overview", "testSite", "excavation", "radiological"] as SitePointCategory[]).map((c) => (
                    <label key={c} className="flex cursor-pointer select-none items-center gap-2">
                      <input
                        className="shrink-0 rounded border-outline-variant/40"
                        type="checkbox"
                        checked={filters[c]}
                        onChange={(e) => setFilters((s) => ({ ...s, [c]: e.target.checked }))}
                      />
                      <span>{t(`map.points.category.${c}` as TranslationKey)}</span>
                    </label>
                  ))}
                </div>
              </div>
            ) : (
              <>
                <div className="shrink-0 rounded-[10px] border border-outline-variant/12 bg-white/90 px-2.5 py-2">
                  <div className="mb-1.5 text-[11px] font-bold tracking-tight text-on-surface">
                    {t("map.catalog.filtersTitle")}
                  </div>
                  <div className="grid grid-cols-1 gap-1.5 text-[11px] leading-tight text-on-surface">
                    {FULLSCREEN_MAP_POINT_TYPES.map((tp) => (
                      <label key={tp} className="flex cursor-pointer select-none items-center gap-2">
                        <input
                          className="shrink-0 rounded border-outline-variant/40"
                          type="checkbox"
                          checked={typeFilters[tp]}
                          onChange={(e) => setTypeFilters((s) => ({ ...s, [tp]: e.target.checked }))}
                        />
                        <span className="flex-1">{t(`map.catalog.filter.${tp}` as TranslationKey)}</span>
                        <span className="tabular-nums text-on-surface-variant">{catalogCounts[tp]}</span>
                      </label>
                    ))}
                  </div>
                  <div className="mt-2 border-t border-outline-variant/10 pt-2">
                    <div className="mb-1 text-[10px] font-bold uppercase tracking-wide text-on-surface-variant">
                      {t("map.catalog.statsTitle")}
                    </div>
                    <div className="text-[10px] leading-snug text-on-surface-variant tabular-nums">
                      {t("map.catalog.statsTotal")}: {fullCatalog.length} · {t("map.catalog.statsShown")}:{" "}
                      {filteredCatalogPoints.length}
                    </div>
                  </div>
                </div>
                <div className="shrink-0 rounded-[10px] border border-outline-variant/12 bg-white/90 px-2.5 py-2">
                  <div className="mb-1 text-[10px] font-bold uppercase tracking-wide text-on-surface-variant">
                    {t("map.leaflet.legendTitle")}
                  </div>
                  <ul className="space-y-1">
                    {FULLSCREEN_MAP_POINT_TYPES.map((tp) => {
                      const st = catalogMarkerBaseStyle(tp);
                      return (
                        <li key={tp} className="flex items-center gap-2 text-[10px] leading-tight text-on-surface">
                          <span
                            className="h-2.5 w-2.5 shrink-0 rounded-full border-2"
                            style={{
                              borderColor: String(st.color ?? "#333"),
                              backgroundColor: String(st.fillColor ?? "#fff"),
                            }}
                            aria-hidden
                          />
                          <span>{t(`map.catalog.filter.${tp}` as TranslationKey)}</span>
                        </li>
                      );
                    })}
                  </ul>
                  <p className="mt-2 text-[9px] leading-snug text-on-surface-variant">{t("map.leaflet.legendSchematic")}</p>
                </div>
              </>
            )}

            <div className="shrink-0 rounded-[10px] border border-outline-variant/12 bg-white/90 px-2.5 py-2">
              <div className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-on-surface-variant">
                {t("map.toolbar.zoom" as TranslationKey)}
              </div>
              <div className="flex gap-1.5">
                <button
                  type="button"
                  className="flex-1 rounded-lg border border-outline-variant/25 bg-white py-2 text-base font-extrabold leading-none text-on-surface hover:bg-surface-container-low disabled:cursor-not-allowed disabled:opacity-40"
                  disabled={zoomUi <= SIP_MAP_MIN_ZOOM}
                  onClick={() => leafletCtlRef.current?.zoomOut()}
                  aria-label={t("map.toolbar.zoomOut" as TranslationKey)}
                >
                  −
                </button>
                <button
                  type="button"
                  className="flex-1 rounded-lg border border-outline-variant/25 bg-white py-2 text-base font-extrabold leading-none text-on-surface hover:bg-surface-container-low disabled:cursor-not-allowed disabled:opacity-40"
                  disabled={zoomUi >= SIP_MAP_MAX_ZOOM}
                  onClick={() => leafletCtlRef.current?.zoomIn()}
                  aria-label={t("map.toolbar.zoomIn" as TranslationKey)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="shrink-0 rounded-[10px] border border-outline-variant/12 bg-white/90 px-2.5 py-2">
              <div className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-on-surface-variant">
                {t("map.toolbar.basemap" as TranslationKey)}
              </div>
              <div className="grid grid-cols-1 gap-1.5 text-[11px] leading-tight text-on-surface">
                {BASEMAP_IDS.map((id) => (
                  <label key={id} className="flex cursor-pointer select-none items-center gap-2">
                    <input
                      className="shrink-0 border-outline-variant/40"
                      type="radio"
                      name={`sip-basemap-${variant}`}
                      checked={basemapId === id}
                      onChange={() => {
                        setBasemapId(id);
                        leafletCtlRef.current?.applyBasemap(id);
                      }}
                    />
                    <span>{t(`map.layer.${id}` as TranslationKey)}</span>
                  </label>
                ))}
              </div>
            </div>
            <label className="flex shrink-0 cursor-pointer select-none items-center gap-2 rounded-[10px] border border-outline-variant/12 bg-white/90 px-2.5 py-2 text-[11px] text-on-surface">
              <input
                className="shrink-0 rounded border-outline-variant/40"
                type="checkbox"
                checked={poiOn}
                onChange={(e) => {
                  const v = e.target.checked;
                  setPoiOn(v);
                  leafletCtlRef.current?.setPoiOverlayVisible(v);
                }}
              />
              <span>{t("map.overlay.poi" as TranslationKey)}</span>
            </label>
          </div>

          {!isMobileFullscreen ? (
            <button
              type="button"
              className="pointer-events-auto ml-0.5 mt-3 flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] rounded-l-none border border-outline-variant/20 bg-primary text-on-primary shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition hover:opacity-95"
              onClick={toggleLeftPanel}
              aria-expanded={leftExpanded}
              aria-label={
                leftExpanded
                  ? t("map.sidebar.collapseTools")
                  : t(variant === "embedded" ? "map.sidebar.openEmbedded" : "map.sidebar.openPanel")
              }
            >
              <span className="material-symbols-outlined text-[22px]" aria-hidden>
                {leftExpanded ? "chevron_left" : "chevron_right"}
              </span>
            </button>
          ) : null}
        </div>
      </aside>

      {/* Right: object info — collapsible / drawer on mobile fullscreen */}
      {selected && variant === "fullscreen" && rightPanelPeek ? (
        <button
          type="button"
          className="pointer-events-auto absolute right-0 top-1/2 z-20 flex -translate-y-1/2 items-center gap-0.5 rounded-l-[12px] border border-outline-variant/20 border-r-0 bg-white/95 py-3 pl-2 pr-1.5 text-primary shadow-[0_4px_20px_rgba(0,0,0,0.08)] backdrop-blur hover:bg-surface-container-low"
          onClick={() => {
            setRightPanelPeek(false);
            if (layoutTier === "mobile") setMobileSheet("right");
          }}
          aria-label={t("map.sidebar.restorePanel")}
        >
          <span className="material-symbols-outlined text-[22px]" aria-hidden>
            chevron_left
          </span>
        </button>
      ) : null}

      {showRightChrome && selected ? (
        isMobileTier && portalReady ? (
          createPortal(
            <div
              className={[
                "pointer-events-none fixed left-4 right-4 z-40 flex min-h-0 min-w-0 flex-col transition-transform duration-300 ease-in-out",
                // Keep below the site header, but still viewport-relative.
                "top-20",
                // Viewport-based sizing (top+bottom) so inner scroll always works and never clips on rounded/overflow-hidden parents.
                // Also keep clear of the fullscreen map footer (disclaimer bar).
                "bottom-[calc(1rem+env(safe-area-inset-bottom)+4rem)]",
                rightTranslateOpen ? "translate-x-0" : "translate-x-[calc(100%+24px)]",
              ].join(" ")}
              onTransitionEnd={onRightPanelTransitionEnd}
            >
              <div className="pointer-events-auto flex min-h-0 max-h-full flex-1 flex-col overflow-hidden rounded-2xl border border-outline-variant/15 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] touch-pan-y">
                <MapInfoPanel
                  layout="sidebar"
                  selection={selected}
                  lang={lang}
                  t={t}
                  onClose={beginCloseRightPanel}
                  onMinimize={
                    variant === "fullscreen"
                      ? () => {
                          setRightPanelPeek(true);
                          setMobileSheet(null);
                        }
                      : undefined
                  }
                />
              </div>
            </div>,
            document.body,
          )
        ) : (
          <div
            className={[
              "pointer-events-none absolute z-20 flex min-h-0 min-w-0 flex-col transition-transform duration-300 ease-in-out",
              isMobileFullscreen
                ? [
                    "left-4 right-4 top-4 w-auto max-w-none overflow-hidden",
                    "max-h-[min(70vh,520px)] pt-[max(0.25rem,env(safe-area-inset-top))]",
                  ].join(" ")
                : "bottom-3 right-3 top-3 max-w-[420px]",
              rightTranslateOpen ? "translate-x-0" : "translate-x-[calc(100%+24px)]",
            ].join(" ")}
            style={
              isMobileFullscreen
                ? undefined
                : { width: rightMax, maxWidth: rightMax, minWidth: Math.min(240, rightMax) }
            }
            onTransitionEnd={onRightPanelTransitionEnd}
          >
            <div
              className={[
                "pointer-events-auto flex min-h-0 max-h-full flex-1 flex-col overflow-hidden border border-outline-variant/15 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)]",
                isMobileFullscreen ? "touch-pan-y rounded-2xl" : "rounded-[12px]",
              ].join(" ")}
            >
              <MapInfoPanel
                layout="sidebar"
                selection={selected}
                lang={lang}
                t={t}
                onClose={beginCloseRightPanel}
                onMinimize={
                  variant === "fullscreen"
                    ? () => {
                        setRightPanelPeek(true);
                        if (layoutTier === "mobile") setMobileSheet(null);
                      }
                    : undefined
                }
              />
            </div>
          </div>
        )
      ) : null}
    </div>
  );
}
