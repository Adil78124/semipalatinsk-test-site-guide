import type { Lang } from "@/components/i18n/translations";
import { SIP_BOUNDS } from "@/lib/map/sipMapConfig";
import { googleMapsQueryUrl, SIP_SETTLEMENTS } from "@/data/sipMap/sipSettlements";
import type { SitePoint, SitePointCategory } from "@/data/sipMap/sitePointsData";
import { SITE_POINTS } from "@/data/sipMap/sitePointsData";

/** Единая типология для справочной карты /map (расширяемая). */
export type MapPointType = "settlement" | "test_site" | "landmark";

/** Центр круглого кратерного озера «Атомное озеро» (проверено по Google Maps и OSM way 172385354). */
export const ATOMIC_LAKE_LAT = 49.93552;
export const ATOMIC_LAKE_LNG = 79.00852;
export const CHAGAN_GHOST_TOWN_LAT = 50.609111;
export const CHAGAN_GHOST_TOWN_LNG = 79.242333;
export const CHAGAN_16_AIRFIELD_LAT = 50.541083;
export const CHAGAN_16_AIRFIELD_LNG = 79.1935;
export const ZHAMANTUZ_LAKE_LAT = 50.550111;
export const ZHAMANTUZ_LAKE_LNG = 77.859111;
export const KYZYLKUDUK_LAT = 50.532028;
export const KYZYLKUDUK_LNG = 77.947694;
const KARAZHYRA_LAT = 50.02733244;
const KARAZHYRA_LNG = 78.72924935;

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
  "aktan-birlik": "Aktan-Berli",
  balapan: "Balapan",
  degelen: "Degelen",
  "sary-uzen": "Sary-Uzen",
  telkem: "Telkem",
};

const SIP_KK: Record<string, string> = {
  "aktan-birlik": "Ақтан-Бірлік",
};

function siteCategoryToMapType(category: SitePointCategory): MapPointType {
  if (category === "overview") return "landmark";
  return "test_site";
}

