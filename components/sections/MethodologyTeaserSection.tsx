"use client";

import Link from "next/link";
import React, { useContext, useState } from "react";
import { I18nContext } from "@/components/providers/AppProviders";
import type { TranslationKey } from "@/components/i18n/translations";
import { UnifiedSiteDisclaimer } from "@/components/ui/UnifiedSiteDisclaimer";

const fallbackT = (key: TranslationKey) => String(key);

export function MethodologyTeaserSection() {
  const i18n = useContext(I18nContext);
  const t = i18n?.t ?? fallbackT;
  const [open, setOpen] = useState<string | null>(null);

  const items = [
    { id: "data", titleKey: "methodology.teaser.acc.dataTitle" as const, bodyKey: "methodology.teaser.acc.dataBody" as const },
    { id: "pubs", titleKey: "methodology.teaser.acc.pubsTitle" as const, bodyKey: "methodology.teaser.acc.pubsBody" as const },
    { id: "gloss", titleKey: "methodology.teaser.acc.glossTitle" as const, bodyKey: "methodology.teaser.acc.glossBody" as const },
  ];

  return (
    <section id="methodology" className="py-20 bg-surface-container-low/50 border-y border-outline-variant/10">
      <div className="container mx-auto px-6 md:px-8 max-w-4xl">
        <span className="font-label text-xs font-bold text-primary uppercase tracking-[0.2em]">{t("methodology.teaser.kicker")}</span>
        <h2 className="font-headline text-3xl md:text-4xl font-extrabold mt-3 text-on-surface">{t("methodology.teaser.title")}</h2>
        <p className="mt-4 text-sm text-on-surface-variant leading-relaxed max-w-3xl">{t("methodology.teaser.lead")}</p>

        <div className="mt-6">
          <UnifiedSiteDisclaimer variant="panel" />
        </div>

        <div className="mt-8 space-y-2">
          {items.map((item) => {
            const isOpen = open === item.id;
            return (
              <div key={item.id} className="rounded-xl border border-outline-variant/12 bg-white/90 overflow-hidden shadow-sm">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-bold text-on-surface hover:bg-surface-container-low/50 transition-colors"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : item.id)}
                >
                  {t(item.titleKey)}
                  <span className="material-symbols-outlined text-on-surface-variant shrink-0 text-[20px]">
                    {isOpen ? "expand_less" : "expand_more"}
                  </span>
                </button>
                {isOpen ? (
                  <div className="px-4 pb-4 text-sm text-on-surface-variant leading-relaxed border-t border-outline-variant/10 pt-3">
                    {t(item.bodyKey)}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/methodology"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-on-primary shadow-md hover:opacity-95 transition-opacity"
          >
            {t("methodology.teaser.moreLink")}
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
