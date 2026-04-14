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

const ROUTED_ZONE_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAXJjDk_UURL3dDBKnxIDirZ3z9NMK5SWF6D66v1Nsl91jQxd7gi9Xrd7qqylRCs_0xmaiMk1D2IR17Jl9OFMK51Wf7W-QWdHeg_zOF0ahrz6T3Sq1_l2QkoOEE1LXZ5zM4SkWXCgfF78y0psOiZQbBhGFNMdZnzYPIG1KHWa2bmMRLg2GaysaGwFjF_UVM6UMIsl9NFppjziMOmDQcM7YWxbhHwWaQOnPuRYdfSZBcArZljMO_ZXFvZqvIc86_rOayHu6hbzMqq4g";

const RESTRICTED_ZONE_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDsK-LljG5V1B6l4Pf45SgLyK6gRF8BdiNWKZtAJiz1EKK6g6cSse2tIwKYSBLqltgPcDmYP4nF28CgAjbCH02txSw8TK_tODIVszct-dThUd38TVh76YQJoolbLBYWwZppKI9mcoSLgOsdbCh9t-YsNkCSR9oJGa-3KXuymMVOCLsluSsrrJwMnBzO03zBPZyO4durKb2JPQf4DXp-2Zv9RmH8m_pbLf9zozCX53uEGcqvNZQNs8V80510AlrFWjCTYQqJu-mxgtA";

const CLOSED_ZONE_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC6fOYuj_hkz6GcfQJhuuK74GXh7D5VNqolDk35K52pAX-emISiw4KdKHfb-aSl-APuSnTfv_bSkQQxQHW6Aet-bj0n_wmDWFicStER7j_psRW7Nmioet4--e9PFflP3A0xA67RqIMQz8xKh2ew4W00k5btRjYpaldMEKbzBu284LNVSVYxeIsooLLo9b2EO8-TOyUtT0VchfTTCVtu3tnP9YZhUSVmd28ol4_GuMXDL6m_Wd7XatS4ac10gPZZeF48byauWfdwZE8";

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