function sitePointToReference(sp: SitePoint): MapReferencePoint {
  const isApproximate = sp.coordPrecision === "approx" || sp.coordPrecision === "estimated_center";
  return {
    id: sp.id,
    mapType: siteCategoryToMapType(sp.category),
    names: {
      ru: sp.name,
      kk: SIP_KK[sp.id] ?? sp.name,
      en: SIP_EN[sp.id] ?? sp.name,
    },
    lat: sp.lat,
    lng: sp.lng,
    sourceName: isApproximate
      ? "Ориентировочное положение по опубликованной карте-схеме СИП; требуется уточнение по официальным геоданным."
      : "НЯЦ РК — интерактивный атлас (sts.nnc.kz); координаты маркера — экспорт KML/KMZ «Главная.kmz»",
    sourceUrl: isApproximate ? undefined : STS_ATLAS,
    sourceType: isApproximate ? "manual" : "official",
    confidence: isApproximate ? "reference" : "high",
    isApproximate,
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
      "Ориентировочный центр круглого кратерного озера: 49.93552° N, 79.00852° E; проверено по Google Maps и OpenStreetMap (озеро Shagan, way 172385354). Контекст объекта — материалы НЯЦ (sts.nnc.kz).",
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
  {
    id: "landmark-chagan-ghost-town",
    mapType: "landmark",
    names: {
      ru: "Город-призрак Чаган",
      kk: "Чаган елес-қаласы",
      en: "Chagan ghost town",
    },
    lat: CHAGAN_GHOST_TOWN_LAT,
    lng: CHAGAN_GHOST_TOWN_LNG,
    sourceName:
      "Финальная статья Молдажанова и соавторов, таблица 5, стр. 12; 50°36′32.8″ N, 79°14′32.4″ E.",
    sourceType: "scientific",
    confidence: "high",
    googleMapsUrl: googleMapsQueryUrl(CHAGAN_GHOST_TOWN_LAT, CHAGAN_GHOST_TOWN_LNG),
    summary: {
      ru: "Историческая локация бывшего военного города Чаган, показанная отдельно от аэродрома и Атомного озера.",
      kk: "Әуеайлақ пен Атом көлінен бөлек көрсетілген бұрынғы Чаган әскери қаласының тарихи орны.",
      en: "Historic location of the former military town of Chagan, shown separately from the airfield and Atomic Lake.",
    },
    description: {
      ru: "Справочная точка из научного источника. Маркер не подтверждает доступность дорог, безопасность или разрешение на посещение.",
      kk: "Ғылыми дереккөздегі анықтамалық нүкте. Маркер жолдардың қолжетімділігін, қауіпсіздікті немесе баруға рұқсатты растамайды.",
      en: "A reference point from the scientific source. The marker does not confirm road access, safety, or permission to visit.",
    },
  },
  {
    id: "landmark-chagan-16-airfield",
    mapType: "landmark",
    names: {
      ru: "Аэродром Чаган-16",
      kk: "Чаган-16 әуеайлағы",
      en: "Chagan-16 airfield",
    },
    lat: CHAGAN_16_AIRFIELD_LAT,
    lng: CHAGAN_16_AIRFIELD_LNG,
    sourceName:
      "Финальная статья Молдажанова и соавторов, таблица 5, стр. 12; 50°32′27.9″ N, 79°11′36.6″ E.",
    sourceType: "scientific",
    confidence: "high",
    googleMapsUrl: googleMapsQueryUrl(CHAGAN_16_AIRFIELD_LAT, CHAGAN_16_AIRFIELD_LNG),
    summary: {
      ru: "Исторический аэродром Чаган-16; отдельный объект, не объединённый с городом Чаган или Атомным озером.",
      kk: "Чаган-16 тарихи әуеайлағы; Чаган қаласымен немесе Атом көлімен біріктірілмеген жеке нысан.",
      en: "Historic Chagan-16 airfield, represented separately from Chagan town and Atomic Lake.",
    },
    description: {
      ru: "Справочная точка из научного источника. Наличие маркера не означает свободный доступ или подтверждённый автомобильный маршрут.",
      kk: "Ғылыми дереккөздегі анықтамалық нүкте. Маркердің болуы еркін кіруді немесе расталған автомобиль маршрутын білдірмейді.",
      en: "A reference point from the scientific source. Its marker does not imply unrestricted access or a verified driving route.",
    },
  },
  {
    id: "landmark-zhamantuz-lake",
    mapType: "landmark",
    names: {
      ru: "Солёное озеро Жамантуз",
      kk: "Жамантуз тұзды көлі",
      en: "Salt lake Zhamantuz",
    },
    lat: ZHAMANTUZ_LAKE_LAT,
    lng: ZHAMANTUZ_LAKE_LNG,
    sourceName:
      "Финальная статья Молдажанова и соавторов; 50°33′00.4″ N, 77°51′32.8″ E. Авторская фотография: рис. 4, стр. 14 (исходный файл отсутствует в рабочей копии).",
    sourceType: "scientific",
    confidence: "high",
    googleMapsUrl: googleMapsQueryUrl(ZHAMANTUZ_LAKE_LAT, ZHAMANTUZ_LAKE_LNG),
    summary: {
      ru: "Солёное озеро Жамантуз, координаты которого приведены в финальной научной статье.",
      kk: "Координаттары финалдық ғылыми мақалада берілген Жамантуз тұзды көлі.",
      en: "Salt lake Zhamantuz, with coordinates reported in the final scientific article.",
    },
    description: {
      ru: "Озеро показано как отдельная справочная точка. Маркер не подтверждает проезжаемость дорог, безопасность или разрешение на посещение.",
      kk: "Көл жеке анықтамалық нүкте ретінде көрсетілген. Маркер жолдардың жүруге жарамдылығын, қауіпсіздікті немесе баруға рұқсатты растамайды.",
      en: "The lake is shown as a separate reference point. The marker does not confirm road passability, safety, or permission to visit.",
    },
  },
  {
    id: "settlement-kyzylkuduk-reference",
    mapType: "settlement",
    names: {
      ru: "Кызылкудук (справочный объект)",
      kk: "Қызылқұдық (анықтамалық нысан)",
      en: "Kyzylkuduk (reference point)",
    },
    lat: KYZYLKUDUK_LAT,
    lng: KYZYLKUDUK_LNG,
    sourceName:
      "Финальная статья Молдажанова и соавторов; 50°31′55.3″ N, 77°56′51.7″ E.",
    sourceType: "scientific",
    confidence: "high",
    googleMapsUrl: googleMapsQueryUrl(KYZYLKUDUK_LAT, KYZYLKUDUK_LNG),
    summary: {
      ru: "Посёлок рядом с озером Жамантуз; не подтверждён как обязательная остановка маршрута.",
      kk: "Жамантуз көліне жақын елді мекен; маршруттың міндетті аялдамасы ретінде расталмаған.",
      en: "A settlement near Lake Zhamantuz; not confirmed as a required route stop.",
    },
    description: {
      ru: "Кызылкудук добавлен как отдельный справочный объект. Его включение в маршрут требует подтверждения заказчика.",
      kk: "Қызылқұдық жеке анықтамалық нысан ретінде қосылды. Оны маршрутқа қосу тапсырыс берушінің растауын талап етеді.",
      en: "Kyzylkuduk is included as a separate reference object. Its inclusion in the route requires client confirmation.",
    },
  },
  {
    id: "landmark-karazhyra",
    mapType: "landmark",
    names: {
      ru: "Каражыра",
      kk: "Қаражыра",
      en: "Karazhyra",
    },
    lat: KARAZHYRA_LAT,
    lng: KARAZHYRA_LNG,
    sourceName:
      "Справочная координата угольного разреза Каражыра; объект расположен рядом с площадкой Балапан.",
    sourceUrl: "https://www.gem.wiki/Karazhyra_Coal_Mine",
    sourceType: "manual",
    confidence: "reference",
    googleMapsUrl: googleMapsQueryUrl(KARAZHYRA_LAT, KARAZHYRA_LNG),
    summary: {
      ru: "Угольный разрез и промышленный ориентир рядом с площадкой Балапан.",
      kk: "Балапан алаңы маңындағы көмір разрезі және өндірістік бағдар.",
      en: "A coal mine and industrial landmark near the Balapan test area.",
    },
    description: {
      ru: "Каражыра показана на карте как справочный ориентир рядом с Балапаном. Маркер не относится к испытательным площадкам и не является указанием на режим допуска.",
      kk: "Қаражыра картада Балапан маңындағы анықтамалық бағдар ретінде көрсетілген. Маркер сынақ алаңы болып саналмайды және кіру режимін білдірмейді.",
      en: "Karazhyra is shown as a reference landmark near Balapan. The marker is not a test site and does not indicate access status.",
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
