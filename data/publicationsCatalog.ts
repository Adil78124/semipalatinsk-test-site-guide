import type { Lang } from "@/components/i18n/translations";

export type LocalizedText = Record<Lang, string>;

export type PublicationKind = "peer_reviewed" | "institutional" | "reference_portal";

export type PublicationEntry = {
  id: string;
  kind: PublicationKind;
  authors?: string;
  year: string;
  title: LocalizedText;
  summary: LocalizedText;
  doi?: string;
  url?: string;
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
      ru: "Открытый доступ PLOS ONE: обзор СИП, схемы площадок, поля Cs-137, Am-241, Sr-90. Рисунки g001, g002, g003, g004, g006 на сайте взяты из этой статьи.",
      kk: "Open-access PLOS ONE: STS overview, pad schemes, Cs-137, Am-241, Sr-90 fields. Figures g001–g006 on this site come from this paper.",
      en: "Open-access PLOS ONE: STS overview, pad schemes, Cs-137, Am-241, Sr-90 fields. Figures g001, g002, g003, g004, g006 on this site come from this paper.",
    },
    doi: "10.1371/journal.pone.0294632",
    url: "https://doi.org/10.1371/journal.pone.0294632",
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
