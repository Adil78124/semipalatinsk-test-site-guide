import type { Metadata } from "next";
import React from "react";
import { SiteFooter, SiteHeader } from "@/components/sections";

export const metadata: Metadata = {
  title: "Библиотека карт и материалов по СИП",
  description:
    "Подборка иллюстраций и карт из открытых научных публикаций и проектных материалов о Семипалатинском испытательном полигоне.",
  openGraph: {
    title: "Библиотека карт — Путеводитель по СИП",
    description: "Научные и справочные карты по СИП с указанием источников.",
  },
};

export default function MapsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="pt-24">{children}</main>
      <SiteFooter />
    </>
  );
}

