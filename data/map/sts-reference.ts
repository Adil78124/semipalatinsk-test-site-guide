import { SIP_SETTLEMENTS } from "@/data/sipMap/sipSettlements";

export type StsReferencePoint = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  kind: "city" | "settlement" | "checkpoint";
  priority: "major" | "minor";
};

export type StsReferenceLine = {
  id: string;
  name: string;
  kind: "river" | "road";
  points: Array<[number, number]>;
};

/**
 * Опорные ориентиры для чтения карты.
 * Населённые пункты синхронизированы с `sipSettlements.ts` (Google Maps).
 */
export const STS_REFERENCE_POINTS: StsReferencePoint[] = [
  ...SIP_SETTLEMENTS.map((s) => ({
    id: s.regionalId,
    name: s.names.ru,
    lat: s.lat,
    lng: s.lng,
    kind: (s.regionalId === "kurchatov" ? "city" : "settlement") as "city" | "settlement",
    priority: (s.regionalId === "kurchatov" ? "major" : "minor") as "major" | "minor",
  })),
  {
    id: "access-north",
    name: "Северный КПП (условно)",
    lat: 50.59,
    lng: 78.31,
    kind: "checkpoint",
    priority: "minor",
  },
];

export const STS_REFERENCE_LINES: StsReferenceLine[] = [
  {
    id: "irtysh",
    name: "р. Иртыш",
    kind: "river",
    points: [
      [79.17, 50.87],
      [79.15, 50.72],
      [79.12, 50.54],
      [79.09, 50.31],
      [79.06, 50.12],
      [79.02, 49.94],
      [78.99, 49.76],
      [78.95, 49.58],
    ],
  },
  {
    id: "kurchatov-axis",
    name: "Основной транспортный коридор",
    kind: "road",
    points: [
      [78.53, 50.75],
      [78.43, 50.63],
      [78.33, 50.48],
      [78.28, 50.31],
      [78.34, 50.12],
      [78.51, 49.97],
      [78.79, 49.9],
    ],
  },
  {
    id: "southwest-track",
    name: "Полевой трек (условный)",
    kind: "road",
    points: [
      [78.18, 50.19],
      [78.02, 50.07],
      [77.86, 49.99],
      [77.72, 49.92],
      [77.57, 49.83],
      [77.46, 49.73],
    ],
  },
];
