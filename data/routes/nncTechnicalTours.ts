import type { Lang } from "@/components/i18n/translations";

export type LocalizedTechnicalTourText = Record<Lang, string>;

export type TechnicalTourScheduleItem = {
  time: string;
  description: LocalizedTechnicalTourText;
};

export type TechnicalTourResearchObject = {
  name: LocalizedTechnicalTourText;
  description: LocalizedTechnicalTourText;
};

export type TechnicalTourSource = {
  label: LocalizedTechnicalTourText;
  url: string;
};

export type NncTechnicalTour = {
  id: string;
  number: number;
  title: LocalizedTechnicalTourText;
  date: LocalizedTechnicalTourText;
  departureTime: string;
  summary: LocalizedTechnicalTourText;
  researchObjects: TechnicalTourResearchObject[];
  schedule: TechnicalTourScheduleItem[];
  meetingPoint: LocalizedTechnicalTourText;
  documents: LocalizedTechnicalTourText[];
  restrictions: LocalizedTechnicalTourText[];
  sources: TechnicalTourSource[];
};

export const NNC_STS_2025_URL =
  "https://www.nnc.kz/ru/conferences/xi-mejdunarodnaya-konferenciya-semipalatinskiy-ispytatelnyy-poligon-nasledie-i-perspektivy-razvitiya-nauchno-tehnicheskogo-potenciala";
export const STS_2025_URL = "https://sts2025.nnc.kz/";
export const MOLDZHANOV_2026_ARTICLE_URL =
  "https://tlh.kz/";

const date: LocalizedTechnicalTourText = {
  ru: "9 октября 2025 года",
  kk: "2025 жылғы 9 қазан",
  en: "9 October 2025",
};

const meetingPoint: LocalizedTechnicalTourText = {
  ru: "По буклету конференции 2025 года: гостиница «Маяк», коттедж НЯЦ, жилой фонд, КПП.",
  kk: "2025 жылғы конференция буклеті бойынша: «Маяк» қонақүйі, ҰЯО коттеджі, тұрғын үй қоры, бақылау-өткізу пункті.",
  en: "According to the 2025 conference booklet: Mayak Hotel, the NNC cottage, residential accommodation, and the checkpoint.",
};

const passport: LocalizedTechnicalTourText = {
  ru: "Оригинал паспорта или удостоверения личности.",
  kk: "Паспорттың немесе жеке куәліктің түпнұсқасы.",
  en: "Original passport or identity card.",
};

const conferenceSource: TechnicalTourSource = {
  label: {
    ru: "Архив программы конференции STS-2025",
    kk: "STS-2025 конференциясы бағдарламасының мұрағаты",
    en: "STS-2025 conference programme archive",
  },
  url: STS_2025_URL,
};

const articleSource: TechnicalTourSource = {
  label: {
    ru: "Молдажанов и др. (2026), таблица 4",
    kk: "Молдажанов және т.б. (2026), 4-кесте",
    en: "Moldazhanov et al. (2026), Table 4",
  },
  url: MOLDZHANOV_2026_ARTICLE_URL,
};

