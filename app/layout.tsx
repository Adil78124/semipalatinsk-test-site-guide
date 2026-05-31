import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Inter, Manrope } from "next/font/google";
import "@/styles/globals.css";
import { AppProviders } from "@/components/providers/AppProviders";
import type { Lang } from "@/components/i18n/translations";

const inter = Inter({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Путеводитель по СИП — Семипалатинский испытательный полигон",
    template: "%s · Путеводитель по СИП",
  },
  description:
    "Справочный портал о Семипалатинском испытательном полигоне (СИП): карты, режим посещения, источники. Не заменяет официальные регламенты доступа.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const cookieLang = cookieStore.get("geoed.lang")?.value?.toLowerCase();
  const initialLang: Lang = cookieLang === "kk" || cookieLang === "en" || cookieLang === "ru" ? cookieLang : "ru";

  return (
    <html lang="ru" className={`light ${inter.variable} ${manrope.variable}`}>
      <body className="bg-surface font-body text-on-surface antialiased">
        <AppProviders initialLang={initialLang}>{children}</AppProviders>
      </body>
    </html>
  );
}
