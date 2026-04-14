"use client";

import React, { useCallback, useContext } from "react";
import { usePathname } from "next/navigation";
import { I18nContext } from "@/components/providers/AppProviders";
import type { TranslationKey } from "@/components/i18n/translations";

const fallbackT = (key: TranslationKey) => String(key);

export function AboutBentoSection() {
  const pathname = usePathname();
  const i18n = useContext(I18nContext);
  const scrollTo = useCallback((id: string) => {
    if (pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, [pathname]);

  const t = i18n?.t ?? fallbackT;

  return (
    <section id="about" className="py-24 bg-surface">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-2 bg-surface-container-low p-10 rounded-xl flex flex-col justify-between group transition-all hover:bg-surface-container-high">
            <div>
              <span className="material-symbols-outlined text-primary text-4xl mb-6">
                magnification_small
              </span>
              <h3 className="font-headline text-2xl font-bold mb-4">
                {t("about.card.ecology.title")}
              </h3>
              <p className="text-on-surface-variant leading-relaxed whitespace-pre-line">
                {t("about.card.ecology.body")}
              </p>
            </div>
            <button
              type="button"
              onClick={() => scrollTo("research-maps")}
              className="mt-8 flex items-center text-primary font-bold gap-2 cursor-pointer"
            >
              {t("about.card.ecology.cta")}{" "}
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          <div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-md transition-all">
            <span className="material-symbols-outlined text-tertiary text-4xl mb-6">
              history_edu
            </span>
            <h3 className="font-headline text-xl font-bold mb-4">
              {t("about.card.history.title")}
            </h3>
            <p className="text-sm text-on-surface-variant whitespace-pre-line">
              {t("about.card.history.body")}
            </p>
          </div>
          <div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-md transition-all">
            <span className="material-symbols-outlined text-secondary text-4xl mb-6">
              security
            </span>
            <h3 className="font-headline text-xl font-bold mb-4">
              {t("about.card.safety.title")}
            </h3>
            <p className="text-sm text-on-surface-variant whitespace-pre-line">
              {t("about.card.safety.body")}
            </p>
          </div>
          <div className="md:col-span-4 bg-primary text-on-primary p-12 rounded-xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="z-10 max-w-2xl">
              <h3 className="font-headline text-3xl font-bold mb-4">
                {t("about.project.title")}
              </h3>
              <p className="opacity-90 whitespace-pre-line">
                {t("about.project.body")}
              </p>
            </div>
            <button
              type="button"
              className="z-10 bg-white text-primary px-8 py-3 rounded-full font-bold whitespace-nowrap"
              onClick={() => scrollTo("map")}
            >
              {t("about.project.cta")}
            </button>
            <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
