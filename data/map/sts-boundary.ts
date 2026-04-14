import { SIP_BOUNDS } from "@/lib/map/sipMapConfig";
import type { StsBoundaryFeature } from "@/data/map/stsMap.types";

/**
 * Схематичный внешний контур территории СИП.
 * Построен как образовательный boundary-overlay в пределах `SIP_BOUNDS`:
 * не является официальной кадастровой/юридической границей.
 */
export const STS_OUTER_BOUNDARY: StsBoundaryFeature = {
  id: "sts-outer",
  labelRu: "Граница СИП",
  labelEn: "STS boundary",
  dataQuality: "schematic_educational",
  note:
    "Схематичный неровный контур для навигационного контекста. Для юридических и инженерных решений используйте официальные материалы.",
  ringLngLat: [
    [SIP_BOUNDS.west + 0.06, SIP_BOUNDS.south + 0.09],
    [77.48, 49.44],
    [78.02, 49.42],
    [78.62, 49.5],
    [79.03, 49.72],
    [79.16, 50.05],
    [79.18, 50.36],
    [79.03, 50.67],
    [78.62, 50.84],
    [78.06, 50.88],
    [77.54, 50.82],
    [77.16, 50.62],
    [77.03, 50.29],
    [77.01, 49.95],
    [SIP_BOUNDS.west + 0.06, SIP_BOUNDS.south + 0.09],
  ],
};
