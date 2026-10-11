import type { Metadata } from "next";
import {
  GuideSection,
  HeroSection,
  MethodologyTeaserSection,
  MapSection,
  ResearchMapsSection,
  SafetySection,
  SipInfoSection,
  SiteFooter,
  SiteHeader,
} from "@/components/sections";

export const metadata: Metadata = {
  title:
    "Семипалатинский испытательный полигон — научно-справочный и картографический ресурс",
  description:
    "Научно-справочный и картографический ресурс о территории бывшего Семипалатинского испытательного полигона: карта площадок, исторический контекст, научные материалы, сведения о типовых режимах доступа. Справочно; не заменяет официальный допуск.",
  openGraph: {
    title: "STS Nuclear-Tour — Семипалатинский испытательный полигон",
    description:
      "Научно-справочные и картографические материалы о территории бывшего СИП.",
  },
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <SipInfoSection />
        <MapSection />
        <ResearchMapsSection />
        {/* временно отключено */}
        {/* <RoutesSection /> */}
        <MethodologyTeaserSection />
        <GuideSection />
        <SafetySection />
      </main>
      <SiteFooter />
    </>
  );
}
