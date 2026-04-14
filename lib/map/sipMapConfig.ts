/** Semipalatinsk Test Site — map framing and elevation reference (project brief). */

/** Охват: полигон СИП и проверенные ориентиры (в т.ч. Кайнар, Карааул — южнее ядра кадра). */
export const SIP_BOUNDS = {
  south: 48.88,
  west: 77.28,
  north: 50.92,
  east: 79.38,
} as const;

/** [[south, west], [north, east]] for Leaflet `maxBounds` / `fitBounds`. */
export const SIP_MAX_BOUNDS_LAT_LNG: [[number, number], [number, number]] = [
  [SIP_BOUNDS.south, SIP_BOUNDS.west],
  [SIP_BOUNDS.north, SIP_BOUNDS.east],
];

/**
 * Wider limit for panning only: lets users see neighboring settlements and regional context.
 * Initial `fitBounds` still uses {@link SIP_MAX_BOUNDS_LAT_LNG} (thematic SIP frame).
 */
export const SIP_PAN_LIMIT_MARGIN_DEG = 1.25;

export const SIP_PAN_MAX_BOUNDS_LAT_LNG: [[number, number], [number, number]] = [
  [SIP_BOUNDS.south - SIP_PAN_LIMIT_MARGIN_DEG, SIP_BOUNDS.west - SIP_PAN_LIMIT_MARGIN_DEG],
  [SIP_BOUNDS.north + SIP_PAN_LIMIT_MARGIN_DEG, SIP_BOUNDS.east + SIP_PAN_LIMIT_MARGIN_DEG],
];

export const SIP_CENTER: [number, number] = [
  (SIP_BOUNDS.south + SIP_BOUNDS.north) / 2,
  (SIP_BOUNDS.west + SIP_BOUNDS.east) / 2,
];

export const SIP_MAP_DEFAULT_ZOOM = 9;

/** Min zoom for SIP maps (lower = more zoom out; still keeps the region on screen). */
export const SIP_MAP_MIN_ZOOM = 7;

/** Max zoom shared by SIP Leaflet instances (topo tiles cap at 17). */
export const SIP_MAP_MAX_ZOOM = 17;

/**
 * How hard maxBounds push the view back (1 = rigid, 0 = no limit).
 * Lower value = softer “rubber band”, less fighting while panning.
 */
export const MAX_BOUNDS_VISCOSITY = 0.42;

export const ELEVATION_STATS = {
  avgM: 379,
  minM: 142,
  maxM: 1043,
} as const;

export type BasemapId = "standard" | "topo" | "cartoLight" | "satellite";

export const BASEMAP_TILES: Record<
  BasemapId,
  { url: string; attribution: string; maxZoom: number }
> = {
  standard: {
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution: "© OpenStreetMap contributors",
    maxZoom: 19,
  },
  topo: {
    url: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
    attribution:
      'Map data: © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: © <a href="https://opentopomap.org">OpenTopoMap</a> (CC-BY-SA)',
    maxZoom: 17,
  },
  cartoLight: {
    url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    attribution:
      '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, © <a href="https://carto.com/attributions">CARTO</a>',
    maxZoom: 20,
  },
  /** Esri World Imagery — public tile service; Leaflet uses {z}/{y}/{x} order for this endpoint. */
  satellite: {
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    attribution:
      'Tiles © <a href="https://www.esri.com/">Esri</a> — Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community',
    maxZoom: 19,
  },
};

/** Подписи границ и населённых пунктов (накладывается поверх спутника). Esri Reference. */
export const ESRI_REFERENCE_BOUNDARIES_PLACES = {
  url: "https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}",
  attribution:
    'Labels © <a href="https://www.esri.com/">Esri</a> — Reference: Esri, HERE, Garmin, USGS, NGA, EPA, USDA, NPS',
  maxZoom: 19,
} as const;
