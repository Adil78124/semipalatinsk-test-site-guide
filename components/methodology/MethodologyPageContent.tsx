"use client";

import Link from "next/link";
import React, { useContext } from "react";
import { I18nContext } from "@/components/providers/AppProviders";
import type { Lang, TranslationKey } from "@/components/i18n/translations";
import { PUBLICATIONS_CATALOG, type PublicationEntry } from "@/data/publicationsCatalog";

const fallbackT = (key: TranslationKey) => String(key);

const HERO_SATELLITE_SRC =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDG43er1Zh5ymkrOjHZY8ZoxZLSnz0NMRBVMVEHhhwhe_t1h5uhtas5ij7uVIiIO29SY2bZZBgsZUYIqXTmwac8eLpEd6bdfO_c_qMtY5M4TEGeggdkXhcMYQuSmcU0Queejf5gi9uDJmqy4qiGX6ykZyQ0AYATtsF7_jGLyymXCnIYHRZ12k6PrVuCI0Nk2_DpmC51h9Gl851NXjgH_JncsGUFxJ6_a7Q8z2PeXSiMUX9EvjOleVg0yX3oxcAkVnLEQlfZ2z-shjc";

const GLOSSARY_IDS = [
  "radionuclide",
  "cs137",
  "sr90",
  "pu239240",
  "am241",
  "bqkg",
  "usvh",
  "fallout",
  "dosimetry",
  "adit",
  "groundZero",
] as const;

const SOURCE_TYPE_KEYS = [
  "methodology.v2.sourceType1",
  "methodology.v2.sourceType2",
  "methodology.v2.sourceType3",
  "methodology.v2.sourceType4",
  "methodology.v2.sourceType5",
] as const;

const USED_KEYS = [
  "methodology.v2.used1",
  "methodology.v2.used2",
  "methodology.v2.used3",
  "methodology.v2.used4",
  "methodology.v2.used5",
  "methodology.v2.used6",
] as const;

const LIMIT_KEYS = [
  "methodology.v2.limit1",
  "methodology.v2.limit2",
  "methodology.v2.limit3",
  "methodology.v2.limit4",
] as const;

const MAP_KEYS = [
  "methodology.v2.mapItem1",
  "methodology.v2.mapItem2",
  "methodology.v2.mapItem3",
  "methodology.v2.mapItem4",
] as const;

/** Primary sources: NPA → NNC → IAEA → peer-reviewed */
const PRIMARY_SOURCE_IDS = [
  "adilet",
  "nnc-sts",
  "nnc-main",
  "iaea",
  "panitskiy-2023-plos",
  "toporova-2021-dose-methods",
  "subbotin-2023-atomic-lake-dose",
  "mukusheva-2024-monitoring-concepts",
] as const;
const AUX_SOURCE_IDS = ["unep", "osm", "wikipedia"] as const;

function pubById(id: string): PublicationEntry | undefined {
  return PUBLICATIONS_CATALOG.find((p) => p.id === id);
}

function pubHref(entry: PublicationEntry): string {
  return entry.url ?? (entry.doi ? `https://doi.org/${entry.doi}` : "#");
}

function sourceActionLabels(lang: Lang) {
  if (lang === "en") return { article: "Article page", doi: "DOI", pdf: "PDF" };
  if (lang === "kk") return { article: "Мақала беті", doi: "DOI", pdf: "PDF" };
  return { article: "Страница статьи", doi: "DOI", pdf: "PDF" };
}

