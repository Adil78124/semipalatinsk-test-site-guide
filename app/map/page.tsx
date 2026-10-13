"use client";

import Link from "next/link";
import { Suspense, useContext, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { SipLeafletMap } from "@/components/map/SipLeafletMap";
import { I18nContext } from "@/components/providers/AppProviders";
import type { TranslationKey } from "@/components/i18n/translations";
import { GoogleRoutesSection } from "@/components/sections/GoogleRoutesSection";
import { NncTechnicalToursSection } from "@/components/sections/NncTechnicalToursSection";
import { routes } from "@/data/routes/googleRoutes";

const fallbackT = (key: TranslationKey) => String(key);

function FullMapPageInner() {
  const i18n = useContext(I18nContext);
  const t = i18n?.t ?? fallbackT;
  const searchParams = useSearchParams();
  const [mode, setMode] = useState<"poi" | "routes">("poi");

  useEffect(() => {
    const m = searchParams.get("mode");
    if (m === "routes") setMode("routes");
    else if (m === "poi") setMode("poi");
  }, [searchParams]);

  const title = useMemo(() => {
    return mode === "routes" ? `${t("map.titleLine1")} — ${t("map.fullPage.modeRoutes")}` : t("map.titleLine1");
  }, [mode, t]);

  return (
    <div
      className={[
        "flex flex-col bg-surface text-on-surface",
        mode === "poi" ? "h-[100dvh] min-h-0 overflow-hidden" : "min-h-[100dvh] overflow-auto",
      ].join(" ")}
    >
      <header className="z-[1000] flex shrink-0 items-center gap-3 border-b border-outline-variant/15 bg-surface/95 px-3 py-2.5 backdrop-blur sm:px-4 sm:py-3">
        <Link
          href="/"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm font-bold text-primary hover:bg-surface-container-low"
          aria-label={t("maps.backHome")}
        >
          <span className="material-symbols-outlined text-[20px]" aria-hidden>
            arrow_back
          </span>
          {t("maps.backHome")}
        </Link>
        <h1 className="min-w-0 flex-1 truncate font-headline text-sm font-extrabold tracking-tight sm:text-base">
          {title}
        </h1>

        <div
          className="shrink-0 flex items-center rounded-xl border border-outline-variant/15 bg-white/70 p-1"
          role="group"
          aria-label={t("map.titleLine1")}
        >
          <button
            type="button"
            onClick={() => setMode("poi")}
            className={[
              "rounded-lg px-2.5 py-1.5 text-[11px] font-extrabold transition-colors",
              mode === "poi" ? "bg-primary text-on-primary" : "text-on-surface-variant hover:text-on-surface",
            ].join(" ")}
            aria-pressed={mode === "poi"}
            aria-label={t("map.fullPage.modePoi")}
          >
            {t("map.fullPage.modePoi")}
          </button>
          <button
            type="button"
            onClick={() => setMode("routes")}
            className={[
              "rounded-lg px-2.5 py-1.5 text-[11px] font-extrabold transition-colors",
              mode === "routes" ? "bg-primary text-on-primary" : "text-on-surface-variant hover:text-on-surface",
            ].join(" ")}
            aria-pressed={mode === "routes"}
            aria-label={t("map.fullPage.modeRoutes")}
          >
            {t("map.fullPage.modeRoutes")}
          </button>
        </div>
      </header>

      {mode === "poi" ? (
        <div className="relative flex min-h-0 w-full flex-1 grow basis-0">
          <SipLeafletMap variant="fullscreen" className="!h-full !min-h-0 !w-full" />
        </div>
      ) : (
        <main className="w-full flex-1">
          <div className="relative h-[56vh] min-h-[420px] w-full">
            <SipLeafletMap variant="fullscreen" className="!h-full !w-full" />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 z-[700] border-t border-outline-variant/10 bg-surface/90 px-3 py-2 text-center text-[10px] leading-snug text-on-surface-variant backdrop-blur-sm"
              role="note"
            >
              {t("map.fullPage.routesGoogleBanner")}
            </div>
          </div>
          <GoogleRoutesSection routes={routes} className="border-t border-outline-variant/10" />
          <NncTechnicalToursSection />
        </main>
      )}

      <footer className="z-[1000] shrink-0 border-t border-outline-variant/10 bg-surface/95 px-3 py-2 text-center text-[10px] leading-snug text-on-surface-variant backdrop-blur translate-y-[30px] sm:translate-y-0 sm:text-[11px]">
        <p className="mb-1.5 max-w-4xl mx-auto text-[10px] text-on-surface sm:text-[11px]">{t("map.shortDisclaimer")}</p>
        <p className="max-w-4xl mx-auto text-on-surface-variant">{t("map.attributionShort")}</p>
      </footer>
    </div>
  );
}

export default function FullMapPage() {
  const i18n = useContext(I18nContext);
  const t = i18n?.t ?? fallbackT;
  return (
    <Suspense
      fallback={
        <div className="flex h-[100dvh] items-center justify-center bg-surface text-sm text-on-surface-variant">
          {t("map.titleLine1")}…
        </div>
      }
    >
      <FullMapPageInner />
    </Suspense>
  );
}
