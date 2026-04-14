import type { Lang } from "@/components/i18n/translations";
import { SIP_BOUNDS } from "@/lib/map/sipMapConfig";
import { googleMapsQueryUrl, SIP_SETTLEMENTS } from "@/data/sipMap/sipSettlements";
import type { SitePoint, SitePointCategory } from "@/data/sipMap/sitePointsData";
import { SITE_POINTS } from "@/data/sipMap/sitePointsData";

/** Единая типология для справочной карты /map (расширяемая). */
export type MapPointType = "settlement" | "test_site" | "landmark";

/** Ориентир «Атомное озеро»: 49°55′27.7″N 78°59′22.7″E (десятичные градусы). */
export const ATOMIC_LAKE_LAT = 49 + 55 / 60 + 27.7 / 3600;
export const ATOMIC_LAKE_LNG = 78 + 59 / 60 + 22.7 / 3600;

export type MapReferenceSourceType = "official" | "scientific" | "osm" | "wikipedia" | "manual";

export type MapReferenceConfidence = "high" | "medium" | "reference";

/**
 * Справочная точка на карте: источник и достоверность обязательны для научно-информационной подачи.
 * При наличии `sipSiteId` длинный текст панели берётся из `SITE_POINTS`.
 */
export type MapReferencePoint = {
  id: string;
  mapType: MapPointType;
  names: Record<Lang, string>;
  lat: number;
  lng: number;
  sourceName: string;
  sourceUrl?: string;
  sourceType: MapReferenceSourceType;
  confidence: MapReferenceConfidence;
  isApproximate?: boolean;
  /** Привязка к записи SITE_POINTS (площадки СИП, обзор полигона). */
  sipSiteId?: string;
  /** Краткое описание, если нет sipSiteId (населённые пункты, ориентиры). */
  summary?: Partial<Record<Lang, string>>;
  /** Развёрнутый текст (например, населённые пункты). */
  description?: Partial<Record<Lang, string>>;
  /** Дополнительный факт для туристической подачи. */
  interestingFact?: Partial<Record<Lang, string>>;
  /** Точка на Google Maps (`?q=lat,lng`). */
  googleMapsUrl?: string;
};

/** Интерактивный атлас НЯЦ (тот же слой My Maps, что и KML в проекте). */
export const STS_ATLAS_URL = "https://sts.nnc.kz/?load=main";

const STS_ATLAS = STS_ATLAS_URL;

const SIP_EN: Record<string, string> = {
  "experimental-field": "Experimental field",
  "site-4": "Site 4",
  "site-4a": "Site 4A",
  balapan: "Balapan",
  degelen: "Degelen",
  "sary-uzen": "Sary-Uzen",
  telkem: "Telkem",
};

function siteCategoryToMapType(category: SitePointCategory): MapPointType {
  if (category === "overview") return "landmark";
  return "test_site";
}

function sitePointToReference(sp: SitePoint): MapReferencePoint {
  return {
    id: sp.id,
    mapType: siteCategoryToMapType(sp.category),
    names: {
      ru: sp.name,
      kk: sp.name,
      en: SIP_EN[sp.id] ?? sp.name,
    },
    lat: sp.lat,
    lng: sp.lng,
    sourceName:
      "НЯЦ РК — интерактивный атлас (sts.nnc.kz); координаты маркера — экспорт KML/KMZ «Главная.kmz»",
    sourceUrl: STS_ATLAS,
    sourceType: "official",
    confidence: "high",
    sipSiteId: sp.id,
  };
}

const SETTLEMENT_REFERENCE_POINTS: MapReferencePoint[] = SIP_SETTLEMENTS.map((s) => ({
  id: s.catalogId,
  mapType: "settlement" as const,
  names: s.names,
  lat: s.lat,
  lng: s.lng,
  sourceName: "Координаты центра населённого пункта — Google Maps (формат ?q=lat,lng); для юридических целей сверяйте с официальными реестрами.",
  sourceType: "manual" as const,
  confidence: "high" as const,
  googleMapsUrl: googleMapsQueryUrl(s.lat, s.lng),
  summary: s.summary,
  description: s.description,
  interestingFact: s.interestingFact,
}));

