"use client";

import "leaflet/dist/leaflet.css";
import "@/styles/leaflet-sip.css";
import L, { latLngBounds, type LatLngBounds, type LatLngExpression } from "leaflet";
import { useEffect, useMemo, useState } from "react";
import type { GeoJsonObject } from "geojson";
import {
  LayerGroup,
  MapContainer,
  Marker,
  GeoJSON,
  Polygon,
  Polyline,
  Popup,
  TileLayer,
  Tooltip,
  useMap,
  ZoomControl,
} from "react-leaflet";
import { STS_OUTER_BOUNDARY } from "@/data/map/sts-boundary";
import { STS_TEST_SITES } from "@/data/map/sts-sites";
import { STS_REFERENCE_LINES, STS_REFERENCE_POINTS } from "@/data/map/sts-reference";
import { RESEARCH_OBJECTS } from "@/data/map/research-objects";
import { EXPEDITION_ROUTES } from "@/data/routes/expedition-routes";
import type { SipRoute } from "@/data/routes/sipRoutes.types";
import { SIP_SCIENCE_PALETTE } from "@/lib/map/sipScientificMapPalette";
import {
  BASEMAP_TILES,
  ESRI_REFERENCE_BOUNDARIES_PLACES,
  MAX_BOUNDS_VISCOSITY,
  SIP_BOUNDS,
  SIP_CENTER,
  SIP_MAP_MAX_ZOOM,
  SIP_MAP_MIN_ZOOM,
  SIP_PAN_MAX_BOUNDS_LAT_LNG,
} from "@/lib/map/sipMapConfig";
import { MapLayerControls, type SipMapLayerToggles } from "@/components/map/MapLayerControls";
import { MapLegend } from "@/components/map/MapLegend";
import { MapModeSwitch, type MapMode } from "@/components/map/MapModeSwitch";
import { MapScientificDisclaimer } from "@/components/map/MapScientificDisclaimer";
import { RouteInfoPanel } from "@/components/map/RouteInfoPanel";

/**
 * TEMP_DISABLED_ROUTES_GOOGLE_LINKS_MODE
 *
 * Временно отключаем ручную отрисовку маршрутов на внутренней карте СИП:
 * - без GeoJSON/Polyline/overlays/стрелок/линий
 * - карта остаётся обзорной: слои, границы, точки/маркеры и попапы
 *
 * Пользовательский переход к маршрутам делается через Google Maps (в UI-карточках).
 */
const TEMP_DISABLED_ROUTES_GOOGLE_LINKS_MODE = true;

function lngLatRingToLeaflet(ring: [number, number][]): LatLngExpression[] {
  return ring.map(([lng, lat]) => [lat, lng] as LatLngExpression);
}

function boundsFromLngLatRing(ring: [number, number][]): LatLngBounds {
  const [lng0, lat0] = ring[0]!;
  let b = latLngBounds([lat0, lng0], [lat0, lng0]);
  for (let i = 1; i < ring.length; i++) {
    const [lng, lat] = ring[i]!;
    b = b.extend([lat, lng]);
  }
  return b;
}

function boundsFromRoutes(routes: SipRoute[]): LatLngBounds {
  const pts = routes
    .flatMap((r) => r.points)
    .filter((p) => typeof p.lat === "number" && typeof p.lng === "number") as Array<
    { lat: number; lng: number }
  >;
  if (pts.length === 0) return latLngBounds([SIP_CENTER[0], SIP_CENTER[1]], [SIP_CENTER[0], SIP_CENTER[1]]);
  const first = pts[0]!;
  let b = latLngBounds([first.lat, first.lng], [first.lat, first.lng]);
  for (let i = 1; i < pts.length; i++) {
    const p = pts[i]!;
    b = b.extend([p.lat, p.lng]);
  }
  return b;
}

function unionBounds(a: LatLngBounds, b: LatLngBounds): LatLngBounds {
  return a.extend(b.getSouthWest()).extend(b.getNorthEast());
}

function escapeLabelHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function semanticLabelIcon(text: string, variant: "boundary" | "site" | "route"): L.DivIcon {
  const variantClass =
    variant === "boundary" ? "sip-map-semantic-label__pill--boundary" : variant === "site" ? "sip-map-semantic-label__pill--site" : "sip-map-semantic-label__pill--route";
  return L.divIcon({
    className: "sip-map-semantic-label",
    html: `<div class="sip-map-semantic-label__pill ${variantClass}">${escapeLabelHtml(text)}</div>`,
    iconSize: [148, 28],
    iconAnchor: [74, 14],
  });
}

function routeArrowIcon(angleDeg: number, muted: boolean): L.DivIcon {
  return L.divIcon({
    className: "sip-route-arrow-icon",
    html: `<span class="sip-route-arrow ${muted ? "sip-route-arrow--muted" : ""}" style="transform: rotate(${angleDeg}deg)">➤</span>`,
    iconSize: [22, 22],
    iconAnchor: [11, 11],
  });
}

function startFinishIcon(kind: "start" | "finish", muted: boolean): L.DivIcon {
  return L.divIcon({
    className: "sip-start-finish-marker",
    html: `<span class="sip-start-finish-marker__badge ${kind === "start" ? "is-start" : "is-finish"} ${muted ? "is-muted" : ""}">${kind === "start" ? "S" : "F"}</span>`,
    iconSize: [22, 22],
    iconAnchor: [11, 11],
  });
}

function routeStopIcon(order: number, active: boolean, muted: boolean): L.DivIcon {
  return L.divIcon({
    className: "sip-route-stop-marker",
    html: `<span class="sip-route-stop-marker__dot ${active ? "is-active" : ""} ${muted ? "is-muted" : ""}">${order}</span>`,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
  });
}

function routeStartFinishIcon(kind: "start" | "finish", muted: boolean): L.DivIcon {
  return L.divIcon({
    className: "sip-route-start-finish-marker",
    html: `<span class="sip-route-start-finish-marker__badge ${kind === "start" ? "is-start" : "is-finish"} ${muted ? "is-muted" : ""}">${kind === "start" ? "S" : "F"}</span>`,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
  });
}

function directionAngle(from: LatLngExpression, to: LatLngExpression): number {
  const [lat1, lng1] = from as [number, number];
  const [lat2, lng2] = to as [number, number];
  const dx = lng2 - lng1;
  const dy = lat2 - lat1;
  return (Math.atan2(dy, dx) * 180) / Math.PI;
}

function segmentMidpoint(from: LatLngExpression, to: LatLngExpression): LatLngExpression {
  const [lat1, lng1] = from as [number, number];
  const [lat2, lng2] = to as [number, number];
  return [(lat1 + lat2) / 2, (lng1 + lng2) / 2];
}

function ScientificMapPanes() {
  const map = useMap();
  useEffect(() => {
    const panes: [string, string][] = [
      ["sip-pane-sts", "390"],
      ["sip-pane-reference", "400"],
      ["sip-pane-sites", "410"],
      ["sip-pane-routes", "432"],
      ["sip-pane-routefx", "438"],
      ["sip-pane-stops", "455"],
      ["sip-pane-labels", "480"],
    ];
    panes.forEach(([id, z]) => {
      if (!map.getPane(id)) {
        map.createPane(id);
        const pane = map.getPane(id);
        if (pane) pane.style.zIndex = z;
      }
    });
  }, [map]);
  return null;
}

function FitBounds({ bounds }: { bounds: LatLngBounds | null }) {
  const map = useMap();
  useEffect(() => {
    if (!bounds || !bounds.isValid()) return;
    map.fitBounds(bounds, { padding: [40, 40], maxZoom: 11, animate: true });
  }, [map, bounds]);
  return null;
}

