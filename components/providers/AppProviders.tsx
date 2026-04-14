"use client";

import React, { createContext, useCallback, useEffect, useMemo, useState } from "react";
import type { Lang, TranslationKey } from "@/components/i18n/translations";
import { translations } from "@/components/i18n/translations";

type I18nValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
};

type SearchValue = {
  query: string;
  setQuery: (q: string) => void;
};

export const I18nContext = createContext<I18nValue | null>(null);
export const SearchContext = createContext<SearchValue | null>(null);

const LANG_STORAGE_KEY = "geoed.lang";
const SEARCH_STORAGE_KEY = "geoed.search";
const LANG_COOKIE_KEY = "geoed.lang";

function normalizeLang(input: string | null | undefined): Lang | null {
  if (!input) return null;
  const v = input.toLowerCase();
  if (v === "ru" || v === "kk" || v === "en") return v;
  return null;
}

function setLangCookie(lang: Lang) {
  // 180 days
  document.cookie = `${LANG_COOKIE_KEY}=${encodeURIComponent(lang)}; path=/; max-age=${60 * 60 * 24 * 180}`;
}

export function AppProviders({
  children,
  initialLang,
}: {
  children: React.ReactNode;
  initialLang: Lang;
}) {
  const [lang, setLangState] = useState<Lang>(initialLang);
  const [query, setQueryState] = useState<string>(() => {
    if (typeof window === "undefined") return "";
    return window.localStorage.getItem(SEARCH_STORAGE_KEY) ?? "";
  });

  useEffect(() => {
    // If a user had a stored lang but no cookie yet, sync after mount.
    const storedLang = normalizeLang(window.localStorage.getItem(LANG_STORAGE_KEY));
    if (storedLang && storedLang !== lang) setLangState(storedLang);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem(LANG_STORAGE_KEY, lang);
    setLangCookie(lang);
  }, [lang]);

  useEffect(() => {
    window.localStorage.setItem(SEARCH_STORAGE_KEY, query);
  }, [query]);

  const t = useCallback(
    (key: TranslationKey) => translations[lang][key] ?? translations.ru[key] ?? key,
    [lang],
  );

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const setQuery = useCallback((q: string) => setQueryState(q), []);

  const i18nValue = useMemo<I18nValue>(() => ({ lang, setLang, t }), [lang, setLang, t]);
  const searchValue = useMemo<SearchValue>(() => ({ query, setQuery }), [query, setQuery]);

  return (
    <I18nContext.Provider value={i18nValue}>
      <SearchContext.Provider value={searchValue}>{children}</SearchContext.Provider>
    </I18nContext.Provider>
  );
}

