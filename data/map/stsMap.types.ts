/**
 * Карта СИП / STS — типы для образовательных слоёв.
 * Полигоны участков и внешний контур, если не помечены иначе, являются схематическими
 * (ориентиры вокруг известных центров / рамки полигона проекта), а не официальными GIS-границами.
 */

export type StsDataQuality = "schematic_educational" | "project_bounds_frame";

/** Кольцо в порядке GeoJSON: [longitude, latitude], первая и последняя точки совпадают. */
export type LngLatRing = [number, number][];

export type StsBoundaryFeature = {
  id: "sts-outer";
  labelRu: string;
  labelEn: string;
  ringLngLat: LngLatRing;
  dataQuality: StsDataQuality;
  /** Краткое пояснение для подписи в коде / UI */
  note: string;
};

/** Категория схематичного контура площадки для палитры (не юридическая классификация территории). */
export type StsSiteZoneClass = "dangerous" | "limited";

export type StsTestSiteFeature = {
  id: string;
  labelRu: string;
  labelEn: string;
  aliases?: string[];
  zoneClass: StsSiteZoneClass;
  ringLngLat: LngLatRing;
  /** Позиция подписи на карте */
  labelPosition: { lat: number; lng: number };
  dataQuality: StsDataQuality;
  note: string;
};
