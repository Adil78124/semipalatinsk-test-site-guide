import type { Lang } from "@/components/i18n/translations";
import { SIP_BOUNDS } from "@/lib/map/sipMapConfig";
import { SIP_SETTLEMENTS } from "@/data/sipMap/sipSettlements";

/**
 * Подписи населённых пунктов поверх спутника (вместе с Esri Reference).
 * Данные синхронизированы с `sipSettlements.ts`.
 */
export type RegionalPlacename = {
  id: string;
  lat: number;
  lng: number;
  names: Record<Lang, string>;
};

export const SIP_REGIONAL_PLACENAMES: RegionalPlacename[] = SIP_SETTLEMENTS.map((s) => ({
  id: s.regionalId,
  lat: s.lat,
  lng: s.lng,
  names: s.names,
}));

export function placenameLabel(lang: Lang, p: RegionalPlacename): string {
  return p.names[lang] ?? p.names.ru;
}

export function isPlacenameInSipFrame(p: RegionalPlacename): boolean {
  return (
    p.lat >= SIP_BOUNDS.south &&
    p.lat <= SIP_BOUNDS.north &&
    p.lng >= SIP_BOUNDS.west &&
    p.lng <= SIP_BOUNDS.east
  );
}
