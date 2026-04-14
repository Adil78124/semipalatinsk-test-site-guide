import type { Lang } from "@/components/i18n/translations";

/** Авторитетная ссылка для проверки данных (отдельно от координат / Google Maps). */
export type SipSettlementSource = {
  title: string;
  url: string;
};

/** Проверенные населённые пункты для слоёв СИП (координаты по Google Maps). */
export type SipSettlementRecord = {
  /** id подписи на спутнике / дедупликации с каталогом */
  regionalId: string;
  /** id записи в каталоге `MapReferencePoint` */
  catalogId: string;
  lat: number;
  lng: number;
  names: Record<Lang, string>;
  /** Краткий лид для карточки и попапа */
  summary: Record<Lang, string>;
  /** Развёрнутое описание для туристическо-информационной подачи */
  description: Record<Lang, string>;
  /** Исторический или культурный факт */
  interestingFact: Record<Lang, string>;
};

export function googleMapsQueryUrl(lat: number, lng: number): string {
  return `https://www.google.com/maps?q=${lat},${lng}`;
}

export const SIP_SETTLEMENTS: SipSettlementRecord[] = [
  {
    regionalId: "kurchatov",
    catalogId: "settlement-kurchatov",
    lat: 50.756325,
    lng: 78.548329,
    names: { ru: "Курчатов", kk: "Құршатов", en: "Kurchatov" },
    summary: {
      ru: "Научный и административный центр Семипалатинского испытательного полигона и главный отправной пункт для экспедиций по территории СИП.",
      kk: "Семей ядролық сынақ полигонының ғылыми және әкімшілік орталығы, СИП аумағы бойынша экспедициялар үшін негізгі бастапқы нүкте.",
      en: "Scientific and administrative center of the Semipalatinsk Test Site and the main gateway for expeditions across the polygon.",
    },
    description: {
      ru: "Город Курчатов — научный и административный центр Семипалатинского испытательного полигона. Основанный в 1947 году, он служил базой для советской ядерной программы. Сегодня здесь расположен Национальный ядерный центр Республики Казахстан. Город является главным отправным пунктом для научных экспедиций и туристических маршрутов по территории СИП.",
      kk: "Құршатов қаласы — Семей ядролық сынақ полигонының ғылыми және әкімшілік орталығы. 1947 жылы құрылған бұл қала кеңестік ядролық бағдарлама үшін база болды. Бүгінде мұнда Қазақстан Республикасының Ұлттық ядролық орталығы орналасқан. Қала ғылыми экспедициялар мен СИП аумағы бойынша туристік маршруттар үшін басты шығу нүктесі болып табылады.",
      en: "Kurchatov is the scientific and administrative hub of the Semipalatinsk Test Site. Founded in 1947, it served as a base for the Soviet nuclear programme. Today it hosts the National Nuclear Center of the Republic of Kazakhstan and is the principal starting point for scientific expeditions and visitor routes across the STS.",
    },
    interestingFact: {
      ru: "Курчатов долгое время был закрытым городом и не обозначался на картах СССР.",
      kk: "Құршатов ұзақ уақыт жабық қала болып, КСРО карталарында белгіленбеген.",
      en: "For many years Kurchatov was a closed city and did not appear on Soviet maps.",
    },
  },
  {
    regionalId: "kainar",
    catalogId: "settlement-kainar",
    lat: 49.200556,
    lng: 77.384722,
    names: { ru: "Кайнар", kk: "Қайнар", en: "Kainar" },
    summary: {
      ru: "Исторически значимый населённый пункт, пострадавший от ядерных испытаний.",
      kk: "Ядролық сынақтардың әсерін көрген тарихи маңызды елді мекен.",
      en: "A historically significant settlement affected by nuclear testing.",
    },
    description: {
      ru: "Село Кайнар — один из наиболее известных населённых пунктов, пострадавших от воздействия ядерных испытаний. Оно расположено вблизи территории полигона и представляет важный исторический и экологический интерес для исследователей и посетителей региона.",
      kk: "Қайнар ауылы — ядролық сынақтардың әсерінен зардап шеккен ең танымал елді мекендердің бірі. Ол полигон аумағына жақын орналасқан және аймақ зерттеушілері мен қонақтары үшін тарихи және экологиялық тұрғыдан маңызды.",
      en: "Kainar is among the best-known settlements harmed by nuclear testing. It lies near the polygon and holds strong historical and ecological interest for researchers and visitors to the region.",
    },
    interestingFact: {
      ru: "Кайнар считается символом трагических последствий ядерных испытаний и часто упоминается в научных и документальных исследованиях.",
      kk: "Қайнар ядролық сынақтардың трагедиялық салдарларының символы болып саналады және ғылыми мен деректі зерттеулерде жиі аталады.",
      en: "Kainar is often seen as a symbol of the human cost of nuclear testing and appears frequently in scientific and documentary work.",
    },
  },
  {
    regionalId: "dolon",
    catalogId: "settlement-dolon",
    lat: 50.659167,
    lng: 79.306944,
    names: { ru: "Долонь", kk: "Долон", en: "Dolon" },
    summary: {
      ru: "Один из наиболее пострадавших населённых пунктов после первого ядерного испытания 1949 года.",
      kk: "1949 жылғы алғашқы ядролық сынақтан ең көп зардап шеккен елді мекендердің бірі.",
      en: "One of the settlements most affected by the first nuclear test in 1949.",
    },
    description: {
      ru: "Село Долонь стало одним из наиболее пострадавших населённых пунктов после первого ядерного испытания СССР в 1949 году. Оно расположено на пути распространения радиоактивного облака и занимает особое место в истории полигона.",
      kk: "Долон ауылы КСРО-дағы 1949 жылғы алғашқы ядролық сынақтан кейін ең көп зардап шеккен елді мекендердің бірі болды. Ол радиоактивті бұлттың таралу жолында орналасқан және полигон тарихында ерекше орын алады.",
      en: "Dolon was among the settlements hardest hit after the USSR’s first nuclear test in 1949. It lay in the path of the radioactive plume and occupies a special place in the history of the test site.",
    },
    interestingFact: {
      ru: "Сегодня Долонь является объектом изучения радиационного наследия и важной точкой для научных исследований.",
      kk: "Бүгінде Долон радиациялық мұраны зерттеу нысаны және ғылыми зерттеулер үшін маңызды нүкте болып табылады.",
      en: "Today Dolon is a focus for studying radiation legacies and an important site for scientific research.",
    },
  },
  {
    regionalId: "saryzhal",
    catalogId: "settlement-saryzhal",
    lat: 49.6,
    lng: 78.738333,
    names: { ru: "Сарыжал", kk: "Сарыжал", en: "Saryzhal" },
    summary: {
      ru: "Населённый пункт, расположенный вблизи территории СИП и представляющий интерес для радиоэкологических исследований.",
      kk: "СИП аумағына жақын орналасқан және радиоэкологиялық зерттеулер үшін маңызды елді мекен.",
      en: "A settlement near the test site of interest for radioecological research.",
    },
    description: {
      ru: "Село Сарыжал расположено на территории, прилегающей к Семипалатинскому испытательному полигону. Оно представляет интерес для изучения влияния ядерных испытаний на окружающую среду и жизнь местного населения.",
      kk: "Сарыжал ауылы Семей ядролық сынақ полығына жақын аумақта орналасқан. Ядролық сынақтардың қоршаған орта мен жергілікті халық өміріне ықпалын зерттеу үшін маңызды.",
      en: "Saryzhal lies on land adjoining the Semipalatinsk Test Site. It is relevant for understanding how nuclear testing affected the environment and local communities.",
    },
    interestingFact: {
      ru: "Регион вокруг Сарыжала используется в научных исследованиях по радиоэкологии и восстановлению экосистем.",
      kk: "Сарыжал айналасындағы аймақ радиоэкология мен экожүйелерді қалпына келтіру бойынша ғылыми зерттеулерде пайдаланылады.",
      en: "The area around Saryzhal features in research on radioecology and ecosystem recovery.",
    },
  },
  {
    regionalId: "karaaul",
    catalogId: "settlement-karaaul",
    lat: 48.943889,
    lng: 79.262222,
    names: { ru: "Карааул", kk: "Қарауыл", en: "Karaaul" },
    summary: {
      ru: "Административный центр Абайского района и родина великого казахского поэта Абая Кунанбаева.",
      kk: "Абай ауданының әкімшілік орталығы және ұлы қазақ ақыны Абай Құнанбайұлының туған жері.",
      en: "Administrative center of the Abai District and birthplace of the great Kazakh poet Abai Kunanbayev.",
    },
    description: {
      ru: "Карааул — административный центр Абайского района и родина великого казахского поэта и мыслителя Абая Кунанбаева. Населённый пункт играет важную роль в культурной и исторической жизни региона и может служить отправной точкой для изучения наследия Абая и истории Восточного Казахстана.",
      kk: "Қарауыл — Абай ауданының әкімшілік орталығы және ұлы қазақ ақыны мен ойшылы Абай Құнанбайұлының туған жері. Бұл елді мекен аймақтың мәдени және тарихи өмірінде маңызды рөл атқарады және Абай мұрасын және Шығыс Қазақстан тарихын зерттеудің бастапқы нүктесі бола алады.",
      en: "Karaaul is the administrative center of Abai District and the birthplace of the great Kazakh poet and thinker Abai Kunanbayev. It plays a major role in the region’s cultural and historical life and is a natural starting point for exploring Abai’s legacy and the history of eastern Kazakhstan.",
    },
    interestingFact: {
      ru: "Недалеко от Карааула расположен мемориальный комплекс Абая — одно из значимых культурных мест Казахстана.",
      kk: "Қарауылға жақын Абайға арналған мемориалдық кешен орналасқан — Қазақстанның маңызды мәдени орындарының бірі.",
      en: "Near Karaaul lies the Abai memorial complex — one of Kazakhstan’s important cultural landmarks.",
    },
  },
];
