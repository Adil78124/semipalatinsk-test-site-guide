"use client";

import React, { useContext, useMemo, useState } from "react";
import { I18nContext } from "@/components/providers/AppProviders";
import type { TranslationKey } from "@/components/i18n/translations";
import { UnifiedSiteDisclaimer } from "@/components/ui/UnifiedSiteDisclaimer";
import { l10n, mapsContent } from "@/data/mapsContent";

const fallbackT = (key: TranslationKey) => String(key);

export function ResearchMapsSection() {
  const i18n = useContext(I18nContext);
  const t = i18n?.t ?? fallbackT;
  const lang = i18n?.lang ?? "ru";

  const [expanded, setExpanded] = useState(false);
  const allMaps = mapsContent.maps;
  const visible = useMemo(() => (expanded ? allMaps : allMaps.slice(0, 2)), [expanded, allMaps]);

  return (
    <section id="research-maps" className="py-24 bg-surface-container-low">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <span className="font-label text-xs font-bold text-tertiary uppercase tracking-[0.2em]">
              {t("researchMaps.kicker")}
            </span>
            <h2 className="font-headline text-4xl font-extrabold mt-4">{t("researchMaps.title")}</h2>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
              <div className="md:col-span-7">
                <p className="text-lg text-on-surface-variant leading-relaxed font-body whitespace-pre-line">
                  {t("researchMaps.lead")}
                </p>
              </div>
              <div className="md:col-span-5">
                <div className="bg-surface-container-low p-6 sm:p-8 rounded-xl border-l-4 border-primary shadow-sm">
                  <div className="flex items-start gap-4">
                    <span
                      className="material-symbols-outlined text-primary text-2xl shrink-0 mt-0.5"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                      aria-hidden="true"
                    >
                      info
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium leading-relaxed text-on-surface whitespace-pre-line break-words">
                        {t("researchMaps.note")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <UnifiedSiteDisclaimer variant="compact" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visible.map((m) => (
              <article
                key={m.slug}
                className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(25,28,28,0.06)] flex flex-col group hover:translate-y-[-4px] transition-all duration-300"
              >
                <a href={`/maps/${m.slug}`} className="block" aria-label={l10n(lang, m.title)}>
                  <div className="aspect-[16/10] overflow-hidden bg-surface-container">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={m.image}
                      alt={l10n(lang, m.title)}
                      className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500"
                      loading="lazy"
                    />
                  </div>
                </a>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-headline text-2xl font-bold text-on-surface mb-4 leading-tight">
                    {l10n(lang, m.title)}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6 flex-grow whitespace-pre-line">
                    {l10n(lang, m.description)}
                  </p>
                  <div className="pt-6 border-t border-outline-variant/20">
                    <p className="text-[11px] text-outline italic mb-6">
                      <span className="font-bold not-italic text-on-surface-variant">
                        {t("researchMaps.sourceLabel")}
                      </span>{" "}
                      {l10n(lang, m.sourceShort)}
                    </p>
                    <a
                      href={`/maps/${m.slug}`}
                      className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all"
                    >
                      <span className="material-symbols-outlined text-sm">map</span>
                      {l10n(lang, m.cta)}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <button
              type="button"
              className="px-8 py-3 rounded-full border border-outline-variant/30 hover:bg-surface-container transition-all font-bold text-sm"
              onClick={() => setExpanded((v) => !v)}
            >
              {expanded ? t("researchMaps.showLess") : t("researchMaps.showMore")}
            </button>
            <a
              href="/maps"
              className="px-8 py-3 rounded-full bg-white/70 border border-outline-variant/20 text-on-surface hover:bg-surface-container transition-all font-bold text-sm text-center"
            >
              {t("researchMaps.viewAll")}
            </a>
          </div>

          <div className="mt-14 bg-white rounded-2xl border border-outline-variant/10 p-8 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="font-headline font-extrabold text-2xl">{t("sources.title")}</h3>
                <p className="text-sm text-on-surface-variant mt-3 max-w-2xl whitespace-pre-line">{t("sources.lead")}</p>
              </div>
              <a
                href="/maps#sources"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-on-primary font-bold text-xs uppercase tracking-widest shadow-lg shadow-primary/20"
              >
                <span className="material-symbols-outlined text-[18px]">source</span>
                {t("sources.openSection")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

