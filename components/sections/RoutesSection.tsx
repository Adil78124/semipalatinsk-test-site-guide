"use client";

import React, { useContext, useEffect, useMemo, useState } from "react";
import { I18nContext, SearchContext } from "@/components/providers/AppProviders";
import type { TranslationKey } from "@/components/i18n/translations";
import { ROUTES } from "@/data/routes";

const fallbackT = (key: TranslationKey) => String(key);

export function RoutesSection() {
  const i18n = useContext(I18nContext);
  const search = useContext(SearchContext);
  const t = i18n?.t ?? fallbackT;
  const query = search?.query ?? "";

  const q = query.trim().toLowerCase();
  const filtered = useMemo(() => {
    if (q.length === 0) return ROUTES;
    return ROUTES.filter((r) => {
      const hay = `${t(r.levelKey)} ${t(r.titleKey)} ${t(r.descKey)} ${t(r.durationKey)} ${t(
        r.tagKey,
      )}`.toLowerCase();
      return hay.includes(q);
    });
  }, [q, t]);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [q]);

  useEffect(() => {
    if (activeIndex < 0) setActiveIndex(0);
    if (activeIndex > filtered.length - 1) setActiveIndex(Math.max(0, filtered.length - 1));
  }, [activeIndex, filtered.length]);

  const scrollToCard = (idx: number) => {
    const r = filtered[idx];
    if (!r) return;
    document.getElementById(`route-${r.id}`)?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  return (
    <section id="routes" className="py-24 bg-surface-container-low overflow-hidden">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-6 mb-12 sm:mb-16">
          <div>
            <span className="font-label text-xs font-bold text-secondary uppercase tracking-[0.2em]">
              {t("routes.kicker")}
            </span>
            <h2 className="font-headline text-4xl font-extrabold mt-4">
              {t("routes.title")}
            </h2>
            <p className="text-on-surface-variant mt-4 max-w-2xl">
              {t("routes.lead")}
            </p>
          </div>
          <div className="flex gap-4">
            <button
              type="button"
              className="p-3 rounded-full border border-outline-variant/30 hover:bg-white transition-colors"
              aria-label="Previous"
              onClick={() => {
                const next = filtered.length === 0 ? 0 : (activeIndex - 1 + filtered.length) % filtered.length;
                setActiveIndex(next);
                scrollToCard(next);
              }}
              disabled={filtered.length <= 1}
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button
              type="button"
              className="p-3 rounded-full border border-outline-variant/30 hover:bg-white transition-colors"
              aria-label="Next"
              onClick={() => {
                const next = filtered.length === 0 ? 0 : (activeIndex + 1) % filtered.length;
                setActiveIndex(next);
                scrollToCard(next);
              }}
              disabled={filtered.length <= 1}
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.map((r) => (
            <div
              key={r.id}
              id={`route-${r.id}`}
              className="bg-white rounded-xl p-8 shadow-sm group cursor-pointer hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <span
                  className={[
                    "px-3 py-1 rounded-full text-[10px] font-bold uppercase",
                    r.levelClass,
                  ].join(" ")}
                >
                  {t(r.levelKey)}
                </span>
                <span
                  className={[
                    "material-symbols-outlined text-outline-variant",
                    r.iconHoverClass,
                  ].join(" ")}
                >
                  {r.icon}
                </span>
              </div>
              <h3 className="font-headline text-xl font-bold mb-4">{t(r.titleKey)}</h3>
              <p className="text-sm text-on-surface-variant mb-6">{t(r.descKey)}</p>
              <div className="pt-6 border-t border-surface-container flex justify-between items-center text-xs font-bold text-outline uppercase tracking-wider">
                <span>{t(r.durationKey)}</span>
                <span>{t(r.tagKey)}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-14 bg-white rounded-2xl border border-outline-variant/10 p-8 shadow-sm">
          <div className="flex items-start gap-4">
            <span
              className="material-symbols-outlined text-primary text-2xl shrink-0 mt-0.5"
              style={{ fontVariationSettings: "'FILL' 1" }}
              aria-hidden="true"
            >
              info
            </span>
            <p className="text-sm text-on-surface-variant leading-relaxed max-w-4xl">
              {t("routes.disclaimer")}
            </p>
          </div>
        </div>
        {q.length > 0 && filtered.length === 0 ? (
          <div className="text-center mt-10 text-sm text-on-surface-variant">
            {t("search.noResults")} “{query}”.
          </div>
        ) : null}
      </div>
    </section>
  );
}
