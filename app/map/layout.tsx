import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Карта СИП — точки и маршруты (справочно)",
  description:
    "Интерактивная справочная карта Семипалатинского испытательного полигона: маркеры площадок, фильтры, подложки. Не заменяет официальный допуск и геодезические границы.",
  openGraph: {
    title: "Карта СИП — STS Nuclear-Tour",
    description:
      "Справочная карта Семипалатинского полигона: ориентиры для обучения и навигации по открытым источникам.",
  },
};

export default function MapLayout({ children }: { children: React.ReactNode }) {
  return children;
}
