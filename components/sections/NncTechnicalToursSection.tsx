"use client";

import React, { useContext, useState } from "react";
import { I18nContext } from "@/components/providers/AppProviders";
import type { Lang } from "@/components/i18n/translations";
import {
  NNC_TECHNICAL_TOURS,
  type LocalizedTechnicalTourText,
} from "@/data/routes/nncTechnicalTours";

const copy = {
  ru: {
    kicker: "Архив программы STS-2025",
    title: "Технические туры НЯЦ РК — STS-2025",
    lead: "Три экскурсионных направления входили в программу XI Международной конференции в Курчатове. Технические туры состоялись 9 октября 2025 года.",
    notice: "Архивная программа 2025 года — не действующее предложение на 2026 год. Свободного доступа к объектам нет: посещение возможно только после официального согласования, с сопровождением и радиационным контролем.",
    tour: "Технический тур",
    date: "Дата",
    departure: "Начало",
    summary: "О туре",
    objects: "Исследовательские объекты",
    schedule: "Полная программа",
    meeting: "Место сбора участников конференции 2025 года",
    documents: "Документы",
    restrictions: "Требования и ограничения",
    sources: "Официальные и научные источники",
    expand: "Развернуть программу",
    collapse: "Свернуть программу",
  },
  kk: {
    kicker: "STS-2025 бағдарламасының мұрағаты",
    title: "ҚР ҰЯО техникалық турлары — STS-2025",
    lead: "Үш экскурсиялық бағыт Курчатовта өткен XI Халықаралық конференция бағдарламасына кірді. Техникалық турлар 2025 жылғы 9 қазанда өтті.",
    notice: "Бұл — 2025 жылғы мұрағаттық бағдарлама, 2026 жылға арналған қолданыстағы ұсыныс емес. Нысандарға еркін кіруге болмайды: бару тек ресми келісімнен кейін, сүйемелдеумен және радиациялық бақылаумен мүмкін.",
    tour: "Техникалық тур",
    date: "Күні",
    departure: "Басталуы",
    summary: "Тур туралы",
    objects: "Зерттеу нысандары",
    schedule: "Толық бағдарлама",
    meeting: "2025 жылғы конференция қатысушыларының жиналу орны",
    documents: "Құжаттар",
    restrictions: "Талаптар мен шектеулер",
    sources: "Ресми және ғылыми дереккөздер",
    expand: "Бағдарламаны ашу",
    collapse: "Бағдарламаны жабу",
  },
  en: {
    kicker: "STS-2025 programme archive",
    title: "NNC RK technical tours — STS-2025",
    lead: "Three excursions formed part of the XI International Conference programme in Kurchatov. The technical tours took place on 9 October 2025.",
    notice: "This is an archived 2025 programme, not a current 2026 offer. The facilities are not open-access: visits require official approval, escort, and radiation monitoring.",
    tour: "Technical tour",
    date: "Date",
    departure: "Start",
    summary: "About the tour",
    objects: "Research facilities",
    schedule: "Full schedule",
    meeting: "2025 conference meeting point",
    documents: "Documents",
    restrictions: "Requirements and restrictions",
    sources: "Official and scientific sources",
    expand: "Expand programme",
    collapse: "Collapse programme",
  },
} satisfies Record<Lang, Record<string, string>>;

function localize(lang: Lang, value: LocalizedTechnicalTourText): string {
  return value[lang] ?? value.ru;
}

function DetailHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="font-label text-xs font-extrabold uppercase tracking-[0.12em] text-on-surface">
      {children}
    </h4>
  );
}

