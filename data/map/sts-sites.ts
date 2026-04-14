import type { StsTestSiteFeature } from "@/data/map/stsMap.types";
import { SITE_POINTS } from "@/data/sipMap/sitePointsData";

const KML_CENTER_NOTE =
  "Центр участка — координаты маркера из KMZ/Google My Maps слоя, согласованного с публикациями НЯЦ. Контур — схематичный (неровный) образовательный полигон вокруг центра, не официальная граница площадки.";

function siteCenter(id: string): { lat: number; lng: number } {
  const p = SITE_POINTS.find((s) => s.id === id);
  if (!p) throw new Error(`sts-sites: unknown site id ${id}`);
  return { lat: p.lat, lng: p.lng };
}

/**
 * Неровный схематичный полигон вокруг центра:
 * offsets задаются как [deltaLng, deltaLat], затем кольцо замыкается.
 */
function schematicPolygon(
  center: { lat: number; lng: number },
  offsets: Array<[number, number]>,
): [number, number][] {
  const { lat, lng } = center;
  const ring = offsets.map(([dx, dy]) => [lng + dx, lat + dy] as [number, number]);
  if (ring.length > 0) {
    ring.push(ring[0]!);
  }
  return ring;
}

/**
 * Ключевые испытательные участки СИП — схематичные полигоны.
 * Размеры подобраны грубо по масштабу описаний (км² / диаметр), без претензии на точный периметр.
 */
export const STS_TEST_SITES: StsTestSiteFeature[] = [
  {
    id: "experimental-field",
    labelRu: "Опытное поле",
    labelEn: "Experimental Field",
    aliases: ["Experimental Field"],
    zoneClass: "dangerous",
    ...(() => {
      const c = siteCenter("experimental-field");
      return {
        ringLngLat: schematicPolygon(c, [
          [-0.17, -0.04],
          [-0.12, -0.09],
          [0.02, -0.1],
          [0.15, -0.06],
          [0.19, 0.02],
          [0.11, 0.09],
          [-0.01, 0.11],
          [-0.14, 0.06],
        ]),
        labelPosition: { lat: c.lat + 0.12, lng: c.lng - 0.01 },
        note: KML_CENTER_NOTE,
      };
    })(),
    dataQuality: "schematic_educational",
  },
  {
    id: "balapan",
    labelRu: "Балапан",
    labelEn: "Balapan",
    zoneClass: "dangerous",
    ...(() => {
      const c = siteCenter("balapan");
      return {
        ringLngLat: schematicPolygon(c, [
          [-0.24, -0.1],
          [-0.15, -0.18],
          [0.01, -0.2],
          [0.19, -0.13],
          [0.24, -0.02],
          [0.2, 0.1],
          [0.1, 0.17],
          [-0.06, 0.18],
          [-0.2, 0.1],
        ]),
        labelPosition: { lat: c.lat + 0.21, lng: c.lng + 0.01 },
        note: KML_CENTER_NOTE,
      };
    })(),
    dataQuality: "schematic_educational",
  },
  {
    id: "degelen",
    labelRu: "Дегелен",
    labelEn: "Degelen",
    zoneClass: "dangerous",
    ...(() => {
      const c = siteCenter("degelen");
      return {
        ringLngLat: schematicPolygon(c, [
          [-0.14, -0.05],
          [-0.09, -0.1],
          [0, -0.11],
          [0.11, -0.08],
          [0.13, -0.01],
          [0.09, 0.07],
          [0.01, 0.1],
          [-0.1, 0.06],
        ]),
        labelPosition: { lat: c.lat + 0.11, lng: c.lng + 0.01 },
        note: KML_CENTER_NOTE,
      };
    })(),
    dataQuality: "schematic_educational",
  },
  {
    id: "sary-uzen",
    labelRu: "Сары-Узень",
    labelEn: "Sary-Uzen",
    zoneClass: "dangerous",
    ...(() => {
      const c = siteCenter("sary-uzen");
      return {
        ringLngLat: schematicPolygon(c, [
          [-0.18, -0.06],
          [-0.11, -0.12],
          [0.03, -0.13],
          [0.17, -0.07],
          [0.2, 0.03],
          [0.13, 0.11],
          [0, 0.12],
          [-0.13, 0.08],
        ]),
        labelPosition: { lat: c.lat + 0.14, lng: c.lng },
        note: KML_CENTER_NOTE,
      };
    })(),
    dataQuality: "schematic_educational",
  },
  {
    id: "telkem",
    labelRu: "Телькем",
    labelEn: "Telkem",
    /** Визуальный класс «ограниченная» для контраста на легенде; геометрия схематична. */
    zoneClass: "limited",
    ...(() => {
      const c = siteCenter("telkem");
      return {
        ringLngLat: schematicPolygon(c, [
          [-0.09, -0.03],
          [-0.05, -0.06],
          [0.03, -0.07],
          [0.08, -0.03],
          [0.09, 0.02],
          [0.04, 0.06],
          [-0.04, 0.06],
          [-0.08, 0.02],
        ]),
        labelPosition: { lat: c.lat + 0.08, lng: c.lng + 0.01 },
        note: KML_CENTER_NOTE,
      };
    })(),
    dataQuality: "schematic_educational",
  },
  {
    id: "site-4",
    labelRu: "Площадка 4",
    labelEn: "Site 4",
    aliases: ["4"],
    zoneClass: "dangerous",
    ...(() => {
      const c = siteCenter("site-4");
      return {
        ringLngLat: schematicPolygon(c, [
          [-0.07, -0.02],
          [-0.05, -0.05],
          [0.02, -0.06],
          [0.07, -0.03],
          [0.06, 0.02],
          [0.02, 0.05],
          [-0.04, 0.05],
          [-0.07, 0.01],
        ]),
        labelPosition: { lat: c.lat + 0.07, lng: c.lng + 0.01 },
        note: KML_CENTER_NOTE,
      };
    })(),
    dataQuality: "schematic_educational",
  },
  {
    id: "site-4a",
    labelRu: "Площадка 4А",
    labelEn: "Site 4a",
    aliases: ["4a", "4A"],
    zoneClass: "dangerous",
    ...(() => {
      const c = siteCenter("site-4a");
      return {
        ringLngLat: schematicPolygon(c, [
          [-0.08, -0.02],
          [-0.04, -0.05],
          [0.03, -0.06],
          [0.08, -0.02],
          [0.07, 0.03],
          [0.01, 0.06],
          [-0.05, 0.04],
          [-0.08, 0.01],
        ]),
        labelPosition: { lat: c.lat + 0.07, lng: c.lng - 0.005 },
        note: KML_CENTER_NOTE,
      };
    })(),
    dataQuality: "schematic_educational",
  },
];
