"use client";

import React, { useContext } from "react";
import { I18nContext } from "@/components/providers/AppProviders";

export function SafetySection() {
  const i18n = useContext(I18nContext);
  if (!i18n) return null;
  const { t } = i18n;

  return (
    <section id="safety" className="py-24 bg-surface">
      <div className="container mx-auto px-6 md:px-8 max-w-5xl">
        <div className="bg-surface-container-highest rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <span
                className="material-symbols-outlined text-error text-4xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                health_and_safety
              </span>
              <h2 className="font-headline text-3xl font-extrabold">
                {t("safety.title")}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">
                    1
                  </div>
                  <p className="text-on-surface-variant">
                    {t("safety.rule1")}
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">
                    2
                  </div>
                  <p className="text-on-surface-variant">
                    {t("safety.rule2")}
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">
                    3
                  </div>
                  <p className="text-on-surface-variant">
                    {t("safety.rule3")}
                  </p>
                </div>
              </div>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">
                    4
                  </div>
                  <p className="text-on-surface-variant">
                    {t("safety.rule4")}
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">
                    5
                  </div>
                  <p className="text-on-surface-variant">
                    {t("safety.rule5")}
                  </p>
                </div>
                <div className="bg-surface-container-low/50 p-6 rounded-xl border border-outline-variant/20">
                  <p className="text-xs text-on-surface-variant font-medium whitespace-pre-line">
                    {t("safety.note")}
                  </p>
                </div>
              </div>
            </div>

            {/* Zoning model removed: see Visit regime section for references. */}
          </div>
        </div>
      </div>
    </section>
  );
}
