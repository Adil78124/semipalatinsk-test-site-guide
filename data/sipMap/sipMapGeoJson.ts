import type { FeatureCollection, LineString, Point, Polygon } from "geojson";
import type { TranslationKey } from "@/components/i18n/translations";
import { ATOMIC_LAKE_LAT, ATOMIC_LAKE_LNG } from "@/data/sipMap/mapReferencePoints";

export type SipFeatureKind = "territory" | "zone" | "route" | "poi";
/** Внутренние стили демо-полигонов; не соответствуют официальному зонированию. */
export type SipZoneClass = "routed" | "restricted" | "closed";
export type SipRouteVariant = "main" | "secondary";

export type SipGeoProperties = {
  id: string;
  kind: SipFeatureKind;
  titleKey: TranslationKey;
  descKey: TranslationKey;
  locationKey?: TranslationKey;
  zoneClass?: SipZoneClass;
  routeVariant?: SipRouteVariant;
  elevationAvgM?: number;
  elevationMinM?: number;
  elevationMaxM?: number;
};

export type SipFeatureCollection = FeatureCollection & {
  features: Array<
    | {
        type: "Feature";
        properties: SipGeoProperties;
        geometry: Polygon;
      }
    | {
        type: "Feature";
        properties: SipGeoProperties;
        geometry: LineString;
      }
    | {
        type: "Feature";
        properties: SipGeoProperties;
        geometry: Point;
      }
  >;
};

/**
 * Illustrative geometry for UI development. Replace or merge with authoritative GeoJSON when available.
 */
export const SIP_MAP_GEOJSON: SipFeatureCollection = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        id: "sip-territory",
        kind: "territory",
        titleKey: "map.geo.territory.title",
        descKey: "map.geo.territory.desc",
        locationKey: "map.geo.territory.loc",
        elevationAvgM: 379,
        elevationMinM: 142,
        elevationMaxM: 1043,
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [77.02, 49.52],
            [78.55, 49.48],
            [79.18, 49.92],
            [79.12, 50.45],
            [78.3, 50.78],
            [77.15, 50.72],
            [76.99, 50.15],
            [77.02, 49.52],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        id: "dev-polygon-routed",
        kind: "zone",
        zoneClass: "routed",
        titleKey: "map.geo.dev.routed.title",
        descKey: "map.geo.dev.routed.desc",
        locationKey: "map.geo.territory.loc",
        elevationAvgM: 420,
        elevationMinM: 280,
        elevationMaxM: 580,
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [77.2, 50.2],
            [77.78, 50.14],
            [77.72, 50.52],
            [77.12, 50.48],
            [77.2, 50.2],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        id: "dev-polygon-restricted",
        kind: "zone",
        zoneClass: "restricted",
        titleKey: "map.geo.dev.restricted.title",
        descKey: "map.geo.dev.restricted.desc",
        locationKey: "map.geo.territory.loc",
        elevationAvgM: 360,
        elevationMinM: 200,
        elevationMaxM: 720,
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [77.92, 49.82],
            [78.82, 49.78],
            [78.74, 50.22],
            [77.95, 50.26],
            [77.92, 49.82],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        id: "dev-polygon-closed",
        kind: "zone",
        zoneClass: "closed",
        titleKey: "map.geo.dev.closed.title",
        descKey: "map.geo.dev.closed.desc",
        locationKey: "map.geo.territory.loc",
        elevationAvgM: 310,
        elevationMinM: 150,
        elevationMaxM: 890,
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [78.34, 50.34],
            [78.64, 50.31],
            [78.58, 50.51],
            [78.28, 50.47],
            [78.34, 50.34],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        id: "route-perimeter",
        kind: "route",
        routeVariant: "main",
        titleKey: "map.geo.route.perimeter.title",
        descKey: "map.geo.route.perimeter.desc",
        locationKey: "map.geo.territory.loc",
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [77.08, 49.58],
          [78.45, 49.52],
          [79.08, 50.05],
          [78.85, 50.62],
          [77.45, 50.74],
          [77.02, 50.22],
          [77.08, 49.58],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        id: "route-cross",
        kind: "route",
        routeVariant: "secondary",
        titleKey: "map.geo.route.cross.title",
        descKey: "map.geo.route.cross.desc",
        locationKey: "map.geo.territory.loc",
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [77.35, 49.95],
          [78.2, 50.12],
          [78.95, 50.08],
          [78.4, 50.58],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        id: "poi-kurchatov",
        kind: "poi",
        titleKey: "map.geo.poi.kurchatov.title",
        descKey: "map.geo.poi.kurchatov.desc",
        locationKey: "map.geo.territory.loc",
        elevationAvgM: 340,
      },
      geometry: {
        type: "Point",
        coordinates: [78.548329, 50.756325],
      },
    },
    {
      type: "Feature",
      properties: {
        id: "poi-degelen",
        kind: "poi",
        titleKey: "map.geo.poi.degelen.title",
        descKey: "map.geo.poi.degelen.desc",
        locationKey: "map.geo.territory.loc",
        elevationAvgM: 550,
      },
      geometry: {
        type: "Point",
        coordinates: [78.05, 49.85],
      },
    },
    {
      type: "Feature",
      properties: {
        id: "poi-atomic-lake",
        kind: "poi",
        titleKey: "map.geo.poi.atomicLake.title",
        descKey: "map.geo.poi.atomicLake.desc",
        locationKey: "map.geo.territory.loc",
        elevationAvgM: 230,
      },
      geometry: {
        type: "Point",
        coordinates: [ATOMIC_LAKE_LNG, ATOMIC_LAKE_LAT],
      },
    },
  ],
};
