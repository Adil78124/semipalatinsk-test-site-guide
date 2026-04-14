"use client";

import React, { useContext } from "react";
import { I18nContext } from "@/components/providers/AppProviders";
import type { TranslationKey } from "@/components/i18n/translations";

const fallbackT = (key: TranslationKey) => String(key);

type Variant = "default" | "compact" | "panel";

const shell: Record<Variant, string> = {
  default:
    "rounded-xl border border-outline-variant/15 bg-surface-container-low/80 px-4 py-3 text-xs leading-relaxed text-on-surface-variant",
  compact: "text-[11px] leading-snug text-on-surface-variant/95",
  panel:
    "rounded-lg border border-secondary/20 bg-secondary-container/25 px-3 py-2 text-[11px] leading-relaxed text-on-secondary-container",
};

export function UnifiedSiteDisclaimer({
  variant = "default",
  className = "",
  id,
}: {
  variant?: Variant;
  className?: string;
  id?: string;
}) {
  const i18n = useContext(I18nContext);
  const t = i18n?.t ?? fallbackT;
  const key: TranslationKey = variant === "compact" ? "site.disclaimer.unifiedShort" : "site.disclaimer.unified";

  return (
    <p id={id} className={[shell[variant], className].filter(Boolean).join(" ")} role="note">
      {t(key)}
    </p>
  );
}
