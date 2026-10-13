import type { Lang } from "@/components/i18n/translations";

export type LocalizedText = Record<Lang, string>;

export type PublicationKind = "peer_reviewed" | "manuscript" | "institutional" | "reference_portal";

export type PublicationEntry = {
  id: string;
  kind: PublicationKind;
  authors?: string;
  year: string;
  title: LocalizedText;
  summary: LocalizedText;
  doi?: string;
  url?: string;
  pdfUrl?: string;
};

/**
 * Sources explicitly used in the project (PLOS figures, footer links, map catalog).
 * No fabricated bibliographic entries.
 */
export const PUBLICATIONS_CATALOG: PublicationEntry[] = [
  {
    id: "panitskiy-2023-plos",
    kind: "peer_reviewed",
    authors: "Panitskiy A. et al.",
    year: "2023",
    title: {
      ru: "Bioaccumulation of radionuclides in hoofed animals inhabiting the Semipalatinsk Test Site",
      kk: "Bioaccumulation of radionuclides in hoofed animals inhabiting the Semipalatinsk Test Site",
      en: "Bioaccumulation of radionuclides in hoofed animals inhabiting the Semipalatinsk Test Site",
    },
    summary: {
      ru: "Открытая статья PLOS ONE — источник обзорной карты g001 в каталоге. Четыре карты удельной активности относятся к отдельной статье Молдажанова и соавторов.",
      kk: "Ашық PLOS ONE мақаласы каталогтағы g001 шолу картасының дереккөзі. Меншікті белсенділіктің төрт картасы Молдажанов пен бірлескен авторлардың бөлек мақаласына жатады.",
      en: "The open-access PLOS ONE paper is the source of the catalogue's g001 overview map. The four specific-activity maps belong to a separate paper by Moldazhanov and co-authors.",
    },
    doi: "10.1371/journal.pone.0294632",
    url: "https://doi.org/10.1371/journal.pone.0294632",
  },
  {
    id: "moldazhanov-2026-radiation-safety-tourists",
    kind: "peer_reviewed",
    authors: "Молдажанов Марат Бетимбаевич; Javier Martínez-Falcó; Дүйскенова Райгүл Жеңісқызы",
    year: "2026",
    title: {
      ru: "Разработка рекомендаций по обеспечению радиационной безопасности туристов на маршрутах по объектам Семипалатинского испытательного полигона",
      kk: "Семей сынақ полигоны нысандары бойынша туристік маршруттарда туристердің радиациялық қауіпсіздігін қамтамасыз ету жөніндегі ұсынымдарды әзірлеу",
      en: "Development of recommendations for ensuring the radiation safety of tourists on routes to facilities of the Semipalatinsk Test Site",
    },
    summary: {
      ru: "Статья опубликована в журнале «Туризм, досуг и гостеприимство», 2026, №3(14), с. 28–45. В таблице 4 систематизированы три технических тура STS-2025.",
      kk: "Мақала «Туризм, досуг и гостеприимство» журналында жарияланған, 2026, №3(14), 28–45-бб. 4-кестеде STS-2025 үш техникалық туры жүйеленген.",
      en: "Published in Tourism, Leisure and Hospitality, 2026, No. 3(14), pp. 28–45. Table 4 documents the three STS-2025 technical tours.",
    },
    doi: "10.59649/2959-5185-2026-3-28-45",
    url: "https://tlh.kz/",
    pdfUrl: "/pdf/moldazhanov-2026-radiation-safety-tourists.pdf",
  },
  {
    id: "nnc-sts",
    kind: "institutional",
    year: "—",
    title: {
      ru: "Национальный ядерный центр РК — портал СИП / интерактивный атлас",
      kk: "ҚР Ұлттық ядролық орталығы — СИП порталы / интерактивті атлас",
      en: "National Nuclear Center of Kazakhstan — STS portal / interactive atlas",
    },
    summary: {
      ru: "Официальные материалы и карты НЯЦ. Координаты маркеров площадок в проекте согласованы с экспортом KML/KMZ того же слоя Google My Maps, что на sts.nnc.kz.",
      kk: "НЯО ресми материалдары мен карталары. Алаң маркерлерінің координаттары sts.nnc.kz сайтындағы Google My Maps қабатының KML/KMZ экспортымен сәйкес.",
      en: "Official NNC materials and maps. Pad marker coordinates match the KML/KMZ export of the same Google My Maps layer as on sts.nnc.kz.",
    },
    url: "https://sts.nnc.kz/?load=main",
  },
  {
    id: "toporova-2021-dose-methods",
    kind: "peer_reviewed",
    authors: "Топорова А.В., Бакланова Ю.В., Стрильчук Ю.Г., Шатров А.Н.",
    year: "2021",
    title: {
      ru: "Обзор методических указаний и рекомендаций по оценке годовой эффективной дозы человека при проживании на радиоактивно загрязненной территории",
      kk: "Радиоактивті ластанған аумақта тұрған кездегі адамның жылдық тиімді дозасын бағалау жөніндегі әдістемелік нұсқаулар мен ұсынымдарға шолу",
      en: "Review of methodic instructions and recommendations for evaluation of annual effective dose to human being in cases of living at radioactive contaminated areas",
    },
    summary: {
      ru: "Вестник НЯЦ РК, 2021: обзор подходов, коэффициентов и методик оценки дозовых нагрузок для населения на радиоактивно загрязненных территориях, включая контекст СИП.",
      kk: "NNC RK Bulletin, 2021: радиоактивті ластанған аумақтарда, соның ішінде СИП контекстінде, дозалық жүктемелерді бағалау әдістері мен коэффициенттеріне шолу.",
      en: "NNC RK Bulletin, 2021: review of methods, coefficients, and approaches for dose assessment in radioactively contaminated territories, including the STS context.",
    },
    doi: "10.52676/1729-7885-2021-2-57-69",
    url: "https://journals.nnc.kz/jour/article/view/352",
    pdfUrl: "/pdf/352-801-1-SM.pdf",
  },
  {
    id: "subbotin-2023-atomic-lake-dose",
    kind: "peer_reviewed",
    authors: "Субботин С.Б., Айдарханов А.О., Романенко Е.В., Топорова А.В., Супрунов В.И., Актаев М.Р.",
    year: "2023",
    title: {
      ru: "Оценка дозовых нагрузок для различных поведенческих сценариев на территории «Атомного озера»",
      kk: "«Атом көлінің» аумағындағы әртүрлі мінез-құлық кезеңдері үшін дозалық жүктемелерді бағалау",
      en: "Assessment of dose loads for various behavioral scenarios on the territory of the “Atomic Lake”",
    },
    summary: {
      ru: "Вестник НЯЦ РК, 2023: расчет дозовых нагрузок для сценариев «турист», «персонал» и «фермер» на территории «Атомного озера» с учетом Cs-137, Sr-90, Pu-239+240, Am-241 и трития.",
      kk: "NNC RK Bulletin, 2023: «Атом көлі» аумағында турист, персонал және фермер сценарийлері үшін Cs-137, Sr-90, Pu-239+240, Am-241 және тритийді ескеретін дозалық бағалау.",
      en: "NNC RK Bulletin, 2023: dose-load assessment for tourist, staff, and farmer scenarios at Atomic Lake, considering Cs-137, Sr-90, Pu-239+240, Am-241, and tritium.",
    },
    doi: "10.52676/1729-7885-2023-1-55-60",
    url: "https://journals.nnc.kz/jour/article/view/467",
    pdfUrl: "/pdf/467-1762-1-PB.pdf",
  },
  {
    id: "mukusheva-2024-monitoring-concepts",
    kind: "peer_reviewed",
    authors: "Мукушева М.К., Фесенко С.В.",
    year: "2024",
    title: {
      ru: "Анализ концепций радиоэкологического мониторинга в районах расположения объектов ядерной энергетики",
      kk: "Ядролық энергетика объектілері орналасқан аудандардағы радиоэкологиялық мониторинг тұжырымдамаларын талдау",
      en: "Analysis of radioecological monitoring concepts in areas of nuclear energy facilities",
    },
    summary: {
      ru: "Вестник НЯЦ РК, 2024: анализ международных подходов к радиационному контролю и радиоэкологическому мониторингу в районах размещения объектов атомной энергетики.",
      kk: "NNC RK Bulletin, 2024: атом энергетикасы объектілері орналасқан аудандардағы радиациялық бақылау мен радиоэкологиялық мониторинг бойынша халықаралық тәсілдерге талдау.",
      en: "NNC RK Bulletin, 2024: analysis of international approaches to radiation control and radioecological monitoring around nuclear energy facilities.",
    },
    doi: "10.52676/1729-7885-2024-2-128-134",
    url: "https://journals.nnc.kz/jour/article/view/658",
    pdfUrl: "/pdf/658-2754-1-PB.pdf",
  },
  {
    id: "nnc-main",
    kind: "institutional",
    year: "—",
    title: {
      ru: "Национальный ядерный центр Республики Казахстан — nnc.kz",
      kk: "Қазақстан Республикасының Ұлттық ядролық орталығы — nnc.kz",
      en: "National Nuclear Center of the Republic of Kazakhstan — nnc.kz",
    },
    summary: {
      ru: "Институциональный источник, на который ссылаются блок «О СИП» и подвал сайта.",
      kk: "«СИП туралы» блогы мен сайт төменгі бөлігінде сілтеме жасалатын институциялық дереккөз.",
      en: "Institutional source linked from the About STS block and site footer.",
    },
    url: "https://www.nnc.kz",
  },
  {
    id: "adilet",
    kind: "reference_portal",
    year: "—",
    title: {
      ru: "Нормативно-правовые акты РК — портал Adilet",
      kk: "ҚР нормативтік-құқықтық актілері — Adilet порталы",
      en: "Legal acts of Kazakhstan — Adilet portal",
    },
    summary: {
      ru: "Публичный доступ к законодательству. Для обязательных формулировок по допуску используйте актуальные тексты НПА.",
      kk: "Заңнамаға қоғамдық қолжетімділік. Кіру туралы міндетті формулировкалар үшін НҚА-ның өзекті мәтіндерін қолданыңыз.",
      en: "Public legislation database. For binding access rules, use current official texts.",
    },
    url: "https://adilet.zan.kz",
  },
  {
    id: "iaea",
    kind: "reference_portal",
    year: "—",
    title: {
      ru: "Международное агентство по атомной энергии (МАГАТЭ / IAEA)",
      kk: "Халықаралық атом энергиясы агенттігі (МАГАТЭ / IAEA)",
      en: "International Atomic Energy Agency (IAEA)",
    },
    summary: {
      ru: "Международный справочник по ядерной безопасности; ссылка есть в образовательных блоках сайта.",
      kk: "Ядролық қауіпсіздік бойынша халықаралық анықтамалық; сайттың білім беру бөліктерінде сілтеме бар.",
      en: "International reference on nuclear safety; linked from educational sections.",
    },
    url: "https://www.iaea.org",
  },
  {
    id: "unep",
    kind: "reference_portal",
    year: "—",
    title: {
      ru: "Программа ООН по окружающей среде (ЮНЕП / UNEP)",
      kk: "UN Environment Programme (UNEP) / ЮНЕП",
      en: "UN Environment Programme (UNEP)",
    },
    summary: {
      ru: "Может использоваться как вспомогательный международный справочник; не уравнивается с НПА РК и официальными материалами НЯЦ.",
      kk: "Қосымша халықаралық анықтамалық ретінде қолданылуы мүмкін; ҚР НҚА мен НЯЦ ресми материалдарымен бір деңгейде емес.",
      en: "May be used as a supplementary international reference; not equivalent to Kazakhstan’s legal acts or NNC official materials.",
    },
    url: "https://www.unep.org",
  },
  {
    id: "osm",
    kind: "reference_portal",
    year: "—",
    title: {
      ru: "OpenStreetMap (OSM)",
      kk: "OpenStreetMap (OSM)",
      en: "OpenStreetMap (OSM)",
    },
    summary: {
      ru: "Тип источника координат для части точек каталога полноэкранной карты.",
      kk: "Толық экран картасының каталогындағы кейбір нүктелер үшін координат дереккөзінің түрі.",
      en: "Coordinate source type for some fullscreen-map catalog points.",
    },
    url: "https://www.openstreetmap.org",
  },
  {
    id: "wikipedia",
    kind: "reference_portal",
    year: "—",
    title: {
      ru: "Wikipedia",
      kk: "Wikipedia",
      en: "Wikipedia",
    },
    summary: {
      ru: "Может быть указан как тип источника для отдельных подписей; сверяйте с первоисточниками.",
      kk: "Кейбір подписьдер үшін дереккөз түрі ретінде көрсетілуі мүмкін; түпнұсқамен салыстырыңыз.",
      en: "May appear as a source type for some labels; verify against primary sources.",
    },
    url: "https://www.wikipedia.org",
  },
];
