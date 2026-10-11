import type { Lang } from "@/components/i18n/translations";

export type LocalizedRouteText = Record<Lang, string>;

export type GoogleRouteLocation = {
  id: string;
  label: LocalizedRouteText;
  googleMapsUrl: string;
  note?: LocalizedRouteText;
};

export type GoogleRouteCard = {
  id: string;
  title: LocalizedRouteText;
  description: LocalizedRouteText;
  start: LocalizedRouteText;
  end: LocalizedRouteText;
  type?: LocalizedRouteText;
  purpose?: LocalizedRouteText;
  warning?: LocalizedRouteText;
  image: string;
  imageAlt: LocalizedRouteText;
  photoSource: LocalizedRouteText;
  locations: GoogleRouteLocation[];
  source: LocalizedRouteText;
  sourceUrl?: string;
};

export const routes: GoogleRouteCard[] = [
  {
    id: "route-1",
    title: {
      ru: "Курчатов — Ознакомительный маршрут",
      kk: "Курчатов — Таныстыру маршруты",
      en: "Kurchatov — Introductory Route",
    },
    description: {
      ru: "Знакомство с Курчатовом и Экспозиционным залом истории Семипалатинского испытательного полигона Национального ядерного центра РК. Адрес зала: город Курчатов, ул. Бейбіт атом, 2.",
      kk: "Курчатов қаласымен және ҚР Ұлттық ядролық орталығының Семей сынақ полигоны тарихы экспозициялық залымен танысу. Залдың мекенжайы: Курчатов қаласы, Бейбіт атом көшесі, 2.",
      en: "An introduction to Kurchatov and the Semipalatinsk Test Site history exhibition hall of Kazakhstan’s National Nuclear Center. Address: 2 Beibіт atom Street, Kurchatov.",
    },
    start: { ru: "Курчатов", kk: "Курчатов", en: "Kurchatov" },
    end: {
      ru: "Экспозиционный зал истории СИП",
      kk: "ССП тарихы экспозициялық залы",
      en: "STS history exhibition hall",
    },
    type: { ru: "ознакомительный", kk: "таныстыру", en: "introductory" },
    purpose: { ru: "город и экспозиция", kk: "қала және экспозиция", en: "city and exhibition" },
    warning: {
      ru: "Посещение экспозиции может требовать предварительной заявки и согласования с НЯЦ РК. Перед поездкой уточните актуальный порядок у учреждения.",
      kk: "Экспозицияға бару үшін ҚР ҰЯО-мен алдын ала өтінім беру және келісу қажет болуы мүмкін. Сапар алдында мекемеден қолданыстағы тәртіпті нақтылаңыз.",
      en: "A visit to the exhibition may require advance application and coordination with the NNC RK. Confirm the current procedure with the institution before travelling.",
    },
    image: "/images/kurchatov-city.jpg",
    imageAlt: {
      ru: "Панорамный вид города — прежняя обложка ознакомительного маршрута",
      kk: "Қаланың панорамалық көрінісі — таныстыру маршрутының бұрынғы мұқабасы",
      en: "Panoramic city view — the previous cover of the introductory route",
    },
    photoSource: {
      ru: "Источник изображения: архив проекта; первоисточник требует уточнения.",
      kk: "Сурет көзі: жоба мұрағаты; бастапқы дереккөзді нақтылау қажет.",
      en: "Image source: project archive; the original source requires verification.",
    },
    locations: [
      {
        id: "sts-history-exhibition",
        label: {
          ru: "Экспозиционный зал — поиск по адресу",
          kk: "Экспозициялық зал — мекенжай бойынша іздеу",
          en: "Exhibition hall — address search",
        },
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=%D0%9A%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D1%82%D0%B0%D0%BD%2C%20%D0%9A%D1%83%D1%80%D1%87%D0%B0%D1%82%D0%BE%D0%B2%2C%20%D1%83%D0%BB.%20%D0%91%D0%B5%D0%B9%D0%B1%D1%96%D1%82%20%D0%B0%D1%82%D0%BE%D0%BC%2C%202",
        note: {
          ru: "Координаты отдельного входа не подтверждены; ссылка выполняет поиск по официально опубликованному адресу.",
          kk: "Жеке кіреберістің координаттары расталмаған; сілтеме ресми жарияланған мекенжай бойынша іздейді.",
          en: "The exact entrance coordinates are unverified; this link searches the officially published address.",
        },
      },
    ],
    source: {
      ru: "НЯЦ РК, «День открытых дверей в экспозиционный зал истории Семипалатинского испытательного полигона», 30.07.2025.",
      kk: "ҚР ҰЯО, «Семей сынақ полигоны тарихы экспозициялық залының ашық есік күні», 30.07.2025.",
      en: "NNC RK, “Open Day at the Semipalatinsk Test Site History Exhibition Hall”, 30 July 2025.",
    },
    sourceUrl: "https://www.nnc.kz/ru/news/show/591",
  },
  {
    id: "route-2",
    title: {
      ru: "Курчатов — Атомное озеро (Чаган)",
      kk: "Курчатов — Атом көлі (Шаған)",
      en: "Kurchatov — Atomic Lake (Chagan)",
    },
    description: {
      ru: "Справочное направление к водохранилищу, образованному в результате подземного ядерного взрыва 1965 года. Карточка показывает объект, но не подтверждает автомобильный трек или право доступа.",
      kk: "1965 жылғы жерасты ядролық жарылысының нәтижесінде пайда болған су қоймасына анықтамалық бағыт. Карточка нысанды көрсетеді, бірақ автомобиль бағытын немесе кіру құқығын растамайды.",
      en: "A reference direction to the reservoir formed by the 1965 underground nuclear explosion. The card identifies the site but does not confirm a driving route or access permission.",
    },
    start: { ru: "Курчатов", kk: "Курчатов", en: "Kurchatov" },
    end: { ru: "Атомное озеро", kk: "Атом көлі", en: "Atomic Lake" },
    type: { ru: "справочное направление", kk: "анықтамалық бағыт", en: "reference direction" },
    warning: {
      ru: "Посещение возможно только после официального согласования доступа, с сопровождением и радиационным контролем.",
      kk: "Бару тек ресми рұқсат келісілгеннен кейін, сүйемелдеумен және радиациялық бақылаумен мүмкін.",
      en: "A visit is possible only after official access coordination, with escort and radiation monitoring.",
    },
    image: "/images/routes/route-2_atomic_lake.png",
    imageAlt: {
      ru: "Атомное озеро на площадке Балапан Семипалатинского испытательного полигона",
      kk: "Семей сынақ полигонының Балапан алаңындағы Атом көлі",
      en: "Atomic Lake at the Balapan area of the Semipalatinsk Test Site",
    },
    photoSource: {
      ru: "Фото автора. Источник: «Отчёт по командировке», 29.05.2026.",
      kk: "Автор фотосы. Дереккөз: «Іссапар туралы есеп», 29.05.2026.",
      en: "Photo by the author. Source: Trip Report, 29 May 2026.",
    },
    locations: [
      {
        id: "atomic-lake",
        label: { ru: "Атомное озеро", kk: "Атом көлі", en: "Atomic Lake" },
        googleMapsUrl: "https://www.google.com/maps?q=49.93552,79.00852",
      },
    ],
    source: {
      ru: "Центр кратерного озера: 49.93552° N, 79.00852° E; сверено по Google Maps и OpenStreetMap, контекст — материалы НЯЦ РК.",
      kk: "Кратерлік көлдің орталығы: 49.93552° N, 79.00852° E; Google Maps және OpenStreetMap бойынша салыстырылды, контекст — ҚР ҰЯО материалдары.",
      en: "Crater-lake centre: 49.93552° N, 79.00852° E; cross-checked against Google Maps and OpenStreetMap, with context from NNC RK materials.",
    },
  },
  {
    id: "route-3",
    title: {
      ru: "Курчатов — город-призрак Чаган — аэродром Чаган-16",
      kk: "Курчатов — Чаган елес-қаласы — Чаган-16 әуеайлағы",
      en: "Kurchatov — Chagan ghost town — Chagan-16 airfield",
    },
    description: {
      ru: "Справочное направление объединяет две отдельные исторические локации: город-призрак Чаган и аэродром Чаган-16. Достоверная геометрия автомобильного маршрута не установлена, поэтому трек по дорогам не строится.",
      kk: "Анықтамалық бағыт екі бөлек тарихи орынды қамтиды: Чаган елес-қаласы және Чаган-16 әуеайлағы. Автомобиль бағытының сенімді геометриясы анықталмағандықтан, жол трегі салынбайды.",
      en: "This reference direction covers two distinct historic locations: Chagan ghost town and Chagan-16 airfield. Because verified road geometry is unavailable, no driving track is drawn.",
    },
    start: { ru: "Курчатов", kk: "Курчатов", en: "Kurchatov" },
    end: {
      ru: "Чаган и аэродром Чаган-16",
      kk: "Чаган және Чаган-16 әуеайлағы",
      en: "Chagan and Chagan-16 airfield",
    },
    type: { ru: "две справочные точки", kk: "екі анықтамалық нүкте", en: "two reference points" },
    warning: {
      ru: "Карточка не подтверждает доступность дорог или свободное посещение. Требуются официальное согласование, сопровождение и радиационный контроль.",
      kk: "Карточка жолдардың қолжетімділігін немесе еркін баруды растамайды. Ресми келісім, сүйемелдеу және радиациялық бақылау қажет.",
      en: "The card does not confirm road availability or unrestricted access. Official coordination, escort, and radiation monitoring are required.",
    },
    image: "/images/routes/route-3_chagan_ghost_town.png",
    imageAlt: {
      ru: "Город-призрак Чаган; на фотографии изображён город, а не аэродром Чаган-16",
      kk: "Чаган елес-қаласы; фотосуретте Чаган-16 әуеайлағы емес, қала бейнеленген",
      en: "Chagan ghost town; the photograph shows the town, not Chagan-16 airfield",
    },
    photoSource: {
      ru: "Фото автора. Источник: «Отчёт по командировке», 29.05.2026. На снимке — город-призрак Чаган, не аэродром Чаган-16.",
      kk: "Автор фотосы. Дереккөз: «Іссапар туралы есеп», 29.05.2026. Суретте Чаган-16 әуеайлағы емес, Чаган елес-қаласы көрсетілген.",
      en: "Photo by the author. Source: Trip Report, 29 May 2026. The image shows Chagan ghost town, not Chagan-16 airfield.",
    },
    locations: [
      {
        id: "chagan-ghost-town",
        label: { ru: "Город-призрак Чаган", kk: "Чаган елес-қаласы", en: "Chagan ghost town" },
        googleMapsUrl: "https://www.google.com/maps?q=50.609111,79.242333",
      },
      {
        id: "chagan-16-airfield",
        label: { ru: "Аэродром Чаган-16", kk: "Чаган-16 әуеайлағы", en: "Chagan-16 airfield" },
        googleMapsUrl: "https://www.google.com/maps?q=50.541083,79.193500",
      },
    ],
    source: {
      ru: "Финальная статья Молдажанова и соавторов, таблица 5, стр. 12; координаты 50°36′32.8″ N, 79°14′32.4″ E и 50°32′27.9″ N, 79°11′36.6″ E.",
      kk: "Молдажанов және авторлар ұжымының финалдық мақаласы, 5-кесте, 12-бет; координаттар 50°36′32.8″ N, 79°14′32.4″ E және 50°32′27.9″ N, 79°11′36.6″ E.",
      en: "Final article by Moldazhanov and co-authors, Table 5, p. 12; coordinates 50°36′32.8″ N, 79°14′32.4″ E and 50°32′27.9″ N, 79°11′36.6″ E.",
    },
  },
  {
    id: "route-4",
    title: {
      ru: "Курчатов — солёное озеро Жамантуз",
      kk: "Курчатов — Жамантуз тұзды көлі",
      en: "Kurchatov — salt lake Zhamantuz",
    },
    description: {
      ru: "Справочное направление к солёному озеру Жамантуз. Близлежащий Кызылкудук показан как отдельный ориентир; его статус обязательной остановки маршрута не подтверждён.",
      kk: "Жамантуз тұзды көліне анықтамалық бағыт. Жақын орналасқан Қызылқұдық жеке бағдар ретінде көрсетілген; оның маршруттың міндетті аялдамасы ретіндегі мәртебесі расталмаған.",
      en: "A reference direction to salt lake Zhamantuz. Nearby Kyzylkuduk is shown as a separate landmark; it is not confirmed as a required route stop.",
    },
    start: { ru: "Курчатов", kk: "Курчатов", en: "Kurchatov" },
    end: { ru: "Озеро Жамантуз", kk: "Жамантуз көлі", en: "Lake Zhamantuz" },
    type: { ru: "справочное направление", kk: "анықтамалық бағыт", en: "reference direction" },
    warning: {
      ru: "Карточка не подтверждает проезжаемость дорог, безопасность или свободный доступ. Условия посещения требуют отдельного официального согласования.",
      kk: "Карточка жолдардың жүруге жарамдылығын, қауіпсіздікті немесе еркін кіруді растамайды. Бару шарттары бөлек ресми келісуді талап етеді.",
      en: "The card does not confirm road passability, safety, or unrestricted access. Visit conditions require separate official coordination.",
    },
    image: "/images/routes/route-4_zhamantuz_lake.jpg",
    imageAlt: {
      ru: "Солёное озеро Жамантуз",
      kk: "Жамантуз тұзды көлі",
      en: "Salt lake Zhamantuz",
    },
    photoSource: {
      ru: "Фото автора. Источник: финальная рукопись Молдажанова и соавт., 2026.",
      kk: "Автор фотосы. Дереккөз: Молдажанов және авторлар ұжымының финалдық қолжазбасы, 2026.",
      en: "Photo by the author. Source: final manuscript by Moldazhanov et al., 2026.",
    },
    locations: [
      {
        id: "zhamantuz-lake",
        label: { ru: "Озеро Жамантуз", kk: "Жамантуз көлі", en: "Lake Zhamantuz" },
        googleMapsUrl: "https://www.google.com/maps?q=50.550111,77.859111",
      },
      {
        id: "kyzylkuduk",
        label: { ru: "Кызылкудук — справочный объект", kk: "Қызылқұдық — анықтамалық нысан", en: "Kyzylkuduk — reference point" },
        googleMapsUrl: "https://www.google.com/maps?q=50.532028,77.947694",
        note: {
          ru: "Не подтверждён как обязательная остановка маршрута.",
          kk: "Маршруттың міндетті аялдамасы ретінде расталмаған.",
          en: "Not confirmed as a required route stop.",
        },
      },
    ],
    source: {
      ru: "Финальная статья Молдажанова и соавторов: координаты Жамантуза 50°33′00.4″ N, 77°51′32.8″ E; Кызылкудука 50°31′55.3″ N, 77°56′51.7″ E.",
      kk: "Молдажанов және авторлар ұжымының финалдық мақаласы: Жамантуз координаттары 50°33′00.4″ N, 77°51′32.8″ E; Қызылқұдық координаттары 50°31′55.3″ N, 77°56′51.7″ E.",
      en: "Final article by Moldazhanov and co-authors: Zhamantuz at 50°33′00.4″ N, 77°51′32.8″ E; Kyzylkuduk at 50°31′55.3″ N, 77°56′51.7″ E.",
    },
  },
];

/** @deprecated Use `routes`; retained for existing imports. */
export const GOOGLE_ROUTES = routes;