/** Ориентиры вне массива SITE_POINTS. Координаты части точек ориентировочные — см. isApproximate. */
const EXTRA_REFERENCE_POINTS: MapReferencePoint[] = [
  ...SETTLEMENT_REFERENCE_POINTS,
  {
    id: "landmark-atomic-lake",
    mapType: "landmark",
    names: {
      ru: "Атомное озеро (водохранилище Чаган)",
      kk: "Шаған атом көлі",
      en: "Atomic Lake (Chagan Reservoir)",
    },
    lat: ATOMIC_LAKE_LAT,
    lng: ATOMIC_LAKE_LNG,
    sourceName:
      "Координаты ориентира: 49°55′27.7″N 78°59′22.7″E; контекст объекта — материалы НЯЦ (sts.nnc.kz)",
    sourceUrl: STS_ATLAS,
    sourceType: "scientific",
    confidence: "medium",
    googleMapsUrl: googleMapsQueryUrl(ATOMIC_LAKE_LAT, ATOMIC_LAKE_LNG),
    summary: {
      ru: "Водохранилище, образованное в результате подземного ядерного взрыва в 1965 году. Не является указанием на допуск без официальных разрешений.",
      kk: "1965 жылғы жер астындағы ядролық жарылыстың нәтижесінде пайда болған су қоймасы. Ресми рұқсатсыз кіруге нұсқау емес.",
      en: "A reservoir formed by an underground nuclear explosion in 1965. Not an indication of authorized access without official clearance.",
    },
    description: {
      ru: "Водохранилище, образованное в результате подземного ядерного взрыва в 1965 году.",
      kk: "1965 жылғы ядролық жарылыстың нәтижесінде пайда болған су қоймасы.",
      en: "A reservoir formed by an underground nuclear explosion in 1965.",
    },
  },
];

/** ID подписей на спутнике, совпадающих с каталогом — на полноэкранной карте не дублируем текстовые маркеры. */
export const CATALOG_DUPLICATE_REGIONAL_IDS = new Set(SIP_SETTLEMENTS.map((s) => s.regionalId));

export const FULLSCREEN_MAP_POINT_TYPES: MapPointType[] = [
  "settlement",
  "test_site",
  "landmark",
];

export const DEFAULT_FULLSCREEN_TYPE_FILTERS: Record<MapPointType, boolean> = {
  settlement: true,
  test_site: true,
  landmark: true,
};

export function buildFullscreenMapCatalog(): MapReferencePoint[] {
  const fromSip = SITE_POINTS.map(sitePointToReference);
  return [...fromSip, ...EXTRA_REFERENCE_POINTS];
}

export function filterCatalogByTypes(
  catalog: MapReferencePoint[],
  filters: Record<MapPointType, boolean>,
): MapReferencePoint[] {
  return catalog.filter((p) => filters[p.mapType]);
}

export function isPointInSipFrame(lat: number, lng: number): boolean {
  return (
    lat >= SIP_BOUNDS.south &&
    lat <= SIP_BOUNDS.north &&
    lng >= SIP_BOUNDS.west &&
    lng <= SIP_BOUNDS.east
  );
}

export function filterCatalogInFrame(catalog: MapReferencePoint[]): MapReferencePoint[] {
  return catalog.filter((p) => isPointInSipFrame(p.lat, p.lng));
}

export function countByMapType(catalog: MapReferencePoint[]): Record<MapPointType, number> {
  const acc: Record<MapPointType, number> = {
    settlement: 0,
    test_site: 0,
    landmark: 0,
  };
  for (const p of catalog) {
    acc[p.mapType] += 1;
  }
  return acc;
}

export function catalogSearchMatch(entry: MapReferencePoint, lang: Lang, q: string): boolean {
  const n = q.trim().toLowerCase();
  if (!n) return true;
  const hay = [
    entry.names.ru,
    entry.names.kk,
    entry.names.en,
    entry.summary?.ru,
    entry.summary?.kk,
    entry.summary?.en,
    entry.description?.ru,
    entry.description?.kk,
    entry.description?.en,
    entry.interestingFact?.ru,
    entry.interestingFact?.kk,
    entry.interestingFact?.en,
    entry.sourceName,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  return hay.includes(n);
}
