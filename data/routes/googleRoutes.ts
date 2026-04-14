export type GoogleRouteCard = {
  id: string;
  title: string;
  description: string;
  start: string;
  end: string;
  duration: string;
  type?: string;
  difficulty?: string;
  purpose?: string;
  warning?: string;
  image: string;
  googleMapsUrl: string;
};

export const routes: GoogleRouteCard[] = [
  {
    id: "route-1",
    title: "Курчатов — Ознакомительный маршрут",
    description:
      "Краткий маршрут от города Курчатов в сторону территории СИП. Подходит для первого знакомства с местностью и общей географией полигона.",
    start: "Курчатов",
    end: "50.7214823, 78.3643703",
    duration: "18 мин / ~12 км",
    type: "автомобильный",
    difficulty: "легкий",
    image: "/images/routes/route-1.jpg",
    googleMapsUrl: "https://maps.app.goo.gl/TeYraEZNqV4ctvje7",
  },
  {
    id: "route-2",
    title: "Курчатов — Атомное озеро (Чаган)",
    description:
      "Маршрут к знаменитому Атомному озеру, образованному в результате ядерного испытания.",
    start: "Курчатов",
    end: "Атомное озеро",
    duration: "2–3 часа",
    type: "автомобильный",
    difficulty: "средний",
    image: "/images/routes/route-2-path.jpg",
    googleMapsUrl:
      "https://www.google.com/maps/dir/?api=1&origin=Kurchatov,Kazakhstan&destination=Atomic+Lake+Kazakhstan",
  },
  {
    id: "route-3",
    title: "Курчатов — Дегелен",
    description: "Маршрут к горному массиву Дегелен — зоне подземных ядерных испытаний.",
    start: "Курчатов",
    end: "Массив Дегелен",
    duration: "4–5 часов",
    type: "автомобильный",
    difficulty: "сложный",
    image: "/images/routes/route-3-path.jpg",
    googleMapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Kurchatov,Kazakhstan&destination=Degelen,Kazakhstan",
  },
  {
    id: "route-4",
    title: "Курчатов — Опытное поле",
    description: "Исторический маршрут к месту первого ядерного испытания СССР.",
    start: "Курчатов",
    end: "Опытное поле",
    duration: "3–4 часа",
    type: "автомобильный",
    difficulty: "средний",
    image: "/images/routes/route-4-path.jpg",
    googleMapsUrl:
      "https://www.google.com/maps/dir/?api=1&origin=Kurchatov,Kazakhstan&destination=Semipalatinsk+Test+Site",
  },
];

/** @deprecated Используйте `routes`; имя оставлено для уже подключённых импортов. */
export const GOOGLE_ROUTES = routes;
