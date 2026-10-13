import type { TranslationKey } from "@/components/i18n/translations";

export type ResearchMapId = "g001" | "g003" | "g004" | "g006";
export type ResearchMapSlug =
  | "sip-overview"
  | "cs137-distribution"
  | "am241-distribution"
  | "sr90-distribution";

export type ResearchMapItem = {
  id: ResearchMapId;
  slug: ResearchMapSlug;
  imageSrc: string;
  titleKey: TranslationKey;
  bodyKey: TranslationKey;
  sourceKey: TranslationKey;
};

export const RESEARCH_MAPS: ResearchMapItem[] = [
  {
    id: "g001",
    slug: "sip-overview",
    imageSrc: "/journal.pone.0294632.g001.PNG",
    titleKey: "researchMaps.g001.title",
    bodyKey: "researchMaps.g001.body",
    sourceKey: "researchMaps.source.plos",
  },
  {
    id: "g003",
    slug: "cs137-distribution",
    imageSrc: "/journal.pone.0294632.g003.PNG",
    titleKey: "researchMaps.g003.title",
    bodyKey: "researchMaps.g003.body",
    sourceKey: "researchMaps.source.plos",
  },
  {
    id: "g004",
    slug: "am241-distribution",
    imageSrc: "/journal.pone.0294632.g004.PNG",
    titleKey: "researchMaps.g004.title",
    bodyKey: "researchMaps.g004.body",
    sourceKey: "researchMaps.source.plos",
  },
  {
    id: "g006",
    slug: "sr90-distribution",
    imageSrc: "/journal.pone.0294632.g006.PNG",
    titleKey: "researchMaps.g006.title",
    bodyKey: "researchMaps.g006.body",
    sourceKey: "researchMaps.source.plos",
  },
];
