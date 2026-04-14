import type { Feature, Geometry } from "geojson";
import type { CircleMarkerOptions, PathOptions } from "leaflet";
import type { MapPointType } from "@/data/sipMap/mapReferencePoints";
import type { SipGeoProperties, SipZoneClass } from "@/data/sipMap/sipMapGeoJson";

/** Site palette (aligned with Tailwind theme tokens). */
const COL = {
  territoryStroke: "#14532d",
  territoryFill: "#14532d",
  devRoutedStroke: "#166534",
  devRoutedFill: "#22c55e",
  devRestrictedStroke: "#a16207",
  devRestrictedFill: "#facc15",
  devClosedStroke: "#991b1b",
  devClosedFill: "#ef4444",
  routeStroke: "#14532d",
  routeCasing: "rgba(0,0,0,0.26)",
} as const;

const ZONE_STYLES: Record<SipZoneClass, PathOptions> = {
  routed: {
    color: COL.devRoutedStroke,
    weight: 1.5,
    opacity: 0.8,
    fillColor: COL.devRoutedFill,
    fillOpacity: 0.15,
    lineCap: "round",
    lineJoin: "round",
    className: "sip-path sip-zone sip-zone--routed",
  },
  restricted: {
    color: COL.devRestrictedStroke,
    weight: 1.5,
    opacity: 0.8,
    fillColor: COL.devRestrictedFill,
    fillOpacity: 0.15,
    lineCap: "round",
    lineJoin: "round",
    className: "sip-path sip-zone sip-zone--restricted",
  },
  closed: {
    color: COL.devClosedStroke,
    weight: 1.75,
    opacity: 0.85,
    fillColor: COL.devClosedFill,
    fillOpacity: 0.15,
    lineCap: "round",
    lineJoin: "round",
    className: "sip-path sip-zone sip-zone--closed",
  },
};

const ZONE_HOVER_DELTA: Partial<PathOptions> = {
  weight: 3,
  opacity: 0.95,
  fillOpacity: 0.3,
};

export const territoryStyle: PathOptions = {
  color: COL.territoryStroke,
  weight: 2.5,
  opacity: 0.9,
  fillColor: COL.territoryFill,
  fillOpacity: 0.05,
  lineCap: "round",
  lineJoin: "round",
  dashArray: undefined,
  className: "sip-path sip-territory",
};

export const territoryHoverStyle: PathOptions = {
  ...territoryStyle,
  weight: 3.25,
  fillOpacity: 0.075,
};

export const poiMarkerStyle: CircleMarkerOptions = {
  radius: 6,
  color: COL.devRoutedStroke,
  weight: 2,
  fillColor: "#ffffff",
  fillOpacity: 1,
  opacity: 0.95,
  className: "sip-poi",
};

export const poiMarkerHoverStyle: CircleMarkerOptions = {
  ...poiMarkerStyle,
  radius: 8,
  weight: 2.5,
};

const CATALOG_COL = {
  settlement: { stroke: "#1e40af", fill: "#eff6ff" },
  test_site: { stroke: "#14532d", fill: "#ffffff" },
  landmark: { stroke: "#7c2d12", fill: "#fff7ed" },
} as const;

/** Стили маркеров справочного каталога /map (компактные, различимые по типу). */
export function catalogMarkerBaseStyle(mapType: MapPointType): CircleMarkerOptions {
  const c = CATALOG_COL[mapType];
  return {
    radius: mapType === "settlement" ? 5 : 6,
    color: c.stroke,
    weight: 2,
    fillColor: c.fill,
    fillOpacity: 1,
    opacity: 0.95,
    className: `sip-catalog sip-catalog--${mapType}`,
  };
}

export function catalogMarkerHoverStyle(
  mapType: MapPointType,
  base: CircleMarkerOptions,
): CircleMarkerOptions {
  return {
    ...base,
    radius: (base.radius ?? 6) + 2,
    weight: 2.5,
  };
}

export const routeCasingStyle: PathOptions = {
  color: COL.routeCasing,
  weight: 5.5,
  opacity: 0.55,
  lineCap: "round",
  lineJoin: "round",
  dashArray: "6 6",
  className: "sip-path sip-route sip-route--casing",
};

export const routeInnerStyle: PathOptions = {
  color: COL.routeStroke,
  weight: 2,
  opacity: 0.8,
  lineCap: "round",
  lineJoin: "round",
  dashArray: "6 6",
  className: "sip-path sip-route sip-route--inner",
};

export const routeInnerHoverStyle: PathOptions = {
  ...routeInnerStyle,
  weight: 3,
  opacity: 1,
};

export const activePathDelta: Partial<PathOptions> = {
  opacity: 1,
  weight: 3.4,
};

export function pathStyleForFeature(
  feature: Feature<Geometry, SipGeoProperties | null>,
): PathOptions {
  const p = feature.properties;
  if (!p) return territoryStyle;
  if (p.kind === "territory") return { ...territoryStyle };
  if (p.kind === "zone" && p.zoneClass) {
    return { ...ZONE_STYLES[p.zoneClass] };
  }
  if (p.kind === "route") {
    return {
      ...routeInnerStyle,
    };
  }
  return territoryStyle;
}

export function hoverStyleForFeature(
  feature: Feature<Geometry, SipGeoProperties | null>,
): PathOptions {
  const base = pathStyleForFeature(feature);
  const p = feature.properties;
  if (!p) return { ...base, ...territoryHoverStyle };
  if (p.kind === "territory") return { ...territoryStyle, ...territoryHoverStyle };
  if (p.kind === "zone") {
    return {
      ...base,
      ...ZONE_HOVER_DELTA,
      fillOpacity: Math.min(0.35, (base.fillOpacity ?? 0.15) + 0.15),
    };
  }
  if (p.kind === "route") {
    return { ...routeInnerHoverStyle };
  }
  return base;
}
