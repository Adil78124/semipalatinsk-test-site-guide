import type { TranslationKey } from "@/components/i18n/translations";

export type ScienceIconName = "map" | "numbers" | "timeline" | "radiation_alt" | "warning" | "menu_book";

export type ScienceFact = {
  icon: ScienceIconName;
  titleKey: TranslationKey;
  bodyKey: TranslationKey;
};

export const SCIENCE_FACTS: ScienceFact[] = [
  { icon: "map", titleKey: "science.c1.t", bodyKey: "science.c1.b" },
  { icon: "radiation_alt", titleKey: "science.c2.t", bodyKey: "science.c2.b" },
  { icon: "warning", titleKey: "science.c3.t", bodyKey: "science.c3.b" },
];

