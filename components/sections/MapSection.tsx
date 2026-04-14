"use client";

import Link from "next/link";
import React, { useContext } from "react";
import { I18nContext } from "@/components/providers/AppProviders";
import type { TranslationKey } from "@/components/i18n/translations";
import { SipLeafletMap } from "@/components/map/SipLeafletMap";

const fallbackT = (key: TranslationKey) => String(key);

const MAP_LIST_SHOWS: TranslationKey[] = [
  "map.listShows1",
  "map.listShows2",
  "map.listShows3",
  "map.listShows4",
];

const MAP_LIST_NOT: TranslationKey[] = [
  "map.listNotReplaces1",
  "map.listNotReplaces2",
  "map.listNotReplaces3",
  "map.listNotReplaces4",
  "map.listNotReplaces5",
];

export function MapSection() {
  const i18n = useContext(I18nContext);
  const t = i18n?.t ?? fallbackT;
  const titleSecond = t("map.titleLine2").trim();

  return (
    <section id="map" className="py-24 bg-surface">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-start gap-16">
          <div className="lg:w-1/3 shrink-0">
            <span className="font-label text-xs font-bold text-tertiary uppercase tracking-[0.2em] mb-4 block">
              {t("map.kicker")}
            </span>
            <h2 className="font-headline text-4xl font-extrabold mb-6 leading-tight">
              {t("map.titleLine1")}
              {titleSecond ? (
                <>
                  <br />
                  {titleSecond}
                </>
              ) : null}
            </h2>
            <p className="text-on-surface-variant mb-8">{t("map.subtitle")}</p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-1">layers</span>
                <div>
                  <span className="font-bold block">{t("map.feature.layers.title")}</span>
                  <span className="text-sm text-on-surface-variant">
                    {t("map.feature.layers.desc")}
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-1">gps_fixed</span>
                <div>
                  <span className="font-bold block">{t("map.feature.gps.title")}</span>
                  <span className="text-sm text-on-surface-variant">
                    {t("map.feature.gps.desc")}
                  </span>
                </div>
              </li>
            </ul>
            <Link
              href="/map"
              className="inline-flex items-center justify-center bg-primary text-on-primary px-8 py-4 rounded-xl font-bold shadow-lg transition-opacity hover:opacity-95"
            >
              {t("map.fullscreen")}
            </Link>
          </div>

          <div className="lg:w-2/3 w-full min-w-0 flex flex-col gap-4">
            <div className="rounded-2xl border border-outline-variant/15 bg-surface-container-low/90 p-5 sm:p-6 shadow-sm">
              <h3 className="font-headline text-lg sm:text-xl font-extrabold text-on-surface leading-snug mb-2">
                {t("map.cardTitle")}
              </h3>
              <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed mb-4">
                {t("map.cardLead")}
              </p>
              <p className="text-sm text-on-surface leading-relaxed border-l-2 border-primary/40 pl-3 mb-5">
                {t("map.cardRelief")}
              </p>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <h4 className="font-headline text-sm font-bold text-on-surface mb-2">
                    {t("map.listShowsTitle")}
                  </h4>
                  <ul className="list-disc space-y-1.5 pl-4 text-sm text-on-surface-variant leading-relaxed">
                    {MAP_LIST_SHOWS.map((key) => (
                      <li key={key}>{t(key)}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-headline text-sm font-bold text-on-surface mb-2">
                    {t("map.listNotReplacesTitle")}
                  </h4>
                  <ul className="list-disc space-y-1.5 pl-4 text-sm text-on-surface-variant leading-relaxed">
                    {MAP_LIST_NOT.map((key) => (
                      <li key={key}>{t(key)}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative z-0 isolate h-[420px] sm:h-[520px] lg:h-[600px] w-full min-w-0 overflow-hidden rounded-2xl bg-surface-container shadow-2xl ring-1 ring-black/[0.04]">
              <SipLeafletMap variant="fullscreen" className="!rounded-2xl h-full w-full" />
            </div>

            <p
              className="text-xs sm:text-sm text-on-surface-variant leading-relaxed border-l-2 border-outline-variant/30 pl-3"
              role="note"
            >
              {t("map.shortDisclaimer")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
