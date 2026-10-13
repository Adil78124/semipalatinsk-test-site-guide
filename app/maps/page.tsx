"use client";

import React, { useContext } from "react";
import { l10n, mapsContent } from "@/data/mapsContent";
import { I18nContext } from "@/components/providers/AppProviders";
import type { TranslationKey } from "@/components/i18n/translations";
import { PUBLICATIONS_CATALOG } from "@/data/publicationsCatalog";

const fallbackT = (key: TranslationKey) => String(key);
const ADDITIONAL_SOURCE_IDS = [
  "moldazhanov-2026-radiation-safety-tourists",
  "toporova-2021-dose-methods",
  "subbotin-2023-atomic-lake-dose",
  "mukusheva-2024-monitoring-concepts",
] as const;

function sourceLabels(lang: "ru" | "kk" | "en") {
  if (lang === "en") return { title: "Additional scientific publications", article: "Article", pdf: "PDF", survey: "Environmental survey", nnc: "Kazakhstan NNC", journal: "Tourism, Leisure and Hospitality" };
  if (lang === "kk") return { title: "Қосымша ғылыми жарияланымдар", article: "Мақала", pdf: "PDF", survey: "Экологиялық зерттеу", nnc: "ҚР ҰЯО", journal: "Туризм, демалыс және қонақжайлылық" };
  return { title: "Дополнительные научные публикации", article: "Статья", pdf: "PDF", survey: "Экологическое обследование", nnc: "НЯЦ РК", journal: "Туризм, досуг и гостеприимство" };
}

