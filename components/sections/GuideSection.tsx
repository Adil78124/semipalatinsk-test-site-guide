"use client";

import React, { useContext } from "react";
import { I18nContext } from "@/components/providers/AppProviders";

export function GuideSection() {
  const i18n = useContext(I18nContext);
  if (!i18n) return null;
  const { t } = i18n;

  return (
    <section id="guide" className="py-24 bg-surface">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="font-label text-xs font-bold text-secondary uppercase tracking-[0.2em]">
              {t("guide.kicker")}
            </span>
            <h2 className="font-headline text-4xl font-extrabold mt-4">
              {t("guide.title")}
            </h2>
            <p className="text-on-surface-variant mt-5 max-w-3xl mx-auto">
              {t("guide.lead")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/10">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary">
                  travel_explore
                </span>
                <h3 className="font-headline font-bold text-lg">{t("guide.card1.t")}</h3>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {t("guide.card1.b")}
              </p>
            </div>

            <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/10">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary">
                  route
                </span>
                <h3 className="font-headline font-bold text-lg">{t("guide.card2.t")}</h3>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {t("guide.card2.b")}
              </p>
            </div>

            <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/10">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary">
                  gpp_good
                </span>
                <h3 className="font-headline font-bold text-lg">{t("guide.card3.t")}</h3>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {t("guide.card3.b")}
              </p>
            </div>
          </div>

          <div className="mt-10 bg-white rounded-2xl p-8 shadow-sm border border-outline-variant/10 hover:shadow-lg transition-shadow">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div
                className="shrink-0 h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary"
                aria-hidden="true"
              >
                <span className="material-symbols-outlined text-[22px] leading-none">
                  fact_check
                </span>
              </div>

              <div className="flex-1 min-w-0">
                <span className="font-label text-xs font-bold text-secondary uppercase tracking-[0.2em]">
                  {t("guide.kicker")}
                </span>
                <h3 className="font-headline text-2xl sm:text-3xl font-extrabold mt-3">
                  {t("guide.rules.title")}
                </h3>
                <p className="text-on-surface-variant mt-3 text-sm leading-relaxed max-w-prose">
                  {t("guide.rules.note")}
                </p>

                <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <RuleItem text={t("guide.rules.r1")} />
                  <RuleItem text={t("guide.rules.r2")} />
                  <RuleItem text={t("guide.rules.r3")} />
                  <RuleItem text={t("guide.rules.r4")} />
                  <RuleItem text={t("guide.rules.r5")} />
                  <RuleItem text={t("guide.rules.r6")} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RuleItem({ text }: { text: string }) {
  return (
    <li className="relative bg-white rounded-2xl p-8 shadow-sm border border-outline-variant/10 hover:shadow-lg transition-shadow pl-16">
      <div
        className="absolute left-6 top-6 h-9 w-9 rounded-2xl bg-primary/10 flex items-center justify-center text-primary"
        aria-hidden="true"
      >
        <span className="material-symbols-outlined text-[20px] leading-none">
          check_circle
        </span>
      </div>
      <div className="text-on-surface-variant leading-relaxed break-words">
        {text}
      </div>
    </li>
  );
}