export function MethodologyPageContent() {
  const i18n = useContext(I18nContext);
  const t = i18n?.t ?? fallbackT;
  const lang: Lang = i18n?.lang ?? "ru";
  const sourceLabels = sourceActionLabels(lang);

  return (
    <>
      <section className="relative overflow-hidden px-8 pb-32 pt-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-surface/40 to-surface" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" className="h-full w-full object-cover opacity-30 grayscale" src={HERO_SATELLITE_SRC} />
        </div>
        <div className="relative z-20 mx-auto max-w-screen-xl text-center">
          <span className="mb-8 inline-block rounded-full bg-secondary-container px-4 py-1.5 font-label text-xs font-bold uppercase tracking-wider text-on-secondary-container">
            {t("methodology.design.heroBadge")}
          </span>
          <h1 className="mb-8 font-headline text-5xl font-extrabold tracking-tight text-on-surface md:text-7xl">
            {t("methodology.page.title")}
          </h1>
          <p className="mx-auto max-w-2xl text-xl font-light leading-relaxed text-on-surface-variant">
            {t("methodology.page.lead")}
          </p>
        </div>
      </section>

      <div className="relative z-30 -mt-12 space-y-20 px-8 pb-24">
        <section className="mx-auto max-w-4xl">
          <h2 className="mb-6 font-headline text-2xl font-bold text-on-surface md:text-3xl">
            {t("methodology.v2.sourceTypesTitle")}
          </h2>
          <ol className="list-decimal space-y-3 pl-6 text-lg leading-relaxed text-on-surface-variant marker:font-bold marker:text-primary">
            {SOURCE_TYPE_KEYS.map((k) => (
              <li key={k}>{t(k)}</li>
            ))}
          </ol>
        </section>

        <section className="mx-auto max-w-4xl">
          <h2 className="mb-6 font-headline text-2xl font-bold text-on-surface md:text-3xl">
            {t("methodology.v2.usedTitle")}
          </h2>
          <ul className="list-disc space-y-2 pl-6 text-lg leading-relaxed text-on-surface-variant marker:text-secondary">
            {USED_KEYS.map((k) => (
              <li key={k}>{t(k)}</li>
            ))}
          </ul>
        </section>

        <section id="methodology-limits" className="mx-auto max-w-4xl scroll-mt-24">
          <div className="rounded-r-xl border-l-4 border-primary bg-surface-container-low p-8 shadow-sm">
            <h2 className="mb-6 font-headline text-2xl font-bold text-on-surface md:text-3xl">
              {t("methodology.v2.limitsTitle")}
            </h2>
            <ul className="list-disc space-y-3 pl-6 text-lg leading-relaxed text-on-surface-variant marker:text-primary">
              {LIMIT_KEYS.map((k) => (
                <li key={k}>{t(k)}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-4xl">
          <h2 className="mb-4 font-headline text-2xl font-bold text-on-surface md:text-3xl">
            {t("methodology.v2.mapTitle")}
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-on-surface-variant">{t("methodology.v2.mapIntro")}</p>
          <ul className="list-disc space-y-2 pl-6 text-lg leading-relaxed text-on-surface-variant marker:text-tertiary">
            {MAP_KEYS.map((k) => (
              <li key={k}>{t(k)}</li>
            ))}
          </ul>
          <p className="mt-6 rounded-xl border border-outline-variant/15 bg-surface-container-lowest/80 p-5 text-lg leading-relaxed text-on-surface-variant">
            {t("methodology.v2.mapKmlNote")}
          </p>
        </section>

        <section className="mx-auto max-w-4xl">
          <h2 className="mb-4 font-headline text-xl font-bold text-on-surface md:text-2xl">
            {t("methodology.v2.editorialTitle")}
          </h2>
          <blockquote className="border-l-4 border-secondary/40 pl-6 text-lg italic leading-relaxed text-on-surface-variant">
            {t("methodology.v2.editorialQuote")}
          </blockquote>
        </section>

        <section className="mx-auto max-w-4xl">
          <h2 className="mb-2 font-headline text-2xl font-bold text-on-surface md:text-3xl">
            {t("methodology.v2.primarySectionTitle")}
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-on-surface-variant">{t("methodology.v2.primarySectionLead")}</p>
          <ol className="list-decimal space-y-6 pl-6 text-lg leading-relaxed text-on-surface-variant marker:font-bold marker:text-primary">
            {PRIMARY_SOURCE_IDS.map((id) => {
              const entry = pubById(id);
              if (!entry?.url) return null;
              const href = pubHref(entry);
              return (
                <li key={id} className="pl-1">
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-headline font-bold text-primary underline decoration-primary/25 underline-offset-2 hover:decoration-primary"
                  >
                    {entry.title[lang]}
                  </a>
                  <p className="mt-2 text-on-surface-variant">{entry.summary[lang]}</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {entry.url ? (
                      <a
                        href={entry.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-outline-variant/20 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-widest text-on-surface transition-colors hover:bg-surface-container"
                      >
                        <span className="material-symbols-outlined text-[18px]" aria-hidden>
                          open_in_new
                        </span>
                        {sourceLabels.article}
                      </a>
                    ) : null}
                    {entry.doi ? (
                      <a
                        href={`https://doi.org/${entry.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-outline-variant/20 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-widest text-on-surface transition-colors hover:bg-surface-container"
                      >
                        <span className="material-symbols-outlined text-[18px]" aria-hidden>
                          tag
                        </span>
                        {sourceLabels.doi}
                      </a>
                    ) : null}
                    {entry.pdfUrl ? (
                      <a
                        href={entry.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-bold uppercase tracking-widest text-on-primary shadow-lg shadow-primary/20"
                      >
                        <span className="material-symbols-outlined text-[18px]" aria-hidden>
                          picture_as_pdf
                        </span>
                        {sourceLabels.pdf}
                      </a>
                    ) : null}
                  </div>
                </li>
              );
            })}
          </ol>
          <p className="mt-10 text-xs font-bold uppercase tracking-wider text-on-surface-variant">{t("methodology.v2.auxLabel")}</p>
          <ul className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
            {AUX_SOURCE_IDS.map((id) => {
              const entry = pubById(id);
              if (!entry?.url) return null;
              return (
                <li key={id}>
                  <a
                    href={entry.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-primary underline decoration-primary/25 underline-offset-2 hover:decoration-primary"
                  >
                    {entry.title[lang]}
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      </div>

      <section className="mx-auto max-w-screen-xl px-8 pb-24">
        <div className="mb-16 max-w-3xl">
          <span className="font-label text-xs font-bold uppercase tracking-[0.2em] text-tertiary">
            {t("methodology.design.lexiconKicker")}
          </span>
          <h2 className="mt-2 font-headline text-4xl font-bold">{t("methodology.design.glossaryHeading")}</h2>
          <p className="mt-4 text-lg leading-relaxed text-on-surface-variant">{t("methodology.glossary.lead")}</p>
        </div>
        <dl className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {GLOSSARY_IDS.map((gid) => (
            <div key={gid} className="group">
              <dt className="mb-2 font-headline text-xl font-bold text-primary">{t(`glossary.${gid}.title` as TranslationKey)}</dt>
              <dd className="text-lg leading-relaxed text-on-surface-variant opacity-80 transition-opacity group-hover:opacity-100">
                {t(`glossary.${gid}.desc` as TranslationKey)}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="px-8 pb-24">
        <div className="relative mx-auto max-w-screen-xl overflow-hidden rounded-xl bg-primary-container p-12 text-on-primary-container md:p-20">
          <div className="absolute right-0 top-0 p-12 opacity-10">
            <span className="material-symbols-outlined text-[200px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              language
            </span>
          </div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="mb-6 font-headline text-4xl font-extrabold">{t("methodology.design.ctaTitle")}</h2>
            <p className="mb-10 text-lg leading-relaxed opacity-90">{t("methodology.design.ctaLead")}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/map"
                className="rounded-xl bg-surface-container-lowest px-8 py-4 font-headline font-bold text-primary shadow-lg transition-all hover:shadow-xl"
              >
                {t("methodology.design.ctaOpenMap")}
              </Link>
              <Link
                href="/maps"
                className="rounded-xl border-2 border-on-primary-container/30 px-8 py-4 font-headline font-bold transition-all hover:bg-on-primary-container/10"
              >
                {t("methodology.design.ctaResearchMaps")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
