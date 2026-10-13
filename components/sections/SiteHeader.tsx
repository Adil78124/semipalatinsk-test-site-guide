"use client";

import Link from "next/link";
import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import { I18nContext, SearchContext } from "@/components/providers/AppProviders";
import type { Lang, TranslationKey } from "@/components/i18n/translations";

const fallbackT = (key: TranslationKey) => String(key);

const LANGS: Array<{ id: Lang; label: string }> = [
  { id: "kk", label: "KZ" },
  { id: "ru", label: "RU" },
  { id: "en", label: "EN" },
];

type NavItem = { href: string; labelKey: TranslationKey; useNextLink: boolean };

export function SiteHeader() {
  const pathname = usePathname();
  const i18n = useContext(I18nContext);
  const search = useContext(SearchContext);
  const lang = i18n?.lang ?? "ru";
  const setLang = i18n?.setLang ?? (() => {});
  const t = i18n?.t ?? fallbackT;
  const query = search?.query ?? "";
  const setQuery = search?.setQuery ?? (() => {});

  const searchId = "site-search";
  const mobileSearchId = "site-search-mobile";

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [portalReady, setPortalReady] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreWrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setPortalReady(true);
  }, []);

  const sectionHref = useCallback(
    (id: string) => {
      return pathname === "/" ? `#${id}` : `/#${id}`;
    },
    [pathname],
  );

  const homeItem = useMemo(
    (): NavItem => ({
      href: pathname === "/" ? "#home" : "/",
      labelKey: "nav.home",
      useNextLink: pathname !== "/",
    }),
    [pathname],
  );

  /** Desktop: 6 primary links; secondary pages live under «Ещё». */
  const primaryNavItems = useMemo(
    (): NavItem[] => [
      homeItem,
      { href: sectionHref("sip-info"), labelKey: "nav.sip", useNextLink: false },
      { href: "/map", labelKey: "nav.map", useNextLink: true },
      { href: "/map?mode=routes", labelKey: "nav.zones", useNextLink: true },
      { href: sectionHref("research-maps"), labelKey: "nav.researchMaps", useNextLink: false },
      { href: sectionHref("safety"), labelKey: "nav.safety", useNextLink: false },
    ],
    [homeItem, sectionHref],
  );

  const moreNavItems = useMemo(
    (): NavItem[] => [
      { href: "/contacts", labelKey: "nav.contacts", useNextLink: true },
      { href: "/maps", labelKey: "nav.maps", useNextLink: true },
      { href: "/methodology", labelKey: "footer.links.methodology", useNextLink: true },
    ],
    [],
  );

  const mobileNavItems = useMemo(
    (): NavItem[] => [...primaryNavItems, ...moreNavItems],
    [primaryNavItems, moreNavItems],
  );

  const closeMobile = useCallback(() => {
    setMobileMenuOpen(false);
    setMobileSearchOpen(false);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen && !mobileSearchOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobile();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileMenuOpen, mobileSearchOpen, closeMobile]);

  useEffect(() => {
    if (!moreOpen) return;
    const onDoc = (e: MouseEvent) => {
      const el = moreWrapRef.current;
      if (!el?.contains(e.target as Node)) setMoreOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMoreOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      window.removeEventListener("keydown", onKey);
    };
  }, [moreOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileMenuOpen]);

  const navLinkClass =
    "font-['Manrope'] font-bold tracking-tight uppercase text-[10px] xl:text-[11px] text-[#191c1c] dark:text-[#f8faf9] opacity-70 hover:opacity-100 hover:text-[#2e7d32] transition-all duration-200 whitespace-nowrap";

  const renderNavLink = (it: NavItem, onNavigate?: () => void) => {
    const cls = navLinkClass;
    if (it.useNextLink) {
      return (
        <Link key={it.labelKey} href={it.href} onClick={onNavigate} className={cls}>
          {t(it.labelKey)}
        </Link>
      );
    }
    return (
      <a key={it.labelKey} href={it.href} onClick={onNavigate} className={cls}>
        {t(it.labelKey)}
      </a>
    );
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#f8faf9]/70 dark:bg-[#191c1c]/70 backdrop-blur-md shadow-[0_8px_32px_0_rgba(25,28,28,0.06)]">
      <nav className="px-6 lg:px-8 py-4 max-w-screen-2xl mx-auto" aria-label="Main">
        <div className="flex items-center gap-4 flex-nowrap">
          <a
            href={pathname === "/" ? "#home" : "/"}
            className="flex min-w-0 max-w-[145px] shrink flex-col sm:max-w-[280px] lg:shrink-0"
          >
            <span className="whitespace-nowrap font-['Manrope'] text-[17px] font-extrabold tracking-tighter text-[#0d631b] sm:text-xl xl:text-[22px] dark:text-[#2e7d32]">
              {t("brand")}
            </span>
            <span className="block max-w-full truncate font-['Inter'] text-[9px] font-semibold leading-tight tracking-wide text-on-surface-variant/75 sm:text-[10px]">
              {t("brandSubtitle")}
            </span>
          </a>

          <div className="hidden lg:flex flex-1 min-w-0 items-center justify-center gap-x-2 xl:gap-x-3">
            {/* Primary links only here — «Ещё» вынесен наружу, иначе overflow-hidden обрезает выпадающее меню */}
            <div className="flex min-w-0 max-w-[min(100%,720px)] flex-nowrap items-center justify-center gap-x-2 xl:gap-x-3 overflow-hidden">
              {primaryNavItems.map((it) => renderNavLink(it))}
            </div>
            <div className="relative shrink-0" ref={moreWrapRef}>
              <button
                type="button"
                className={[
                  navLinkClass,
                  "inline-flex items-center gap-0.5 rounded-md px-1",
                  moreOpen ? "opacity-100 text-[#2e7d32]" : "",
                ].join(" ")}
                aria-expanded={moreOpen}
                aria-haspopup="menu"
                id="nav-more-trigger"
                onClick={() => setMoreOpen((v) => !v)}
              >
                {t("nav.more")}
                <span className="material-symbols-outlined text-[16px] leading-none" aria-hidden>
                  expand_more
                </span>
              </button>
              {moreOpen ? (
                <div
                  role="menu"
                  aria-labelledby="nav-more-trigger"
                  className="absolute right-0 top-full z-[70] mt-1 min-w-[220px] rounded-xl border border-outline-variant/15 bg-white/95 py-2 shadow-lg backdrop-blur dark:bg-[#191c1c]/95"
                >
                  {moreNavItems.map((it) => {
                    const row =
                      "flex w-full items-center px-4 py-2.5 text-left font-['Manrope'] text-[11px] font-bold uppercase tracking-tight text-[#191c1c] hover:bg-surface-container-low dark:text-[#f8faf9]";
                    if (it.useNextLink) {
                      return (
                        <Link
                          key={it.labelKey}
                          role="menuitem"
                          href={it.href}
                          className={row}
                          onClick={() => setMoreOpen(false)}
                        >
                          {t(it.labelKey)}
                        </Link>
                      );
                    }
                    return (
                      <a
                        key={it.labelKey}
                        role="menuitem"
                        href={it.href}
                        className={row}
                        onClick={() => setMoreOpen(false)}
                      >
                        {t(it.labelKey)}
                      </a>
                    );
                  })}
                </div>
              ) : null}
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 ml-auto">
            <button
              type="button"
              className="lg:hidden material-symbols-outlined p-3 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors"
              onClick={() => setMobileSearchOpen((v) => !v)}
              aria-label={t("header.searchPlaceholder")}
              aria-expanded={mobileSearchOpen}
            >
              search
            </button>
            <button
              type="button"
              className="lg:hidden material-symbols-outlined p-3 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors"
              onClick={() => setMobileMenuOpen(true)}
              aria-label={t("nav.openMenu")}
              aria-expanded={mobileMenuOpen}
            >
              menu
            </button>

            <div className="hidden lg:flex items-center gap-2 bg-white/70 dark:bg-[#191c1c]/40 border border-outline-variant/20 rounded-full px-3 py-1.5 backdrop-blur">
              <span className="material-symbols-outlined text-on-surface-variant text-[20px]" aria-hidden>
                search
              </span>
              <label className="sr-only" htmlFor={searchId}>
                {t("header.searchPlaceholder")}
              </label>
              <input
                id={searchId}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t("header.searchPlaceholder")}
                className="bg-transparent border-0 focus:ring-0 text-sm w-[150px] xl:w-[240px] placeholder:text-on-surface-variant/60"
                type="search"
              />
              {query.length > 0 ? (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="material-symbols-outlined text-on-surface-variant hover:text-on-surface transition-colors text-[20px]"
                  aria-label={lang === "en" ? "Clear search" : lang === "kk" ? "Тазалау" : "Очистить поиск"}
                >
                  close
                </button>
              ) : null}
            </div>

            <div className="hidden lg:flex items-center gap-1 bg-white/70 dark:bg-[#191c1c]/40 border border-outline-variant/20 rounded-full p-1 backdrop-blur">
              {LANGS.map((l) => {
                const active = l.id === lang;
                return (
                  <button
                    key={l.id}
                    type="button"
                    onClick={() => setLang(l.id)}
                    className={[
                      "px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide transition-colors",
                      active
                        ? "bg-primary text-on-primary"
                        : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/60",
                    ].join(" ")}
                    aria-pressed={active}
                    aria-label={`Language ${l.label}`}
                  >
                    {l.label}
                  </button>
                );
              })}
            </div>

            <Link
              href="/#map"
              className="hidden lg:inline-flex bg-primary text-on-primary px-4 xl:px-6 py-2 rounded-full font-headline font-bold text-xs xl:text-sm tracking-wide uppercase transition-all active:scale-95 shadow-lg shadow-primary/20 whitespace-nowrap"
            >
              {t("header.explore")}
            </Link>
          </div>
        </div>
      </nav>

      {mobileSearchOpen ? (
        <div className="lg:hidden px-6 pb-3 max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-2 bg-white/70 dark:bg-[#191c1c]/40 border border-outline-variant/20 rounded-full px-3 py-2 backdrop-blur">
            <span className="material-symbols-outlined text-on-surface-variant text-[20px]" aria-hidden>
              search
            </span>
            <label className="sr-only" htmlFor={mobileSearchId}>
              {t("header.searchPlaceholder")}
            </label>
            <input
              id={mobileSearchId}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("header.searchPlaceholder")}
              className="bg-transparent border-0 focus:ring-0 text-sm w-full placeholder:text-on-surface-variant/60"
              type="search"
            />
            {query.length > 0 ? (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="material-symbols-outlined text-on-surface-variant hover:text-on-surface transition-colors text-[20px]"
                aria-label={lang === "en" ? "Clear search" : lang === "kk" ? "Тазалау" : "Очистить поиск"}
              >
                close
              </button>
            ) : null}
          </div>
        </div>
      ) : null}

      {mobileMenuOpen && portalReady
        ? createPortal(
            <div className="lg:hidden fixed inset-0 z-[60]">
              <button
                type="button"
                className="fixed inset-0 bg-black/30 transition-opacity"
                onClick={closeMobile}
                aria-label={t("nav.closeMenuDialog")}
              />

              <div className="fixed top-0 right-0 h-screen w-[320px] max-w-[90vw] bg-surface shadow-2xl border-l border-outline-variant/10 translate-x-0 transition-transform duration-300 ease-out">
                <div className="h-full flex flex-col">
                  <div className="sticky top-0 z-10 bg-surface/95 backdrop-blur border-b border-outline-variant/10 px-6 pt-6 pb-4">
                    <div className="flex items-center justify-between">
                      <div className="font-['Manrope'] font-extrabold text-primary tracking-tighter text-lg whitespace-normal break-words pr-3">
                        {t("brand")}
                      </div>
                      <button
                        type="button"
                        className="material-symbols-outlined p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors shrink-0"
                        onClick={closeMobile}
                        aria-label={t("nav.closeMenuDialog")}
                      >
                        close
                      </button>
                    </div>

                    <div className="mt-4 inline-flex items-center gap-0.5 bg-white/70 dark:bg-[#191c1c]/40 border border-outline-variant/20 rounded-full p-0.5 backdrop-blur max-w-full">
                      {LANGS.map((l) => {
                        const active = l.id === lang;
                        return (
                          <button
                            key={l.id}
                            type="button"
                            onClick={() => setLang(l.id)}
                            className={[
                              "px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide transition-colors",
                              active
                                ? "bg-primary text-on-primary"
                                : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/60",
                            ].join(" ")}
                            aria-pressed={active}
                            aria-label={`Language ${l.label}`}
                          >
                            {l.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-auto px-6 py-5">
                    <div className="flex flex-col gap-4">
                      {mobileNavItems.map((it) => {
                        const cls =
                          "font-['Manrope'] font-bold tracking-tight uppercase text-[12px] text-on-surface-variant hover:text-primary transition-colors whitespace-normal break-words";
                        if (it.useNextLink) {
                          return (
                            <Link key={it.labelKey} href={it.href} onClick={closeMobile} className={cls}>
                              {t(it.labelKey)}
                            </Link>
                          );
                        }
                        return (
                          <a key={it.labelKey} href={it.href} onClick={closeMobile} className={cls}>
                            {t(it.labelKey)}
                          </a>
                        );
                      })}
                    </div>

                    <div className="mt-8">
                      <Link
                        href="/#map"
                        onClick={closeMobile}
                        className="flex w-full items-center justify-center bg-primary text-on-primary px-6 py-3 rounded-full font-headline font-bold text-sm tracking-wide uppercase transition-all active:scale-95 shadow-lg shadow-primary/20"
                      >
                        {t("header.explore")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </header>
  );
}