export default function MapsIndexPage() {
  const i18n = useContext(I18nContext);
  const t = i18n?.t ?? fallbackT;
  const lang = i18n?.lang ?? "ru";
  const { maps, listPage } = mapsContent;
  const labels = sourceLabels(lang);
  const additionalSources = ADDITIONAL_SOURCE_IDS.map((id) => PUBLICATIONS_CATALOG.find((p) => p.id === id)).filter(
    Boolean,
  );

  return (
    <section className="py-16 bg-surface-container-low">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 flex items-center gap-2 text-sm font-medium text-on-surface-variant font-body">
            <a className="hover:text-primary flex items-center gap-1 transition-colors" href="/">
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              {t("maps.backHome")}
            </a>
            <span className="text-outline-variant">/</span>
            <span className="text-primary">{l10n(lang, listPage.page.title)}</span>
          </div>

          <header className="mb-12">
            <span className="font-label text-xs font-bold tracking-[0.15em] text-secondary uppercase">
              {l10n(lang, listPage.page.label)}
            </span>
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold text-on-surface tracking-tight leading-tight mt-3">
              {l10n(lang, listPage.page.title)}
            </h1>
            <p className="mt-4 text-on-surface-variant leading-relaxed max-w-3xl whitespace-pre-line">
              {l10n(lang, listPage.page.subtitle)}
            </p>
            <p className="mt-3 text-on-surface-variant leading-relaxed max-w-3xl whitespace-pre-line">
              {l10n(lang, listPage.page.description)}
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {maps.map((m) => (
              <article
                key={m.slug}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-outline-variant/10 hover:shadow-lg transition-shadow"
              >
                <a href={`/maps/${m.slug}`} className="block" aria-label={l10n(lang, m.title)}>
                  <div className="relative bg-surface-container-low">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={m.image} alt={l10n(lang, m.title)} className="w-full h-[280px] object-contain" loading="lazy" />
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                  </div>
                </a>
                <div className="p-6">
                  <h2 className="font-headline font-bold text-lg mb-2">{l10n(lang, m.title)}</h2>
                  <p className="text-sm text-on-surface-variant leading-relaxed whitespace-pre-line">{l10n(lang, m.description)}</p>
                  <div className="mt-4 text-xs text-on-surface-variant">
                    <span className="font-bold">{t("researchMaps.sourceLabel")}</span> {l10n(lang, m.sourceShort)}
                  </div>
                  <div className="mt-6">
                    <a
                      href={`/maps/${m.slug}`}
                      className="inline-flex items-center justify-center gap-2 w-full bg-primary text-on-primary px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-widest shadow-lg shadow-primary/20 transition-transform active:scale-[0.99]"
                    >
                      <span className="material-symbols-outlined text-[18px]">map</span>
                      {l10n(lang, m.cta)}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div id="sources" className="mt-16 bg-white rounded-2xl border border-outline-variant/10 p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary">source</span>
              <h3 className="font-headline font-extrabold text-2xl">{l10n(lang, listPage.sourceBlock.title)}</h3>
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed max-w-3xl whitespace-pre-line">
              {l10n(lang, listPage.sourceBlock.text)}
            </p>

            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-surface-container-low p-6 border border-outline-variant/10">
                <div className="text-xs font-bold uppercase tracking-widest text-outline opacity-70">
                  {l10n(lang, listPage.sourceBlock.mainSourceTitle)}
                </div>
                <div className="font-headline font-extrabold text-lg mt-2">{l10n(lang, listPage.sourceBlock.publication)}</div>
                <p className="text-sm text-on-surface-variant mt-2 whitespace-pre-line">{l10n(lang, listPage.sourceBlock.description)}</p>
                <p className="text-xs text-on-surface-variant mt-3 whitespace-pre-line">{l10n(lang, listPage.sourceBlock.note)}</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="/pdf/scientific%20article%20about%20animals%20(segments).pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-on-primary px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest shadow-lg shadow-primary/20"
                  >
                    <span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
                    {l10n(lang, listPage.sourceBlock.pdfLabel)}
                  </a>
                  <a
                    href="https://doi.org/10.1371/journal.pone.0294632"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-white/70 border border-outline-variant/20 text-on-surface px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest"
                  >
                    <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                    {l10n(lang, listPage.sourceBlock.doiLabel)}
                  </a>
                </div>
              </div>
              <div className="rounded-2xl bg-surface-container-low p-6 border border-outline-variant/10">
                <div className="text-xs font-bold uppercase tracking-widest text-outline opacity-70">
                  {l10n(lang, listPage.sourceBlock.manuscriptTitle)}
                </div>
                <div className="font-headline font-extrabold text-lg mt-2">{l10n(lang, listPage.sourceBlock.manuscriptPublication)}</div>
                <p className="text-sm text-on-surface-variant mt-2 whitespace-pre-line">{l10n(lang, listPage.sourceBlock.manuscriptDescription)}</p>
                <p className="text-xs text-on-surface-variant mt-3 whitespace-pre-line">{l10n(lang, listPage.sourceBlock.manuscriptNote)}</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a href="https://hearings.ndbecology.gov.kz/Disscusion/DisPublic/PublicHearingDetail?hearingId=17850" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-outline-variant/20 bg-white/70 px-4 py-2 text-xs font-bold text-on-surface">
                    <span className="material-symbols-outlined text-[18px]">open_in_new</span>{labels.survey}
                  </a>
                  <a href="https://doi.org/10.5281/zenodo.20699777" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-outline-variant/20 bg-white/70 px-4 py-2 text-xs font-bold text-on-surface">
                    <span className="material-symbols-outlined text-[18px]">open_in_new</span>Zenodo
                  </a>
                  <a href="https://nnc.kz/assets/mono2_kz.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-outline-variant/20 bg-white/70 px-4 py-2 text-xs font-bold text-on-surface">
                    <span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>{labels.nnc}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-tertiary-fixed text-on-tertiary-fixed border border-tertiary/10 p-6 flex gap-4 items-start">
              <span className="material-symbols-outlined text-tertiary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
              <div className="space-y-2">
                <h4 className="font-headline font-extrabold text-xl">{l10n(lang, listPage.warningBlock.title)}</h4>
                <p className="font-body text-sm leading-relaxed opacity-90 whitespace-pre-line">{l10n(lang, listPage.warningBlock.text)}</p>
              </div>
            </div>

            <div className="mt-8 border-t border-outline-variant/10 pt-8">
              <h4 className="font-headline text-2xl font-extrabold text-on-surface">{labels.title}</h4>
              <div className="mt-5 grid grid-cols-1 gap-4">
                {additionalSources.map((entry) =>
                  entry ? (
                    <article
                      key={entry.id}
                      className="rounded-2xl border border-outline-variant/10 bg-surface-container-low p-5"
                    >
                      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                        <div className="min-w-0">
                          <p className="text-xs font-bold uppercase tracking-widest text-outline opacity-70">
                            {entry.year} · {entry.id === "moldazhanov-2026-radiation-safety-tourists" ? labels.journal : "Вестник НЯЦ РК"}
                          </p>
                          <h5 className="mt-2 font-headline text-lg font-bold leading-snug text-on-surface">
                            {entry.title[lang]}
                          </h5>
                          <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                            {entry.summary[lang]}
                          </p>
                        </div>
                        <div className="flex shrink-0 flex-wrap gap-2">
                          {entry.url ? (
                            <a
                              href={entry.url}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 rounded-full border border-outline-variant/20 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-widest text-on-surface"
                            >
                              <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                              {labels.article}
                            </a>
                          ) : null}
                          {entry.pdfUrl ? (
                            <a
                              href={entry.pdfUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-bold uppercase tracking-widest text-on-primary shadow-lg shadow-primary/20"
                            >
                              <span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
                              {labels.pdf}
                            </a>
                          ) : null}
                        </div>
                      </div>
                    </article>
                  ) : null,
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

