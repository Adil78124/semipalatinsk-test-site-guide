"use client";

import React, { useContext } from "react";
import { I18nContext } from "@/components/providers/AppProviders";
import { SCIENCE_FACTS } from "@/data/science";

export function ScienceFactsSection() {
  const i18n = useContext(I18nContext);
  if (!i18n) return null;
  const { t } = i18n;

  return (
    <section id="science" className="py-24 bg-surface-container-low">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 max-w-3xl">
            <span className="font-label text-xs font-bold text-tertiary uppercase tracking-[0.2em]">
              {t("science.kicker")}
            </span>
            <h2 className="font-headline text-4xl font-extrabold mt-4">{t("science.title")}</h2>
            <p className="text-on-surface-variant mt-4">{t("science.lead")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SCIENCE_FACTS.map((f) => (
              <FactCard key={f.titleKey} icon={f.icon} title={t(f.titleKey)} body={t(f.bodyKey)} />
            ))}
          </div>

          <div
            className="mt-10 rounded-2xl border border-outline-variant/20 bg-white/80 p-6 md:p-8 text-sm text-on-surface leading-relaxed"
            role="note"
          >
            {t("science.important")}
          </div>
        </div>
      </div>
    </section>
  );
}

function FactCard({
  icon,
  title,
  body,
}: {
  icon: "map" | "numbers" | "timeline" | "radiation_alt" | "warning" | "menu_book";
  title: string;
  body: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-outline-variant/10 hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4">
        <div
          className="shrink-0 h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary"
          aria-hidden="true"
        >
          <ScienceIcon name={icon} className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <h3 className="font-headline font-bold text-lg mb-2">{title}</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">{body}</p>
        </div>
      </div>
    </div>
  );
}

function ScienceIcon({ name, className }: { name: string; className?: string }) {
  const base = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  } as const;

  switch (name) {
    case "map":
      return (
        <svg {...base}>
          <path
            d="M9 18 3.8 20.6A1 1 0 0 1 2.4 19.7V6.6a1 1 0 0 1 .6-.9L9 3m0 15 6 3m-6-3V3m6 18 5.2-2.4a1 1 0 0 0 .6-.9V4.3a1 1 0 0 0-1.4-.9L15 6m0 15V6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "numbers":
      return (
        <svg {...base}>
          <path
            d="M10 4 8 20M16 4l-2 16M6 9h14M5 15h14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "timeline":
      return (
        <svg {...base}>
          <path
            d="M6 6h6v6H6V6Zm12 6h-6v6h6v-6Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M12 9h3a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3h-3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "radiation_alt":
      return (
        <svg {...base}>
          <path
            d="M12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
            fill="currentColor"
          />
          <path
            d="M12 3c2.9 0 5.5 1.5 7 3.8l-5.2 3A4 4 0 0 0 12 7.6V3Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M5 6.8A8.9 8.9 0 0 1 12 3v4.6a4 4 0 0 0-1.8 2.2L5 6.8Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M4 17.2A9 9 0 0 1 5 6.8l5.2 3a4 4 0 0 0 0 4.4l-6.2 3Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M20 17.2l-6.2-3a4 4 0 0 0 0-4.4l5.2-3A9 9 0 0 1 20 17.2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M4 17.2A9 9 0 0 0 12 21a9 9 0 0 0 8-3.8H4Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "warning":
      return (
        <svg {...base}>
          <path
            d="M12 3 2.5 19.5A1.5 1.5 0 0 0 3.8 22h16.4a1.5 1.5 0 0 0 1.3-2.5L12 3Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="M12 9v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 17h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "menu_book":
      return (
        <svg {...base}>
          <path
            d="M4.5 5.5A2.5 2.5 0 0 1 7 3h12v16H7a2.5 2.5 0 0 0-2.5 2.5V5.5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M7 19h12M7 3v16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return null;
  }
}
