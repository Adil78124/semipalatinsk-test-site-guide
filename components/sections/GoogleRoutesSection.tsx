"use client";

import React, { useContext } from "react";
import { I18nContext } from "@/components/providers/AppProviders";
import type { Lang, TranslationKey } from "@/components/i18n/translations";
import type { GoogleRouteCard, LocalizedRouteText } from "@/data/routes/googleRoutes";

const fallbackT = (key: TranslationKey) => String(key);

function localize(lang: Lang, value: LocalizedRouteText): string {
  return value[lang] ?? value.ru;
}

function MetaChip({ icon, label }: { icon: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-outline-variant/14 bg-surface-container-low/70 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-on-surface-variant">
      <span className="material-symbols-outlined text-[14px] text-on-surface-variant" aria-hidden>
        {icon}
      </span>
      {label}
    </span>
  );
}

function GoogleRouteCardView({
  route,
  lang,
  t,
}: {
  route: GoogleRouteCard;
  lang: Lang;
  t: (key: TranslationKey) => string;
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-outline-variant/18 bg-surface shadow-sm transition-shadow hover:shadow-md">
      <figure>
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface-container-low">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={route.image}
            alt={localize(lang, route.imageAlt)}
            loading="lazy"
            className="h-full w-full object-cover saturate-[0.82] contrast-[1.02] brightness-[0.94] transition-transform duration-700 group-hover:scale-[1.015]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
          <div className="pointer-events-none absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/35 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white/95 backdrop-blur">
            <span className="material-symbols-outlined text-[14px] text-white/90" aria-hidden>
              route
            </span>
            {t("routes.simple.cardLabel")}
          </div>
        </div>
        <figcaption className="border-b border-outline-variant/14 bg-surface-container-low/70 px-4 py-2 text-[10px] leading-relaxed text-on-surface-variant sm:px-5">
          <span className="font-extrabold text-on-surface">{t("routes.simple.photoSourceLabel")}:</span>{" "}
          {localize(lang, route.photoSource)}
        </figcaption>
      </figure>

      <div className="flex flex-1 flex-col gap-4 p-4 sm:p-5">
        <div className="min-w-0">
          <h3 className="font-headline text-lg font-extrabold leading-snug text-on-surface">
            {localize(lang, route.title)}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
            {localize(lang, route.description)}
          </p>
        </div>

        {route.type || route.purpose ? (
          <div className="flex flex-wrap gap-2">
            {route.type ? <MetaChip icon="near_me" label={localize(lang, route.type)} /> : null}
            {route.purpose ? <MetaChip icon="visibility" label={localize(lang, route.purpose)} /> : null}
          </div>
        ) : null}

        <div className="grid grid-cols-1 gap-2 text-xs leading-snug text-on-surface-variant sm:grid-cols-2">
          <div className="rounded-xl border border-outline-variant/14 bg-surface-container-low/70 px-3 py-2.5">
            <div className="text-[10px] font-extrabold uppercase tracking-wide text-on-surface-variant/90">
              {t("routes.simple.startLabel")}
            </div>
            <div className="mt-1 font-bold text-on-surface">{localize(lang, route.start)}</div>
          </div>
          <div className="rounded-xl border border-outline-variant/14 bg-surface-container-low/70 px-3 py-2.5">
            <div className="text-[10px] font-extrabold uppercase tracking-wide text-on-surface-variant/90">
              {t("routes.simple.destinationLabel")}
            </div>
            <div className="mt-1 font-semibold text-on-surface">{localize(lang, route.end)}</div>
          </div>
        </div>

        {route.warning ? (
          <div className="rounded-xl border border-tertiary/20 bg-tertiary-container/15 px-3 py-2.5 text-xs leading-relaxed text-on-surface-variant">
            <div className="mb-1 inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-on-surface">
              <span className="material-symbols-outlined text-[15px]" aria-hidden>
                info
              </span>
              {t("routes.simple.importantLabel")}
            </div>
            <div>{localize(lang, route.warning)}</div>
          </div>
        ) : null}

        <div className="mt-auto space-y-2">
          <div className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-on-surface-variant">
            {t("routes.simple.locationsLabel")}
          </div>
          {route.locations.map((location) => (
            <div key={location.id}>
              <a
                href={location.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-between gap-3 rounded-xl border border-outline-variant/20 bg-surface px-4 py-2.5 text-sm font-extrabold text-on-surface shadow-sm transition-colors hover:bg-surface-container-low"
                aria-label={`${localize(lang, location.label)}: ${t("routes.simple.openMaps")}`}
              >
                <span>{localize(lang, location.label)}</span>
                <span className="material-symbols-outlined shrink-0 text-[17px] text-on-surface-variant" aria-hidden>
                  open_in_new
                </span>
              </a>
              {location.note ? (
                <p className="mt-1.5 px-1 text-[11px] leading-relaxed text-on-surface-variant">
                  {localize(lang, location.note)}
                </p>
              ) : null}
            </div>
          ))}
        </div>

        <div className="border-t border-outline-variant/14 pt-3 text-[11px] leading-relaxed text-on-surface-variant">
          <span className="font-extrabold text-on-surface">{t("routes.simple.sourceLabel")}:</span>{" "}
          {route.sourceUrl ? (
            <a href={route.sourceUrl} target="_blank" rel="noreferrer" className="underline decoration-outline-variant underline-offset-2">
              {localize(lang, route.source)}
            </a>
          ) : (
            localize(lang, route.source)
          )}
        </div>
      </div>
    </article>
  );
}

export function GoogleRoutesSection({
  routes,
  className,
}: {
  routes: GoogleRouteCard[];
  className?: string;
}) {
  const i18n = useContext(I18nContext);
  const t = i18n?.t ?? fallbackT;
  const lang = i18n?.lang ?? "ru";

  return (
    <section className={["bg-surface", className ?? ""].join(" ")}>
      <div className="container mx-auto px-6 py-16 md:px-8 sm:py-20">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div className="min-w-0">
            <span className="mb-3 block font-label text-xs font-bold uppercase tracking-[0.2em] text-tertiary">
              {t("routes.simple.kicker")}
            </span>
            <h2 className="font-headline text-3xl font-extrabold leading-tight text-on-surface sm:text-4xl">
              {t("routes.simple.title")}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-on-surface-variant sm:text-base">
              {t("routes.simple.lead")}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {routes.map((route) => (
            <GoogleRouteCardView key={route.id} route={route} lang={lang} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
