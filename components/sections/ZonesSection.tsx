"use client";

import React, { useContext } from "react";
import { I18nContext, SearchContext } from "@/components/providers/AppProviders";
import { ZONES } from "@/data/zones";

export function ZonesSection() {
  const i18n = useContext(I18nContext);
  const search = useContext(SearchContext);
  if (!i18n || !search) return null;
  const { t } = i18n;
  const { query } = search;

  const q = query.trim().toLowerCase();
  const showAll = q.length === 0;

  const filtered = showAll
    ? ZONES
    : ZONES.filter((z) => {
        const hay = `${t(z.labelKey)} ${t(z.titleKey)} ${t(z.descKey)} ${t(z.statusKey)}`.toLowerCase();
        return hay.includes(q);
      });

  return (
    <section id="zones" className="py-24 bg-surface-container-low">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <span className="font-label text-xs font-bold text-secondary uppercase tracking-[0.2em]">
            {t("zones.kicker")}
          </span>
          <h2 className="font-headline text-4xl font-extrabold mt-4">
            {t("zones.title")}
          </h2>
          <p className="mt-5 max-w-3xl mx-auto text-sm leading-relaxed text-on-surface-variant whitespace-pre-line">
            {t("zones.lead")}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filtered.map((z) => (
            <div
              key={z.id}
              className={[
                "bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.04)] group transition-opacity",
                showAll ? "" : "opacity-100",
              ].join(" ")}
            >
              <div className="h-48 overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt={t(z.titleKey)}
                  src={z.img}
                />
                <div
                  className={[
                    "absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest",
                    z.badgeClass,
                  ].join(" ")}
                >
                  {t(z.labelKey)}
                </div>
              </div>
              <div className="p-8">
                <h4 className="font-headline text-xl font-bold mb-3">{t(z.titleKey)}</h4>
                <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
                  {t(z.descKey)}
                </p>
                <div className={["flex items-center gap-2 font-semibold text-sm", z.statusClass].join(" ")}>
                  <span className="material-symbols-outlined text-sm">{z.statusIcon}</span>
                  {t(z.statusKey)}
                </div>
              </div>
            </div>
          ))}
        </div>
        {!showAll && filtered.length === 0 ? (
          <div className="text-center mt-10 text-sm text-on-surface-variant">
            {t("search.noResults")} “{query}”.
          </div>
        ) : null}

        <div className="mx-auto mt-16 max-w-5xl border-t border-outline-variant/15 pt-12">
          <div
            className="rounded-2xl border border-secondary/25 bg-secondary-container/35 p-6 text-sm leading-relaxed text-on-secondary-container whitespace-pre-line"
            role="note"
          >
            <span className="font-bold">{t("zones.disclaimerTitle")}</span>
            {"\n"}
            {t("zones.disclaimerBody")}
          </div>

          <div className="mt-10 rounded-2xl border border-outline-variant/12 bg-surface-container-lowest/70 p-6">
            <p className="font-label text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">
              {t("zones.sourcesTitle")}
            </p>
            <ul className="mt-3 flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap sm:gap-x-6">
              <li>
                <a
                  href="https://www.nnc.kz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary"
                >
                  {t("zones.source.nnc")}
                </a>
              </li>
              <li>
                <a
                  href="https://sts.nnc.kz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary"
                >
                  {t("zones.source.sts")}
                </a>
              </li>
              <li>
                <a
                  href="https://adilet.zan.kz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary"
                >
                  {t("zones.source.adilet")}
                </a>
              </li>
              <li>
                <a
                  href="https://www.iaea.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary"
                >
                  {t("zones.source.iaea")}
                </a>
              </li>
              <li>
                <a
                  href="https://www.unep.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary"
                >
                  {t("zones.source.unep")}
                </a>
              </li>
              <li>
                <a
                  href="https://journals.plos.org/plosone/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary"
                >
                  {t("zones.source.plos")}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
