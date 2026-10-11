import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/sections";

const ABU_PROJECT_LINK =
  "https://abu.edu.kz/ru/science/projects%26initiatives/1747376582725/1760959493335/1760961589673";

const contacts = [
  {
    label: "Контакт по проекту",
    value: "+7 775 342 0510",
    href: "tel:+77753420510",
    icon: "call",
  },
  {
    label: "Разработчик сайта",
    value: "8 700 125 0772",
    href: "tel:+77001250772",
    icon: "code",
  },
] as const;

export const metadata: Metadata = {
  title: "Контакты - STS Nuclear-Tour",
  description: "Контакты проекта, ссылка на страницу ABU и номер разработчика сайта.",
  openGraph: {
    title: "Контакты - STS Nuclear-Tour",
    description: "Контакты проекта и разработчика сайта.",
  },
};

export default function ContactsPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-surface pt-24 text-on-surface">
        <section className="px-6 py-16 md:px-12 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <span className="font-label text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Связь
              </span>
              <h1 className="mt-4 font-headline text-4xl font-extrabold tracking-tight md:text-6xl">
                Контакты
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-on-surface-variant md:text-xl">
                По вопросам проекта и работы сайта можно связаться по указанным номерам. Страница проекта ABU открывается по ссылке ниже.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
              {contacts.map((contact) => (
                <a
                  key={contact.href}
                  href={contact.href}
                  className="group rounded-lg border border-outline-variant/15 bg-surface-container-low p-7 transition-colors hover:border-primary/40 hover:bg-surface-container"
                >
                  <span className="material-symbols-outlined text-3xl text-primary" aria-hidden>
                    {contact.icon}
                  </span>
                  <p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-on-surface-variant">
                    {contact.label}
                  </p>
                  <p className="mt-3 font-headline text-3xl font-extrabold tracking-tight text-on-surface group-hover:text-primary">
                    {contact.value}
                  </p>
                </a>
              ))}
            </div>

            <div className="mt-8 rounded-lg border border-outline-variant/15 bg-white/70 p-7 dark:bg-[#191c1c]/40">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-on-surface-variant">
                    ABU
                  </p>
                  <h2 className="mt-2 font-headline text-2xl font-bold text-on-surface">
                    Страница проекта на сайте ABU
                  </h2>
                </div>
                <a
                  href={ABU_PROJECT_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 font-headline text-sm font-bold uppercase tracking-wide text-on-primary transition-opacity hover:opacity-90"
                >
                  Открыть
                  <span className="material-symbols-outlined text-[18px] leading-none" aria-hidden>
                    open_in_new
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
