import type { Metadata } from "next";
import { SiteFooter, SiteHeader, ZonesSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Режим посещения территории СИП (справочно)",
  description:
    "Справочное описание типовых режимов доступа к территории Семипалатинского испытательного полигона по открытым источникам. Не заменяет НПА и решения уполномоченных органов.",
  openGraph: {
    title: "Режим посещения СИП — Путеводитель по СИП",
    description: "Справочные карточки режима доступа; уточняйте допуск у оператора территории.",
  },
};

export default function ZonesPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-24">
        <ZonesSection />
      </main>
      <SiteFooter />
    </>
  );
}
