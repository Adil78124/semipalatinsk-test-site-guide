"use client";

import React, { useContext } from "react";
import { usePathname, useRouter } from "next/navigation";
import { I18nContext } from "@/components/providers/AppProviders";

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCErm8YJL8fpNJ5M4dCtOZdkeOiJoCJRJSg47iNVgpp18TTq4c-Sfv7FAsNWbTAfvl2a9liYX7Z0aGFxaWDSUwfqjfscc1fgLp1tzPssbDf3EOgdrlXXtfgah-zyl9yZPL_Pu3xuRKCwLaQ8IlGeni7cPcI0BCw37FDG7I6axEiVrBmEKoiXqU_WrbGrYe3rY9xq-4GCeMmvj1c3PgsLAxW7e__fa23GIeG6U4aQByRvyvNrBnf65ZduP0qd7wp11USBomoOby-49k";

export function HeroSection() {
  const pathname = usePathname();
  const router = useRouter();
  const i18n = useContext(I18nContext);
  if (!i18n) return null;
  const { t } = i18n;

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="w-full h-full object-cover opacity-90 scale-105 blur-[2px]"
          alt={t("hero.imageAlt")}
          src={HERO_IMG}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/40 to-transparent" />
      </div>
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-4xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label text-xs font-bold uppercase tracking-widest mb-5 sm:mb-6">
            {t("hero.badge")}
          </span>
          <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-on-surface tracking-tighter leading-[1.12] mb-6 sm:mb-8">
            {t("hero.titleLine1")}
            {t("hero.titleAccent").trim() ? (
              <>
                <br />
                <span className="text-primary">{t("hero.titleAccent")}</span>
              </>
            ) : null}
          </h1>
          <p className="font-body text-base sm:text-lg md:text-xl text-on-surface-variant max-w-2xl mb-8 sm:mb-12 leading-relaxed">
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-md sm:max-w-none">
            <button
              type="button"
              className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 sm:px-8 py-4 rounded-xl font-headline font-bold text-base sm:text-lg shadow-xl shadow-primary/25 hover:scale-[1.01] transition-transform active:scale-95 w-full sm:w-auto"
              aria-label={t("hero.openMap")}
              onClick={() => {
                if (pathname !== "/") {
                  router.push("/map");
                  return;
                }
                document.getElementById("map")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t("hero.openMap")}
            </button>
            <button
              type="button"
              className="bg-surface/80 backdrop-blur-md border border-outline-variant/20 text-primary px-6 sm:px-8 py-4 rounded-xl font-headline font-bold text-base sm:text-lg hover:bg-surface-bright transition-all w-full sm:w-auto"
              aria-label={t("hero.viewRoutes")}
              onClick={() => {
                router.push("/methodology");
              }}
            >
              {t("hero.viewRoutes")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
