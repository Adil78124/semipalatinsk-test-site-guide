"use client";

import React, { useContext, useMemo } from "react";
import { useParams } from "next/navigation";
import { I18nContext } from "@/components/providers/AppProviders";
import type { TranslationKey } from "@/components/i18n/translations";
import { getMapBySlug, getNextMap, getPrevMap, l10n } from "@/data/mapsContent";

const fallbackT = (key: TranslationKey) => String(key);

/** Локальный PDF в `public/pdf/` — корректная ссылка с кодированием имени файла */
const SCIENTIFIC_ARTICLE_PDF_HREF = `/pdf/${encodeURIComponent("scientific article about animals (segments).pdf")}`;

export default function MapDetailPage() {
  const i18n = useContext(I18nContext);
  const t = i18n?.t ?? fallbackT;
  const lang = i18n?.lang ?? "ru";
  const params = useParams<{ slug: string }>();
  const slug = params?.slug ?? "";

  const map = getMapBySlug(slug);
  const prev = map ? getPrevMap(map) : null;
  const next = map ? getNextMap(map) : null;

  const pageTitle = map ? l10n(lang, map.title) : t("maps.notFound");
  const lead = map ? l10n(lang, map.page.subtitle) : "";

  const infoBlocks = useMemo(
    () => [
      { title: t("maps.info.what"), body: map ? l10n(lang, map.page.sections.whatShows) : "" },
      { title: t("maps.info.why"), body: map ? l10n(lang, map.page.sections.whyImportant) : "" },
      { title: t("maps.info.how"), body: map ? l10n(lang, map.page.sections.howInterpret) : "" },
    ],
    [t, map, lang],
  );

  if (!map) {
    return (
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <a className="hover:text-primary flex items-center gap-1 transition-colors text-sm text-on-surface-variant" href="/maps">
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              {t("maps.backToLibrary")}
            </a>
            <h1 className="font-headline text-3xl font-extrabold mt-6">{t("maps.notFound")}</h1>
          </div>
        </div>
      </section>
    );
  }

  return (
    <main className="pb-20 px-6 max-w-screen-2xl mx-auto">
      <div className="mb-10 flex items-center gap-2 text-sm font-medium text-on-surface-variant font-body">
        <a className="hover:text-primary flex items-center gap-1 transition-colors" href="/maps">
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          {(map.page.breadcrumbs?.[lang]?.[0]?.label ?? t("maps.backToLibrary"))}
        </a>
        <span className="text-outline-variant">/</span>
        <span className="text-primary">{pageTitle}</span>
      </div>

      <header className="mb-12">
        <div className="flex flex-col gap-2">
          <span className="font-label text-xs font-bold tracking-[0.15em] text-secondary uppercase">{l10n(lang, map.page.category)}</span>
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold text-on-surface tracking-tight leading-tight">
            {pageTitle}
          </h1>
          <p className="mt-4 text-on-surface-variant leading-relaxed max-w-3xl whitespace-pre-line">{lead}</p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 bg-surface-container-high rounded-full text-xs font-semibold text-on-surface-variant flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">description</span>
              {map.code}
            </span>
            <span className="px-3 py-1 bg-primary-fixed text-on-primary-fixed rounded-full text-xs font-semibold flex items-center gap-1">
              <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>
                verified
              </span>
              {l10n(lang, map.page.meta.verifiedLabel)}
            </span>
          </div>
        </div>
      </header>

      <section className="mb-16 relative">
        <div className="w-full h-[520px] md:h-[680px] rounded-2xl overflow-hidden shadow-2xl bg-surface-container-highest relative border border-outline-variant/10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt={pageTitle} className="w-full h-full object-contain bg-surface-container-low" src={map.image} />
          <div className="absolute top-6 right-6 flex flex-col gap-3">
            <a
              href={map.image}
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-xl bg-white/90 backdrop-blur-md shadow-lg flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary transition-all"
              aria-label={t("maps.openImage")}
            >
              <span className="material-symbols-outlined">fullscreen</span>
            </a>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <article className="lg:col-span-7 space-y-6">
          <h2 className="font-headline text-2xl font-bold border-l-4 border-primary pl-4">{t("maps.detail.descriptionTitle")}</h2>
          <div className="font-body text-on-surface-variant leading-relaxed space-y-4">
            {infoBlocks.map((b) => (
              <div key={b.title}>
                <div className="font-bold text-on-surface">{b.title}</div>
                <p className="mt-2 whitespace-pre-line">{b.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-2xl bg-tertiary-fixed text-on-tertiary-fixed border border-tertiary/10 flex gap-6 items-start">
            <span className="material-symbols-outlined text-tertiary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              warning
            </span>
            <div className="space-y-2">
              <h3 className="font-headline font-extrabold text-xl">{l10n(lang, map.page.warning.title)}</h3>
              <p className="font-body text-sm leading-relaxed opacity-90 whitespace-pre-line">{l10n(lang, map.page.warning.text)}</p>
            </div>
          </div>
        </article>

        <aside className="lg:col-start-9 lg:col-span-4 space-y-8">
          <div className="p-8 rounded-2xl bg-surface-container-low border border-outline-variant/10">
            <h3 className="font-headline font-bold text-lg mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">source</span>
              {t("maps.sourceTitle")}
            </h3>
            <div className="space-y-6">
              <div>
                <span className="font-label text-[10px] uppercase tracking-widest text-outline">Название публикации</span>
                <p className="font-body font-semibold text-sm mt-1">PLOS ONE — статья и фигуры (карты)</p>
              </div>
              <div>
                <span className="font-label text-[10px] uppercase tracking-widest text-outline">Описание</span>
                <p className="font-body text-sm mt-1 whitespace-pre-line">
                  Panitskiy A. et al. (2023). Bioaccumulation of radionuclides in hoofed animals inhabiting the Semipalatinsk Test Site.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="font-label text-[10px] uppercase tracking-widest text-outline">Год</span>
                  <p className="font-body text-sm mt-1">{map.page?.meta?.verified ? "2023" : "2023"}</p>
                </div>
                <div>
                  <span className="font-label text-[10px] uppercase tracking-widest text-outline">Тип</span>
                  <p className="font-body text-sm mt-1">Научная публикация</p>
                </div>
              </div>
              <div className="pt-4 border-t border-outline-variant/20">
                <p className="text-[11px] italic text-outline leading-tight">{map.page?.warning?.text ? "Материал используется в информационно-образовательных целях." : ""}</p>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={SCIENTIFIC_ARTICLE_PDF_HREF}
                  download="Panitskiy-2023-PLOS-scientific-article-segments.pdf"
                  className="inline-flex items-center gap-2 bg-primary text-on-primary px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest shadow-lg shadow-primary/20"
                >
                  <span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
                  {t("sources.openPdf")}
                </a>
                <a
                  href="https://doi.org/10.1371/journal.pone.0294632"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-white/70 border border-outline-variant/20 text-on-surface px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest"
                >
                  <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                  DOI
                </a>
              </div>
            </div>
          </div>

          <a
            href={SCIENTIFIC_ARTICLE_PDF_HREF}
            download="Panitskiy-2023-PLOS-scientific-article-segments.pdf"
            className="block p-6 rounded-2xl border border-primary/20 bg-primary/5 transition-colors hover:bg-primary/10 hover:border-primary/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary shrink-0">
                <span className="material-symbols-outlined" aria-hidden>
                  download
                </span>
              </div>
              <div className="min-w-0">
                <h4 className="font-headline font-bold text-sm">{t("maps.download.title")}</h4>
                <p className="text-xs text-on-surface-variant">{t("maps.download.subtitle")}</p>
                <p className="mt-2 text-[11px] font-semibold text-primary">{t("sources.openPdf")}</p>
              </div>
            </div>
          </a>
          <a
            href={map.image}
            download
            className="block rounded-2xl border border-outline-variant/20 bg-surface-container-lowest px-4 py-3 text-center text-xs font-bold uppercase tracking-widest text-primary transition-colors hover:bg-surface-container-low"
          >
            <span className="inline-flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[18px]" aria-hidden>
                image
              </span>
              {t("maps.downloadMapImage")}
            </span>
          </a>
        </aside>
      </div>

      <div className="mt-24 pt-12 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex gap-4">
          {prev ? (
            <a className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-surface-container transition-all" href={`/maps/${prev.slug}`}>
              <div className="w-10 h-10 rounded-full bg-surface-container-high group-hover:bg-primary group-hover:text-on-primary flex items-center justify-center transition-colors">
                <span className="material-symbols-outlined">chevron_left</span>
              </div>
              <div>
                <span className="block text-[10px] font-bold text-outline uppercase tracking-widest">{t("maps.prev")}</span>
                <span className="font-body font-semibold text-sm">{l10n(lang, prev.title)}</span>
              </div>
            </a>
          ) : null}
        </div>

        <a
          className="px-8 py-3 rounded-full border border-outline-variant hover:bg-primary hover:border-primary hover:text-on-primary font-bold text-sm transition-all"
          href="/maps"
        >
          {t("maps.backToLibrary")}
        </a>

        <div className="flex gap-4 text-right">
          {next ? (
            <a className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-surface-container transition-all" href={`/maps/${next.slug}`}>
              <div>
                <span className="block text-[10px] font-bold text-outline uppercase tracking-widest">{t("maps.next")}</span>
                <span className="font-body font-semibold text-sm">{l10n(lang, next.title)}</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-surface-container-high group-hover:bg-primary group-hover:text-on-primary flex items-center justify-center transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </div>
            </a>
          ) : null}
        </div>
      </div>
    </main>
  );
}

