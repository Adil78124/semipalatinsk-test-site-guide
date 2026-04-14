import type { TranslationKey } from "@/components/i18n/translations";

export type RouteId = "kurchatov" | "atomic-lake" | "degelen" | "balapan" | "fallout-plumes";

export type RouteData = {
  id: RouteId;
  levelKey: TranslationKey;
  levelClass: string;
  icon: string;
  iconHoverClass: string;
  titleKey: TranslationKey;
  descKey: TranslationKey;
  durationKey: TranslationKey;
  tagKey: TranslationKey;
};

export const ROUTES: RouteData[] = [
  {
    id: "kurchatov",
    levelKey: "routes.card.kurchatov.type",
    levelClass: "bg-secondary-container text-on-secondary-container",
    icon: "apartment",
    iconHoverClass: "group-hover:text-primary",
    titleKey: "routes.card.kurchatov.title",
    descKey: "routes.card.kurchatov.desc",
    durationKey: "routes.card.kurchatov.access",
    tagKey: "routes.card.kurchatov.focus",
  },
  {
    id: "atomic-lake",
    levelKey: "routes.card.atomic.type",
    levelClass: "bg-tertiary-fixed text-on-tertiary-fixed",
    icon: "water",
    iconHoverClass: "group-hover:text-tertiary",
    titleKey: "routes.card.atomic.title",
    descKey: "routes.card.atomic.desc",
    durationKey: "routes.card.atomic.access",
    tagKey: "routes.card.atomic.focus",
  },
  {
    id: "degelen",
    levelKey: "routes.card.degelen.type",
    levelClass: "bg-secondary-container text-on-secondary-container",
    icon: "landscape",
    iconHoverClass: "group-hover:text-primary",
    titleKey: "routes.card.degelen.title",
    descKey: "routes.card.degelen.desc",
    durationKey: "routes.card.degelen.access",
    tagKey: "routes.card.degelen.focus",
  },
  {
    id: "balapan",
    levelKey: "routes.card.balapan.type",
    levelClass: "bg-tertiary-fixed text-on-tertiary-fixed",
    icon: "biotech",
    iconHoverClass: "group-hover:text-tertiary",
    titleKey: "routes.card.balapan.title",
    descKey: "routes.card.balapan.desc",
    durationKey: "routes.card.balapan.access",
    tagKey: "routes.card.balapan.focus",
  },
  {
    id: "fallout-plumes",
    levelKey: "routes.card.fallout.type",
    levelClass: "bg-secondary-container text-on-secondary-container",
    icon: "monitoring",
    iconHoverClass: "group-hover:text-primary",
    titleKey: "routes.card.fallout.title",
    descKey: "routes.card.fallout.desc",
    durationKey: "routes.card.fallout.access",
    tagKey: "routes.card.fallout.focus",
  },
];

