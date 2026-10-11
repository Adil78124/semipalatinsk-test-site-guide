"use client";

import React, { useContext } from "react";
import { I18nContext } from "@/components/providers/AppProviders";
import type { TranslationKey } from "@/components/i18n/translations";

type StageProps = {
  number: number;
  icon: string;
  title: string;
  intro: string;
  items: string;
  extraIntro?: string;
  extraItems?: string;
  warning?: string;
};

function RecommendationList({ value }: { value: string }) {
  return (
    <ul className="space-y-3">
      {value.split("\n").map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-6 text-on-surface-variant sm:text-base">
          <span className="material-symbols-outlined mt-0.5 shrink-0 text-[19px] text-primary" aria-hidden>
            check_circle
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function StageCard({ number, icon, title, intro, items, extraIntro, extraItems, warning }: StageProps) {
  return (
    <article className="rounded-2xl border border-outline-variant/15 bg-surface-container-lowest p-6 shadow-sm sm:p-8">
      <div className="mb-6 flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-on-primary">
          <span className="material-symbols-outlined" aria-hidden>{icon}</span>
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">{number}</span>
          <h3 className="mt-1 font-headline text-xl font-extrabold leading-tight text-on-surface sm:text-2xl">{title}</h3>
        </div>
      </div>
      <p className="mb-5 font-semibold leading-6 text-on-surface">{intro}</p>
      <RecommendationList value={items} />
      {extraIntro && extraItems ? (
        <div className="mt-7 border-t border-outline-variant/15 pt-6">
          <p className="mb-5 font-semibold leading-6 text-on-surface">{extraIntro}</p>
          <RecommendationList value={extraItems} />
        </div>
      ) : null}
      {warning ? (
        <div className="mt-7 flex gap-4 rounded-xl border border-error/25 bg-error-container/35 p-5 text-on-error-container">
          <span className="material-symbols-outlined shrink-0 text-error" aria-hidden>warning</span>
          <p className="text-sm font-bold leading-6 sm:text-base">{warning}</p>
        </div>
      ) : null}
    </article>
  );
}

export function SafetySection() {
  const i18n = useContext(I18nContext);
  if (!i18n) return null;
  const { t } = i18n;
  const text = (key: TranslationKey) => t(key);

  return (
    <section id="safety" className="scroll-mt-20 bg-surface py-24">
      <div className="container mx-auto max-w-6xl px-6 md:px-8">
        <header className="mx-auto mb-12 max-w-4xl text-center">
          <span className="material-symbols-outlined text-5xl text-error" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden>
            health_and_safety
          </span>
          <h2 className="mt-4 font-headline text-3xl font-extrabold text-on-surface sm:text-4xl">{text("safety.title")}</h2>
        </header>

        <div className="grid gap-7">
          <StageCard number={1} icon="inventory_2" title={text("safety.stage1.title")} intro={text("safety.stage1.intro")} items={text("safety.stage1.items")} extraIntro={text("safety.stage1.extraIntro")} extraItems={text("safety.stage1.extraItems")} />
          <StageCard number={2} icon="route" title={text("safety.stage2.title")} intro={text("safety.stage2.intro")} items={text("safety.stage2.items")} warning={text("safety.stage2.warning")} />
          <StageCard number={3} icon="fact_check" title={text("safety.stage3.title")} intro={text("safety.stage3.intro")} items={text("safety.stage3.items")} />
        </div>

        <aside className="mt-8 rounded-2xl border-l-4 border-error bg-surface-container-high p-6 sm:p-8">
          <div className="flex gap-4">
            <span className="material-symbols-outlined shrink-0 text-3xl text-error" aria-hidden>gpp_maybe</span>
            <p className="text-sm font-semibold leading-6 text-on-surface sm:text-base">{text("safety.disclaimer")}</p>
          </div>
        </aside>

        <aside className="mt-5 rounded-xl border border-outline-variant/15 bg-surface-container-low p-5 text-sm leading-6 text-on-surface-variant sm:p-6">
          <strong className="text-on-surface">{text("safety.sourceLabel")}:</strong>{" "}{text("safety.source")}
        </aside>
      </div>
    </section>
  );
}