export const NNC_TECHNICAL_TOURS: NncTechnicalTour[] = [
  {
    id: "sts-2025-tour-1",
    number: 1,
    title: {
      ru: "Реакторный комплекс ИГР и Опытное поле",
      kk: "ИГР реактор кешені және Тәжірибелік алаң",
      en: "IGR reactor complex and the Experimental Field",
    },
    date,
    departureTime: "08:00",
    summary: {
      ru: "Архивный технический тур к уникальному исследовательскому реактору ИГР и объектам первой испытательной площадки СИП.",
      kk: "ИГР бірегей зерттеу реакторына және ССП алғашқы сынақ алаңының нысандарына арналған мұрағаттық техникалық тур.",
      en: "An archived technical tour to the unique IGR research reactor and facilities of the STS's first test site.",
    },
    researchObjects: [
      {
        name: { ru: "Реакторный комплекс ИГР", kk: "ИГР реактор кешені", en: "IGR reactor complex" },
        description: {
          ru: "Импульсный графитовый реактор, предназначенный для исследований поведения реакторного топлива и материалов в экстремальных условиях.",
          kk: "Экстремалды жағдайларда реактор отыны мен материалдарының қасиеттерін зерттеуге арналған импульстік графит реакторы.",
          en: "A pulsed graphite reactor used to study reactor fuel and materials under extreme conditions.",
        },
      },
      {
        name: { ru: "Опытное поле", kk: "Тәжірибелік алаң", en: "Experimental Field" },
        description: {
          ru: "Первая площадка ядерных испытаний СИП. Программа включала сооружение «Гусь», эпицентр, «Метро» и озеро ТНТ.",
          kk: "ССП-ның алғашқы ядролық сынақ алаңы. Бағдарламаға «Гусь» құрылысы, эпицентр, «Метро» және ТНТ көлі кірді.",
          en: "The STS's first nuclear test site. The programme included the Gus structure, epicentre, Metro, and TNT Lake.",
        },
      },
    ],
    schedule: [
      { time: "08:00–09:30", description: { ru: "Курчатов — реакторный комплекс ИГР", kk: "Курчатов — ИГР реактор кешені", en: "Kurchatov — IGR reactor complex" } },
      { time: "09:30–10:20", description: { ru: "Посещение реакторного комплекса ИГР", kk: "ИГР реактор кешеніне бару", en: "Visit to the IGR reactor complex" } },
      { time: "10:20–12:30", description: { ru: "Опытное поле: «Гусь», эпицентр, «Метро», озеро ТНТ", kk: "Тәжірибелік алаң: «Гусь», эпицентр, «Метро», ТНТ көлі", en: "Experimental Field: Gus, epicentre, Metro, TNT Lake" } },
      { time: "12:30–14:00", description: { ru: "Возвращение в Курчатов", kk: "Курчатовқа қайту", en: "Return to Kurchatov" } },
    ],
    meetingPoint,
    documents: [passport],
    restrictions: [
      { ru: "Закрытая одежда и обувь.", kk: "Жабық киім мен аяқ киім.", en: "Closed clothing and footwear." },
      { ru: "Фото- и видеосъёмка, а также использование телефона запрещены.", kk: "Фото және бейнетүсірілімге, сондай-ақ телефон пайдалануға тыйым салынады.", en: "Photography, video recording, and phone use are prohibited." },
    ],
    sources: [
      { label: { ru: "НЯЦ РК: комплекс ИГР", kk: "ҚР ҰЯО: ИГР кешені", en: "NNC RK: IGR complex" }, url: "https://www.nnc.kz/ru/facilities/igr.html" },
      conferenceSource,
      articleSource,
    ],
  },
  {
    id: "sts-2025-tour-2",
    number: 2,
    title: {
      ru: "Комплекс исследовательских реакторов «Байкал-1»",
      kk: "«Байкал-1» зерттеу реакторлары кешені",
      en: "Baikal-1 research reactor complex",
    },
    date,
    departureTime: "07:30",
    summary: {
      ru: "Архивный технический тур по комплексу, где в 1962–1991 годах проводились исследования ядерных ракетных двигателей и энергетических установок.",
      kk: "1962–1991 жылдары ядролық зымыран қозғалтқыштары мен энергетикалық қондырғылар зерттелген кешен бойынша мұрағаттық техникалық тур.",
      en: "An archived technical tour of the complex where nuclear rocket engines and power systems were researched from 1962 to 1991.",
    },
    researchObjects: [
      { name: { ru: "Комплекс «Байкал-1»", kk: "«Байкал-1» кешені", en: "Baikal-1 complex" }, description: { ru: "Исследовательский комплекс с реакторными и стендовыми установками.", kk: "Реакторлық және стендтік қондырғылары бар зерттеу кешені.", en: "A research complex containing reactor and test-stand facilities." } },
      { name: { ru: "Реактор ИВГ.1М", kk: "ИВГ.1М реакторы", en: "IVG.1M reactor" }, description: { ru: "Высокотемпературный исследовательский реактор, используемый для испытаний топлива и конструкционных материалов.", kk: "Отын мен конструкциялық материалдарды сынауға арналған жоғары температуралы зерттеу реакторы.", en: "A high-temperature research reactor used to test fuel and structural materials." } },
      { name: { ru: "Стенд «Ангара»", kk: "«Ангара» стенді", en: "Angara test stand" }, description: { ru: "Экспериментальный стенд комплекса «Байкал-1».", kk: "«Байкал-1» кешенінің эксперименттік стенді.", en: "An experimental test stand at the Baikal-1 complex." } },
      { name: { ru: "Материаловедческий комплекс", kk: "Материалтану кешені", en: "Materials science complex" }, description: { ru: "Лабораторная база для исследования облучённых материалов.", kk: "Сәулеленген материалдарды зерттеуге арналған зертханалық база.", en: "Laboratory facilities for studying irradiated materials." } },
    ],
    schedule: [
      { time: "07:30–09:30", description: { ru: "Курчатов — комплекс «Байкал-1»", kk: "Курчатов — «Байкал-1» кешені", en: "Kurchatov — Baikal-1 complex" } },
      { time: "09:30–12:00", description: { ru: "Пультовая, ИВГ.1М, «Ангара», материаловедческий комплекс", kk: "Басқару пульті, ИВГ.1М, «Ангара», материалтану кешені", en: "Control room, IVG.1M, Angara, materials science complex" } },
      { time: "12:00–14:00", description: { ru: "Возвращение в Курчатов", kk: "Курчатовқа қайту", en: "Return to Kurchatov" } },
    ],
    meetingPoint,
    documents: [passport],
    restrictions: [
      { ru: "Фото- и видеосъёмка, а также использование телефона запрещены.", kk: "Фото және бейнетүсірілімге, сондай-ақ телефон пайдалануға тыйым салынады.", en: "Photography, video recording, and phone use are prohibited." },
    ],
    sources: [
      { label: { ru: "Филиал «Байкал» НЯЦ РК", kk: "ҚР ҰЯО «Байкал» филиалы", en: "NNC RK Baikal branch" }, url: "https://www.baikal.kz/" },
      { label: { ru: "НЯЦ РК: реактор ИВГ.1М", kk: "ҚР ҰЯО: ИВГ.1М реакторы", en: "NNC RK: IVG.1M reactor" }, url: "https://www.nnc.kz/ru/facilities/ivg1m.html" },
      conferenceSource,
      articleSource,
    ],
  },
  {
    id: "sts-2025-tour-3",
    number: 3,
    title: {
      ru: "Научно-технические объекты Курчатова",
      kk: "Курчатовтың ғылыми-техникалық нысандары",
      en: "Scientific and technical facilities in Kurchatov",
    },
    date,
    departureTime: "08:30",
    summary: {
      ru: "Архивный городской технический тур по исследовательским установкам, лабораториям и Экспозиционному залу истории СИП.",
      kk: "Зерттеу қондырғылары, зертханалар және ССП тарихының Экспозициялық залы бойынша мұрағаттық қалалық техникалық тур.",
      en: "An archived city technical tour of research installations, laboratories, and the STS history exhibition hall.",
    },
    researchObjects: [
      { name: { ru: "«Меридиан-2»", kk: "«Меридиан-2»", en: "Meridian-2" }, description: { ru: "Экспериментальный комплекс Института радиационной безопасности и экологии.", kk: "Радиациялық қауіпсіздік және экология институтының эксперименттік кешені.", en: "An experimental complex of the Institute of Radiation Safety and Ecology." } },
      { name: { ru: "Центр компетенций в области водородной энергетики", kk: "Сутегі энергетикасы саласындағы құзыреттер орталығы", en: "Hydrogen energy competence centre" }, description: { ru: "Исследовательская инфраструктура для технологий производства, хранения и применения водорода.", kk: "Сутегіні өндіру, сақтау және қолдану технологияларына арналған зерттеу инфрақұрылымы.", en: "Research infrastructure for hydrogen production, storage, and use technologies." } },
      { name: { ru: "Стенд EAGLE", kk: "EAGLE стенді", en: "EAGLE test stand" }, description: { ru: "Экспериментальная установка для исследований тяжёлых аварий реакторов.", kk: "Реакторлардың ауыр апаттарын зерттеуге арналған эксперименттік қондырғы.", en: "An experimental facility for severe reactor accident research." } },
      { name: { ru: "Токамак КТМ", kk: "КТМ токамагы", en: "KTM tokamak" }, description: { ru: "Казахстанский материаловедческий токамак для исследований материалов будущих термоядерных реакторов.", kk: "Болашақ термоядролық реакторлар материалдарын зерттеуге арналған Қазақстандық материалтану токамагы.", en: "The Kazakhstan Material Testing Tokamak for studying materials for future fusion reactors." } },
      { name: { ru: "Экспозиционный зал истории СИП", kk: "ССП тарихының Экспозициялық залы", en: "STS history exhibition hall" }, description: { ru: "Экспозиция об истории испытаний, научных исследованиях и современном состоянии территории.", kk: "Сынақтар тарихы, ғылыми зерттеулер және аумақтың қазіргі жағдайы туралы экспозиция.", en: "An exhibition on the history of testing, scientific research, and the territory's present condition." } },
      { name: { ru: "Лабораторный корпус №27", kk: "№27 зертханалық корпус", en: "Laboratory Building No. 27" }, description: { ru: "Лабораторный объект, включённый в программу технического тура STS-2025.", kk: "STS-2025 техникалық туры бағдарламасына енгізілген зертханалық нысан.", en: "A laboratory facility included in the STS-2025 technical tour programme." } },
    ],
    schedule: [
      { time: "08:30–09:40", description: { ru: "Посещение «Меридиан-2»", kk: "«Меридиан-2» нысанына бару", en: "Visit to Meridian-2" } },
      { time: "09:40–10:25", description: { ru: "Центр компетенций в области водородной энергетики", kk: "Сутегі энергетикасы саласындағы құзыреттер орталығы", en: "Hydrogen energy competence centre" } },
      { time: "10:25–11:20", description: { ru: "Стенд EAGLE", kk: "EAGLE стенді", en: "EAGLE test stand" } },
      { time: "11:20–12:30", description: { ru: "Токамак КТМ", kk: "КТМ токамагы", en: "KTM tokamak" } },
      { time: "12:30–14:00", description: { ru: "Обед", kk: "Түскі ас", en: "Lunch" } },
      { time: "14:20–15:00", description: { ru: "Экспозиционный зал истории СИП", kk: "ССП тарихының Экспозициялық залы", en: "STS history exhibition hall" } },
      { time: "15:10–15:40", description: { ru: "Лабораторный корпус №27", kk: "№27 зертханалық корпус", en: "Laboratory Building No. 27" } },
    ],
    meetingPoint,
    documents: [passport],
    restrictions: [
      { ru: "В буклете дополнительные требования к одежде и запреты не указаны. Это не отменяет действующие правила доступа к объектам НЯЦ РК.", kk: "Буклетте киімге қойылатын қосымша талаптар мен тыйымдар көрсетілмеген. Бұл ҚР ҰЯО нысандарына кірудің қолданыстағы қағидаларын жоймайды.", en: "The booklet does not specify additional clothing requirements or prohibitions. This does not override current access rules for NNC RK facilities." },
    ],
    sources: [
      { label: { ru: "НЯЦ РК: Институт атомной энергии", kk: "ҚР ҰЯО: Атом энергиясы институты", en: "NNC RK: Institute of Atomic Energy" }, url: "https://www.nnc.kz/ru/setup/igr_dep.html" },
      { label: { ru: "НЯЦ РК: токамак КТМ", kk: "ҚР ҰЯО: КТМ токамагы", en: "NNC RK: KTM tokamak" }, url: "https://www.nnc.kz/ru/facilities/ktm.html" },
      conferenceSource,
      articleSource,
    ],
  },
];
