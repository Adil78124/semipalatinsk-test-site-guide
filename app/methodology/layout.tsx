import type { Metadata } from "next";
import React from "react";
import { SiteFooter, SiteHeader } from "@/components/sections";

export const metadata: Metadata = {
  title: "Методика и источники",
  description:
    "Откуда взяты данные, как читать слои карты, ограничения материалов и почему сайт не заменяет официальный допуск. Справочная страница проекта о СИП.",
};

export default function MethodologyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="pt-20 pb-16">{children}</main>
      <SiteFooter />
    </>
  );
}
