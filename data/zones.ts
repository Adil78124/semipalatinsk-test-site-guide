import type { TranslationKey } from "@/components/i18n/translations";

export type ZoneId = "routed" | "restricted" | "closed";

export type ZoneData = {
  id: ZoneId;
  img: string;
  badgeClass: string;
  labelKey: TranslationKey;
  titleKey: TranslationKey;
  descKey: TranslationKey;
  statusIcon: "check_circle" | "warning" | "block";
  statusKey: TranslationKey;
  statusClass: string;
};

const ROUTED_ZONE_IMG = "/images/kurchatov-city.jpg";

const RESTRICTED_ZONE_IMG = "/images/balapan.jpg";

const CLOSED_ZONE_IMG = "/images/degelen.jpg";

export const ZONES: ZoneData[] = [
  {
    id: "routed",
    img: ROUTED_ZONE_IMG,
    badgeClass: "bg-surface-container-high text-on-surface",
    labelKey: "zones.card.routed.label",
    titleKey: "zones.card.routed.title",
    descKey: "zones.card.routed.desc",
    statusIcon: "check_circle",
    statusKey: "zones.card.routed.status",
    statusClass: "text-primary",
  },
  {
    id: "restricted",
    img: RESTRICTED_ZONE_IMG,
    badgeClass: "bg-surface-container-high text-on-surface",
    labelKey: "zones.card.restricted.label",
    titleKey: "zones.card.restricted.title",
    descKey: "zones.card.restricted.desc",
    statusIcon: "warning",
    statusKey: "zones.card.restricted.status",
    statusClass: "text-secondary",
  },
  {
    id: "closed",
    img: CLOSED_ZONE_IMG,
    badgeClass: "bg-surface-container-high text-on-surface",
    labelKey: "zones.card.closed.label",
    titleKey: "zones.card.closed.title",
    descKey: "zones.card.closed.desc",
    statusIcon: "block",
    statusKey: "zones.card.closed.status",
    statusClass: "text-error",
  },
];

