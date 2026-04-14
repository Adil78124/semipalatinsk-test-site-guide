import type { Metadata } from "next";
import {
  AboutBentoSection,
  GuideSection,
  HeroSection,
  MethodologyTeaserSection,
  MapSection,
  ResearchMapsSection,
  SafetySection,
  ScienceFactsSection,
  SipInfoSection,
  SiteFooter,
  SiteHeader,
  ZonesSection,
} from "@/components/sections";

export const metadata: Metadata = {
  title:
    "Семипалатинский испытательный полигон — научно-справочный и картографический ресурс",
  description:
    "Научно-справочный и картографический ресурс о территории бывшего Семипалатинского испытательного полигона: карта площадок, исторический контекст, научные материалы, сведения о типовых режимах доступа. Справочно; не заменяет официальный допуск.",
  openGraph: {
    title: "Geoecological Editorial — Семипалатинский испытательный полигон",
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
        <AboutBentoSection />
        <ZonesSection />
        <MapSection />
        <ResearchMapsSection />
        {/* временно отключено */}
        {/* <RoutesSection /> */}
        <ScienceFactsSection />
        <MethodologyTeaserSection />
        <GuideSection />
        <SafetySection />
      </main>
      <SiteFooter />
    </>
  );
}