export function NncTechnicalToursSection() {
  const i18n = useContext(I18nContext);
  const lang: Lang = i18n?.lang ?? "ru";
  const text = copy[lang];
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="technical-tours-sts-2025" className="border-t border-outline-variant/10 bg-surface-container-low/45">
      <div className="container mx-auto px-6 py-16 md:px-8 sm:py-20">
        <div className="max-w-4xl">
          <span className="mb-3 block font-label text-xs font-bold uppercase tracking-[0.2em] text-tertiary">
            {text.kicker}
          </span>
          <h2 className="font-headline text-3xl font-extrabold leading-tight text-on-surface sm:text-4xl">{text.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-on-surface-variant">{text.lead}</p>
          <div className="mt-5 flex gap-3 rounded-2xl border border-tertiary/20 bg-tertiary-container/15 p-4 text-sm leading-relaxed text-on-surface-variant">
            <span className="material-symbols-outlined shrink-0 text-[22px] text-tertiary" aria-hidden>history</span>
            <p>{text.notice}</p>
          </div>
        </div>

        <div className="mt-10 space-y-4">
          {NNC_TECHNICAL_TOURS.map((tour) => {
            const expanded = openId === tour.id;
            const panelId = `${tour.id}-panel`;
            const triggerId = `${tour.id}-trigger`;

            return (
              <article key={tour.id} className="overflow-hidden rounded-2xl border border-outline-variant/20 bg-surface shadow-sm">
                <h3>
                  <button
                    id={triggerId}
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    onClick={() => setOpenId(expanded ? null : tour.id)}
                    className="flex w-full items-start justify-between gap-4 p-5 text-left transition-colors hover:bg-surface-container-low focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-primary sm:items-center sm:p-6"
                  >
                    <span className="min-w-0">
                      <span className="block text-[11px] font-extrabold uppercase tracking-[0.14em] text-primary">
                        {text.tour} №{tour.number}
                      </span>
                      <span className="mt-2 block font-headline text-xl font-extrabold leading-snug text-on-surface sm:text-2xl">
                        {localize(lang, tour.title)}
                      </span>
                      <span className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-on-surface-variant">
                        <span><strong className="text-on-surface">{text.date}:</strong> {localize(lang, tour.date)}</span>
                        <span><strong className="text-on-surface">{text.departure}:</strong> {tour.departureTime}</span>
                      </span>
                    </span>
                    <span
                      className={`material-symbols-outlined mt-1 shrink-0 text-2xl text-primary transition-transform sm:mt-0 ${expanded ? "rotate-180" : ""}`}
                      aria-hidden
                    >
                      expand_more
                    </span>
                    <span className="sr-only">{expanded ? text.collapse : text.expand}</span>
                  </button>
                </h3>

                {expanded && (
                  <div id={panelId} role="region" aria-labelledby={triggerId} className="border-t border-outline-variant/15 px-5 py-6 sm:px-6">
                    <div className="grid gap-7 lg:grid-cols-[1.15fr_0.85fr]">
                      <div className="space-y-7">
                        <section>
                          <DetailHeading>{text.summary}</DetailHeading>
                          <p className="mt-3 text-sm leading-relaxed text-on-surface-variant sm:text-base">{localize(lang, tour.summary)}</p>
                        </section>
                        <section>
                          <DetailHeading>{text.objects}</DetailHeading>
                          <div className="mt-3 space-y-3">
                            {tour.researchObjects.map((object) => (
                              <div key={object.name.ru} className="rounded-xl bg-surface-container-low p-4">
                                <p className="font-bold text-on-surface">{localize(lang, object.name)}</p>
                                <p className="mt-1 text-sm leading-relaxed text-on-surface-variant">{localize(lang, object.description)}</p>
                              </div>
                            ))}
                          </div>
                        </section>
                      </div>

                      <div className="space-y-7">
                        <section>
                          <DetailHeading>{text.schedule}</DetailHeading>
                          <ol className="mt-3 space-y-3">
                            {tour.schedule.map((item) => (
                              <li key={`${item.time}-${item.description.en}`} className="grid grid-cols-[6.5rem_1fr] gap-3 text-sm leading-relaxed">
                                <time className="font-bold tabular-nums text-primary">{item.time}</time>
                                <span className="text-on-surface-variant">{localize(lang, item.description)}</span>
                              </li>
                            ))}
                          </ol>
                        </section>
                        <section>
                          <DetailHeading>{text.meeting}</DetailHeading>
                          <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">{localize(lang, tour.meetingPoint)}</p>
                        </section>
                        <section>
                          <DetailHeading>{text.documents}</DetailHeading>
                          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-on-surface-variant">
                            {tour.documents.map((item) => <li key={item.en}>{localize(lang, item)}</li>)}
                          </ul>
                        </section>
                        <section>
                          <DetailHeading>{text.restrictions}</DetailHeading>
                          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-on-surface-variant">
                            {tour.restrictions.map((item) => <li key={item.en}>{localize(lang, item)}</li>)}
                          </ul>
                        </section>
                        <section>
                          <DetailHeading>{text.sources}</DetailHeading>
                          <ul className="mt-3 space-y-2 text-sm leading-relaxed">
                            {tour.sources.map((source) => (
                              <li key={source.url}>
                                <a className="inline-flex items-start gap-1.5 text-primary underline underline-offset-4 hover:no-underline" href={source.url} target="_blank" rel="noopener noreferrer">
                                  <span>{localize(lang, source.label)}</span>
                                  <span className="material-symbols-outlined mt-0.5 text-[16px]" aria-hidden>open_in_new</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </section>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
