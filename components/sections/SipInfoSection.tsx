"use client";

import React, { useContext } from "react";
import { I18nContext } from "@/components/providers/AppProviders";

export function SipInfoSection() {
  const i18n = useContext(I18nContext);
  if (!i18n) return null;
  const { t } = i18n;

  return (
    <section id="sip-info" className="py-24 bg-surface">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="font-label text-xs font-bold text-secondary uppercase tracking-[0.2em]">
              {t("sip.kicker")}
            </span>
            <h2 className="font-headline text-4xl font-extrabold mt-4">
              {t("sip.title")}
            </h2>
            <p className="text-on-surface-variant mt-5 max-w-3xl mx-auto">
              {t("sip.lead")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/10">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary">
                  public
                </span>
                <h3 className="font-headline font-bold text-lg">
                  {t("sip.card.where.title")}
                </h3>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed whitespace-pre-line">
                {t("sip.card.where.body")}
              </p>
            </div>

            <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/10">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary">
                  history_edu
                </span>
                <h3 className="font-headline font-bold text-lg">
                  {t("sip.card.history.title")}
                </h3>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed whitespace-pre-line">
                {t("sip.card.history.body")}
              </p>
            </div>

            <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/10">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary">
                  hub
                </span>
                <h3 className="font-headline font-bold text-lg">
                  {t("sip.card.why.title")}
                </h3>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed whitespace-pre-line">
                {t("sip.card.why.body")}
              </p>
            </div>
          </div>

          <div className="mt-10 bg-white rounded-2xl p-8 shadow-sm border border-outline-variant/10 hover:shadow-lg transition-shadow">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div
                className="shrink-0 h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary"
                aria-hidden="true"
              >
                <span
                  className="material-symbols-outlined text-[22px] leading-none"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  science
                </span>
              </div>

              <div className="flex-1 min-w-0">
                <span className="font-label text-xs font-bold text-secondary uppercase tracking-[0.2em]">
                  {t("sip.kicker")}
                </span>

                <h3 className="font-headline text-2xl sm:text-3xl font-extrabold mt-3">
                  {t("sip.heterogeneity.title")}
                </h3>

                <p className="text-on-surface-variant mt-3 text-sm leading-relaxed max-w-prose whitespace-pre-line">
                  {t("sip.heterogeneity.body")}
                </p>

                <ul className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                  <li className="bg-white rounded-2xl p-8 shadow-sm border border-outline-variant/10 hover:shadow-lg transition-shadow">
                    <div className="font-bold mb-2 break-words">{t("sip.heterogeneity.b1")}</div>
                    <div className="text-on-surface-variant leading-relaxed break-words">{t("sip.heterogeneity.b1s")}</div>
                  </li>
                  <li className="bg-white rounded-2xl p-8 shadow-sm border border-outline-variant/10 hover:shadow-lg transition-shadow">
                    <div className="font-bold mb-2 break-words">{t("sip.heterogeneity.b2")}</div>
                    <div className="text-on-surface-variant leading-relaxed break-words">{t("sip.heterogeneity.b2s")}</div>
                  </li>
                  <li className="bg-white rounded-2xl p-8 shadow-sm border border-outline-variant/10 hover:shadow-lg transition-shadow">
                    <div className="font-bold mb-2 break-words">{t("sip.heterogeneity.b3")}</div>
                    <div className="text-on-surface-variant leading-relaxed break-words">{t("sip.heterogeneity.b3s")}</div>
                  </li>
                </ul>

                <p className="text-xs text-on-surface-variant mt-6 whitespace-pre-line">
                  {t("sip.note")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

