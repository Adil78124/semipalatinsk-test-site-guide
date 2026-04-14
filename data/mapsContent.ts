import mapsContentJson from "@/data/maps-content.json";
import type { Lang } from "@/components/i18n/translations";

export type MapSlug =
  | "sip-overview"
  | "territory-scheme"
  | "cs137-distribution"
  | "am241-distribution"
  | "sr90-distribution";

export type MapCode = "G001" | "G002" | "G003" | "G004" | "G006";

export type L10n = Record<Lang, string>;

export type MapsListItem = {
  slug: MapSlug;
  code: MapCode;
  title: L10n;
  shortTitle: L10n;
  description: L10n;
  image: string;
  sourceShort: L10n;
  cta: L10n;
  prev: MapSlug | null;
  next: MapSlug | null;
  page: {
    category: L10n;
    subtitle: L10n;
    breadcrumbs: Record<Lang, Array<{ label: string; href?: string }>>;
    meta: { verified: boolean; verifiedLabel: L10n };
    sections: { whatShows: L10n; whyImportant: L10n; howInterpret: L10n };
    warning: { title: L10n; text: L10n };
  };
};

export type MapsListPageContent = {
  page: { title: L10n; label: L10n; subtitle: L10n; description: L10n };
  sourceBlock: {
    title: L10n;
    text: L10n;
    mainSourceTitle: L10n;
    publication: L10n;
    description: L10n;
    note: L10n;
    pdfLabel: L10n;
    doiLabel: L10n;
  };
  warningBlock: { title: L10n; text: L10n };
};

export type MapsContent = {
  maps: MapsListItem[];
  listPage: MapsListPageContent;
};

export const mapsContent = mapsContentJson as MapsContent;

export function l10n(lang: Lang, value: L10n): string {
  return value[lang] ?? value.ru ?? "";
}

export function getMapBySlug(slug: string): MapsListItem | null {
  return mapsContent.maps.find((m) => m.slug === slug) ?? null;
}

export function getPrevMap(map: MapsListItem): MapsListItem | null {
  if (!map.prev) return null;
  return getMapBySlug(map.prev);
}

export function getNextMap(map: MapsListItem): MapsListItem | null {
  if (!map.next) return null;
  return getMapBySlug(map.next);
}