function ZoomWatcher({ onZoom }: { onZoom: (zoom: number) => void }) {
  const map = useMap();
  useEffect(() => {
    const emit = () => onZoom(map.getZoom());
    emit();
    map.on("zoomend", emit);
    return () => {
      map.off("zoomend", emit);
    };
  }, [map, onZoom]);
  return null;
}

const defaultLayers: SipMapLayerToggles = {
  stsBoundary: true,
  testSites: true,
  references: true,
  routes: true,
  stops: true,
};

export function SipMapClient({ className }: { className?: string }) {
  const [layers, setLayers] = useState<SipMapLayerToggles>(defaultLayers);
  const [mode, setMode] = useState<MapMode>("relief");
  const [selectedRouteName, setSelectedRouteName] = useState<string | null>(null);
  const [hoveredStopKey, setHoveredStopKey] = useState<string | null>(null);
  const [zoom, setZoom] = useState(9);

  const allRoutes = useMemo<SipRoute[]>(() => [...EXPEDITION_ROUTES], []);
  const [route01GeoJson, setRoute01GeoJson] = useState<GeoJsonObject | null>(null);
  const [route02GeoJson, setRoute02GeoJson] = useState<GeoJsonObject | null>(null);

  const visibleRoutes = useMemo(
    () => (selectedRouteName ? allRoutes.filter((r) => r.name === selectedRouteName) : allRoutes),
    [selectedRouteName, allRoutes],
  );

  useEffect(() => {
    if (TEMP_DISABLED_ROUTES_GOOGLE_LINKS_MODE) return;
    const isRoute01Selected = selectedRouteName === "Курчатов → исследовательская впадина";
    if (!isRoute01Selected) return;
    if (route01GeoJson) return;
    let cancelled = false;
    void (async () => {
      try {
        const res = await fetch("/routes/ors-route_01.json", { cache: "no-store" });
        if (!res.ok) {
          // eslint-disable-next-line no-console
          console.warn("Failed to load ors-route_01.json", res.status, res.statusText);
          return;
        }
        const json = (await res.json()) as GeoJsonObject;
        if (!cancelled) setRoute01GeoJson(json);
      } catch {
        // ignore
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [selectedRouteName, route01GeoJson]);

  useEffect(() => {
    if (TEMP_DISABLED_ROUTES_GOOGLE_LINKS_MODE) return;
    // Load route geometry not only when selected, but also when "show all routes" is active.
    // Stops are local data; the route line must come from ORS GeoJSON.
    const isRoute02Selected = selectedRouteName === "Курчатов — исследовательский маршрут по техногенным объектам";
    if (!isRoute02Selected) return;
    if (route02GeoJson) return;
    let cancelled = false;
    void (async () => {
      try {
        const res = await fetch("/routes/ors-route_02.json", { cache: "no-store" });
        if (!res.ok) {
          // eslint-disable-next-line no-console
          console.warn("Failed to load ors-route_02.json", res.status, res.statusText);
          return;
        }
        const json = (await res.json()) as GeoJsonObject;
        if (!cancelled) setRoute02GeoJson(json);
      } catch {
        // ignore
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [selectedRouteName, route02GeoJson]);

  const stsBounds = useMemo(() => boundsFromLngLatRing(STS_OUTER_BOUNDARY.ringLngLat), []);
  const routesBounds = useMemo(() => boundsFromRoutes(visibleRoutes), [visibleRoutes]);

  const fitBoundsTarget = useMemo(() => {
    if (selectedRouteName) {
      return routesBounds;
    }
    return unionBounds(stsBounds, routesBounds);
  }, [selectedRouteName, stsBounds, routesBounds]);

  const tile =
    mode === "scheme"
      ? BASEMAP_TILES.cartoLight
      : mode === "relief"
        ? BASEMAP_TILES.topo
        : BASEMAP_TILES.satellite;
  const p = SIP_SCIENCE_PALETTE;

  const stsPositions = useMemo(() => lngLatRingToLeaflet(STS_OUTER_BOUNDARY.ringLngLat), []);

  const boundaryLabelPos: LatLngExpression = useMemo(
    () => [SIP_BOUNDS.north - 0.04, (SIP_BOUNDS.west + SIP_BOUNDS.east) / 2],
    [],
  );

  const shouldShowDenseLabels = zoom >= 10;

  return (
    <div className={["flex h-full min-h-0 w-full flex-col bg-surface-container-low/30 lg:flex-row", className ?? ""].join(" ")}>
      <aside className="order-2 flex w-full shrink-0 flex-col gap-3 border-t border-outline-variant/12 bg-surface/95 p-3 backdrop-blur lg:order-1 lg:h-full lg:max-h-none lg:w-[min(100vw,400px)] lg:border-r lg:border-t-0 lg:overflow-y-auto">
        <div className="hidden lg:block">
          <p className="font-label text-[10px] font-extrabold uppercase tracking-[0.18em] text-on-surface-variant">
            Научно-информационная карта
          </p>
          <h1 className="mt-1 font-headline text-lg font-extrabold leading-tight text-on-surface">
            Семипалатинский полигон (СИП / STS)
          </h1>
          <p className="mt-2 text-[11px] leading-relaxed text-on-surface-variant">
            Схематичные контуры, справочные участки и линии вдоль дорожных коридоров показаны в одной системе координат для
            ориентира в интерфейсе; это не замена официальному допуску и маршрутной документации.
          </p>
        </div>

        <RouteInfoPanel
          routes={allRoutes}
          selectedName={selectedRouteName}
          hoveredStopKey={hoveredStopKey}
          onHoverStop={setHoveredStopKey}
          onSelectRoute={(name) => {
            setSelectedRouteName(name);
            setHoveredStopKey(null);
          }}
          onClearSelection={() => {
            setSelectedRouteName(null);
            setHoveredStopKey(null);
          }}
        />

        <MapModeSwitch value={mode} onChange={setMode} />
        <MapLayerControls value={layers} onChange={setLayers} />

        <MapLegend />

        <MapScientificDisclaimer />
      </aside>

      <div className="relative order-1 min-h-[min(52vh,420px)] flex-1 lg:order-2 lg:min-h-0">
        <MapContainer
          center={SIP_CENTER}
          zoom={9}
          minZoom={SIP_MAP_MIN_ZOOM}
          maxZoom={SIP_MAP_MAX_ZOOM}
          maxBounds={SIP_PAN_MAX_BOUNDS_LAT_LNG}
          maxBoundsViscosity={MAX_BOUNDS_VISCOSITY}
          zoomControl={false}
          className="sip-leaflet-root z-0 h-full w-full min-h-[min(52vh,420px)] lg:min-h-0"
        >
          <ZoomControl position="topright" />
          <TileLayer key={`base-${mode}`} url={tile.url} attribution={tile.attribution} maxZoom={tile.maxZoom} />
          {mode === "satellite" ? (
            <TileLayer
              key="satellite-labels"
              url={ESRI_REFERENCE_BOUNDARIES_PLACES.url}
              attribution={ESRI_REFERENCE_BOUNDARIES_PLACES.attribution}
              maxZoom={ESRI_REFERENCE_BOUNDARIES_PLACES.maxZoom}
              opacity={0.92}
            />
          ) : null}
          <ScientificMapPanes />
          <ZoomWatcher onZoom={setZoom} />
          <FitBounds bounds={fitBoundsTarget} />

          {layers.references
            ? STS_REFERENCE_LINES.map((line) => (
                <LayerGroup key={line.id}>
                  <Polyline
                    pane="sip-pane-reference"
                    positions={line.points.map(([lng, lat]) => [lat, lng] as LatLngExpression)}
                    pathOptions={
                      line.kind === "river"
                        ? { color: "#4b6f84", weight: 2.5, opacity: 0.62 }
                        : { color: "#5c615d", weight: 2, opacity: 0.45, dashArray: "8 8" }
                    }
                  >
                    <Tooltip sticky direction="top" offset={[0, -4]} className="sip-plain-tooltip">
                      {line.name}
                    </Tooltip>
                  </Polyline>
                </LayerGroup>
              ))
            : null}

          {layers.references
            ? STS_REFERENCE_POINTS.map((pt) => (
                <Marker
                  key={pt.id}
                  pane="sip-pane-reference"
                  position={[pt.lat, pt.lng]}
                  icon={L.divIcon({
                    className: "sip-reference-marker",
                    html: `<span class="sip-reference-marker__dot ${pt.priority === "major" ? "is-major" : "is-minor"}"></span>`,
                    iconSize: [12, 12],
                    iconAnchor: [6, 6],
                  })}
                >
                  <Tooltip
                    permanent={pt.priority === "major"}
                    direction={pt.priority === "major" ? "right" : "top"}
                    offset={pt.priority === "major" ? [10, 0] : [0, -10]}
                    className="sip-plain-tooltip"
                  >
                    {pt.name}
                  </Tooltip>
                </Marker>
              ))
            : null}

          {layers.references
            ? RESEARCH_OBJECTS.filter(() => selectedRouteName !== null).map((obj) => (
                <Marker
                  key={obj.id}
                  pane="sip-pane-reference"
                  position={[obj.lat, obj.lng]}
                  icon={L.divIcon({
                    className: "sip-reference-marker",
                    html: `<span class="sip-reference-marker__dot is-major"></span>`,
                    iconSize: [12, 12],
                    iconAnchor: [6, 6],
                  })}
                >
                  <Tooltip direction="right" offset={[10, 0]} className="sip-plain-tooltip">
                    {obj.name}
                  </Tooltip>
                  <Popup className="sip-leaflet-popup" maxWidth={360}>
                    <div className="space-y-2 text-[12px]">
                      <div className="text-[13px] font-extrabold leading-snug text-on-surface">{obj.name}</div>
                      <div className="leading-relaxed text-on-surface-variant">{obj.description}</div>
                      <div className="text-[11px] text-on-surface-variant">
                        <span className="font-bold text-on-surface">Risk:</span> {obj.risk} ·{" "}
                        <span className="font-bold text-on-surface">Access:</span> {obj.access}
                      </div>
                    </div>
                  </Popup>
                </Marker>
              ))
            : null}

          {layers.stsBoundary ? (
            <LayerGroup>
              <Polygon
                pane="sip-pane-sts"
                positions={stsPositions}
                pathOptions={{
                  color: p.stsOutline.color,
                  weight: p.stsOutline.weight,
                  fillOpacity: p.stsOutline.fillOpacity,
                  opacity: 0.92,
                }}
              />
            </LayerGroup>
          ) : null}

          {layers.testSites
            ? STS_TEST_SITES.map((site) => {
                const latLngs = lngLatRingToLeaflet(site.ringLngLat);
                const stroke = site.zoneClass === "dangerous" ? p.siteDangerous.stroke : p.siteLimited.stroke;
                const fillRgba =
                  site.zoneClass === "dangerous" ? "rgba(176, 82, 68, 0.26)" : "rgba(196, 148, 72, 0.28)";
                return (
                  <LayerGroup key={site.id}>
                    <Polygon
                      pane="sip-pane-sites"
                      positions={latLngs}
                      pathOptions={{
                        color: stroke,
                        weight: 2,
                        fillOpacity: 1,
                        fillColor: fillRgba,
                      }}
                    >
                      <Popup className="sip-leaflet-popup" maxWidth={320}>
                        <div className="text-[12px]">
                          <div className="font-extrabold text-on-surface">{site.labelRu}</div>
                          <div className="text-[11px] text-on-surface-variant">{site.labelEn}</div>
                          <p className="mt-2 text-[11px] leading-relaxed text-on-surface-variant">
                            Схематичный контур для образовательного слоя. {site.note}
                          </p>
                        </div>
                      </Popup>
                    </Polygon>
                  </LayerGroup>
                );
              })
            : null}

          {layers.routes
            ? !TEMP_DISABLED_ROUTES_GOOGLE_LINKS_MODE && selectedRouteName
              ? allRoutes.filter((r) => r.name === selectedRouteName).map((route) => {
                  const positions = route.points
                    .filter((pt) => typeof pt.lat === "number" && typeof pt.lng === "number")
                    .map((pt) => [pt.lat as number, pt.lng as number] as LatLngExpression);
                  const isSelected = selectedRouteName === route.name;
                  const isDimmed = selectedRouteName !== null && !isSelected;
                  const isRoute01 = route.name === "Курчатов → исследовательская впадина";
                  const isRoute02 = route.name === "Курчатов — исследовательский маршрут по техногенным объектам";
                  if (!isRoute01 && !isRoute02 && positions.length < 2) return null;
                  const mid = positions[Math.floor(positions.length / 2)]!;
                  const baseColor = route.zone === "research" ? p.routeResearch.color : p.routeRouted.color;
                  return (
                    <LayerGroup key={route.name}>
                      {/* TEMP_DISABLED_ROUTES_GOOGLE_LINKS_MODE */}
                      {isRoute01 && route01GeoJson ? (
                        <>
                          <GeoJSON
                            key="route01-geojson-outline"
                            // Outline must be BELOW the route line
                            pane="sip-pane-routes"
                            data={route01GeoJson}
                            pointToLayer={() => null as unknown as L.Layer}
                            style={() => ({
                              color: "#ffffff",
                              weight: isSelected ? 8 : 7,
                              opacity: isDimmed ? 0.16 : 0.92,
                              lineCap: "round",
                              lineJoin: "round",
                            })}
                          />
                          <GeoJSON
                            key="route01-geojson-main"
                            // Main line must be ABOVE outline
                            pane="sip-pane-routefx"
                            data={route01GeoJson}
                            pointToLayer={() => null as unknown as L.Layer}
                            style={() => ({
                              color: "#8B2E2E",
                              weight: isSelected ? 5 : 4,
                              opacity: isDimmed ? 0.18 : 0.92,
                              lineCap: "round",
                              lineJoin: "round",
                            })}
                          />
                        </>
                      ) : null}
                      {isRoute02 && route02GeoJson ? (
                        <>
                          <GeoJSON
                            key="route02-geojson-outline"
                            pane="sip-pane-routes"
                            data={route02GeoJson}
                            pointToLayer={() => null as unknown as L.Layer}
                            style={() => ({
                              color: "#ffffff",
                              weight: isSelected ? 8 : 7,
                              opacity: isDimmed ? 0.16 : 0.92,
                              lineCap: "round",
                              lineJoin: "round",
                            })}
                          />
                          <GeoJSON
                            key="route02-geojson-main"
                            pane="sip-pane-routefx"
                            data={route02GeoJson}
                            pointToLayer={() => null as unknown as L.Layer}
                            style={() => ({
                              color: "#8B2E2E",
                              weight: isSelected ? 5 : 4,
                              opacity: isDimmed ? 0.18 : 0.92,
                              lineCap: "round",
                              lineJoin: "round",
                            })}
                          />
                        </>
                      ) : null}
                      {!isRoute01 && !isRoute02 ? (
                        <>
                          <Polyline
                            pane="sip-pane-routefx"
                            positions={positions}
                            pathOptions={{
                              color: baseColor,
                              weight: isSelected ? 15 : 11,
                              opacity: isDimmed ? 0.08 : 0.18,
                              lineCap: "round",
                              lineJoin: "round",
                            }}
                          />
                          <Polyline
                            pane="sip-pane-routes"
                            positions={positions}
                            pathOptions={{
                              color: isDimmed ? "#6a6f6c" : baseColor,
                              weight: isSelected ? 6 : 4,
                              opacity: isDimmed ? 0.28 : p.routeRouted.opacity,
                              lineCap: "round",
                              lineJoin: "round",
                            }}
                          />
                          <Polyline
                            pane="sip-pane-routefx"
                            positions={positions}
                            pathOptions={{
                              color: isDimmed ? "#7f8b85" : "#f2f7f4",
                              weight: isSelected ? 2 : 1.5,
                              opacity: isDimmed ? 0.35 : 0.55,
                              dashArray: "8 10",
                            }}
                          />
                        </>
                      ) : null}
                      {!isRoute01 &&
                      !isRoute02 &&
                      (selectedRouteName === null || isSelected) &&
                      positions.length > 1
                        ? positions.slice(0, -1).map((from, i) => {
                            // Reduce clutter: show fewer arrows when route isn't selected
                            if (selectedRouteName === null && i % 2 === 1) return null;
                            const to = positions[i + 1]!;
                            const angle = directionAngle(from, to);
                            const pos = segmentMidpoint(from, to);
                            return (
                              <Marker
                                key={`${route.name}-arr-${i}`}
                                pane="sip-pane-routefx"
                                position={pos}
                                icon={routeArrowIcon(angle, false)}
                                interactive={false}
                              />
                            );
                          })
                        : null}

                      {!isRoute01 && !isRoute02 && positions.length >= 2 ? (
                        <>
                          <Marker
                            pane="sip-pane-routefx"
                            position={positions[0]!}
                            icon={startFinishIcon("start", isDimmed)}
                            interactive={false}
                          />
                          <Marker
                            pane="sip-pane-routefx"
                            position={positions[positions.length - 1]!}
                            icon={startFinishIcon("finish", isDimmed)}
                            interactive={false}
                          />
                        </>
                      ) : null}

                      {layers.testSites && isSelected ? (
                        <Marker
                          pane="sip-pane-labels"
                          position={mid}
                          icon={semanticLabelIcon(
                            route.zone === "research" ? "Научный маршрут" : "Рекомендательный маршрут",
                            "route",
                          )}
                          interactive={false}
                        />
                      ) : null}
                    </LayerGroup>
                  );
                })
              : null
            : null}

          {layers.stops
            ? (selectedRouteName ? allRoutes.filter((r) => r.name === selectedRouteName) : []).flatMap((route) => {
                const stops = route.points
                  .map((pt, pointIdx) => ({ pt, pointIdx }))
                  .filter(({ pt }) => (pt.kind ?? "stop") === "stop")
                  .filter(({ pt }) => typeof pt.lat === "number" && typeof pt.lng === "number");

                if (stops.length === 0) return [];

                const start = stops[0]!;
                const finish = stops[stops.length - 1]!;
                const intermediate = stops.slice(1, -1);
                const isDimmed = selectedRouteName !== null && selectedRouteName !== route.name;

                const renderPopup = (pt: (typeof stops)[number]["pt"]) => (
                  <Popup className="sip-leaflet-popup" maxWidth={380}>
                    <div className="space-y-2 text-[12px]">
                      <div className="text-[13px] font-extrabold leading-snug text-on-surface">{pt.name}</div>
                      <div className="leading-relaxed text-on-surface-variant">{pt.description}</div>
                      <div>
                        <span className="font-bold text-on-surface">Уровень риска:</span> {pt.risk_level}
                      </div>
                      <div>
                        <span className="font-bold text-on-surface">Макс. время пребывания:</span> {pt.max_time_minutes} мин
                      </div>
                      <div className="rounded-lg border border-outline-variant/15 bg-surface-container-low px-2.5 py-2 text-[11px] leading-relaxed text-on-surface-variant">
                        <span className="font-bold text-on-surface">Рекомендации:</span> {pt.safety_note}
                      </div>
                    </div>
                  </Popup>
                );

                return [
                  <Marker
                    key={`${route.name}::start`}
                    pane="sip-pane-stops"
                    position={[start.pt.lat as number, start.pt.lng as number]}
                    icon={routeStartFinishIcon("start", isDimmed)}
                  >
                    <Tooltip direction="right" offset={[12, 0]} className="sip-plain-tooltip">
                      S · {start.pt.name}
                    </Tooltip>
                    {renderPopup(start.pt)}
                  </Marker>,
                  ...intermediate.map(({ pt, pointIdx }, i) => {
                    const markerKey = `${route.name}::${pointIdx}`;
                    const isActive = hoveredStopKey === markerKey;
                    const order = i + 2; // Start is S, intermediate starts from 2
                    return (
                      <Marker
                        key={markerKey}
                        pane="sip-pane-stops"
                        position={[pt.lat as number, pt.lng as number]}
                        icon={routeStopIcon(order, isActive, isDimmed)}
                        eventHandlers={{
                          mouseover: () => setHoveredStopKey(markerKey),
                          mouseout: () => setHoveredStopKey(null),
                          click: () => {
                            setSelectedRouteName(route.name);
                            setHoveredStopKey(markerKey);
                          },
                        }}
                      >
                        <Tooltip direction="top" offset={[0, -12]} className="sip-plain-tooltip">
                          Остановка {order}
                        </Tooltip>
                        {renderPopup(pt)}
                      </Marker>
                    );
                  }),
                  <Marker
                    key={`${route.name}::finish`}
                    pane="sip-pane-stops"
                    position={[finish.pt.lat as number, finish.pt.lng as number]}
                    icon={routeStartFinishIcon("finish", isDimmed)}
                  >
                    <Tooltip direction="right" offset={[12, 0]} className="sip-plain-tooltip">
                      F · {finish.pt.name}
                    </Tooltip>
                    {renderPopup(finish.pt)}
                  </Marker>,
                ];
              })
            : null}

          {layers.stsBoundary ? (
            <Marker
              pane="sip-pane-labels"
              position={boundaryLabelPos}
              icon={semanticLabelIcon("Граница СИП", "boundary")}
              interactive={false}
            />
          ) : null}

          {layers.testSites
            ? STS_TEST_SITES.filter((site) =>
                shouldShowDenseLabels ? true : site.id !== "site-4" && site.id !== "site-4a" && site.id !== "telkem",
              ).map((site) => (
                <Marker
                  key={`lbl-${site.id}`}
                  pane="sip-pane-labels"
                  position={[site.labelPosition.lat, site.labelPosition.lng]}
                  icon={semanticLabelIcon(site.labelRu, "site")}
                  interactive={false}
                />
              ))
            : null}

          {layers.routes && !layers.testSites && selectedRouteName
            ? allRoutes.filter((r) => r.name === selectedRouteName).map((route) => {
                if (TEMP_DISABLED_ROUTES_GOOGLE_LINKS_MODE) return null;
                const positions = route.points
                  .filter((pt) => typeof pt.lat === "number" && typeof pt.lng === "number")
                  .map((pt) => [pt.lat as number, pt.lng as number] as LatLngExpression);
                if (positions.length < 2) return null;
                const mid = positions[Math.floor(positions.length / 2)]!;
                return (
                  <Marker
                    key={`rlbl-${route.name}`}
                    pane="sip-pane-labels"
                    position={mid}
                    icon={semanticLabelIcon("Рекомендательный маршрут", "route")}
                    interactive={false}
                  />
                );
              })
            : null}
        </MapContainer>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[700] border-t border-outline-variant/10 bg-surface/90 px-2 py-1.5 text-center text-[9px] leading-snug text-on-surface-variant backdrop-blur-sm lg:hidden">
          Схематичные границы и маршруты — только для сведения. Не инструкция к самостоятельному посещению.
        </div>
      </div>
    </div>
  );
}
