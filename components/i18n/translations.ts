export type Lang = "ru" | "kk" | "en";

export type TranslationKey =
  | "brand"
  | "nav.home"
  | "nav.sip"
  | "nav.map"
  | "nav.zones"
  | "nav.about"
  | "nav.researchMaps"
  | "nav.maps"
  | "nav.guide"
  | "nav.safety"
  | "nav.contacts"
  | "nav.more"
  | "nav.openMenu"
  | "nav.closeMenuDialog"
  | "map.sidebar.minimizePanel"
  | "map.sidebar.restorePanel"
  | "map.leaflet.legendTitle"
  | "map.leaflet.legendSchematic"
  | "map.fullPage.modePoi"
  | "map.fullPage.modeRoutes"
  | "map.fullPage.routesGoogleBanner"
  | "header.searchPlaceholder"
  | "header.explore"
  | "search.noResults"
  | "hero.badge"
  | "hero.titleLine1"
  | "hero.titleAccent"
  | "hero.subtitle"
  | "hero.openMap"
  | "hero.viewRoutes"
  | "hero.imageAlt"
  | "routes.kicker"
  | "routes.title"
  | "routes.lead"
  | "routes.disclaimer"
  | "routes.simple.kicker"
  | "routes.simple.title"
  | "routes.simple.lead"
  | "routes.simple.cardLabel"
  | "routes.simple.startLabel"
  | "routes.simple.destinationLabel"
  | "routes.simple.importantLabel"
  | "routes.simple.locationsLabel"
  | "routes.simple.openMaps"
  | "routes.simple.photoSourceLabel"
  | "routes.simple.sourceLabel"
  | "routes.card.kurchatov.type"
  | "routes.card.kurchatov.title"
  | "routes.card.kurchatov.desc"
  | "routes.card.kurchatov.access"
  | "routes.card.kurchatov.focus"
  | "routes.card.atomic.type"
  | "routes.card.atomic.title"
  | "routes.card.atomic.desc"
  | "routes.card.atomic.access"
  | "routes.card.atomic.focus"
  | "routes.card.degelen.type"
  | "routes.card.degelen.title"
  | "routes.card.degelen.desc"
  | "routes.card.degelen.access"
  | "routes.card.degelen.focus"
  | "routes.card.balapan.type"
  | "routes.card.balapan.title"
  | "routes.card.balapan.desc"
  | "routes.card.balapan.access"
  | "routes.card.balapan.focus"
  | "routes.card.fallout.type"
  | "routes.card.fallout.title"
  | "routes.card.fallout.desc"
  | "routes.card.fallout.access"
  | "routes.card.fallout.focus"
  | "sip.kicker"
  | "sip.title"
  | "sip.lead"
  | "sip.card.where.title"
  | "sip.card.where.body"
  | "sip.card.history.title"
  | "sip.card.history.body"
  | "sip.card.why.title"
  | "sip.card.why.body"
  | "sip.heterogeneity.title"
  | "sip.heterogeneity.body"
  | "sip.heterogeneity.b1"
  | "sip.heterogeneity.b1s"
  | "sip.heterogeneity.b2"
  | "sip.heterogeneity.b2s"
  | "sip.heterogeneity.b3"
  | "sip.heterogeneity.b3s"
  | "sip.note"
  | "zones.kicker"
  | "zones.title"
  | "zones.lead"
  | "zones.card.routed.label"
  | "zones.card.routed.title"
  | "zones.card.routed.desc"
  | "zones.card.routed.status"
  | "zones.card.restricted.label"
  | "zones.card.restricted.title"
  | "zones.card.restricted.desc"
  | "zones.card.restricted.status"
  | "zones.card.closed.label"
  | "zones.card.closed.title"
  | "zones.card.closed.desc"
  | "zones.card.closed.status"
  | "zones.disclaimerTitle"
  | "zones.disclaimerBody"
  | "zones.sourcesTitle"
  | "zones.source.nnc"
  | "zones.source.sts"
  | "zones.source.adilet"
  | "zones.source.iaea"
  | "zones.source.unep"
  | "zones.source.plos"
  | "guide.kicker"
  | "guide.title"
  | "guide.lead"
  | "guide.card1.t"
  | "guide.card1.b"
  | "guide.card2.t"
  | "guide.card2.b"
  | "guide.card3.t"
  | "guide.card3.b"
  | "guide.rules.title"
  | "guide.rules.r1"
  | "guide.rules.r2"
  | "guide.rules.r3"
  | "guide.rules.r4"
  | "guide.rules.r5"
  | "guide.rules.r6"
  | "guide.rules.note"
  | "science.kicker"
  | "science.title"
  | "science.lead"
  | "science.c1.t"
  | "science.c1.b"
  | "science.c2.t"
  | "science.c2.b"
  | "science.c3.t"
  | "science.c3.b"
  | "science.important"
  | "map.kicker"
  | "map.titleLine1"
  | "map.titleLine2"
  | "map.subtitle"
  | "map.feature.layers.title"
  | "map.feature.layers.desc"
  | "map.feature.gps.title"
  | "map.feature.gps.desc"
  | "map.fullscreen"
  | "map.modal.kind.zone"
  | "map.modal.kind.route"
  | "map.cardTitle"
  | "map.cardLead"
  | "map.cardRelief"
  | "map.shortDisclaimer"
  | "map.listShowsTitle"
  | "map.listShows1"
  | "map.listShows2"
  | "map.listShows3"
  | "map.listShows4"
  | "map.listNotReplacesTitle"
  | "map.listNotReplaces1"
  | "map.listNotReplaces2"
  | "map.listNotReplaces3"
  | "map.listNotReplaces4"
  | "map.listNotReplaces5"
  | "map.attributionShort"
  | "map.layer.standard"
  | "map.layer.topo"
  | "map.layer.cartoLight"
  | "map.layer.satellite"
  | "map.toolbar.zoom"
  | "map.toolbar.zoomIn"
  | "map.toolbar.zoomOut"
  | "map.toolbar.basemap"
  | "map.detail.placeholder"
  | "map.overlay.zones"
  | "map.overlay.routes"
  | "map.overlay.poi"
  | "map.popup.location"
  | "map.popup.avgElevation"
  | "map.popup.elevationRange"
  | "map.popup.elevationTitle"
  | "map.popup.elevationValue"
  | "map.popup.elevationHint"
  | "map.points.sourceLabel"
  | "map.points.more"
  | "map.points.approx"
  | "map.points.estimatedPosition"
  | "map.points.kmlExport"
  | "map.points.filtersTitle"
  | "map.points.close"
  | "map.points.category.overview"
  | "map.points.category.testSite"
  | "map.points.category.sipObject"
  | "map.points.category.excavation"
  | "map.points.category.radiological"
  | "map.catalog.filtersTitle"
  | "map.sidebar.openPanel"
  | "map.sidebar.openEmbedded"
  | "map.sidebar.collapseTools"
  | "map.sidebar.closeOverlays"
  | "map.catalog.searchPlaceholder"
  | "map.catalog.statsTitle"
  | "map.catalog.statsTotal"
  | "map.catalog.statsShown"
  | "map.catalog.filter.settlement"
  | "map.catalog.filter.test_site"
  | "map.catalog.filter.landmark"
  | "map.catalog.type.settlement"
  | "map.catalog.type.test_site"
  | "map.catalog.type.landmark"
  | "map.catalog.confidence.high"
  | "map.catalog.confidence.medium"
  | "map.catalog.confidence.reference"
  | "map.catalog.sourceType.official"
  | "map.catalog.sourceType.scientific"
  | "map.catalog.sourceType.osm"
  | "map.catalog.sourceType.wikipedia"
  | "map.catalog.sourceType.manual"
  | "map.catalog.approxCoords"
  | "map.catalog.link"
  | "map.catalog.openSource"
  | "map.catalog.googleMaps"
  | "map.catalog.openGoogleMaps"
  | "map.catalog.interestingFact"
  | "map.catalog.confidenceLabel"
  | "map.catalog.sourceKindLabel"
  | "map.catalog.sourceTextLabel"
  | "map.geo.territory.title"
  | "map.geo.territory.desc"
  | "map.geo.territory.loc"
  | "map.geo.dev.routed.title"
  | "map.geo.dev.routed.desc"
  | "map.geo.dev.restricted.title"
  | "map.geo.dev.restricted.desc"
  | "map.geo.dev.closed.title"
  | "map.geo.dev.closed.desc"
  | "map.geo.route.perimeter.title"
  | "map.geo.route.perimeter.desc"
  | "map.geo.route.cross.title"
  | "map.geo.route.cross.desc"
  | "map.geo.poi.kurchatov.title"
  | "map.geo.poi.kurchatov.desc"
  | "map.geo.poi.degelen.title"
  | "map.geo.poi.degelen.desc"
  | "map.geo.poi.atomicLake.title"
  | "map.geo.poi.atomicLake.desc"
  | "safety.title"
  | "safety.stage1.title"
  | "safety.stage1.intro"
  | "safety.stage1.items"
  | "safety.stage1.extraIntro"
  | "safety.stage1.extraItems"
  | "safety.stage2.title"
  | "safety.stage2.intro"
  | "safety.stage2.items"
  | "safety.stage2.warning"
  | "safety.stage3.title"
  | "safety.stage3.intro"
  | "safety.stage3.items"
  | "safety.disclaimer"
  | "safety.sourceLabel"
  | "safety.source"
  | "footer.about"
  | "footer.partner"
  | "footer.links.title"
  | "footer.links.home"
  | "footer.links.sip"
  | "footer.links.mapRoutes"
  | "footer.links.zones"
  | "footer.links.safety"
  | "footer.links.contacts"
  | "footer.project.title"
  | "footer.project.sipInfo"
  | "footer.project.about"
  | "footer.project.sources"
  | "footer.meta.title"
  | "footer.meta.disclaimer"
  | "footer.meta.copyright"
  | "researchMaps.kicker"
  | "researchMaps.title"
  | "researchMaps.lead"
  | "researchMaps.note"
  | "researchMaps.open"
  | "researchMaps.cardCta"
  | "researchMaps.showMore"
  | "researchMaps.showLess"
  | "researchMaps.viewAll"
  | "researchMaps.sourceLabel"
  | "researchMaps.source.plos"
  | "researchMaps.g001.title"
  | "researchMaps.g001.body"
  | "researchMaps.g002.title"
  | "researchMaps.g002.body"
  | "researchMaps.g003.title"
  | "researchMaps.g003.body"
  | "researchMaps.g004.title"
  | "researchMaps.g004.body"
  | "researchMaps.g006.title"
  | "researchMaps.g006.body"
  | "sources.title"
  | "sources.lead"
  | "sources.primary"
  | "sources.plos.title"
  | "sources.plos.desc"
  | "sources.openPdf"
  | "sources.openSection"
  | "sources.more"
  | "sources.placeholder"
  | "sources.item.official"
  | "sources.item.papers"
  | "sources.item.history"
  | "maps.kicker"
  | "maps.backHome"
  | "maps.libraryTitle"
  | "maps.libraryLead"
  | "maps.backToLibrary"
  | "maps.notFound"
  | "maps.detail.kicker"
  | "maps.detail.verified"
  | "maps.detail.descriptionTitle"
  | "maps.openImage"
  | "maps.info.what"
  | "maps.info.whatBody"
  | "maps.info.why"
  | "maps.info.whyBody"
  | "maps.info.how"
  | "maps.info.howBody"
  | "maps.sourceTitle"
  | "maps.source.publication"
  | "maps.source.details"
  | "maps.source.year"
  | "maps.source.type"
  | "maps.source.typeValue"
  | "maps.source.note"
  | "maps.importantTitle"
  | "maps.importantBody"
  | "maps.download.title"
  | "maps.download.subtitle"
  | "maps.downloadMapImage"
  | "maps.prev"
  | "maps.next"
  | "footer.resources.title"
  | "footer.resources.dataSources"
  | "footer.resources.ethicsPolicy"
  | "footer.account.title"
  | "footer.account.safetyProtocols"
  | "footer.account.researcherLogin"
  | "about.card.ecology.title"
  | "about.card.ecology.body"
  | "about.card.ecology.cta"
  | "about.card.history.title"
  | "about.card.history.body"
  | "about.card.safety.title"
  | "about.card.safety.body"
  | "about.project.title"
  | "about.project.body"
  | "about.project.cta"
  | "site.disclaimer.unified"
  | "site.disclaimer.unifiedShort"
  | "methodology.teaser.kicker"
  | "methodology.teaser.title"
  | "methodology.teaser.lead"
  | "methodology.teaser.moreLink"
  | "methodology.teaser.acc.dataTitle"
  | "methodology.teaser.acc.dataBody"
  | "methodology.teaser.acc.pubsTitle"
  | "methodology.teaser.acc.pubsBody"
  | "methodology.teaser.acc.glossTitle"
  | "methodology.teaser.acc.glossBody"
  | "methodology.page.title"
  | "methodology.page.lead"
  | "methodology.v2.sourceTypesTitle"
  | "methodology.v2.sourceType1"
  | "methodology.v2.sourceType2"
  | "methodology.v2.sourceType3"
  | "methodology.v2.sourceType4"
  | "methodology.v2.sourceType5"
  | "methodology.v2.usedTitle"
  | "methodology.v2.used1"
  | "methodology.v2.used2"
  | "methodology.v2.used3"
  | "methodology.v2.used4"
  | "methodology.v2.used5"
  | "methodology.v2.used6"
  | "methodology.v2.limitsTitle"
  | "methodology.v2.limit1"
  | "methodology.v2.limit2"
  | "methodology.v2.limit3"
  | "methodology.v2.limit4"
  | "methodology.v2.mapTitle"
  | "methodology.v2.mapIntro"
  | "methodology.v2.mapItem1"
  | "methodology.v2.mapItem2"
  | "methodology.v2.mapItem3"
  | "methodology.v2.mapItem4"
  | "methodology.v2.mapKmlNote"
  | "methodology.v2.editorialTitle"
  | "methodology.v2.editorialQuote"
  | "methodology.v2.primarySectionTitle"
  | "methodology.v2.primarySectionLead"
  | "methodology.v2.auxLabel"
  | "methodology.backHome"
  | "methodology.sec.extendedMap.title"
  | "methodology.sec.extendedMap.body"
  | "methodology.sec.mapPoints.title"
  | "methodology.sec.mapPoints.body"
  | "methodology.sec.kml.title"
  | "methodology.sec.kml.body"
  | "methodology.sec.notGeodetic.title"
  | "methodology.sec.notGeodetic.body"
  | "methodology.sec.textsSources.title"
  | "methodology.sec.textsSources.body"
  | "methodology.sec.visitRegime.title"
  | "methodology.sec.visitRegime.body"
  | "methodology.publications.title"
  | "methodology.publications.lead"
  | "methodology.publications.kind.peer_reviewed"
  | "methodology.publications.kind.institutional"
  | "methodology.publications.kind.reference_portal"
  | "methodology.glossary.title"
  | "methodology.glossary.lead"
  | "methodology.heroLink"
  | "methodology.design.heroBadge"
  | "methodology.design.legalTitle"
  | "methodology.design.archKicker"
  | "methodology.design.architectureTitle"
  | "methodology.design.archAside"
  | "methodology.design.sourcesTitle"
  | "methodology.design.sourcesLead"
  | "methodology.design.sourceLink"
  | "methodology.design.sourceMetaYear"
  | "methodology.design.sourceMetaAccess"
  | "methodology.design.sourceMetaType"
  | "methodology.design.sourceAccessPublic"
  | "methodology.design.sourceTypeReference"
  | "methodology.design.lexiconKicker"
  | "methodology.design.glossaryHeading"
  | "methodology.design.ctaTitle"
  | "methodology.design.ctaLead"
  | "methodology.design.ctaOpenMap"
  | "methodology.design.ctaResearchMaps"
  | "methodology.design.tileAdilet"
  | "methodology.design.tileUnep"
  | "methodology.design.tileOsm"
  | "methodology.design.tileWikipedia"
  | "footer.links.methodology"
  | "map.pointProvenance.title"
  | "map.pointProvenance.sourceTypes"
  | "map.pointProvenance.coordQuality"
  | "map.pointProvenance.primaryAtlas"
  | "map.sipSource.stsNnc"
  | "map.sipSource.editorial"
  | "map.pointProvenance.coord.kml_export"
  | "map.pointProvenance.coord.approx"
  | "map.pointProvenance.coord.estimated_center"
  | "glossary.radionuclide.title"
  | "glossary.radionuclide.desc"
  | "glossary.cs137.title"
  | "glossary.cs137.desc"
  | "glossary.sr90.title"
  | "glossary.sr90.desc"
  | "glossary.pu239240.title"
  | "glossary.pu239240.desc"
  | "glossary.am241.title"
  | "glossary.am241.desc"
  | "glossary.bqkg.title"
  | "glossary.bqkg.desc"
  | "glossary.usvh.title"
  | "glossary.usvh.desc"
  | "glossary.fallout.title"
  | "glossary.fallout.desc"
  | "glossary.dosimetry.title"
  | "glossary.dosimetry.desc"
  | "glossary.adit.title"
  | "glossary.adit.desc"
  | "glossary.groundZero.title"
  | "glossary.groundZero.desc";

export const translations: Record<Lang, Record<TranslationKey, string>> = {
  ru: {
    brand: "STS Nuclear-Tour",
    "nav.home": "Главная",
    "nav.sip": "О СИП",
    "nav.map": "Карта",
    "nav.zones": "Маршруты",
    "nav.about": "О проекте",
    "nav.researchMaps": "Научные карты",
    "nav.maps": "Библиотека карт",
    "nav.guide": "Справочный гид",
    "nav.safety": "Рекомендации по безопасности",
    "nav.contacts": "Контакты",
    "nav.more": "Ещё",
    "nav.openMenu": "Открыть меню",
    "nav.closeMenuDialog": "Закрыть меню",
    "map.sidebar.minimizePanel": "Свернуть панель",
    "map.sidebar.restorePanel": "Показать карточку точки",
    "map.leaflet.legendTitle": "Условные обозначения",
    "map.leaflet.legendSchematic":
      "Условные обозначения для ориентира в интерфейсе. Не легенда официального режимного или граничного документа.",
    "map.fullPage.modePoi": "Точки",
    "map.fullPage.modeRoutes": "Маршруты",
    "map.fullPage.routesGoogleBanner":
      "Отдельные точки открываются в Google Maps. На карте СИП показаны справочные маркеры; неподтверждённые автомобильные треки не строятся.",
    "header.searchPlaceholder": "Поиск по разделу «Режим доступа» и маршрутам…",
    "header.explore": "Разделы",
    "search.noResults": "Ничего не найдено по запросу",
    "hero.badge": "Научно-справочный и картографический ресурс",
    "hero.titleLine1":
      "Семипалатинский испытательный полигон: карта, история, научные данные и режим доступа",
    "hero.titleAccent": "",
    "hero.subtitle":
      "Справочно-образовательный ресурс о территории бывшего Семипалатинского испытательного полигона. На сайте собраны карта площадок, исторический контекст, научные материалы, сведения о типовых режимах доступа и рекомендации по безопасности. Материалы носят справочный характер и не заменяют официальный допуск.",
    "hero.openMap": "Открыть карту",
    "hero.viewRoutes": "Методика и источники",
    "hero.imageAlt":
      "Степной пейзаж Восточного Казахстана на закате — иллюстрация для раздела о Семипалатинском полигоне.",
    "routes.kicker": "Маршруты",
    "routes.title": "Направления по территории",
    "routes.lead":
      "Шесть карточек: какой объект или тема, какой статус доступа, какие точки на карте смотреть. Не турпродукт; выезд согласуется отдельно.",
    "routes.disclaimer":
      "Опора на публикации и схемы (в т.ч. карты ¹³⁷Cs, ²⁴¹Am, ²³⁹+²⁴⁰Pu, ⁹⁰Sr). Не приглашение на самовольный въезд в закрытые участки — см. «Важно» в подвале.",
    "routes.simple.kicker": "Маршруты",
    "routes.simple.title": "Простые маршруты",
    "routes.simple.lead":
      "Карточки показывают достоверные объекты и ссылки на отдельные точки в Google Maps. Они не подтверждают проезжаемость дорог, безопасность или свободный доступ: посещение требует официального согласования, сопровождения и радиационного контроля.",
    "routes.simple.cardLabel": "маршрут",
    "routes.simple.startLabel": "Старт",
    "routes.simple.destinationLabel": "Объекты",
    "routes.simple.importantLabel": "Важно",
    "routes.simple.locationsLabel": "Открыть отдельные точки",
    "routes.simple.openMaps": "открыть в Google Maps",
    "routes.simple.photoSourceLabel": "Фото",
    "routes.simple.sourceLabel": "Источник",

    "routes.card.kurchatov.type": "Обзорный",
    "routes.card.kurchatov.title": "Курчатов и научная инфраструктура",
    "routes.card.kurchatov.desc":
      "Логистика и контекст: город севернее полигона, опорная точка при работе с материалами о СИП.",
    "routes.card.kurchatov.access": "Статус: справочно, без гарантии допуска",
    "routes.card.kurchatov.focus": "Точки: Kurchatov town",

    "routes.card.atomic.type": "Объект",
    "routes.card.atomic.title": "Atomic Lake / Telkem и прилегающие объекты",
    "routes.card.atomic.desc":
      "Западный сектор: «Атомное озеро», Telkem. Любой выезд — только после согласования режима доступа.",
    "routes.card.atomic.access": "Доступ: ограничен, нужно согласование",
    "routes.card.atomic.focus": "Точки: Atomic Lake, Telkem",

    "routes.card.degelen.type": "Участок",
    "routes.card.degelen.title": "Degelen и следы подземных испытаний",
    "routes.card.degelen.desc":
      "Южный массив, подземные испытания, рельеф и стоки. Полевой режим — по регламенту, не по описанию на сайте.",
    "routes.card.degelen.access": "Доступ: усиленный контроль / ограничен",
    "routes.card.degelen.focus": "Точки: Degelen, creeks/runoffs",

    "routes.card.balapan.type": "Площадки",
    "routes.card.balapan.title": "Balapan и испытательные участки",
    "routes.card.balapan.desc":
      "Схема испытательных площадок на карте: как читать подписи слоёв и сопоставлять с описанием доступа в официальных источниках.",
    "routes.card.balapan.access": "Доступ: ограничен, нужно согласование",
    "routes.card.balapan.focus": "Точки: Balapan, test sites",

    "routes.card.fallout.type": "Тематические карты",
    "routes.card.fallout.title": "Зоны выпадения и карты загрязнения",
    "routes.card.fallout.desc":
      "Слои по ¹³⁷Cs, ²⁴¹Am, ²³⁹+²⁴⁰Pu, ⁹⁰Sr: сравнивайте легенду и масштаб с первоисточником.",
    "routes.card.fallout.access": "Статус: только работа с картами",
    "routes.card.fallout.focus": "Фокус: ¹³⁷Cs, ²⁴¹Am, ²³⁹+²⁴⁰Pu, ⁹⁰Sr; fallout plumes",
    "sip.kicker": "Информация о СИП",
    "sip.title": "Семипалатинский испытательный полигон",
    "sip.lead":
      "Семипалатинский испытательный полигон (СИП) — бывший полигон ядерных испытаний; территория относится к современному Казахстану. Ниже — сжатый энциклопедический обзор по открытым обзорным источникам; для юридически значимых и количественных формулировок опирайтесь на первоисточники и актуальные документы.",
    "sip.card.where.title": "География",
    "sip.card.where.body":
      "Полигон расположен на востоке и в центре Казахстана и охватывает части современных Абайской, Павлодарской и Карагандинской областей. В обзорных оценках площадь района испытаний часто приводят порядка 18 500 км² (сверяйте с официальными картами).\n\nСтепи и полупустыни, резко континентальный климат, река Иртыш и массив Дегелен задают ландшафт. Ближайший крупный научный центр — Курчатов; в литературе к ключевым площадкам относят Опытное поле, Дегелен, Балапан. Средняя высота рельефа в кадре проекта — порядка 300–400 м.",
    "sip.card.history.title": "Хронология испытаний",
    "sip.card.history.body":
      "Инфраструктура полигона создаётся с 1947 г. (решения СССР). Первый ядерный взрыв — 29 августа 1949 г. (РДС‑1).\n\n1949–1991 гг. на полигоне проводились ядерные испытания. В литературе и официальных обзорных материалах встречаются разные показатели, связанные с методикой учёта: обычно упоминаются 456 ядерных испытаний и 486 ядерных взрывов.\n\n29 августа 1991 г. полигон официально закрыт Указом Президента Республики Казахстан — важный шаг в развитии антиядерного движения.",
    "sip.card.why.title": "Режим доступа в материалах",
    "sip.card.why.body":
      "Карточки раздела «Режим доступа на территорию СИП» обобщают типовые формулировки из публичных материалов и не задают границ на местности. Официальный допуск и требования определяются нормативными актами Республики Казахстан и решениями уполномоченных органов.",
    "sip.heterogeneity.title": "От чего зависят участки",
    "sip.heterogeneity.body":
      "Контрастность участков и «пятнистость» загрязнения в литературе связывают с типами ядерных испытаний (атмосферные, наземные, подземные), следами радиоактивных осадков и переносом радионуклидов в почве, воде и биоте с учётом геологии, гидрологии, растительного покрова, ветра и климата региона.",
    "sip.heterogeneity.b1": "Испытания",
    "sip.heterogeneity.b1s":
      "Наземные, атмосферные и подземные сценарии; площадки прямого воздействия и инженерные объекты.",
    "sip.heterogeneity.b2": "Выпадения",
    "sip.heterogeneity.b2s":
      "Направления и доля осадков; в обзорах отдельно выделяют значимость событий 1951 и 1953 гг.",
    "sip.heterogeneity.b3": "Среда",
    "sip.heterogeneity.b3s":
      "Геологические и гидрологические условия; почвенно-растительный покров; ветровой перенос и климат.",
    "sip.note":
      "Юридические условия доступа к территории СИП — в блоке «Важно» в подвале страницы.\nОфициальные материалы: https://www.nnc.kz · законодательство РК: https://adilet.zan.kz · МАГАТЭ: https://www.iaea.org · справочные обзоры ООН и энциклопедические издания (в т.ч. Britannica) — для хронологии сверяйтесь с первоисточниками.",
    "zones.kicker": "Режим доступа",
    "zones.title": "Режим доступа на территорию СИП",
    "zones.lead":
      "Раздел обобщает встречающиеся в открытых материалах режимы доступа и не является официальной картой правового зонирования. Фактический доступ определяется законодательством Республики Казахстан, уполномоченными органами, оператором территории и официальными документами допуска.",
    "zones.card.routed.label": "Доступ по согласованным маршрутам",
    "zones.card.routed.title": "Маршрутный режим",
    "zones.card.routed.desc":
      "В открытых описаниях встречается режим, при котором перемещение возможно только по заранее согласованным маршрутам и в рамках действующих требований; отклонения от коридора обычно не допускаются. Конкретные условия задают НПА РК, уполномоченные органы, оператор территории и документы допуска.",
    "zones.card.routed.status": "Только по маршруту",
    "zones.card.restricted.label": "Ограниченный доступ",
    "zones.card.restricted.title": "Требуется разрешение",
    "zones.card.restricted.desc":
      "В публичных материалах описывают кратковременное пребывание при наличии официального разрешения и, как правило, при сопровождении и дозиметрическом контроле. Это не руководство к действию: фактический режим определяют законодательство РК, уполномоченные органы, оператор территории и документы допуска.",
    "zones.card.restricted.status": "По разрешению",
    "zones.card.closed.label": "Закрытые территории",
    "zones.card.closed.title": "Закрыто",
    "zones.card.closed.desc":
      "В открытых источниках свободный несанкционированный доступ обычно исключают. Упоминают доступ в рамках специальных работ и при отдельном допуске, определяемом уполномоченными органами и в соответствии с НПА РК.",
    "zones.card.closed.status": "Без доступа",
    "zones.disclaimerTitle": "Справочное уведомление",
    "zones.disclaimerBody":
      "Информация в этом разделе носит справочный характер. Фактический режим доступа, границы, требования к сопровождению, СИЗ и радиационному контролю определяются нормативными актами Республики Казахстан и решениями уполномоченных органов, а также оператором территории.",
    "zones.sourcesTitle": "Официальные источники и публикации",
    "zones.source.nnc": "Национальный ядерный центр РК — nnc.kz",
    "zones.source.sts": "Портал по СИП / STS — sts.nnc.kz",
    "zones.source.adilet": "НПА РК — портал Adilet (adilet.zan.kz)",
    "zones.source.iaea": "МАГАТЭ / IAEA — iaea.org",
    "zones.source.unep": "ЮНЕП / UNEP — unep.org",
    "zones.source.plos": "Публикации PLOS ONE — journals.plos.org",
    "guide.kicker": "Справочный гид",
    "guide.title": "Допуск и согласование",
    "guide.lead":
      "Маршрут и режим доступа определяются законодательством РК, уполномоченными органами, оператором территории и официальными документами допуска. Слои карты и редакционные тексты не заменяют эти документы.",
    "guide.card1.t": "Документы и согласование",
    "guide.card1.b":
      "Имеете на руках маршрутный лист, контакты сопровождающего, актуальные ограничения по участку.",
    "guide.card2.t": "Связка «площадка — режим доступа — коридор»",
    "guide.card2.b":
      "На карте отметили точку площадки, сверили режим доступа по официальным документам, нашли линию маршрута в материалах сопровождения. Расхождение с любым из трёх — стоп.",
    "guide.card3.t": "На месте",
    "guide.card3.b":
      "Без отхода с трассы, без сбора проб и сувениров, без воды и пищи из локальных источников без проверки.",
    "guide.rules.title": "Правила на маршруте",
    "guide.rules.r1": "Не сходить с утверждённого маршрута и не сокращать путь.",
    "guide.rules.r2": "Не собирать растения, грибы, почву, камни и прочие объекты.",
    "guide.rules.r3": "Не использовать местную воду и продукты без официальной проверки.",
    "guide.rules.r4": "Не устраивать стоянки и пикники вне разрешённых точек.",
    "guide.rules.r5": "Не трогать техногенные объекты и неизвестные материалы.",
    "guide.rules.r6": "Отдельные участки — только с проводником или по письменному разрешению.",
    "guide.rules.note": "См. также раздел «Безопасность».",
    "science.kicker": "Научные данные",
    "science.title": "Научные данные и ограничения интерпретации",
    "science.lead":
      "На сайте используются открытые научные публикации и официальные материалы, но каждый источник имеет собственную область применимости.",
    "science.c1.t": "Историко-географический контекст",
    "science.c1.b":
      "СИП расположен на стыке частей Абайской, Павлодарской и Карагандинской областей. В источниках чаще фигурируют отдельные испытательные площадки; сочетание истории выпадений, рельефа и локальных условий делает территорию неоднородной, без универсальной «средней» картины для произвольной точки.",
    "science.c2.t": "Радиоэкологические исследования",
    "science.c2.b":
      "В открытой литературе обсуждают мониторинг почв, воды, биоты и пространственное распределение радионуклидов; к таким линиям относятся в том числе многолетние работы НЯЦ РК и смежных групп. Например, в Panitskiy et al. (2023) рассматривается содержание радионуклидов в мясе и молоке копытных; расчёты и интерпретации привязаны к конкретной постановке задачи авторами и не являются прямой оценкой безопасности туристических или самостоятельных поездок на любую точку СИП.",
    "science.c3.t": "Ограничения научных выводов",
    "science.c3.b":
      "Каждая публикация описывает свой объект, методику и границы выводов. Результаты по животным, почвам, воде или отдельным пробам нельзя автоматически переносить на весь полигон. Решения о доступе, работах на местности и объёме контроля не вытекают из редакционного пересказа статьи и не подменяют нормативные процедуры.",
    "science.important":
      "Важно: результаты отдельных исследований не заменяют официальный радиационный контроль, документы допуска и решения уполномоченных органов.",
    "map.kicker": "Карта",
    "map.titleLine1": "Интерактивная карта СИП",
    "map.titleLine2": "",
    "map.subtitle":
      "Карта объединяет точки площадок, редакционные пояснения и справочные слои для образовательной навигации по материалам сайта.",
    "map.feature.layers.title": "Слои",
    "map.feature.layers.desc":
      "Базовые и рельефные подложки (в т.ч. OpenTopoMap) и включаемые тематические слои для чтения территории в учебном контексте.",
    "map.feature.gps.title": "Позиция на экране",
    "map.feature.gps.desc":
      "Отображает положение на экране относительно объектов карты; не сервис согласования допуска и не замена официальным документам.",
    "map.fullscreen": "Запустить полноэкранную карту",
    "map.modal.kind.zone": "Режим доступа (справочно)",
    "map.modal.kind.route": "Маршрут",
    "map.cardTitle": "Содержание отображения",
    "map.cardLead":
      "Редакционные полигоны и линии на карте используются для визуального объяснения материалов сайта и не отображают официальный режим доступа на местности.",
    "map.cardRelief":
      "Рельеф в кадре — справочно (средняя высота около 379 м, мин. 142 м, макс. 1043 м по данным подложки). OpenTopoMap не является официальным рельефным документом.",
    "map.listShowsTitle": "Что показывает карта",
    "map.listShows1": "площадки и ориентиры, упоминаемые в открытых материалах;",
    "map.listShows2": "справочные точки и редакционные подписи;",
    "map.listShows3": "тематические слои для чтения территории;",
    "map.listShows4": "образовательные маршруты, если они включены как справочный слой.",
    "map.listNotReplacesTitle": "Что карта не заменяет",
    "map.listNotReplaces1": "официальный допуск;",
    "map.listNotReplaces2": "маршрутный лист;",
    "map.listNotReplaces3": "приказ на выезд;",
    "map.listNotReplaces4": "полевой радиационный контроль;",
    "map.listNotReplaces5": "юридическое описание границ и режимов.",
    "map.shortDisclaimer":
      "Карта на сайте не является официальным документом допуска, правового зонирования или геодезическим описанием границ. Для работ и выездов на местности применяются только актуальные документы уполномоченных органов и оператора территории.",
    "map.attributionShort":
      "Описания объектов: sts.nnc.kz. Привязка координат и слоёв — в разделе «Методика и источники».",
    "map.layer.standard": "Обычная",
    "map.layer.topo": "Рельеф",
    "map.layer.cartoLight": "Светлая",
    "map.layer.satellite": "Спутник",
    "map.toolbar.zoom": "Масштаб",
    "map.toolbar.zoomIn": "Приблизить",
    "map.toolbar.zoomOut": "Отдалить",
    "map.toolbar.basemap": "Базовая карта",
    "map.detail.placeholder": "Выберите точку на карте, чтобы открыть описание, источники и ссылки.",
    "map.overlay.zones": "Справочные полигоны",
    "map.overlay.routes": "Маршруты",
    "map.overlay.poi": "Точки",
    "map.popup.location": "Местоположение",
    "map.popup.avgElevation": "Средняя высота",
    "map.popup.elevationRange": "Диапазон высот",
    "map.popup.elevationTitle": "Точка на карте",
    "map.popup.elevationValue": "Высота",
    "map.popup.elevationHint": "Пока используется мок-данные. Можно подключить Elevation API.",
    "map.points.sourceLabel": "Источник",
    "map.points.more": "Подробнее",
    "map.points.approx": "примерно",
    "map.points.estimatedPosition": "ориентировочное положение",
    "map.points.kmlExport": "KML / карта НЯЦ",
    "map.points.filtersTitle": "Объекты",
    "map.points.close": "Закрыть",
    "map.points.category.overview": "Общая информация",
    "map.points.category.testSite": "Испытательная площадка",
    "map.points.category.sipObject": "Испытательный участок / объект СИП",
    "map.points.category.excavation": "Экскавационный эксперимент",
    "map.points.category.radiological": "Радиологическая площадка",
    "map.catalog.filtersTitle": "Слои объектов",
    "map.sidebar.openPanel": "Фильтры и каталог",
    "map.sidebar.openEmbedded": "Объекты карты",
    "map.sidebar.collapseTools": "Свернуть панель слоёв и настроек",
    "map.sidebar.closeOverlays": "Закрыть панели и вернуться к карте",
    "map.catalog.searchPlaceholder": "Поиск по названию…",
    "map.catalog.statsTitle": "Каталог",
    "map.catalog.statsTotal": "Всего точек",
    "map.catalog.statsShown": "Показано",
    "map.catalog.filter.settlement": "Населённые пункты",
    "map.catalog.filter.test_site": "Площадки СИП",
    "map.catalog.filter.landmark": "Ориентиры",
    "map.catalog.type.settlement": "Населённый пункт",
    "map.catalog.type.test_site": "Площадка СИП",
    "map.catalog.type.landmark": "Ориентир",
    "map.catalog.confidence.high": "высокая (проверяемый источник)",
    "map.catalog.confidence.medium": "средняя",
    "map.catalog.confidence.reference": "справочная / ориентир",
    "map.catalog.sourceType.official": "официальный / атлас",
    "map.catalog.sourceType.scientific": "научный",
    "map.catalog.sourceType.osm": "OpenStreetMap",
    "map.catalog.sourceType.wikipedia": "Wikipedia",
    "map.catalog.sourceType.manual": "редакция / ручная привязка",
    "map.catalog.approxCoords": "прибл. координаты",
    "map.catalog.link": "Ссылка",
    "map.catalog.openSource": "Открыть",
    "map.catalog.googleMaps": "Google Maps",
    "map.catalog.openGoogleMaps": "Открыть точку",
    "map.catalog.interestingFact": "Интересный факт",
    "map.catalog.confidenceLabel": "Достоверность",
    "map.catalog.sourceKindLabel": "Тип источника",
    "map.catalog.sourceTextLabel": "Сведения об источнике",
    "map.geo.territory.title": "Семипалатинский испытательный полигон",
    "map.geo.territory.desc":
      "Бывший ядерный полигон; степь и приподнятый рельеф. Режим доступа задаётся вне этого интерфейса.",
    "map.geo.territory.loc":
      "Семипалатинский испытательный полигон, Павлодарская область, 071100, Казахстан",
    "map.geo.dev.routed.title": "Служебный полигон: условный «маршрутный» режим",
    "map.geo.dev.routed.desc":
      "Полигон для настройки отображения в интерфейсе. Не обозначает на местности границу режима доступа.",
    "map.geo.dev.restricted.title": "Служебный полигон: условная зона по разрешению",
    "map.geo.dev.restricted.desc":
      "Полигон для настройки стиля слоя. Не является картой зон разрешений и не заменяет регламент.",
    "map.geo.dev.closed.title": "Служебный полигон: условный закрытый участок",
    "map.geo.dev.closed.desc":
      "Полигон для настройки стиля слоя. Не отражает фактический запрет или допуск на территории.",
    "map.geo.route.perimeter.title": "Линия маршрута (тестовая визуализация)",
    "map.geo.route.perimeter.desc":
      "Замкнутая линия для проверки отображения маршрутного слоя. При подключении реальных данных заменяется линиями из экспедиционных или иных наборов с явной правовой привязкой.",
    "map.geo.route.cross.title": "Линия маршрута (второй тестовый стиль)",
    "map.geo.route.cross.desc":
      "Дополнительная линия с иным оформлением для проверки нескольких маршрутных слоёв в интерфейсе.",
    "map.geo.poi.kurchatov.title": "Курчатов (ориентир)",
    "map.geo.poi.kurchatov.desc":
      "Город — научный и административный центр СИП; в открытых текстах его упоминают как типичный логистический ориентир при работе с материалами о полигоне.",
    "map.geo.poi.degelen.title": "Массив Дегелен (ориентир)",
    "map.geo.poi.degelen.desc": "Горный узел на юге полигона; визуально выделяется на рельефной подложке.",
    "map.geo.poi.atomicLake.title": "Атомное озеро (водохранилище Чаган)",
    "map.geo.poi.atomicLake.desc":
      "Водохранилище, образованное в результате подземного ядерного взрыва в 1965 году.",
    "safety.title": "Рекомендации по безопасности",
    "safety.stage1.title": "Этап 1 — подготовка к посещению полигона",
    "safety.stage1.intro": "В период подготовки к посещению полигона рекомендуется:",
    "safety.stage1.items":
      "Подготовить комплект защиты для тела: одноразовый комбинезон плотностью не менее 65 г/м², пылезащитные бахилы, одноразовый респиратор с клапаном, одноразовые резиновые перчатки (желательно взять по 2–3 шт.).\nПроверить комплект защиты для тела на наличие брака, при необходимости заменить комплект.\nПодготовить необходимое количество бутилированной воды и еды. Еду необходимо упаковать в одноразовую упаковку.\nПодготовить индивидуальный дозиметр.\nПодготовить мусорный пакет для складирования отходов после завершения маршрута.\nПодготовить средства гигиены: мыло, воду и сухие салфетки.",
    "safety.stage1.extraIntro": "Дополнительно на этапе подготовки рекомендуется:",
    "safety.stage1.extraItems":
      "Провести техническое обслуживание автомобиля, подготовить дополнительный комплект запасных колёс и дополнительную ёмкость для топлива в расчёте на 100 км пути.\nНанять индивидуального специалиста по дозиметрии в случае путешествия группой.\nОзнакомиться с правилами поведения на маршруте, включая запрет на курение и употребление спиртных напитков.",
    "safety.stage2.title": "Этап 2 — прохождение маршрута",
    "safety.stage2.intro": "Рекомендации на этапе прохождения маршрута по полигону:",
    "safety.stage2.items":
      "Непосредственно перед въездом в зону, представляющую радиационную опасность для населения, справить естественные надобности.\nНадеть средства индивидуальной защиты, предварительно проверив их на наличие повреждений.\nЗапустить индивидуальный дозиметр.\nНе отклоняться от заданной траектории движения.\nВ зоне, представляющей радиационную опасность для населения, не допускать самостоятельный сбор растительности, минералов, металлических и иных предметов.\nПо завершении посещения «грязной» зоны, непосредственно перед посадкой в автомобиль, рекомендуется снять защитный комплект и упаковать его в мусорный пакет.",
    "safety.stage2.warning":
      "В «грязной» зоне запрещается справлять естественные надобности, принимать пищу и пить воду.",
    "safety.stage3.title": "Этап 3 — завершение посещения",
    "safety.stage3.intro": "Рекомендации на этапе завершения посещения:",
    "safety.stage3.items":
      "Обеспечить утилизацию использованных комплектов защиты, одноразовой посуды и бутылок, предварительно плотно упаковав отходы.\nСправить естественные надобности.\nПомыть руки и лицо, щёткой очистить обувь от остатков пыли.\nПомыть автомобиль на бесконтактной мойке.\nЗафиксировать результаты дозиметрического контроля; в случае завышенных показателей обратиться к врачу.",
    "safety.disclaimer":
      "Эти справочные рекомендации не являются разрешением на посещение, не гарантируют безопасность и не заменяют официальный допуск, инструктаж, профессиональный радиационный контроль и указания ответственного оператора. Загрязнённые СИЗ и отходы утилизируются по утверждённым правилам ответственной организации, а не как бытовой мусор.",
    "safety.sourceLabel": "Научный источник",
    "safety.source":
      "Молдажанов М. Б., Martínez-Falcó J., Дүйскенова Р. Ж. «Разработка рекомендаций по обеспечению радиационной безопасности туристов на маршрутах по объектам Семипалатинского испытательного полигона». Финальная редакция рукописи, предоставленная заказчиком (2026), стр. 16–17. Права на публичное размещение полного текста и файла уточняются отдельно.",
    "footer.about":
      "Портал подготовлен в рамках реализации грантового финансирования исследований молодых ученых по проекту «Жас ғалым» на 2025-2027 годы на тему «AP25794915 Научное исследование экономического потенциала ядерного туризма на примере Семипалатинского испытательного полигона». Данное исследование финансируется Комитетом науки и высшего образования Министерства науки и высшего образования Республики Казахстан.",
    "footer.links.title": "Навигация",
    "footer.links.home": "Главная",
    "footer.links.sip": "О СИП",
    "footer.links.mapRoutes": "Карта площадок",
    "footer.links.zones": "Маршруты",
    "footer.links.safety": "Рекомендации по безопасности",
    "footer.links.contacts": "Контакты",
    "footer.project.title": "Проект",
    "footer.project.sipInfo": "Информация о СИП",
    "footer.project.about": "О проекте",
    "footer.project.sources": "Источники данных",
    "footer.meta.title": "Важно",
    "footer.meta.disclaimer":
      "Сайт не заменяет официальный допуск, регламенты доступа к территории СИП и радиационного мониторинга. Режим на местности задают законодательство Республики Казахстан, уполномоченные органы, оператор территории и документы допуска. Материалы сайта — справочные.",
    "footer.meta.copyright": "",
    "researchMaps.kicker": "Научные карты",
    "researchMaps.title": "Научные карты СИП",
    "researchMaps.lead":
      "Каталог включает две обзорные карты из PLOS ONE (2023) и четыре карты удельной активности ¹³⁷Cs, ⁹⁰Sr, ²⁴¹Am и ²³⁹⁺²⁴⁰Pu из финальной рукописи Молдажанова и соавторов (2026). Карты предназначены для научно-справочной интерпретации и не оценивают безопасность посещения.",
    "researchMaps.note": "Источник каждой карты указан отдельно; новые карты из рукописи не относятся к PLOS ONE.",
    "researchMaps.open": "Открыть",
    "researchMaps.cardCta": "Открыть карту",
    "researchMaps.showMore": "Показать больше",
    "researchMaps.showLess": "Показать меньше",
    "researchMaps.viewAll": "Смотреть все карты",
    "researchMaps.sourceLabel": "Источник:",
    "researchMaps.source.plos":
      "PLOS ONE (Panitskiy et al., 2023) — Bioaccumulation of radionuclides in hoofed animals inhabiting the Semipalatinsk Test Site",
    "researchMaps.g001.title": "Обзорное расположение СИП в Казахстане",
    "researchMaps.g001.body":
      "Положение СИП в Казахстане и соседние регионы (как в статье).",
    "researchMaps.g002.title": "Схема территории СИП и точки отбора проб",
    "researchMaps.g002.body":
      "Участки и точки отбора проб по данным авторов.",
    "researchMaps.g003.title": "Распределение Cs-137 (цезий‑137)",
    "researchMaps.g003.body":
      "Поле ¹³⁷Cs по статье; сравнивайте масштаб и легенду с PDF.",
    "researchMaps.g004.title": "Распределение Am-241 (америций‑241)",
    "researchMaps.g004.body":
      "Пространственное поле ²⁴¹Am в границах рисунка.",
    "researchMaps.g006.title": "Распределение Sr-90 (стронций‑90)",
    "researchMaps.g006.body":
      "Поле ⁹⁰Sr на участках, показанных авторами.",
    "sources.title": "Источники",
    "sources.lead":
      "Источники двух обзорных карт и четырёх карт удельной активности указаны раздельно.",
    "sources.primary": "Основной источник",
    "sources.plos.title": "PLOS ONE — статья и фигуры (карты)",
    "sources.plos.desc":
      "Panitskiy A. et al. (2023). Bioaccumulation of radionuclides in hoofed animals inhabiting the Semipalatinsk Test Site.\nК статье относятся только две обзорные карты: g001 и g002.",
    "sources.openPdf": "Открыть PDF",
    "sources.openSection": "Открыть источники",
    "sources.more": "Добавим позже",
    "sources.placeholder":
      "Сюда добавляются ссылки на официальные и научные документы по мере пополнения списка.",
    "sources.item.official": "Официальные материалы и регламенты доступа по СИП",
    "sources.item.papers": "Научные публикации и обзоры по радиоэкологии территории",
    "sources.item.history": "Исторические и экологические источники по объектам и маршрутам",
    "maps.kicker": "Архив карт",
    "maps.backHome": "На главную",
    "maps.libraryTitle": "Карты СИП и исследовательские материалы",
    "maps.libraryLead":
      "Локальные файлы проекта: у каждой карточки — ссылка на публикацию и поля метаданных.",
    "maps.backToLibrary": "Назад ко всем картам",
    "maps.notFound": "Карта не найдена",
    "maps.detail.kicker": "Scientific & Institutional Materials",
    "maps.detail.verified": "Проверяемый источник",
    "maps.detail.descriptionTitle": "Пояснение и контекст",
    "maps.openImage": "Открыть изображение",
    "maps.info.what": "Что показывает карта",
    "maps.info.whatBody":
      "Кадр из статьи: тот же показатель и границы, что у авторов.",
    "maps.info.why": "Контекст",
    "maps.info.whyBody":
      "Авторы сопоставляют разные участки СИП; рисунок — один срез из их данных.",
    "maps.info.how": "Ограничение",
    "maps.info.howBody":
      "Файл на экране не даёт права на въезд. Решение — у уполномоченных органов по регламенту и данным мониторинга.",
    "maps.sourceTitle": "Источник данных",
    "maps.source.publication": "Название публикации",
    "maps.source.details": "Описание",
    "maps.source.year": "Год",
    "maps.source.type": "Тип",
    "maps.source.typeValue": "Научная публикация",
    "maps.source.note": "См. «Важно» в подвале сайта.",
    "maps.importantTitle": "Важно",
    "maps.importantBody":
      "Правовые условия доступа к территории СИП — в подвале страницы («Важно»).",
    "maps.download.title": "Материалы проекта",
    "maps.download.subtitle": "PDF / изображения (локальные)",
    "maps.downloadMapImage": "Скачать изображение карты",
    "maps.prev": "Предыдущая карта",
    "maps.next": "Следующая карта",
    "footer.resources.title": "Ресурсы",
    "footer.resources.dataSources": "Источники данных",
    "footer.resources.ethicsPolicy": "Политика этики",
    "footer.account.title": "Аккаунт",
    "footer.account.safetyProtocols": "Протоколы безопасности",
    "footer.account.researcherLogin": "Вход для исследователей",
    "footer.partner": "Страница проекта на сайте ABU",
    "about.card.ecology.title": "Исследования",
    "about.card.ecology.body":
      "Радиоэкологические исследования СИП продолжаются до сих пор: мониторинг почв, воды и биоты, оценка распределения радионуклидов и экологических рисков.\n\nКлючевые организации: НЯЦ РК и ИРБЭ при поддержке МАГАТЭ. Часто обсуждаемые изотопы: ¹³⁷Cs, ⁹⁰Sr, ²³⁹Pu, ²⁴¹Am.\n\nИсточники: https://www.nnc.kz · https://www.iaea.org",
    "about.card.ecology.cta": "К научным картам",
    "about.card.history.title": "История",
    "about.card.history.body":
      "Создан: 1947. Первый ядерный взрыв: 29.08.1949 (РДС‑1). Период испытаний: 1949–1991. Закрытие полигона: 29.08.1991 (Указ Президента РК).\n\nВ литературе и официальных обзорных материалах встречаются разные показатели, связанные с методикой учёта: обычно упоминаются 456 ядерных испытаний и 486 ядерных взрывов.\n\nИсточники: НЯЦ РК · МАГАТЭ · ООН (хронологию сверяйте с первоисточниками).",
    "about.card.safety.title": "Допуск",
    "about.card.safety.body":
      "В открытых обзорах и регламентных материалах доступ на территорию бывшего полигона описывают как возможный только при официальном разрешении, утверждённом маршруте и, как правило, сопровождении и дозиметрическом контроле. Конкретные условия — в НПА РК, у оператора территории и в документах допуска.\n\nИсточники: https://adilet.zan.kz · https://www.nnc.kz",
    "about.project.title": "О проекте",
    "about.project.body":
      "Проект — научно-справочный и картографический ресурс о территории бывшего Семипалатинского испытательного полигона: открытые научные и институциональные источники, исторический контекст, интерактивная карта площадок и иллюстрации из рецензируемых публикаций.\n\nИнтегрированы материалы Национального ядерного центра Республики Казахстан (в т.ч. sts.nnc.kz), геоданные и KML‑маркеры площадок, раздел научных карт и библиотека изображений с указанием DOI/источников.",
    "about.project.cta": "К карте",
    "site.disclaimer.unified":
      "Сайт позиционируется как научно-справочный и картографический ресурс о территории бывшего Семипалатинского испытательного полигона. Материалы носят справочно‑образовательный характер и не заменяют официальный допуск, регламенты радиационного мониторинга, решения уполномоченных органов Республики Казахстан и оператора территории. Тексты и координаты собраны из открытых источников, перечисленных в разделе методики; это не разрешение на самостоятельные действия на местности.",
    "site.disclaimer.unifiedShort":
      "Научно-справочный ресурс о бывшем СИП; не заменяет допуск, мониторинг и решения уполномоченных органов и оператора территории.",
    "methodology.teaser.kicker": "Прозрачность данных",
    "methodology.teaser.title": "Методика и источники",
    "methodology.teaser.lead":
      "Кратко о том, откуда взяты точки на карте, что означает KML/KMZ в проекте и как относиться к режиму доступа. Подробности — на отдельной странице.",
    "methodology.teaser.moreLink": "Полная методика и публикации",
    "methodology.teaser.acc.dataTitle": "Карта и координаты",
    "methodology.teaser.acc.dataBody":
      "Точки согласованы с открытым атласом НЯЦ; каталог указывает тип источника и достоверность координат. Подробный статус картографических данных — на странице методики.",
    "methodology.teaser.acc.pubsTitle": "Публикации и порталы",
    "methodology.teaser.acc.pubsBody":
      "В разделе научных карт используются рисунки из открытой статьи Panitskiy et al. (PLOS ONE, 2023, DOI 10.1371/journal.pone.0294632). Дополнительно перечислены институциональные источники (НЯЦ, Adilet, IAEA, UNEP и др.), уже интегрированные в проект.",
    "methodology.teaser.acc.glossTitle": "Глоссарий",
    "methodology.teaser.acc.glossBody":
      "Короткие пояснения терминов (радионуклиды, единицы, выпадения, дозиметрия, штольня, эпицентральная площадка) — на полной странице методики.",
    "methodology.page.title": "Методика и источники",
    "methodology.page.lead":
      "Как собраны материалы сайта, что означают данные на карте и какие ограничения важно учитывать при интерпретации.",
    "methodology.v2.sourceTypesTitle": "Типы источников",
    "methodology.v2.sourceType1": "законодательство Республики Казахстан;",
    "methodology.v2.sourceType2": "официальные материалы Национального ядерного центра РК;",
    "methodology.v2.sourceType3": "международные институциональные материалы;",
    "methodology.v2.sourceType4": "рецензируемые научные публикации;",
    "methodology.v2.sourceType5": "картографические и редакционные материалы проекта.",
    "methodology.v2.usedTitle": "Что используется на сайте",
    "methodology.v2.used1": "исторические сведения;",
    "methodology.v2.used2": "данные о площадках;",
    "methodology.v2.used3": "научные публикации;",
    "methodology.v2.used4": "тематические карты;",
    "methodology.v2.used5": "редакционные слои и подписи;",
    "methodology.v2.used6": "справочные тексты о режимах доступа.",
    "methodology.v2.limitsTitle": "Ограничения",
    "methodology.v2.limit1": "сайт не является официальным документом;",
    "methodology.v2.limit2": "не определяет юридические границы;",
    "methodology.v2.limit3": "не заменяет допуск, полевой контроль и нормативные процедуры;",
    "methodology.v2.limit4":
      "отдельные научные публикации нельзя автоматически переносить на всю территорию полигона.",
    "methodology.v2.mapTitle": "Как читать карту",
    "methodology.v2.mapIntro":
      "Интерактивная карта объединяет справочные и пояснительные слои; ниже — как их отличать по смыслу.",
    "methodology.v2.mapItem1": "маркеры — точки и площадки;",
    "methodology.v2.mapItem2": "полигоны — редакционные или тематические слои;",
    "methodology.v2.mapItem3": "линии — справочные маршруты или визуальные пояснения;",
    "methodology.v2.mapItem4":
      "юридически значимые решения по местности принимаются только по официальным документам.",
    "methodology.v2.mapKmlNote":
      "Экспорт KML/KMZ из открытого атласа НЯЦ в проекте используется для технической согласованности координат с тем же слоём, что на sts.nnc.kz; это не правовой документ и не геодезическое описание границ.",
    "methodology.v2.editorialTitle": "Редакционный принцип",
    "methodology.v2.editorialQuote":
      "Сайт стремится соединить образовательную, историческую и картографическую подачу материалов о СИП, не подменяя официальные процедуры допуска и радиоэкологической оценки.",
    "methodology.v2.primarySectionTitle": "Основные источники",
    "methodology.v2.primarySectionLead":
      "Ниже — ключевые источники в порядке, который удобен для проверки правовых и фактических утверждений. Энциклопедии и открытые картографические базы сюда не включены.",
    "methodology.v2.auxLabel":
      "Дополнительно для ориентира (не равны по силе НПА и официальным материалам НЯЦ):",
    "methodology.backHome": "На главную",
    "methodology.sec.extendedMap.title": "Интерактивная карта: статус данных",
    "methodology.sec.extendedMap.body":
      "Карта на сайте объединяет маркеры площадок, справочные подложки и тематические слои для образовательной навигации по материалам проекта. Она не является официальным документом допуска, правового зонирования или геодезическим описанием границ; редакционные полигоны и линии поясняют содержание сайта и не отображают официальный режим доступа на местности.\n\nКоординаты и слои проекта собраны из открытых картографических и редакционных материалов и используются для справочной визуализации. Они не заменяют официальные геодезические и правовые данные. Маркеры площадок согласованы с открытыми материалами НЯЦ (sts.nnc.kz), включая экспорт KML/KMZ «Главная.kmz» того же слоя, что на публичном интерактивном атласе НЯЦ.\n\nДля работ и выездов на местности применяются только актуальные документы уполномоченных органов и оператора территории (допуск, маршрутный лист, приказ на выезд, полевой радиационный контроль, правовое описание границ и режимов).",
    "methodology.sec.mapPoints.title": "Точки на карте",
    "methodology.sec.mapPoints.body":
      "Площадки и подписи опираются на открытые материалы НЯЦ (sts.nnc.kz) и редакционные пояснения. В каталоге для каждой точки указаны тип источника и достоверность координат.",
    "methodology.sec.kml.title": "KML/KMZ в проекте",
    "methodology.sec.kml.body":
      "KML/KMZ — форматы обмена геоданными. Экспорт «Главная.kmz» обеспечивает согласованность с публичным атласом НЯЦ; это техническая привязка, а не юридически заверенный съём.",
    "methodology.sec.notGeodetic.title": "Границы и зоны на карте",
    "methodology.sec.notGeodetic.body":
      "Координаты маркеров и вспомогательные полигоны не задают официальное геодезическое описание границ СИП или зон допуска. Правовой режим территории определяется документами уполномоченных органов, а не интерфейсом сайта.",
    "methodology.sec.textsSources.title": "Тексты",
    "methodology.sec.textsSources.body":
      "Описания обобщают открытые материалы НЯЦ, научные публикации (в т.ч. указанную статью PLOS ONE) и редакционные формулировки. При расхождении с первоисточником приоритет у первоисточника.",
    "methodology.sec.visitRegime.title": "Режим доступа на сайте",
    "methodology.sec.visitRegime.body":
      "Раздел «Режим доступа на территорию СИП» задаёт справочные типовые формулировки из публичных источников. Он не подменяет приказ о допуске, паспорт безопасности или инструкции сопровождающего.",
    "methodology.publications.title": "Публикации и ключевые источники",
    "methodology.publications.lead":
      "Ниже — источники, которые проект уже использует. Для статей приведены DOI или прямые ссылки; институциональные ресурсы — как справочные порталы.",
    "methodology.publications.kind.peer_reviewed": "Рецензируемая публикация",
    "methodology.publications.kind.institutional": "Институциональный ресурс",
    "methodology.publications.kind.reference_portal": "Справочный портал",
    "methodology.glossary.title": "Глоссарий",
    "methodology.glossary.lead":
      "Краткие определения для неспециалиста. Это учебные пояснения, а не нормативные определения.",
    "methodology.heroLink": "Методика и источники",
    "methodology.design.heroBadge": "Справочно-образовательный материал",
    "methodology.design.legalTitle": "Правовое уведомление",
    "methodology.design.archKicker": "Methodology",
    "methodology.design.architectureTitle": "Архитектура данных",
    "methodology.design.archAside":
      "* У каждой точки каталога указаны тип источника и достоверность; при расхождениях приоритет у первоисточника.",
    "methodology.design.sourcesTitle": "Научный базис и партнеры",
    "methodology.design.sourcesLead":
      "Реестр ключевых источников, использованных при формировании материалов сайта.",
    "methodology.design.sourceLink": "Ссылка",
    "methodology.design.sourceMetaYear": "Год",
    "methodology.design.sourceMetaAccess": "Доступ",
    "methodology.design.sourceMetaType": "Тип",
    "methodology.design.sourceAccessPublic": "Публично",
    "methodology.design.sourceTypeReference": "Справочник",
    "methodology.design.lexiconKicker": "Lexicon",
    "methodology.design.glossaryHeading": "Глоссарий терминов",
    "methodology.design.ctaTitle": "Перейти к исследованию",
    "methodology.design.ctaLead":
      "Интерактивный картографический слой визуализирует маркеры и каталог в системе координат проекта; научные иллюстрации — в библиотеке карт и разделе исследовательских материалов.",
    "methodology.design.ctaOpenMap": "Открыть интерактивную карту",
    "methodology.design.ctaResearchMaps": "Изучить научные карты",
    "methodology.design.tileAdilet": "Портал Adilet",
    "methodology.design.tileUnep": "ЮНЕП",
    "methodology.design.tileOsm": "OpenStreetMap",
    "methodology.design.tileWikipedia": "Wikipedia",
    "footer.links.methodology": "Методика и источники",
    "map.pointProvenance.title": "Источник точки",
    "map.pointProvenance.sourceTypes": "Типы источника текста",
    "map.pointProvenance.coordQuality": "Достоверность координат",
    "map.pointProvenance.primaryAtlas": "Интерактивный атлас НЯЦ",
    "map.sipSource.stsNnc": "Материалы sts.nnc.kz (НЯЦ)",
    "map.sipSource.editorial": "Редакционное пояснение к открытым источникам",
    "map.pointProvenance.coord.kml_export": "Высокая привязка: координаты из KML/KMZ того же слоя, что на карте НЯЦ",
    "map.pointProvenance.coord.approx": "Ориентировочные координаты",
    "map.pointProvenance.coord.estimated_center": "Оценочное положение центра объекта",
    "glossary.radionuclide.title": "Радионуклид",
    "glossary.radionuclide.desc":
      "Нестабильное атомное ядро, которое со временем распадается, испуская излучение. Разные радионуклиды по‑разному ведут себя в почве, воде и организмах.",
    "glossary.cs137.title": "Цезий-137 (Cs-137)",
    "glossary.cs137.desc":
      "Часто измеряемый продукт ядерных испытаний и аварий. Накапливается в поверхностных слоях почвы и может попадать в растения; в мониторинге его сопоставляют с нормами и фоном для конкретной методики отбора проб.",
    "glossary.sr90.title": "Стронций-90 (Sr-90)",
    "glossary.sr90.desc":
      "Радионуклид, химически близкий к кальцию; может участвовать в цепочке «почва — растения — пища». На СИП его часто упоминают в контексте локально загрязнённых участков.",
    "glossary.pu239240.title": "Плутоний-239+240 (Pu-239+240)",
    "glossary.pu239240.desc":
      "В отчётах и картах часто суммируют изотопы плутония вместе. Показатель помогает отслеживать следы испытаний, но интерпретация всегда привязана к методике лаборатории.",
    "glossary.am241.title": "Америций-241 (Am-241)",
    "glossary.am241.desc":
      "Радионуклид, который встречается в сценариях долгоживущего загрязнения; на картах литературы может показываться рядом с цезием и стронцием для сопоставления распределения.",
    "glossary.bqkg.title": "Бк/кг",
    "glossary.bqkg.desc":
      "Беккерель на килограмм: единица удельной активности — сколько распадов в секунду приходится на массу образца. Число само по себе не «хорошее» или «плохое» без контекста норм и методики измерения.",
    "glossary.usvh.title": "мкЗв/ч (μSv/h)",
    "glossary.usvh.desc":
      "Микрозиверты в час — типичная размерность для бытовых дозиметров на местности. Показания зависят от высоты прибора, времени усреднения и калибровки; сравнение возможно только в рамках одной методики.",
    "glossary.fallout.title": "Выпадения (fallout)",
    "glossary.fallout.desc":
      "Радиоактивные вещества, перенесённые с облака после взрыва или аварии и оседающие на поверхности. На картах выпадений важны масштаб, дата съёмки и легенда первоисточника.",
    "glossary.dosimetry.title": "Дозиметрия",
    "glossary.dosimetry.desc":
      "Измерение и оценка облучения человека. В полевых условиях её проводят по регламенту сопровождающей организации; показания прибора туриста не заменяют этот регламент.",
    "glossary.adit.title": "Штольня (adit)",
    "glossary.adit.desc":
      "Горизонтальный или наклонный подземный выработ, в геологии и горном деле — вход в массив. На СИП подземные испытания часто связывают с сетью штолен на площадках вроде Дегелен.",
    "glossary.groundZero.title": "Эпицентральная площадка (ground zero)",
    "glossary.groundZero.desc":
      "Условный центр наземного или близкого к поверхности испытания — точка под взрывом. На схемах это ориентир, а не приглашение к визиту без допуска.",
  },
  kk: {
    brand: "STS Nuclear-Tour",
    "nav.home": "Басты бет",
    "nav.sip": "СИП туралы",
    "nav.map": "Карта",
    "nav.zones": "Маршруттар",
    "nav.about": "Жоба туралы",
    "nav.researchMaps": "Ғылыми карталар",
    "nav.maps": "Карталар кітапханасы",
    "nav.guide": "Анықтамалық гид",
    "nav.safety": "Қауіпсіздік жөніндегі ұсынымдар",
    "nav.contacts": "Байланыс",
    "nav.more": "Тағы",
    "nav.openMenu": "Мәзірді ашу",
    "nav.closeMenuDialog": "Мәзірді жабу",
    "map.sidebar.minimizePanel": "Панельді жию",
    "map.sidebar.restorePanel": "Нүкте карточкасын көрсету",
    "map.leaflet.legendTitle": "Шартты белгілер",
    "map.leaflet.legendSchematic":
      "Интерфейсте бағдар үшін шартты белгілер. Ресми режимдік немесе шекаралық құжаттың легендасы емес.",
    "map.fullPage.modePoi": "Нүктелер",
    "map.fullPage.modeRoutes": "Маршруттар",
    "map.fullPage.routesGoogleBanner":
      "Жеке нүктелер Google Maps-та ашылады. СИП картасында анықтамалық маркерлер көрсетіледі; расталмаған автомобиль тректері салынбайды.",
    "header.searchPlaceholder": "«Кіру режимі» бөлімі мен маршруттар бойынша іздеу…",
    "header.explore": "Бөлімдер",
    "search.noResults": "Сұраныс бойынша ештеңе табылмады",
    "hero.badge": "Ғылыми-анықтамалық және картографиялық ресурс",
    "hero.titleLine1":
      "Семей сынақ полигоны: карта, тарих, ғылыми деректер және кіру режимі",
    "hero.titleAccent": "",
    "hero.subtitle":
      "Бұрынғы Семей (Семипалатинск) сынақ полигоны аумағы туралы анықтамалық-білім беру материалы. Сайтта алаңдар картасы, тарихи контекст, ғылыми деректер, ашық материалдардағы типтік кіру режимдері және қауіпсіздік ұсынымдары бар. Материалдар анықтамалық сипатта; ресми рұқсатты алмастырмайды.",
    "hero.openMap": "Картаны ашу",
    "hero.viewRoutes": "Әдістеме және дереккөздер",
    "hero.imageAlt":
      "Күн батқандағы Шығыс Қазақстанның далалық пейзажы — Семей сынақ полигоны туралы бөлімге иллюстрация.",
    "routes.kicker": "Маршруттар",
    "routes.title": "Аумақ бойынша бағыттар",
    "routes.lead":
      "Алты карточка: нысан немесе тақырып, кіру мәртебесі, картада қарау нүктелері. Турөнім емес; шығу бөлек келісіледі.",
    "routes.disclaimer":
      "Жарияланымдар мен сызбаларға сүйенеді (¹³⁷Cs, ²⁴¹Am, ²³⁹+²⁴⁰Pu, ⁹⁰Sr карталары). Жабық учаскелерге өз бетінше баруға шақыру емес — төмендегі «Маңызды».",
    "routes.simple.kicker": "Маршруттар",
    "routes.simple.title": "Қарапайым маршруттар",
    "routes.simple.lead":
      "Карточкалар расталған нысандар мен Google Maps-тағы жеке нүктелерге сілтемелерді көрсетеді. Олар жолдардың жүруге жарамдылығын, қауіпсіздікті немесе еркін кіруді растамайды: бару үшін ресми келісім, сүйемелдеу және радиациялық бақылау қажет.",
    "routes.simple.cardLabel": "маршрут",
    "routes.simple.startLabel": "Бастау",
    "routes.simple.destinationLabel": "Нысандар",
    "routes.simple.importantLabel": "Маңызды",
    "routes.simple.locationsLabel": "Жеке нүктелерді ашу",
    "routes.simple.openMaps": "Google Maps-та ашу",
    "routes.simple.photoSourceLabel": "Фото",
    "routes.simple.sourceLabel": "Дереккөз",

    "routes.card.kurchatov.type": "Шолу",
    "routes.card.kurchatov.title": "Курчатов және ғылыми инфрақұрылым",
    "routes.card.kurchatov.desc":
      "Логистика: полигонның солтүстігіндегі қала, СИП материалдарымен жұмыста тірек.",
    "routes.card.kurchatov.access": "Мәртебе: анықтамалық, кіру кепілі жоқ",
    "routes.card.kurchatov.focus": "Нүктелер: Kurchatov town",

    "routes.card.atomic.type": "Нысан",
    "routes.card.atomic.title": "Atomic Lake / Telkem және іргелес нысандар",
    "routes.card.atomic.desc":
      "Батыс сектор. Кез келген шығу тек кіру режимі келісілген соң.",
    "routes.card.atomic.access": "Кіру: шектеулі, келісім қажет",
    "routes.card.atomic.focus": "Нүктелер: Atomic Lake, Telkem",

    "routes.card.degelen.type": "Учаске",
    "routes.card.degelen.title": "Degelen және жерасты сынақ іздері",
    "routes.card.degelen.desc":
      "Оңтүстік массив, жерасты сынақтар, рельеф және ағын. Өріс режимі регламентпен, сайт мәтінімен емес.",
    "routes.card.degelen.access": "Кіру: күшейтілген бақылау / шектеулі",
    "routes.card.degelen.focus": "Нүктелер: Degelen, creeks/runoffs",

    "routes.card.balapan.type": "Алаңдар",
    "routes.card.balapan.title": "Balapan және сынақ учаскелері",
    "routes.card.balapan.desc":
      "Сынақ алаңдарының сызбасы: қабат подписьдерін ресми дереккөздердегі кіру сипаттамасымен салыстырыңыз.",
    "routes.card.balapan.access": "Кіру: шектеулі, келісім қажет",
    "routes.card.balapan.focus": "Нүктелер: Balapan, test sites",

    "routes.card.fallout.type": "Тақырыптық карталар",
    "routes.card.fallout.title": "Түсу аймақтары және ластану карталары",
    "routes.card.fallout.desc":
      "¹³⁷Cs, ²⁴¹Am, ²³⁹+²⁴⁰Pu, ⁹⁰Sr қабаттары: легенда мен масштабты түпнұсқамен салыстырыңыз.",
    "routes.card.fallout.access": "Мәртебе: тек картамен жұмыс",
    "routes.card.fallout.focus": "Фокус: ¹³⁷Cs, ²⁴¹Am, ²³⁹+²⁴⁰Pu, ⁹⁰Sr; fallout plumes",
    "sip.kicker": "СИП туралы ақпарат",
    "sip.title": "Семей сынақ полигоны",
    "sip.lead":
      "Семей сынақ полигоны (СИП) — бұрынғы ядролық сынақ алаңы; аумағы қазіргі Қазақстанға жатады. Төменде ашық шолу дереккөздері бойынша қысқаша энциклопедиялық шолу; заңды және сандық нақты формулировкалар үшін түпнұсқа мен ресми құжаттарға сүйеніңіз.",
    "sip.card.where.title": "География",
    "sip.card.where.body":
      "Сынақ алаңы Қазақстанның шығысында және орталығында орналасып, қазіргі Абай, Павлодар және Қарағанды облыстарының бөліктерін қамтиды. Шолу бағалауларында аудан ауданы шамамен 18 500 км² деп келтіріледі (ресми картамен салыстырыңыз).\n\nДала мен жартылай шөл, континенттік климат, Ертіс және Дегелен массиві ландшафтты анықтайды. Ірі ғылыми орталық — Курчатов қаласы; әдебиетте Тәжірибе алаңы, Дегелен, Балапан негізгі алаңдар ретінде аталады. Жоба кадрындағы орташа биіктік — шамамен 300–400 м.",
    "sip.card.history.title": "Сынақтар хронологиясы",
    "sip.card.history.body":
      "Полигон инфрақұрылымы 1947 ж. бастап қалыптасады (КСРО шешімдері). Бірінші ядролық жарылыс — 1949 ж. 29 тамыз (РДС‑1).\n\n1949–1991 жж. полигонда ядролық сынақтар жүргізілді. Әдебиетте және ресми шолу материалдарында есептеу әдістемесіне байланысты әртүрлі көрсеткіштер кездеседі: әдетте 456 ядролық сынақ және 486 ядролық жарылыс аталады.\n\n1991 ж. 29 тамызда Қазақстан Республикасы Президентінің Жарлығымен полигон ресми түрде жабылды — ядролық қарулануға қарсы қозғалыс үшін маңызды қадам.",
    "sip.card.why.title": "Материалдардағы кіру режимі",
    "sip.card.why.body":
      "«СИП аумағына кіру режимі» бөліміндегі карточкалар ашық материалдардағы типтік формулировкаларды жинақтайды және жердегі шектерді белгілемейді. Ресми рұқсат пен талаптарды ҚР нормативтік актілері мен уәкілетті органдардың шешімдері анықтайды.",
    "sip.heterogeneity.title": "Учаскелер неге әртүрлі",
    "sip.heterogeneity.body":
      "Әдебиетте учаскелердің контрастылығы мен «дақтылығы» ядролық сынақ түрлерімен (атмосфералық, жер үсті, жер асты), радиоактивті түсу іздерімен және топырақ, су, биота арқылы радионуклид тасымалдауымен байланыстырылады; геология, гидрология, өсімдік жамылғысы, жел және климат ескеріледі.",
    "sip.heterogeneity.b1": "Сынақтар",
    "sip.heterogeneity.b1s":
      "Атмосфералық, жер үсті және жер асты сценарийлері; тікелей әсер алаңдары мен инженерлік нысандар.",
    "sip.heterogeneity.b2": "Түсулер",
    "sip.heterogeneity.b2s":
      "Түсу бағыттары мен үлестері; 1951 және 1953 жж. оқиғаларының маңызын шолулар бөлек атап өтеді.",
    "sip.heterogeneity.b3": "Орта",
    "sip.heterogeneity.b3s":
      "Геологиялық және гидрологиялық жағдайлар; топырақ-өсімдік жамылғысы; жел арқылы тасымалдау және климат.",
    "sip.note":
      "СИП-қа шығудың құқықтық мәртебесі беттің төменгі «Маңызды» блогында.\nРесми материалдар: https://www.nnc.kz · ҚР заңнамасы: https://adilet.zan.kz · МАГАТЭ: https://www.iaea.org · БҰҰ мен энциклопедиялық шолулар (мысалы, Britannica) — хронологияны түпнұсқамен сәйкестендіріңіз.",
    "zones.kicker": "Кіру режимі",
    "zones.title": "СИП аумағына кіру режимі",
    "zones.lead":
      "Бөлім ашық материалдарда кездесетін кіру режимдерін жинақтайды және құқықтық аймақтардың ресми картасы емес. Нақты кіру мүмкіндігін ҚР заңнамасы, уәкілетті органдар, аумақ операторы және ресми рұқсат құжаттары анықтайды.",
    "zones.card.routed.label": "Келісілген маршруттар бойынша",
    "zones.card.routed.title": "Маршруттық режим",
    "zones.card.routed.desc":
      "Ашық сипаттамаларда қозғалыс тек алдын ала келісілген маршруттармен және қолданыстағы талаптар шеңберінде болуы мүмкін; коридордан ауытқу әдетте рұқсат етілмейді. Нақты шарттарды ҚР НҚА, уәкілетті органдар, оператор және рұқсат құжаттары белгілейді.",
    "zones.card.routed.status": "Тек маршрутпен",
    "zones.card.restricted.label": "Шектеулі қолжетімділік",
    "zones.card.restricted.title": "Рұқсат қажет",
    "zones.card.restricted.desc":
      "Қоғамдық материалдарда қысқа уақыт болу ресми рұқсатпен және әдетте сүйемелдеумен, дозиметриялық бақылаумен сипатталады. Бұл әрекет нұсқаулығы емес: нақты режимді ҚР заңнамасы, уәкілетті органдар, оператор және рұқсат құжаттары анықтайды.",
    "zones.card.restricted.status": "Рұқсатпен",
    "zones.card.closed.label": "Жабық аумақтар",
    "zones.card.closed.title": "Жабық",
    "zones.card.closed.desc":
      "Ашық дереккөздерде рұқсатсыз еркін кіру әдетте болдырылмайды. Арнайы жұмыстар шеңберінде кіруді уәкілетті органдар белгілейтін жеке допускпен және ҚР заңнамасы аясында сипаттайды.",
    "zones.card.closed.status": "Кіруге болмайды",
    "zones.disclaimerTitle": "Анықтамалық хабарлама",
    "zones.disclaimerBody":
      "Бұл бөлімдегі ақпарат анықтамалық сипатта. Нақты кіру режимі, шектер, сүйемелдеу, ҚҚҚ және радиациялық бақылау талаптары ҚР нормативтік актілерімен және уәкілетті органдардың шешімдерімен, сондай-ақ аумақ операторымен белгіленеді.",
    "zones.sourcesTitle": "Ресми дереккөздер және жарияланымдар",
    "zones.source.nnc": "ҚР Ұлттық ядролық орталығы — nnc.kz",
    "zones.source.sts": "СИП / STS порталы — sts.nnc.kz",
    "zones.source.adilet": "ҚР НҚА — Adilet (adilet.zan.kz)",
    "zones.source.iaea": "МАГАТЭ / IAEA — iaea.org",
    "zones.source.unep": "ЮНЕП / UNEP — unep.org",
    "zones.source.plos": "PLOS ONE жарияланымдары — journals.plos.org",
    "guide.kicker": "Анықтамалық гид",
    "guide.title": "Рұқсат пен келісу",
    "guide.lead":
      "Маршрут пен кіру режимін ҚР заңнамасы, уәкілетті органдар, аумақ операторы және ресми рұқсат құжаттары анықтайды. Карта қабаттары мен редакциялық мәтін оларды алмастырмайды.",
    "guide.card1.t": "Құжаттар мен келісу",
    "guide.card1.b":
      "Маршрут парағы, сүйемелдеуші байланысы, учаске бойынша өзекті шектеулер.",
    "guide.card2.t": "«Алаң — кіру режимі — коридор»",
    "guide.card2.b":
      "Картада нүктені белгіледіңіз, кіру режимін ресми құжатпен салыстырдыңыз, сүйемелдеу материалындағы маршрут сызығын таптыңыз. Үшеуінің бірі сәйкес келмесе — тоқтаңыз.",
    "guide.card3.t": "Өрісте",
    "guide.card3.b":
      "Трассадан шықпау, сынама мен кәдесый жинауға тыйым, тексерілмеген жергілікті су/азықсыз.",
    "guide.rules.title": "Маршрут ережелері",
    "guide.rules.r1": "Бекітілген маршруттан шықпау, жолды қысқартпау.",
    "guide.rules.r2": "Өсімдік, саңырауқұлақ, топырақ, тас жинамау.",
    "guide.rules.r3": "Ресми тексеріссіз жергілікті су мен өнімді қолданбау.",
    "guide.rules.r4": "Рұқсат етілген нүктелерден тыс ұзақ тұрақ пен пикник жоқ.",
    "guide.rules.r5": "Техногендік нысандар мен белгісіз материалға тимеу.",
    "guide.rules.r6": "Жекелеген учаскелер — тек гидпен немесе жазбаша рұқсатпен.",
    "guide.rules.note": "Сондай-ақ «Қауіпсіздік» бөлімін қараңыз.",
    "science.kicker": "Ғылыми деректер",
    "science.title": "Ғылыми деректер және түсіндіру шектеулері",
    "science.lead":
      "Сайтта ашық ғылыми жарияланымдар мен ресми материалдар қолданылады, бірақ әр дереккөздің қолдану аясы өзіндік.",
    "science.c1.t": "Тарихи-географиялық контекст",
    "science.c1.b":
      "СИП Абай, Павлодар және Қарағанды облыстарының бөліктерінің түйіскісінде орналасқан. Дереккөздерде жиірек жекелеген сынақ алаңдары аталады; түсу тарихы, рельеф және жергілікті жағдайлар үйлесімі аумақты біркелкі емес етеді, кез келген нүкте үшін «орташа» бірыңғай сурет болмайды.",
    "science.c2.t": "Радиоэкологиялық зерттеулер",
    "science.c2.b":
      "Ашық әдебиетте топырақ, су, биота мониторингі мен радионуклидтердің кеңістіктік таралуы талқыланады; мұндай бағыттарға ҰЯО РК пен байланысты топтардың көпжылдық жұмыстары да жатады. Мысалы, Panitskiy et al. (2023) мақаласында копыттылардың еті мен сүтіндегі радионуклид мөлшері қарастырылады; есептеулер мен түсіндірмелер авторлардың нақты постановкасына бекітілген және СИП-тің кез келген нүктесіне туристік немесе өз бетінше сапардың қауіпсіздігінің тікелей бағасы емес.",
    "science.c3.t": "Ғылыми қорытындылардың шектеулері",
    "science.c3.b":
      "Әр жариялама өз нысанын, әдістемесін және қорытындылар шегін сипаттайды. Жануарлар, топырақ, су немесе жекелеген сынамалар бойынша нәтижелерді бүкіл полигонға автоматты түрде көшіруге болмайды. Кіру, жердегі жұмыстар және бақылау көлемі туралы шешімдер мақаланың редакциялық қысқаша мазмұнынан шықпайды және нормативтік рәсімдерді алмастырмайды.",
    "science.important":
      "Маңызды: жекелеген зерттеулердің нәтижелері ресми сәулелік бақылауды, рұқсат құжаттарын және уәкілетті органдардың шешімдерін алмастырмайды.",
    "map.kicker": "Карта",
    "map.titleLine1": "СИП интерактивті картасы",
    "map.titleLine2": "",
    "map.subtitle":
      "Карта алаң нүктелерін, редакциялық түсініктемелер мен сайт материалдары бойынша білім беру бағдарламасы үшін анықтамалық қабаттарды біріктіреді.",
    "map.feature.layers.title": "Қабаттар",
    "map.feature.layers.desc":
      "Негізгі және рельефті қабаттар (соның ішінде OpenTopoMap) және аумақты оқу контекстінде қарау үшін қосылатын тақырыптық қабаттар.",
    "map.feature.gps.title": "Экрандағы орын",
    "map.feature.gps.desc":
      "Карта объектілеріне қатысты экрандағы орынды көрсетеді; рұқсатты келісу қызметі емес, ресми құжаттарды алмастырмайды.",
    "map.fullscreen": "Толық экран картасын іске қосу",
    "map.modal.kind.zone": "Кіру режимі (анықтамалық)",
    "map.modal.kind.route": "Маршрут",
    "map.cardTitle": "Көрсету мазмұны",
    "map.cardLead":
      "Картадағы редакциялық полигондар мен сызықтар сайт материалдарын визуалды түсіндіру үшін қолданылады және жердегі ресми кіру режимін көрсетпейді.",
    "map.cardRelief":
      "Рельеф кадрда анықтамалық (қабат деректері бойынша орташа биіктік ~379 м, мин. 142 м, макс. 1043 м). OpenTopoMap ресми рельеф құжаты емес.",
    "map.listShowsTitle": "Карта нені көрсетеді",
    "map.listShows1": "ашық материалдарда аталып өтетін алаңдар мен бағдарлар;",
    "map.listShows2": "анықтамалық нүктелер мен редакциялық жазбалар;",
    "map.listShows3": "аумақты оқуға арналған тақырыптық қабаттар;",
    "map.listShows4": "қосылған болса, анықтамалық қабат ретіндегі білім беру маршруттары.",
    "map.listNotReplacesTitle": "Карта не алмастырады",
    "map.listNotReplaces1": "ресми рұқсат;",
    "map.listNotReplaces2": "маршрут парағы;",
    "map.listNotReplaces3": "шығу бұйрығы;",
    "map.listNotReplaces4": "өрістегі радиациялық бақылау;",
    "map.listNotReplaces5": "шекаралар мен режимдердің құқықтық сипаттамасы.",
    "map.shortDisclaimer":
      "Сайттағы карта ресми рұқсат құжаты, құқықтық аймақтау немесе шекаралардың геодезиялық сипаттамасы емес. Жердегі жұмыстар мен шығулар үшін тек уәкілетті органдар мен аумақ операторының өзекті құжаттары қолданылады.",
    "map.attributionShort":
      "Нысан сипаттамалары: sts.nnc.kz. Координаталар мен қабаттарды бекіту — «Әдістеме және дереккөздер» бөлімінде.",
    "map.layer.standard": "Қалыпты",
    "map.layer.topo": "Рельеф",
    "map.layer.cartoLight": "Ашық",
    "map.layer.satellite": "Спутник",
    "map.toolbar.zoom": "Масштаб",
    "map.toolbar.zoomIn": "Жақындату",
    "map.toolbar.zoomOut": "Алыстату",
    "map.toolbar.basemap": "Негізгі карта",
    "map.detail.placeholder": "Сипаттама, дереккөздер мен сілтемелерді көру үшін картадан нүктені таңдаңыз.",
    "map.overlay.zones": "Анықтамалық полигондар",
    "map.overlay.routes": "Маршруттар",
    "map.overlay.poi": "Нүктелер",
    "map.popup.location": "Орналасуы",
    "map.popup.avgElevation": "Орташа биіктік",
    "map.popup.elevationRange": "Биіктік ауқымы",
    "map.popup.elevationTitle": "Картадағы нүкте",
    "map.popup.elevationValue": "Биіктік",
    "map.popup.elevationHint": "Қазір мок-дерек. Кейін Elevation API қосуға болады.",
    "map.points.sourceLabel": "Дереккөз",
    "map.points.more": "Толығырақ",
    "map.points.approx": "шамамен",
    "map.points.estimatedPosition": "шамамен орналасу",
    "map.points.kmlExport": "KML / НЯЦ картасы",
    "map.points.filtersTitle": "Нысандар",
    "map.points.close": "Жабу",
    "map.points.category.overview": "Жалпы ақпарат",
    "map.points.category.testSite": "Сынақ алаңы",
    "map.points.category.sipObject": "Сынақ учаскесі / СИП нысаны",
    "map.points.category.excavation": "Экскавациялық тәжірибе",
    "map.points.category.radiological": "Радиологиялық алаң",
    "map.catalog.filtersTitle": "Нысан қабаттары",
    "map.sidebar.openPanel": "Сүзгілер және каталог",
    "map.sidebar.openEmbedded": "Карта объектілері",
    "map.sidebar.collapseTools": "Қабаттар мен баптаулар панелін жию",
    "map.sidebar.closeOverlays": "Панельдерді жабу және картаға оралу",
    "map.catalog.searchPlaceholder": "Атауы бойынша іздеу…",
    "map.catalog.statsTitle": "Каталог",
    "map.catalog.statsTotal": "Барлық нүкте",
    "map.catalog.statsShown": "Көрсетілуде",
    "map.catalog.filter.settlement": "Елді мекендер",
    "map.catalog.filter.test_site": "СИП алаңдары",
    "map.catalog.filter.landmark": "Бағдарлар",
    "map.catalog.type.settlement": "Елді мекен",
    "map.catalog.type.test_site": "СИП алаңы",
    "map.catalog.type.landmark": "Бағдар",
    "map.catalog.confidence.high": "жоғары (тексерілетін дереккөз)",
    "map.catalog.confidence.medium": "орташа",
    "map.catalog.confidence.reference": "анықтамалық / бағдар",
    "map.catalog.sourceType.official": "ресми / атлас",
    "map.catalog.sourceType.scientific": "ғылыми",
    "map.catalog.sourceType.osm": "OpenStreetMap",
    "map.catalog.sourceType.wikipedia": "Wikipedia",
    "map.catalog.sourceType.manual": "редакция / қолмен привязка",
    "map.catalog.approxCoords": "шамамен координаттар",
    "map.catalog.link": "Сілтеме",
    "map.catalog.openSource": "Ашу",
    "map.catalog.googleMaps": "Google Maps",
    "map.catalog.openGoogleMaps": "Нүктені ашу",
    "map.catalog.interestingFact": "Қызықты дерек",
    "map.catalog.confidenceLabel": "Сенімділік",
    "map.catalog.sourceKindLabel": "Дереккөз түрі",
    "map.catalog.sourceTextLabel": "Дереккөз туралы мәлімет",
    "map.geo.territory.title": "Семей сынақ полигоны",
    "map.geo.territory.desc":
      "Бұрынғы ядролық полигон; дала мен көтеріліс. Кіру режимі осы интерфейстен тәуелді емес.",
    "map.geo.territory.loc":
      "Семей сынақ полигоны, Павлодар облысы, 071100, Қазақстан",
    "map.geo.dev.routed.title": "Қызметтік полигон: шартты «маршруттық» режим",
    "map.geo.dev.routed.desc":
      "Интерфейсті баптау үшін полигон. Жердегі кіру режимі шегін көрсетпейді.",
    "map.geo.dev.restricted.title": "Қызметтік полигон: шартты рұқсат аймағы",
    "map.geo.dev.restricted.desc":
      "Қабат стилін баптау үшін полигон. Рұқсат картасы немесе регламент емес.",
    "map.geo.dev.closed.title": "Қызметтік полигон: шартты жабық учаске",
    "map.geo.dev.closed.desc":
      "Қабат стилін баптау үшін полигон. Нақты аумақтағы тыйым немесе рұқсатты білдірмейді.",
    "map.geo.route.perimeter.title": "Маршрут сызығы (тестілік визуализация)",
    "map.geo.route.perimeter.desc":
      "Маршрут қабатын тексеру үшін жабық сызық. Нақты деректер қосылғанда заңды негізделген жиынтықтардағы сызықтармен ауыстырылады.",
    "map.geo.route.cross.title": "Маршрут сызығы (екінші тестілік стиль)",
    "map.geo.route.cross.desc":
      "Бірнеше маршрут қабаттарын ажыратуды тексеру үшін қосымша сызық.",
    "map.geo.poi.kurchatov.title": "Курчатов (бағдар)",
    "map.geo.poi.kurchatov.desc":
      "Қала — СИП-тің ғылыми және әкімшілік орталығы; ашық мәтіндерде полигон туралы материалдармен жұмыста типтік логистикалық бағдар ретінде аталады.",
    "map.geo.poi.degelen.title": "Дегелен массиві (бағдар)",
    "map.geo.poi.degelen.desc": "Оңтүстіктегі таулық түйін; рельефті қабатта көрініп тұрады.",
    "map.geo.poi.atomicLake.title": "Шаған атом көлі",
    "map.geo.poi.atomicLake.desc":
      "1965 жылғы ядролық жарылыстың нәтижесінде пайда болған су қоймасы.",
    "safety.title": "Қауіпсіздік жөніндегі ұсынымдар",
    "safety.stage1.title": "1-кезең — полигонға баруға дайындық",
    "safety.stage1.intro": "Полигонға баруға дайындық кезеңінде мыналар ұсынылады:",
    "safety.stage1.items":
      "Денені қорғау жиынтығын дайындау: тығыздығы кемінде 65 г/м² бір реттік комбинезон, шаңнан қорғайтын бахила, клапаны бар бір реттік респиратор, бір реттік резеңке қолғаптар (2–3 жұп алған жөн).\nҚорғаныс жиынтығында ақау бар-жоғын тексеріп, қажет болса оны ауыстыру.\nҚажетті мөлшерде бөтелкедегі су мен тамақ дайындау. Тамақты бір реттік қаптамаға салу қажет.\nЖеке дозиметр дайындау.\nМаршрут аяқталғаннан кейін қалдықтарды жинауға арналған қоқыс қабын дайындау.\nГигиена құралдарын дайындау: сабын, су және құрғақ майлықтар.",
    "safety.stage1.extraIntro": "Дайындық кезеңінде қосымша мыналар ұсынылады:",
    "safety.stage1.extraItems":
      "Автомобильге техникалық қызмет көрсету, қосымша қосалқы дөңгелектер жиынтығын және 100 км жолға есептелген қосымша жанармай ыдысын дайындау.\nТоппен сапарға шыққанда жеке дозиметрия маманын жалдау.\nМаршруттағы мінез-құлық қағидаларымен, соның ішінде темекі шегуге және алкоголь ішуге тыйым салумен танысу.",
    "safety.stage2.title": "2-кезең — маршруттан өту",
    "safety.stage2.intro": "Полигон аумағындағы маршруттан өту кезеңіндегі ұсынымдар:",
    "safety.stage2.items":
      "Халық үшін радиациялық қауіп төндіретін аймаққа кірердің алдында табиғи қажеттіліктерді өтеу.\nЖеке қорғаныс құралдарын киер алдында олардың зақымданбағанын тексеру.\nЖеке дозиметрді іске қосу.\nБелгіленген қозғалыс траекториясынан ауытқымау.\nХалық үшін радиациялық қауіп төндіретін аймақта өсімдіктерді, минералдарды, металл және басқа заттарды өз бетінше жинауға жол бермеу.\n«Лас» аймаққа бару аяқталғаннан кейін, автомобильге отырар алдында қорғаныс жиынтығын шешіп, қоқыс қабына салу ұсынылады.",
    "safety.stage2.warning":
      "«Лас» аймақта табиғи қажеттіліктерді өтеуге, тамақ жеуге және су ішуге тыйым салынады.",
    "safety.stage3.title": "3-кезең — сапарды аяқтау",
    "safety.stage3.intro": "Сапарды аяқтау кезеңіндегі ұсынымдар:",
    "safety.stage3.items":
      "Пайдаланылған қорғаныс жиынтықтарын, бір реттік ыдыстар мен бөтелкелерді алдын ала тығыз қаптап, кәдеге жаратуды қамтамасыз ету.\nТабиғи қажеттіліктерді өтеу.\nҚол мен бетті жуу, аяқ киімді шаң қалдықтарынан щеткамен тазалау.\nАвтомобильді жанаспайтын жуу тәсілімен жуу.\nДозиметриялық бақылау нәтижелерін тіркеу; көрсеткіштер жоғары болған жағдайда дәрігерге жүгіну.",
    "safety.disclaimer":
      "Бұл анықтамалық ұсынымдар баруға рұқсат болып табылмайды, қауіпсіздікке кепілдік бермейді және ресми рұқсатты, нұсқаманы, кәсіби радиациялық бақылауды және жауапты оператордың нұсқауларын алмастырмайды. Ластанған жеке қорғаныс құралдары мен қалдықтар тұрмыстық қоқыс ретінде емес, жауапты ұйымның бекітілген қағидалары бойынша кәдеге жаратылады.",
    "safety.sourceLabel": "Ғылыми дереккөз",
    "safety.source":
      "Молдажанов М. Б., Martínez-Falcó J., Дүйскенова Р. Ж. «Семей сынақ полигоны нысандары бойынша туристік маршруттарда туристердің радиациялық қауіпсіздігін қамтамасыз ету жөніндегі ұсынымдарды әзірлеу». Тапсырыс беруші ұсынған қолжазбаның соңғы редакциясы (2026), 16–17-бб. Толық мәтін мен файлды жариялау құқығы бөлек нақтыланады.",
    "footer.about":
      "Портал подготовлен в рамках реализации грантового финансирования исследований молодых ученых по проекту «Жас ғалым» на 2025-2027 годы на тему «AP25794915 Научное исследование экономического потенциала ядерного туризма на примере Семипалатинского испытательного полигона». Данное исследование финансируется Комитетом науки и высшего образования Министерства науки и высшего образования Республики Казахстан.",
    "footer.links.title": "Навигация",
    "footer.links.home": "Басты бет",
    "footer.links.sip": "СИП туралы",
    "footer.links.mapRoutes": "Алаңдар картасы",
    "footer.links.zones": "Маршруттар",
    "footer.links.safety": "Қауіпсіздік жөніндегі ұсынымдар",
    "footer.links.contacts": "Байланыс",
    "footer.project.title": "Жоба",
    "footer.project.sipInfo": "СИП туралы ақпарат",
    "footer.project.about": "Жоба туралы",
    "footer.project.sources": "Дереккөздер",
    "footer.meta.title": "Маңызды",
    "footer.meta.disclaimer":
      "Сайт ресми рұқсатты, СИП аумағына кіру мен сәулелену мониторингінің регламенттерін алмастырмайды. Нақты режимді ҚР заңнамасы, уәкілетті органдар, оператор және рұқсат құжаттары анықтайды. Материалдар анықтамалық.",
    "footer.meta.copyright": "",
    "researchMaps.kicker": "Ғылыми карталар",
    "researchMaps.title": "СИП ғылыми карталары",
    "researchMaps.lead":
      "Каталогта PLOS ONE (2023) мақаласындағы екі шолу картасы және Молдажанов пен авторлар ұжымының соңғы қолжазбасындағы (2026) ¹³⁷Cs, ⁹⁰Sr, ²⁴¹Am және ²³⁹⁺²⁴⁰Pu меншікті белсенділігінің төрт картасы бар. Карталар ғылыми-анықтамалық түсіндіруге арналған және бару қауіпсіздігін бағаламайды.",
    "researchMaps.note": "Әр картаның дереккөзі бөлек көрсетілген; қолжазбадағы жаңа карталар PLOS ONE материалы емес.",
    "researchMaps.open": "Ашу",
    "researchMaps.cardCta": "Картаны ашу",
    "researchMaps.showMore": "Көбірек көрсету",
    "researchMaps.showLess": "Жию",
    "researchMaps.viewAll": "Барлық карталарды көру",
    "researchMaps.sourceLabel": "Дереккөз:",
    "researchMaps.source.plos":
      "PLOS ONE (Panitskiy et al., 2023) — Bioaccumulation of radionuclides in hoofed animals inhabiting the Semipalatinsk Test Site",
    "researchMaps.g001.title": "СИП-тың Қазақстандағы жалпы орналасуы",
    "researchMaps.g001.body":
      "СИП Қазақстандағы орны және көршілес өңірлер (мақаладағыдай).",
    "researchMaps.g002.title": "СИП аумағының сызбасы және сынама нүктелері",
    "researchMaps.g002.body":
      "Авторлардың учаскелері мен сынама нүктелері.",
    "researchMaps.g003.title": "Cs-137 (цезий‑137) таралуы",
    "researchMaps.g003.body":
      "¹³⁷Cs өрісі мақала бойынша; масштаб пен легенданы PDF-пен салыстырыңыз.",
    "researchMaps.g004.title": "Am-241 (америций‑241) таралуы",
    "researchMaps.g004.body":
      "Сурет шегіндегі ²⁴¹Am кеңістіктік өрісі.",
    "researchMaps.g006.title": "Sr-90 (стронций‑90) таралуы",
    "researchMaps.g006.body":
      "Авторлар көрсеткен учаскелердегі ⁹⁰Sr өрісі.",
    "sources.title": "Дереккөздер",
    "sources.lead":
      "Екі шолу картасы мен төрт меншікті белсенділік картасының дереккөздері бөлек көрсетілген.",
    "sources.primary": "Негізгі дереккөз",
    "sources.plos.title": "PLOS ONE — мақала және фигуралар (карталар)",
    "sources.plos.desc":
      "Panitskiy A. et al. (2023). Bioaccumulation of radionuclides in hoofed animals inhabiting the Semipalatinsk Test Site.\nМақалаға тек g001 және g002 шолу карталары жатады.",
    "sources.openPdf": "PDF ашу",
    "sources.openSection": "Дереккөздерге өту",
    "sources.more": "Кейін қосамыз",
    "sources.placeholder":
      "Тізім толыға келе ресми және ғылыми құжаттарға сілтемелер қосылады.",
    "sources.item.official": "СИП бойынша ресми материалдар және кіру регламенттері",
    "sources.item.papers": "Аумақтың радиоэкологиясы бойынша ғылыми жарияланымдар мен шолулар",
    "sources.item.history": "Нысандар мен маршруттар бойынша тарихи және экологиялық дереккөздер",
    "maps.kicker": "Карта архиві",
    "maps.backHome": "Басты бетке",
    "maps.libraryTitle": "СИП карталары және зерттеу материалдары",
    "maps.libraryLead":
      "Жобаның жергілікті файлдары: әр карточкада жарияланым сілтемесі және метадерек өрістері.",
    "maps.backToLibrary": "Барлық карталарға қайту",
    "maps.notFound": "Карта табылмады",
    "maps.detail.kicker": "Scientific & Institutional Materials",
    "maps.detail.verified": "Тексерілетін дереккөз",
    "maps.detail.descriptionTitle": "Түсіндірме және контекст",
    "maps.openImage": "Суретті ашу",
    "maps.info.what": "Карта нені көрсетеді",
    "maps.info.whatBody":
      "Мақаладан кадр: авторлардың көрсеткіші мен шекаралары.",
    "maps.info.why": "Контекст",
    "maps.info.whyBody":
      "Авторлар СИП учаскелерін салыстырады; сурет — олардың деректерінің бір қиыны.",
    "maps.info.how": "Шектеу",
    "maps.info.howBody":
      "Файл экранда кіру құқығын бермейді. Шешім — уәкілетті органдар регламенті мен мониторинг деректері бойынша.",
    "maps.sourceTitle": "Дереккөз",
    "maps.source.publication": "Жарияланым атауы",
    "maps.source.details": "Сипаттама",
    "maps.source.year": "Жыл",
    "maps.source.type": "Түрі",
    "maps.source.typeValue": "Ғылыми жарияланым",
    "maps.source.note": "Төменгі «Маңызды» блогын қараңыз.",
    "maps.importantTitle": "Маңызды",
    "maps.importantBody":
      "СИП аумағына кірудің құқықтық шарттары беттің төменгі «Маңызды» бөлімінде.",
    "maps.download.title": "Жоба материалдары",
    "maps.download.subtitle": "PDF / суреттер (жергілікті)",
    "maps.downloadMapImage": "Карта суретін жүктеп алу",
    "maps.prev": "Алдыңғы карта",
    "maps.next": "Келесі карта",
    "footer.resources.title": "Ресурстар",
    "footer.resources.dataSources": "Дереккөздер",
    "footer.resources.ethicsPolicy": "Этика саясаты",
    "footer.account.title": "Аккаунт",
    "footer.account.safetyProtocols": "Қауіпсіздік хаттамалары",
    "footer.account.researcherLogin": "Зерттеуші кірісі",
    "footer.partner": "ABU сайтындағы жоба беті",
    "about.card.ecology.title": "Зерттеулер",
    "about.card.ecology.body":
      "СЯА бойынша радиоэкологиялық зерттеулер әлі де жалғасуда: топырақ, су, биота мониторингі және радионуклидтердің таралуын бағалау.\n\nНегізгі ұйымдар: НЯО РК және ИРБЭ (МАГАТЭ қолдауы). Жиі қаралатын изотоптар: ¹³⁷Cs, ⁹⁰Sr, ²³⁹Pu, ²⁴¹Am.\n\nДереккөздер: https://www.nnc.kz · https://www.iaea.org",
    "about.card.ecology.cta": "Ғылыми карталарға",
    "about.card.history.title": "Тарих",
    "about.card.history.body":
      "Құрылған: 1947. Бірінші ядролық жарылыс: 29.08.1949 (РДС‑1). Сынақ кезеңі: 1949–1991. Полигонды жабу: 29.08.1991 (ҚР Президенті Жарлығы).\n\nӘдебиетте және ресми шолу материалдарында есептеу әдістемесіне байланысты әртүрлі көрсеткіштер кездеседі: әдетте 456 ядролық сынақ және 486 ядролық жарылыс аталады.\n\nДереккөздер: НЯО РК · МАГАТЭ · БҰҰ.",
    "about.card.safety.title": "Кіру",
    "about.card.safety.body":
      "Ашық шолуларда бұрынғы полигон аумағына кіруді ресми рұқсат, бекітілген маршрут және әдетте мамандар сүйемелдеуі мен дозиметриялық бақылау шартына байланысты сипаттайды. Нақты шарттар — ҚР НҚА, аумақ операторы мен рұқсат құжаттарында.\n\nДереккөздер: https://adilet.zan.kz · https://www.nnc.kz",
    "about.project.title": "Жоба туралы",
    "about.project.body":
      "Жоба — бұрынғы Семей сынақ полигоны аумағы туралы ғылыми-анықтамалық және картографиялық ресурс: ашық ғылыми және институциялық дереккөздер, тарихи контекст, алаңдардың интерактивті картасы және рецензияланған жарияланымдардан иллюстрациялар.\n\nНЯО РК материалдары (соның ішінде sts.nnc.kz), геодеректер мен KML алаң маркерлері, ғылыми карталар бөлімі және DOI/дереккөз метадеректері бар кітапхана біріктірілген.",
    "about.project.cta": "Картаға өту",
    "site.disclaimer.unified":
      "Сайт бұрынғы Семей сынақ полигоны аумағы туралы ғылыми-анықтамалық және картографиялық ресурс ретінде орналастырылған. Материалдар анықтамалық‑білім беру сипатында; олар ресми рұқсатты, сәулелену мониторингінің регламенттерін, Қазақстандағы уәкілетті органдар мен аумақ операторының шешімдерін алмастырмайды. Мәтіндер мен координаталар әдістеме бөлімінде көрсетілген ашық дереккөздерден жиналған; бұл жергілікті өз бетінше әрекетке рұқсат емес.",
    "site.disclaimer.unifiedShort":
      "Бұрынғы СИП туралы ғылыми-анықтамалық ресурс; рұқсат, мониторинг пен уәкілетті органдар мен оператор шешімдерін алмастырмайды.",
    "methodology.teaser.kicker": "Деректердің ашықтығы",
    "methodology.teaser.title": "Әдістеме және дереккөздер",
    "methodology.teaser.lead":
      "Картадағы нүктелер қайдан алынғаны, жобадағы KML/KMZ не білдіретіні және кіру режиміне қалай қарау керектігі қысқаша. Толығырақ — жеке бетте.",
    "methodology.teaser.moreLink": "Толық әдістеме және жарияланымдар",
    "methodology.teaser.acc.dataTitle": "Карта және координаталар",
    "methodology.teaser.acc.dataBody":
      "Нүктелер НЯЦ ашық атласымен үйлесімді; каталог дереккөз түрі мен координата сенімділігін көрсетеді. Толығырақ — әдістеме бетінде.",
    "methodology.teaser.acc.pubsTitle": "Жарияланымдар және порталдар",
    "methodology.teaser.acc.pubsBody":
      "ғылыми карталар бөлімінде Panitskiy et al. ашық мақаласынан суреттер қолданылады (PLOS ONE, 2023, DOI 10.1371/journal.pone.0294632). Қосымша институциялық дереккөздер (НЯЦ, Adilet, IAEA, UNEP және т.б.) жобаға қосылған.",
    "methodology.teaser.acc.glossTitle": "Глоссарий",
    "methodology.teaser.acc.glossBody":
      "Терминдердің қысқа түсініктемелері (радионуклидтер, өлшем бірліктері, выпадения, дозиметрия, штольня, эпицентрлік алаң) — әдістеме бетінде.",
    "methodology.page.title": "Әдістеме және дереккөздер",
    "methodology.page.lead":
      "Сайт материалдары қалай жиналғаны, карта деректері не білдіретіні және оларды түсіндіру кезінде қандай шектеулерді ескеру керектігі туралы.",
    "methodology.v2.sourceTypesTitle": "Дереккөз түрлері",
    "methodology.v2.sourceType1": "Қазақстан Республикасының заңнамасы;",
    "methodology.v2.sourceType2": "ҚР Ұлттық ядролық орталығының ресми материалдары;",
    "methodology.v2.sourceType3": "халықаралық институциялық материалдар;",
    "methodology.v2.sourceType4": "рецензияланған ғылыми жарияланымдар;",
    "methodology.v2.sourceType5": "жобаның картографиялық және редакциялық материалдары.",
    "methodology.v2.usedTitle": "Сайтта не пайдаланылады",
    "methodology.v2.used1": "тарихи мәліметтер;",
    "methodology.v2.used2": "алаңдар туралы деректер;",
    "methodology.v2.used3": "ғылыми жарияланымдар;",
    "methodology.v2.used4": "тақырыптық карталар;",
    "methodology.v2.used5": "редакциялық қабаттар мен жазбалар;",
    "methodology.v2.used6": "кіру режимдері туралы анықтамалық мәтіндер.",
    "methodology.v2.limitsTitle": "Шектеулер",
    "methodology.v2.limit1": "сайт ресми құжат емес;",
    "methodology.v2.limit2": "құқықтық шекараларды анықтамайды;",
    "methodology.v2.limit3": "рұқсатты, өрістегі бақылауды және нормативтік рәсімдерді алмастырмайды;",
    "methodology.v2.limit4":
      "жекелеген ғылыми жарияламалардың нәтижелерін бүкіл полигон аумағына автоматты түрде көшіруге болмайды.",
    "methodology.v2.mapTitle": "Картаны қалай оқу керек",
    "methodology.v2.mapIntro":
      "Интерактивті карта анықтамалық пен түсіндірме қабаттарды біріктіреді; төменде оларды мағына бойынша қалай ажырату керегі көрсетілген.",
    "methodology.v2.mapItem1": "маркерлер — нүктелер мен алаңдар;",
    "methodology.v2.mapItem2": "полигондар — редакциялық немесе тақырыптық қабаттар;",
    "methodology.v2.mapItem3": "сызықтар — анықтамалық маршруттар немесе визуалды түсініктемелер;",
    "methodology.v2.mapItem4":
      "жердегі құқықтық маңызы бар шешімдер тек ресми құжаттар бойынша қабылданады.",
    "methodology.v2.mapKmlNote":
      "НЯЦ ашық атласындағы KML/KMZ экспорты жобада координаттарды sts.nnc.kz сайтындағы сол қабатпен техникалық үйлесімділік үшін қолданылады; бұл құқықтық құжат немесе шекаралардың геодезиялық сипаттамасы емес.",
    "methodology.v2.editorialTitle": "Редакциялық принцип",
    "methodology.v2.editorialQuote":
      "Сайт СИП туралы білім беру, тарихи және картографиялық материалдарды үйлестіруге ұмтылады, ресми кіру рәсімдері мен радиоэкологиялық бағалауды алмастырмайды.",
    "methodology.v2.primarySectionTitle": "Негізгі дереккөздер",
    "methodology.v2.primarySectionLead":
      "Төменде заңдық және фактілік мәлімдемелерді тексеруге ыңғайлы ретпен негізгі дереккөздер келтірілген. Энциклопедиялар мен ашық картографиялық базалар осы тізімге кірмейді.",
    "methodology.v2.auxLabel":
      "Қосымша бағдар үшін (НҚА мен НЯЦ ресми материалдарымен бір деңгейде емес):",
    "methodology.backHome": "Басты бетке",
    "methodology.sec.extendedMap.title": "Интерактивті карта: деректер мәртебесі",
    "methodology.sec.extendedMap.body":
      "Сайт картасы алаң маркерлерін, анықтамалық қабаттар мен тақырыптық қабаттарды жоба материалдары бойынша білім беру бағдарламасы үшін біріктіреді. Ол ресми рұқсат құжаты, құқықтық аймақтау немесе шекаралардың геодезиялық сипаттамасы емес; редакциялық полигондар мен сызықтар мазмұнды түсіндіру үшін қолданылады және жердегі ресми кіру режимін көрсетпейді.\n\nКоординаталар мен жоба қабаттары ашық картографиялық және редакциялық материалдардан жиналған; олар анықтамалық визуализация үшін қолданылады және ресми геодезиялық пен құқықтық деректерді алмастырмайды. Алаң маркерлері НЯЦ ашық материалдарымен (sts.nnc.kz), соның ішінде НЯЦ қоғамдық интерактивті атласымен бірдей «Главная.kmz» KML/KMZ экспортымен үйлесімді.\n\nЖердегі жұмыстар мен шығулар үшін тек уәкілетті органдар мен аумақ операторының өзекті құжаттары қолданылады (рұқсат, маршрут парағы, шығу бұйрығы, өрістегі радиациялық бақылау, шекаралар мен режимдердің құқықтық сипаттамасы).",
    "methodology.sec.mapPoints.title": "Картадағы нүктелер",
    "methodology.sec.mapPoints.body":
      "Алаңдар мен жазбалар НЯЦ ашық материалдарына (sts.nnc.kz) және редакциялық түсініктемелерге сүйенеді. Каталогта әр нүкте үшін дереккөз түрі мен координата сенімділігі көрсетіледі.",
    "methodology.sec.kml.title": "Жобадағы KML/KMZ",
    "methodology.sec.kml.body":
      "KML/KMZ — геодерек алмасу форматтары. «Главная.kmz» экспорты НЯЦ қоғамдық атласымен үйлесімділікті қамтамасыз етеді; бұл техникалық бекіту, заңды түсірме актісі емес.",
    "methodology.sec.notGeodetic.title": "Картадағы шекаралар мен аймақтар",
    "methodology.sec.notGeodetic.body":
      "Маркер координаталары мен көмекші полигондар СИП шекараларының немесе кіру аймақтарының ресми геодезиялық сипаттамасын бермейді. Аумақтың құқықтық режимін сайт интерфейсі емес, уәкілетті органдардың құжаттары анықтайды.",
    "methodology.sec.textsSources.title": "Мәтіндер",
    "methodology.sec.textsSources.body":
      "Сипаттамалар НЯЦ ашық материалдарын, ғылыми жарияланымдарды (соның ішінде PLOS ONE мақаласын) және редакциялық формулировкаларды жинақтайды. Бірінші дереккөзбен қайшылық болса, басымдық бірінші дереккөзде.",
    "methodology.sec.visitRegime.title": "Сайттағы кіру режимі",
    "methodology.sec.visitRegime.body":
      "«СИП аумағына кіру режимі» бөлімі ашық дереккөздердегі типтік формулировкаларды анықтамалық түрде береді. Ол рұқсат бұйрығын, қауіпсіздік паспортын немесе сүйемелдеушінің нұсқауын алмастырмайды.",
    "methodology.publications.title": "Жарияланымдар және негізгі дереккөздер",
    "methodology.publications.lead":
      "Төменде жоба қазірдің өзінде пайдаланатын дереккөздер. Мақалалар үшін DOI немесе тікелей сілтемелер; институциялық ресурстар — анықтамалық портал ретінде.",
    "methodology.publications.kind.peer_reviewed": "Рецензияланған жариялама",
    "methodology.publications.kind.institutional": "Институциялық ресурс",
    "methodology.publications.kind.reference_portal": "Анықтамалық портал",
    "methodology.glossary.title": "Глоссарий",
    "methodology.glossary.lead":
      "Маман емес адамға арналған қысқа анықтамалар. Бұл оқулық түсініктемелер, нормативтік анықтамалар емес.",
    "methodology.heroLink": "Әдістеме және дереккөздер",
    "methodology.design.heroBadge": "Анықтамалық-білім беру материалы",
    "methodology.design.legalTitle": "Құқықтық ескерту",
    "methodology.design.archKicker": "Methodology",
    "methodology.design.architectureTitle": "Деректер архитектурасы",
    "methodology.design.archAside":
      "* Әр нүкте үшін дереккөз түрі және сенімділік көрсетіледі; қайшылықтарда бірінші дереккөз басым.",
    "methodology.design.sourcesTitle": "Ғылыми негіз және серіктестер",
    "methodology.design.sourcesLead":
      "Сайт материалдарын қалыптастыруда пайдаланылған негізгі дереккөздер тізімі.",
    "methodology.design.sourceLink": "Сілтеме",
    "methodology.design.sourceMetaYear": "Жыл",
    "methodology.design.sourceMetaAccess": "Қолжетімділік",
    "methodology.design.sourceMetaType": "Түрі",
    "methodology.design.sourceAccessPublic": "Қоғамдық",
    "methodology.design.sourceTypeReference": "Анықтама",
    "methodology.design.lexiconKicker": "Lexicon",
    "methodology.design.glossaryHeading": "Терминдер глоссариясы",
    "methodology.design.ctaTitle": "Зерттеуге өту",
    "methodology.design.ctaLead":
      "Интерактивті картографиялық қабат маркерлер мен каталогты жобаның координат жүйесінде көрсетеді; ғылыми суреттер — карталар кітапханасында және зерттеу материалдары бөлімінде.",
    "methodology.design.ctaOpenMap": "Интерактивті картаны ашу",
    "methodology.design.ctaResearchMaps": "Ғылыми карталарды зерттеу",
    "methodology.design.tileAdilet": "Adilet порталы",
    "methodology.design.tileUnep": "UNEP",
    "methodology.design.tileOsm": "OpenStreetMap",
    "methodology.design.tileWikipedia": "Wikipedia",
    "footer.links.methodology": "Әдістеме және дереккөздер",
    "map.pointProvenance.title": "Нүктенің дереккөзі",
    "map.pointProvenance.sourceTypes": "Мәтіннің дереккөз түрлері",
    "map.pointProvenance.coordQuality": "Координаталардың сенімділігі",
    "map.pointProvenance.primaryAtlas": "НЯЦ интерактивті атласы",
    "map.sipSource.stsNnc": "sts.nnc.kz материалдары (НЯЦ)",
    "map.sipSource.editorial": "Ашық дереккөздерге редакциялық түсініктеме",
    "map.pointProvenance.coord.kml_export":
      "Жоғары бекіту: координаталар НЯЦ картасындағы қабатпен бірдей KML/KMZ-тен",
    "map.pointProvenance.coord.approx": "Шамамен координаталар",
    "map.pointProvenance.coord.estimated_center": "Нысан орталығының бағаланған орны",
    "glossary.radionuclide.title": "Радионуклид",
    "glossary.radionuclide.desc":
      "Уақыт өте келе ыдырайтын, сәуле шығаратын тұрақсыз атом ядросы. Әр радионуклид топырақта, суда және тірі организмдерде әртүрлі әрекет етеді.",
    "glossary.cs137.title": "Цезий-137 (Cs-137)",
    "glossary.cs137.desc":
      "Ядролық сынақтар мен апаттарда жиі өлшенетін өнім. Топырақтың жоғарғы қабатында шоғырланады және өсімдіктерге өтуі мүмкін; мониторингте оны нормалармен және нақты сынама алу әдістемесі контекстінде салыстырады.",
    "glossary.sr90.title": "Стронций-90 (Sr-90)",
    "glossary.sr90.desc":
      "Химиялық тұрғыдан кальцийге жақын радионуклид; «топырақ — өсімдіктер — тағам» тізбегіне қатысуы мүмкін. СИП-те оны жиі жергілікті ластанған учаскелер контекстінде атайды.",
    "glossary.pu239240.title": "Плутоний-239+240 (Pu-239+240)",
    "glossary.pu239240.desc":
      "Есептер мен карталарда плутоний изотоптарын жиі бірге қосады. Көрсеткіш сынақ іздерін бақылауға көмектеседі, бірақ түсіндіру әрқашан зертхана әдістемесіне байланысты.",
    "glossary.am241.title": "Америций-241 (Am-241)",
    "glossary.am241.desc":
      "ұзақ өмірлі ластану сценарийлерінде кездесетін радионуклид; әдебиет карталарында таралуды салыстыру үшін цезий және стронциймен қатар көрсетілуі мүмкін.",
    "glossary.bqkg.title": "Бк/кг",
    "glossary.bqkg.desc":
      "Беккерель килограмға: белгілі белсенділік бірлігі — секундына үлгі массасына қанша ыдырау келетіні. Санның өзі өлшеу әдістемесі мен нормалар контекстісіз «жақсы» немесе «жаман» емес.",
    "glossary.usvh.title": "мкЗв/сағ (μSv/h)",
    "glossary.usvh.desc":
      "Сағатына микрозиверт — жердегі тұрмыстық дозиметрлер үшін типтік өлшем. Көрсеткіштер прибор биіктігіне, орташа уақытқа және калибровкаға байланысты; салыстыру бір әдістеме шеңберінде ғана мүмкін.",
    "glossary.fallout.title": "Выпадения (fallout)",
    "glossary.fallout.desc":
      "Жарылыс немесе апаттан кейін бұлттан тасымалданып бетке түсетін радиоактивті заттар. Выпадения карталарында масштаб, түсірме күні және бірінші дереккөз легендасы маңызды.",
    "glossary.dosimetry.title": "Дозиметрия",
    "glossary.dosimetry.desc":
      "Адамның сәулеленуін өлшеу және бағалау. Далада оны сүйемелдеуші ұйымның регламенті бойынша жүргізеді; туристік прибордың көрсеткіші ол регламентті алмастырмайды.",
    "glossary.adit.title": "Штольня (adit)",
    "glossary.adit.desc":
      "Көлденең немесе еңкейіс жол арқылы массивке кіру (геология мен тау-кен ісінде). СИП-те жер асты сынақтарын Дегелен сияқты алаңдардағы штольнялар желісімен байланыстырады.",
    "glossary.groundZero.title": "Эпицентрлік алаң (ground zero)",
    "glossary.groundZero.desc":
      "Жер бетіндегі немесе оған жақын сынақтың шартты орталығы — жарылыс астындағы нүкте. Схемаларда бұл бағдар, рұқсатсыз бару шақыруы емес.",
  },
  en: {
    brand: "STS Nuclear-Tour",
    "nav.home": "Home",
    "nav.sip": "About STS",
    "nav.map": "Map",
    "nav.zones": "Routes",
    "nav.about": "About",
    "nav.researchMaps": "Research maps",
    "nav.maps": "Map library",
    "nav.guide": "Reference guide",
    "nav.safety": "Safety recommendations",
    "nav.contacts": "Contacts",
    "nav.more": "More",
    "nav.openMenu": "Open menu",
    "nav.closeMenuDialog": "Close menu",
    "map.sidebar.minimizePanel": "Collapse panel",
    "map.sidebar.restorePanel": "Show point details",
    "map.leaflet.legendTitle": "Legend",
    "map.leaflet.legendSchematic":
      "Legend symbols for orientation in the interface. Not the legend of an official access or boundary instrument.",
    "map.fullPage.modePoi": "Points",
    "map.fullPage.modeRoutes": "Routes",
    "map.fullPage.routesGoogleBanner":
      "Individual points open in Google Maps. The STS map shows reference markers; unverified driving tracks are not drawn.",
    "header.searchPlaceholder": "Search access regime and routes…",
    "header.explore": "Sections",
    "search.noResults": "No results for",
    "hero.badge": "Scientific reference and mapping resource",
    "hero.titleLine1":
      "Semipalatinsk Test Site: maps, history, scientific data, and access regime",
    "hero.titleAccent": "",
    "hero.subtitle":
      "Reference and educational material on the territory of the former Semipalatinsk Test Site. The site brings together a map of test pads, historical context, scientific sources, typical access regimes described in open materials, and safety notes. Content is for reference only and does not replace official clearance.",
    "hero.openMap": "Open map",
    "hero.viewRoutes": "Methodology and sources",
    "hero.imageAlt":
      "Steppe landscape in East Kazakhstan at sunset — decorative hero image for the STS information site.",
    "routes.kicker": "Routes",
    "routes.title": "Directions on the ground",
    "routes.lead":
      "Six cards: topic or object, access status, which map points to open. Not a tour product; field access is arranged separately.",
    "routes.disclaimer":
      "Based on publications and schemes (including maps of ¹³⁷Cs, ²⁴¹Am, ²³⁹+²⁴⁰Pu, ⁹⁰Sr). Not an invitation to enter closed areas without authorization—see “Note” in the footer.",
    "routes.simple.kicker": "Routes",
    "routes.simple.title": "Simple Routes",
    "routes.simple.lead":
      "The cards show verified objects and links to individual points in Google Maps. They do not confirm road passability, safety, or unrestricted access: visits require official coordination, escort, and radiation monitoring.",
    "routes.simple.cardLabel": "route",
    "routes.simple.startLabel": "Start",
    "routes.simple.destinationLabel": "Objects",
    "routes.simple.importantLabel": "Important",
    "routes.simple.locationsLabel": "Open individual points",
    "routes.simple.openMaps": "open in Google Maps",
    "routes.simple.photoSourceLabel": "Photo",
    "routes.simple.sourceLabel": "Source",

    "routes.card.kurchatov.type": "Overview",
    "routes.card.kurchatov.title": "Kurchatov and research infrastructure",
    "routes.card.kurchatov.desc":
      "Logistics: city north of the polygon; common hub when working with STS materials.",
    "routes.card.kurchatov.access": "Status: reference only; no clearance implied",
    "routes.card.kurchatov.focus": "Points: Kurchatov town",

    "routes.card.atomic.type": "Site",
    "routes.card.atomic.title": "Atomic Lake / Telkem and adjacent objects",
    "routes.card.atomic.desc":
      "Western sector. Any field visit requires an agreed access regime.",
    "routes.card.atomic.access": "Access: restricted; coordination required",
    "routes.card.atomic.focus": "Points: Atomic Lake, Telkem",

    "routes.card.degelen.type": "Area",
    "routes.card.degelen.title": "Degelen and traces of underground tests",
    "routes.card.degelen.desc":
      "Southern massif, underground tests, relief and runoff. Field rules come from regulations, not this text.",
    "routes.card.degelen.access": "Access: heightened control / restricted",
    "routes.card.degelen.focus": "Points: Degelen, creeks/runoffs",

    "routes.card.balapan.type": "Pads",
    "routes.card.balapan.title": "Balapan and test areas",
    "routes.card.balapan.desc":
      "Layout of test pads on the map: read layer labels alongside official access descriptions.",
    "routes.card.balapan.access": "Access: restricted; coordination required",
    "routes.card.balapan.focus": "Points: Balapan, test sites",

    "routes.card.fallout.type": "Thematic maps",
    "routes.card.fallout.title": "Fallout zones and contamination maps",
    "routes.card.fallout.desc":
      "Layers for ¹³⁷Cs, ²⁴¹Am, ²³⁹+²⁴⁰Pu, ⁹⁰Sr: check legend and scale against the PDF.",
    "routes.card.fallout.access": "Status: map work only",
    "routes.card.fallout.focus": "Focus: ¹³⁷Cs, ²⁴¹Am, ²³⁹+²⁴⁰Pu, ⁹⁰Sr; fallout plumes",
    "sip.kicker": "About the site",
    "sip.title": "Semipalatinsk Test Site (STS)",
    "sip.lead":
      "The Semipalatinsk Test Site (STS) is a former nuclear proving ground; its footprint lies in present-day Kazakhstan. Below is a compact encyclopaedic overview based on open survey sources; for legally binding and quantitative statements, rely on primary documents and official materials.",
    "sip.card.where.title": "Geography",
    "sip.card.where.body":
      "The test site lies in eastern and central Kazakhstan, spanning parts of present-day Abai, Pavlodar, and Karaganda regions. Review-scale estimates often cite an area on the order of 18,500 km²—cross-check with official maps.\n\nSteppe and semi-desert, a strongly continental climate, the Irtysh River, and the Degelen massif shape the landscape. The main research hub nearby is Kurchatov; key pads frequently named in literature include the Experimental Field, Degelen, and Balapan. Mean elevation in this project’s map frame is roughly 300–400 m.",
    "sip.card.history.title": "Testing timeline",
    "sip.card.history.body":
      "Site infrastructure was established from 1947 (USSR decisions). The first nuclear explosion was on 29 August 1949 (RDS‑1).\n\nNuclear tests were conducted from 1949 to 1991. Literature and official survey materials report different indicators linked to accounting methodology: 456 nuclear tests and 486 nuclear explosions are commonly cited figures.\n\nOn 29 August 1991 the site was officially closed by decree of the President of Kazakhstan—an important milestone for the anti-nuclear movement.",
    "sip.card.why.title": "Access regime in the materials",
    "sip.card.why.body":
      "The “Access regime on STS territory” cards summarise typical wording from public sources and do not set boundaries on the ground. Official clearance and requirements follow Kazakhstan’s legal acts and decisions of authorised bodies.",
    "sip.heterogeneity.title": "What drives local differences",
    "sip.heterogeneity.body":
      "Literature links patchiness and contrast across the site to the types of nuclear tests (atmospheric, surface, underground), radioactive fallout footprints, and radionuclide migration in soil, water, and biota—together with geology, hydrology, vegetation cover, wind, and climate.",
    "sip.heterogeneity.b1": "Tests",
    "sip.heterogeneity.b1s":
      "Atmospheric, surface, and underground scenarios; pads with direct effects and engineering structures.",
    "sip.heterogeneity.b2": "Fallout",
    "sip.heterogeneity.b2s":
      "Plume directions and deposition; reviews often highlight 1951 and 1953 events.",
    "sip.heterogeneity.b3": "Environment",
    "sip.heterogeneity.b3s":
      "Geological and hydrological conditions; soil–vegetation cover; wind-driven transport and climate.",
    "sip.note":
      "Legal conditions for access to STS territory are summarised in the “Note” block in the page footer.\nOfficial materials: https://www.nnc.kz · Kazakhstan legislation: https://adilet.zan.kz · IAEA: https://www.iaea.org · UN overviews and encyclopaedic references (e.g. Britannica)—verify chronology against primary sources.",
    "zones.kicker": "Access regime",
    "zones.title": "Access regime on STS territory",
    "zones.lead":
      "This section summarises access regimes commonly described in open materials; it is not an official map of legal zoning. Actual access is defined by the legislation of Kazakhstan, authorised bodies, the territory operator, and official clearance documents.",
    "zones.card.routed.label": "Access via agreed routes",
    "zones.card.routed.title": "Routed access",
    "zones.card.routed.desc":
      "Open descriptions often state movement only along pre-agreed routes and under current requirements; leaving the corridor is usually not allowed. Binding conditions follow Kazakhstan’s legal acts, authorised bodies, the territory operator, and clearance documents.",
    "zones.card.routed.status": "Route-only",
    "zones.card.restricted.label": "Limited access",
    "zones.card.restricted.title": "Permission required",
    "zones.card.restricted.desc":
      "Public materials describe short stays with official permission and, typically, escort and dosimetric monitoring. This is not operational guidance: the effective regime is set by Kazakhstan’s laws, authorised bodies, the territory operator, and clearance documents.",
    "zones.card.restricted.status": "By permit",
    "zones.card.closed.label": "Closed territories",
    "zones.card.closed.title": "Closed",
    "zones.card.closed.desc":
      "Open sources generally rule out unsanctioned public access. Special-purpose entry is described as requiring separate clearance from authorised bodies under Kazakhstan’s legal framework.",
    "zones.card.closed.status": "No access",
    "zones.disclaimerTitle": "Reference notice",
    "zones.disclaimerBody":
      "Information in this section is for reference only. Actual access regime, boundaries, escort requirements, PPE, and radiation monitoring are defined by Kazakhstan’s legal acts and decisions of authorised bodies, as well as by the territory operator.",
    "zones.sourcesTitle": "Official sources and publications",
    "zones.source.nnc": "National Nuclear Center (Kazakhstan) — nnc.kz",
    "zones.source.sts": "STS / Semipalatinsk portal — sts.nnc.kz",
    "zones.source.adilet": "Kazakhstan legal acts — Adilet (adilet.zan.kz)",
    "zones.source.iaea": "IAEA — iaea.org",
    "zones.source.unep": "UNEP — unep.org",
    "zones.source.plos": "PLOS ONE publications — journals.plos.org",
    "guide.kicker": "Reference guide",
    "guide.title": "Clearance and coordination",
    "guide.lead":
      "Routes and access are defined by Kazakhstan’s legislation, authorised bodies, the territory operator, and official clearance documents. Map layers and editorial text do not replace those documents.",
    "guide.card1.t": "Paperwork",
    "guide.card1.b":
      "Route sheet, escort contacts, current limits for the plot.",
    "guide.card2.t": "Site — access regime — corridor",
    "guide.card2.b":
      "Pick the pad on the map, verify the access regime against official documents, find the route line in escort materials. If any of the three disagree—stop.",
    "guide.card3.t": "In the field",
    "guide.card3.b":
      "Stay on the trace; no sampling or souvenirs; no local water or food without testing.",
    "guide.rules.title": "On-route rules",
    "guide.rules.r1": "Stay on the approved route; no shortcuts.",
    "guide.rules.r2": "Do not collect plants, fungi, soil, stones, or objects.",
    "guide.rules.r3": "Do not use local water or food without official checks.",
    "guide.rules.r4": "No long stops or picnics outside approved points.",
    "guide.rules.r5": "Do not touch technogenic structures or unknown materials.",
    "guide.rules.r6": "Certain plots—only with a guide or written permission.",
    "guide.rules.note": "See also the Safety section.",
    "science.kicker": "Scientific data",
    "science.title": "Scientific data and limits of interpretation",
    "science.lead":
      "This site draws on open scientific publications and official materials, but each source has its own scope of applicability.",
    "science.c1.t": "Historical and geographic context",
    "science.c1.b":
      "The STS lies across parts of Abai, Pavlodar, and Karaganda regions. Sources more often discuss individual test pads; the history of fallout, terrain, and local conditions make the territory heterogeneous, without a single “average” picture for an arbitrary point.",
    "science.c2.t": "Radioecological research",
    "science.c2.b":
      "Open literature addresses monitoring of soils, water, biota, and spatial patterns of radionuclides, including long-term work by Kazakhstan’s NNC and related groups. For example, Panitskiy et al. (2023) examines radionuclide content in meat and milk of hoofed animals; calculations and interpretations are tied to the authors’ stated scenario and are not a direct assessment of safety for tourist or independent travel to any point on the STS.",
    "science.c3.t": "Limits of scientific conclusions",
    "science.c3.b":
      "Each publication defines its own object, methods, and boundaries of inference. Findings for animals, soils, water, or individual samples cannot be automatically transferred to the entire polygon. Decisions on access, field work, and the extent of control do not follow from an editorial summary of a paper and do not replace regulatory procedures.",
    "science.important":
      "Important: results of individual studies do not replace official radiation control, clearance documents, or decisions by authorised bodies.",
    "map.kicker": "Map",
    "map.titleLine1": "Interactive STS map",
    "map.titleLine2": "",
    "map.subtitle":
      "The map combines pad markers, editorial notes, and reference layers for educational navigation through the site’s materials.",
    "map.feature.layers.title": "Layers",
    "map.feature.layers.desc":
      "Basemaps including OpenTopoMap terrain and optional thematic layers for reading the territory in an educational context.",
    "map.feature.gps.title": "On-screen position",
    "map.feature.gps.desc":
      "Shows device position on screen relative to map features; not a clearance workflow and not a substitute for official documents.",
    "map.fullscreen": "Launch fullscreen map",
    "map.modal.kind.zone": "Access regime (reference)",
    "map.modal.kind.route": "Route",
    "map.cardTitle": "What is displayed",
    "map.cardLead":
      "Editorial polygons and lines on the map support visual explanation of the site’s content and do not depict the official on-site access regime.",
    "map.cardRelief":
      "Relief within the frame is indicative (mean elevation about 379 m, min 142 m, max 1043 m per basemap data). OpenTopoMap is not an official relief document.",
    "map.listShowsTitle": "What the map shows",
    "map.listShows1": "pads and landmarks referenced in open materials;",
    "map.listShows2": "reference points and editorial labels;",
    "map.listShows3": "thematic layers for reading the territory;",
    "map.listShows4": "educational routes when enabled as a reference layer.",
    "map.listNotReplacesTitle": "What the map does not replace",
    "map.listNotReplaces1": "official clearance;",
    "map.listNotReplaces2": "route sheet;",
    "map.listNotReplaces3": "movement order;",
    "map.listNotReplaces4": "field radiation monitoring;",
    "map.listNotReplaces5": "legal descriptions of boundaries and regimes.",
    "map.shortDisclaimer":
      "The site map is not an official clearance document, legal zoning map, or geodetic boundary description. Field work and movements rely solely on current documents from competent authorities and the territory operator.",
    "map.attributionShort":
      "Object descriptions: sts.nnc.kz. Coordinate and layer provenance — see Methodology and sources.",
    "map.layer.standard": "Standard",
    "map.layer.topo": "Terrain",
    "map.layer.cartoLight": "Light",
    "map.layer.satellite": "Satellite",
    "map.toolbar.zoom": "Zoom",
    "map.toolbar.zoomIn": "Zoom in",
    "map.toolbar.zoomOut": "Zoom out",
    "map.toolbar.basemap": "Basemap",
    "map.detail.placeholder": "Select a point on the map to open the description, sources, and links.",
    "map.overlay.zones": "Reference polygons",
    "map.overlay.routes": "Routes",
    "map.overlay.poi": "Points",
    "map.popup.location": "Location",
    "map.popup.avgElevation": "Mean elevation",
    "map.popup.elevationRange": "Elevation range",
    "map.popup.elevationTitle": "Map point",
    "map.popup.elevationValue": "Elevation",
    "map.popup.elevationHint": "Mock values for now. You can plug in an Elevation API later.",
    "map.points.sourceLabel": "Source",
    "map.points.more": "More details",
    "map.points.approx": "approx.",
    "map.points.estimatedPosition": "estimated position",
    "map.points.kmlExport": "KML / NNC map",
    "map.points.filtersTitle": "Sites",
    "map.points.close": "Close",
    "map.points.category.overview": "Overview",
    "map.points.category.testSite": "Test site",
    "map.points.category.sipObject": "Test area / STS object",
    "map.points.category.excavation": "Excavation experiment",
    "map.points.category.radiological": "Radiological site",
    "map.catalog.filtersTitle": "Object layers",
    "map.sidebar.openPanel": "Filters & catalog",
    "map.sidebar.openEmbedded": "Map objects",
    "map.sidebar.collapseTools": "Collapse layers & settings panel",
    "map.sidebar.closeOverlays": "Close panels and return to the map",
    "map.catalog.searchPlaceholder": "Search by name…",
    "map.catalog.statsTitle": "Catalog",
    "map.catalog.statsTotal": "Total points",
    "map.catalog.statsShown": "Shown",
    "map.catalog.filter.settlement": "Settlements",
    "map.catalog.filter.test_site": "STS sites",
    "map.catalog.filter.landmark": "Landmarks",
    "map.catalog.type.settlement": "Settlement",
    "map.catalog.type.test_site": "STS test site",
    "map.catalog.type.landmark": "Landmark",
    "map.catalog.confidence.high": "high (verifiable source)",
    "map.catalog.confidence.medium": "medium",
    "map.catalog.confidence.reference": "reference / indicative",
    "map.catalog.sourceType.official": "official / atlas",
    "map.catalog.sourceType.scientific": "scientific",
    "map.catalog.sourceType.osm": "OpenStreetMap",
    "map.catalog.sourceType.wikipedia": "Wikipedia",
    "map.catalog.sourceType.manual": "editorial / manual placement",
    "map.catalog.approxCoords": "approx. coordinates",
    "map.catalog.link": "Link",
    "map.catalog.openSource": "Open",
    "map.catalog.googleMaps": "Google Maps",
    "map.catalog.openGoogleMaps": "Open location",
    "map.catalog.interestingFact": "Did you know",
    "map.catalog.confidenceLabel": "Confidence",
    "map.catalog.sourceKindLabel": "Source type",
    "map.catalog.sourceTextLabel": "Source details",
    "map.geo.territory.title": "Semipalatinsk Test Site",
    "map.geo.territory.desc":
      "Former nuclear test site; steppe and higher relief. Access rules are set outside this UI.",
    "map.geo.territory.loc":
      "Semipalatinsk Test Site, Pavlodar Region, 071100, Kazakhstan",
    "map.geo.dev.routed.title": "Service polygon: illustrative “routed” regime",
    "map.geo.dev.routed.desc":
      "Polygon used to tune layer styling in the UI. Does not mark an on-site access boundary.",
    "map.geo.dev.restricted.title": "Service polygon: illustrative permit area",
    "map.geo.dev.restricted.desc":
      "Polygon used to tune layer styling. Not a permit map or regulatory substitute.",
    "map.geo.dev.closed.title": "Service polygon: illustrative closed plot",
    "map.geo.dev.closed.desc":
      "Polygon used to tune layer styling. Does not state prohibition or authorisation on the ground.",
    "map.geo.route.perimeter.title": "Route line (test visualization)",
    "map.geo.route.perimeter.desc":
      "Closed line to check route-layer rendering. Replace with LineStrings from datasets that carry explicit legal provenance when real data are connected.",
    "map.geo.route.cross.title": "Route line (second test style)",
    "map.geo.route.cross.desc":
      "Additional line with different styling to validate multiple route layers in the UI.",
    "map.geo.poi.kurchatov.title": "Kurchatov (reference)",
    "map.geo.poi.kurchatov.desc":
      "City — scientific and administrative centre of the STS; open references often cite it as a logistical anchor when working with materials about the site.",
    "map.geo.poi.degelen.title": "Degelen massif (reference)",
    "map.geo.poi.degelen.desc": "Mountain block in the south; stands out on the terrain basemap.",
    "map.geo.poi.atomicLake.title": "Atomic Lake (Chagan Reservoir)",
    "map.geo.poi.atomicLake.desc":
      "A reservoir formed by an underground nuclear explosion in 1965.",
    "safety.title": "Safety recommendations",
    "safety.stage1.title": "Stage 1 — preparing for a visit to the test site",
    "safety.stage1.intro": "When preparing for a visit to the test site, it is recommended to:",
    "safety.stage1.items":
      "Prepare body protection: a disposable coverall with a density of at least 65 g/m², dust-protective shoe covers, a disposable valved respirator, and disposable rubber gloves (preferably 2–3 pairs).\nInspect the protective equipment for defects and replace it if necessary.\nPrepare enough bottled water and food. Food must be packed in disposable packaging.\nPrepare a personal dosimeter.\nPrepare a refuse bag for waste generated after completing the route.\nPrepare hygiene supplies: soap, water, and dry wipes.",
    "safety.stage1.extraIntro": "Additional preparation recommendations:",
    "safety.stage1.extraItems":
      "Service the vehicle and prepare an additional set of spare wheels and an extra fuel container sufficient for 100 km of travel.\nHire a dedicated dosimetry specialist when travelling as a group.\nReview the rules of conduct on the route, including the prohibition on smoking and drinking alcohol.",
    "safety.stage2.title": "Stage 2 — travelling along the route",
    "safety.stage2.intro": "Recommendations while travelling along the route across the test site:",
    "safety.stage2.items":
      "Attend to natural needs immediately before entering an area that poses a radiation hazard to the public.\nPut on personal protective equipment after checking it for damage.\nStart the personal dosimeter.\nDo not deviate from the prescribed path.\nIn an area that poses a radiation hazard to the public, do not independently collect vegetation, minerals, metal, or any other objects.\nAfter leaving the “dirty” zone and immediately before entering the vehicle, remove the protective equipment and place it in a refuse bag.",
    "safety.stage2.warning":
      "In the “dirty” zone, attending to natural needs, eating, and drinking water are prohibited.",
    "safety.stage3.title": "Stage 3 — completing the visit",
    "safety.stage3.intro": "Recommendations after completing the visit:",
    "safety.stage3.items":
      "Arrange disposal of used protective equipment, disposable tableware, and bottles after sealing the waste securely.\nAttend to natural needs.\nWash hands and face, and brush residual dust from footwear.\nWash the vehicle using a touchless car wash.\nRecord dosimetry results; seek medical advice if elevated readings are recorded.",
    "safety.disclaimer":
      "These reference recommendations are not permission to visit, do not guarantee safety, and do not replace official clearance, a safety briefing, professional radiation monitoring, or instructions from the responsible operator. Contaminated PPE and waste must be disposed of under the responsible organisation’s approved procedures, not as household waste.",
    "safety.sourceLabel": "Scientific source",
    "safety.source":
      "Moldazhanov M. B., Martínez-Falcó J., Duiskenova R. Zh. “Development of recommendations for ensuring the radiation safety of tourists on routes to facilities of the Semipalatinsk Test Site.” Final manuscript supplied by the client (2026), pp. 16–17. Rights to publish the full text and file are to be clarified separately.",
    "footer.about":
      "Портал подготовлен в рамках реализации грантового финансирования исследований молодых ученых по проекту «Жас ғалым» на 2025-2027 годы на тему «AP25794915 Научное исследование экономического потенциала ядерного туризма на примере Семипалатинского испытательного полигона». Данное исследование финансируется Комитетом науки и высшего образования Министерства науки и высшего образования Республики Казахстан.",
    "footer.links.title": "Navigation",
    "footer.links.home": "Home",
    "footer.links.sip": "About SIP",
    "footer.links.mapRoutes": "Site map",
    "footer.links.zones": "Routes",
    "footer.links.safety": "Safety recommendations",
    "footer.links.contacts": "Contacts",
    "footer.project.title": "Project",
    "footer.project.sipInfo": "SIP information",
    "footer.project.about": "About the project",
    "footer.project.sources": "Data sources",
    "footer.meta.title": "Note",
    "footer.meta.disclaimer":
      "This site does not replace official clearance, STS access and radiation-monitoring regulations. The on-site regime is set by Kazakhstan’s legislation, authorised bodies, the territory operator, and clearance documents. Site content is for reference only.",
    "footer.meta.copyright": "",
    "researchMaps.kicker": "Scientific maps",
    "researchMaps.title": "Scientific maps of the STS",
    "researchMaps.lead":
      "The catalogue includes two overview maps from PLOS ONE (2023) and four specific-activity maps for ¹³⁷Cs, ⁹⁰Sr, ²⁴¹Am, and ²³⁹⁺²⁴⁰Pu from the final manuscript by Moldazhanov and co-authors (2026). The maps are for scientific reference and do not assess visit safety.",
    "researchMaps.note": "Each map has its own source; the new manuscript maps are not PLOS ONE material.",
    "researchMaps.open": "Open",
    "researchMaps.cardCta": "Open map",
    "researchMaps.showMore": "Show more",
    "researchMaps.showLess": "Show less",
    "researchMaps.viewAll": "View all maps",
    "researchMaps.sourceLabel": "Source:",
    "researchMaps.source.plos":
      "PLOS ONE (Panitskiy et al., 2023) — Bioaccumulation of radionuclides in hoofed animals inhabiting the Semipalatinsk Test Site",
    "researchMaps.g001.title": "Overview location of STS in Kazakhstan",
    "researchMaps.g001.body":
      "STS location in Kazakhstan and neighbouring regions (as in the paper).",
    "researchMaps.g002.title": "STS scheme and sampling points",
    "researchMaps.g002.body":
      "Pads and sampling points from the authors.",
    "researchMaps.g003.title": "Cs‑137 distribution (cesium‑137)",
    "researchMaps.g003.body":
      "¹³⁷Cs field per the paper; compare scale and legend with the PDF.",
    "researchMaps.g004.title": "Am‑241 distribution (americium‑241)",
    "researchMaps.g004.body":
      "²⁴¹Am spatial field within the figure frame.",
    "researchMaps.g006.title": "Sr‑90 distribution (strontium‑90)",
    "researchMaps.g006.body":
      "⁹⁰Sr field on the authors’ plots.",
    "sources.title": "Sources",
    "sources.lead":
      "Sources for the two overview maps and four specific-activity maps are listed separately.",
    "sources.primary": "Primary source",
    "sources.plos.title": "PLOS ONE — article and figures (maps)",
    "sources.plos.desc":
      "Panitskiy A. et al. (2023). Bioaccumulation of radionuclides in hoofed animals inhabiting the Semipalatinsk Test Site.\nOnly the two overview maps, g001 and g002, belong to the article.",
    "sources.openPdf": "Open PDF",
    "sources.openSection": "Open sources",
    "sources.more": "Add later",
    "sources.placeholder":
      "Official and academic links will be added here as the list grows.",
    "sources.item.official": "Official STS materials and access regulations",
    "sources.item.papers": "Scientific papers and reviews on radioecology of the area",
    "sources.item.history": "Historical and environmental sources for locations and routes",
    "maps.kicker": "Maps archive",
    "maps.backHome": "Back home",
    "maps.libraryTitle": "STS maps & research materials",
    "maps.libraryLead":
      "Local project files: each card links to the publication and metadata fields.",
    "maps.backToLibrary": "Back to all maps",
    "maps.notFound": "Map not found",
    "maps.detail.kicker": "Scientific & Institutional Materials",
    "maps.detail.verified": "Verifiable source",
    "maps.detail.descriptionTitle": "Explanation & context",
    "maps.openImage": "Open image",
    "maps.info.what": "What the map shows",
    "maps.info.whatBody":
      "Frame from the paper: same indicator and boundaries as the authors.",
    "maps.info.why": "Context",
    "maps.info.whyBody":
      "The authors compare STS locations; the figure is one slice of their data.",
    "maps.info.how": "Limitation",
    "maps.info.howBody":
      "The on-screen file grants no entry rights. Decisions belong to competent authorities under regulations and monitoring data.",
    "maps.sourceTitle": "Data source",
    "maps.source.publication": "Publication",
    "maps.source.details": "Details",
    "maps.source.year": "Year",
    "maps.source.type": "Type",
    "maps.source.typeValue": "Scientific publication",
    "maps.source.note": "See “Note” in the site footer.",
    "maps.importantTitle": "Important",
    "maps.importantBody":
      "Legal conditions for access to STS territory are in the footer (“Note”).",
    "maps.download.title": "Project materials",
    "maps.download.subtitle": "PDF / images (local)",
    "maps.downloadMapImage": "Download map figure",
    "maps.prev": "Previous map",
    "maps.next": "Next map",
    "footer.resources.title": "Resources",
    "footer.resources.dataSources": "Data sources",
    "footer.resources.ethicsPolicy": "Ethics policy",
    "footer.account.title": "Account",
    "footer.account.safetyProtocols": "Safety protocols",
    "footer.account.researcherLogin": "Researcher login",
    "footer.partner": "Project page on the ABU website",
    "about.card.ecology.title": "Research",
    "about.card.ecology.body":
      "Radio-ecological studies at the STS are ongoing: monitoring of soil, water, and biota and assessment of radionuclide distributions and environmental risks.\n\nKey institutions: NNC RK and IRSE (with IAEA support). Commonly discussed isotopes: ¹³⁷Cs, ⁹⁰Sr, ²³⁹Pu, ²⁴¹Am.\n\nSources: https://www.nnc.kz · https://www.iaea.org",
    "about.card.ecology.cta": "Research maps",
    "about.card.history.title": "History",
    "about.card.history.body":
      "Created: 1947. First nuclear explosion: 29 Aug 1949 (RDS‑1). Test period: 1949–1991. Site closure: 29 Aug 1991 (decree of the President of Kazakhstan).\n\nLiterature and official survey materials report different indicators linked to accounting methodology: 456 nuclear tests and 486 nuclear explosions are commonly cited figures.\n\nSources: NNC RK · IAEA · UN (verify chronology against primary records).",
    "about.card.safety.title": "Clearance",
    "about.card.safety.body":
      "Open overviews and regulatory materials describe access to the former test site as contingent on official permission, an approved route, and typically specialist escort and dosimetric monitoring. Binding conditions are set in Kazakhstan’s legal acts, by the territory operator, and in clearance documents.\n\nReferences: https://adilet.zan.kz · https://www.nnc.kz",
    "about.project.title": "About the project",
    "about.project.body":
      "The project is a scientific reference and mapping resource on the territory of the former Semipalatinsk Test Site: open scientific and institutional sources, historical context, an interactive pad map, and illustrations from peer-reviewed publications.\n\nIt integrates materials from the National Nuclear Center of the Republic of Kazakhstan (including sts.nnc.kz), geospatial data and KML pad markers, a research-maps section, and an image library with DOI/source metadata.",
    "about.project.cta": "Open map",
    "site.disclaimer.unified":
      "The site is positioned as a scientific reference and mapping resource on the territory of the former Semipalatinsk Test Site. Materials are for reference and education only. They do not replace official clearance, radiation monitoring regulations, decisions of competent authorities in Kazakhstan, or the territory operator. Texts and coordinates compile open sources listed under Methodology; nothing here authorises self-directed actions on the ground.",
    "site.disclaimer.unifiedShort":
      "Scientific reference resource on the former STS; does not replace clearance, monitoring, or decisions of competent authorities and the territory operator.",
    "methodology.teaser.kicker": "Data transparency",
    "methodology.teaser.title": "Methodology and sources",
    "methodology.teaser.lead":
      "Where map points come from, what KML/KMZ means in this project, and how to read the access regime. Full detail on a dedicated page.",
    "methodology.teaser.moreLink": "Full methodology and publications",
    "methodology.teaser.acc.dataTitle": "Map and coordinates",
    "methodology.teaser.acc.dataBody":
      "Points are aligned with the public NNC atlas; the catalog records source type and coordinate reliability. Full map-data status — on the methodology page.",
    "methodology.teaser.acc.pubsTitle": "Publications and portals",
    "methodology.teaser.acc.pubsBody":
      "The research-maps section uses figures from the open-access paper Panitskiy et al. (PLOS ONE, 2023, DOI 10.1371/journal.pone.0294632). Institutional sources already linked in the project (NNC, Adilet, IAEA, UNEP, etc.) are listed on the methodology page.",
    "methodology.teaser.acc.glossTitle": "Glossary",
    "methodology.teaser.acc.glossBody":
      "Short explanations of radionuclides, units, fallout, dosimetry, adits, and ground zero—full list on the methodology page.",
    "methodology.page.title": "Methodology and sources",
    "methodology.page.lead":
      "How site materials are assembled, what map data mean, and which limitations matter when interpreting them.",
    "methodology.v2.sourceTypesTitle": "Types of sources",
    "methodology.v2.sourceType1": "legislation of the Republic of Kazakhstan;",
    "methodology.v2.sourceType2": "official materials of the National Nuclear Center of the Republic of Kazakhstan;",
    "methodology.v2.sourceType3": "international institutional materials;",
    "methodology.v2.sourceType4": "peer-reviewed scientific publications;",
    "methodology.v2.sourceType5": "cartographic and editorial materials produced for this project.",
    "methodology.v2.usedTitle": "What the site uses",
    "methodology.v2.used1": "historical information;",
    "methodology.v2.used2": "data on test pads and sites;",
    "methodology.v2.used3": "scientific publications;",
    "methodology.v2.used4": "thematic maps;",
    "methodology.v2.used5": "editorial layers and labels;",
    "methodology.v2.used6": "reference texts on access regimes.",
    "methodology.v2.limitsTitle": "Limitations",
    "methodology.v2.limit1": "the site is not an official instrument;",
    "methodology.v2.limit2": "it does not define legal boundaries;",
    "methodology.v2.limit3": "it does not replace clearance, field control, or regulatory procedures;",
    "methodology.v2.limit4":
      "findings of individual scientific papers cannot be automatically extrapolated to the entire test-site territory.",
    "methodology.v2.mapTitle": "How to read the map",
    "methodology.v2.mapIntro":
      "The interactive map combines reference and explanatory layers; below is how to read their roles.",
    "methodology.v2.mapItem1": "markers — points and pads;",
    "methodology.v2.mapItem2": "polygons — editorial or thematic layers;",
    "methodology.v2.mapItem3": "lines — reference routes or visual guides;",
    "methodology.v2.mapItem4":
      "legally binding decisions on the ground are taken only on the basis of official documents.",
    "methodology.v2.mapKmlNote":
      "KML/KMZ from the public NNC atlas is used in the project to keep coordinates aligned with the same layer as on sts.nnc.kz; it is not a legal instrument or a geodetic boundary description.",
    "methodology.v2.editorialTitle": "Editorial approach",
    "methodology.v2.editorialQuote":
      "The site aims to combine educational, historical, and cartographic presentation of STS materials without substituting official clearance procedures or radioecological assessment.",
    "methodology.v2.primarySectionTitle": "Primary sources",
    "methodology.v2.primarySectionLead":
      "Key sources below are ordered for checking legal and factual claims. Encyclopaedias and open map databases are not listed here.",
    "methodology.v2.auxLabel":
      "Additional orientation only (not equivalent to Kazakhstan’s legal acts or NNC official materials):",
    "methodology.backHome": "Back to home",
    "methodology.sec.extendedMap.title": "Interactive map: data status",
    "methodology.sec.extendedMap.body":
      "The site map combines pad markers, reference basemaps, and thematic layers for educational navigation through the project materials. It is not an official clearance document, legal zoning map, or geodetic boundary description; editorial polygons and lines explain site content visually and do not depict the official on-site access regime.\n\nProject coordinates and layers are compiled from open cartographic and editorial materials for reference visualization. They do not replace official geodetic or legal records. Pad markers are consistent with open NNC (sts.nnc.kz) materials, including the «Главная.kmz» KML/KMZ export from the same layer as the NNC public interactive atlas.\n\nField work and movements rely solely on current documents from competent authorities and the territory operator (clearance, route sheet, movement order, field radiation monitoring, legal descriptions of boundaries and regimes).",
    "methodology.sec.mapPoints.title": "Map points",
    "methodology.sec.mapPoints.body":
      "Pads and labels rely on open NNC (sts.nnc.kz) materials and editorial notes. Each catalog entry lists source type and coordinate reliability.",
    "methodology.sec.kml.title": "KML/KMZ in this project",
    "methodology.sec.kml.body":
      "KML/KMZ are geodata exchange formats. The «Главная.kmz» export keeps the project aligned with the public NNC atlas; it is a technical tie-in, not a legally certified survey.",
    "methodology.sec.notGeodetic.title": "Boundaries and zones on the map",
    "methodology.sec.notGeodetic.body":
      "Marker coordinates and helper polygons do not provide an official geodetic description of STS limits or access zones. Legal status is defined by competent authorities, not by this interface.",
    "methodology.sec.textsSources.title": "Texts",
    "methodology.sec.textsSources.body":
      "Descriptions summarise open NNC materials, scientific publications (including the cited PLOS ONE article), and editorial wording. If a primary source disagrees, the primary source prevails.",
    "methodology.sec.visitRegime.title": "Access regime on the site",
    "methodology.sec.visitRegime.body":
      "The “Access regime on STS territory” section gives reference wording from public sources. It does not replace a clearance order, safety passport, or escort instructions.",
    "methodology.publications.title": "Publications and key sources",
    "methodology.publications.lead":
      "Sources the project already uses. Articles include DOIs or direct links; institutional entries are reference portals.",
    "methodology.publications.kind.peer_reviewed": "Peer-reviewed article",
    "methodology.publications.kind.institutional": "Institutional resource",
    "methodology.publications.kind.reference_portal": "Reference portal",
    "methodology.glossary.title": "Glossary",
    "methodology.glossary.lead":
      "Plain-language notes for non-experts. Educational glosses, not regulatory definitions.",
    "methodology.heroLink": "Methodology and sources",
    "methodology.design.heroBadge": "Reference and educational material",
    "methodology.design.legalTitle": "Legal notice",
    "methodology.design.archKicker": "Methodology",
    "methodology.design.architectureTitle": "Data architecture",
    "methodology.design.archAside":
      "* Each catalog point lists source type and reliability; where sources disagree, the primary source takes precedence.",
    "methodology.design.sourcesTitle": "Scientific basis and partners",
    "methodology.design.sourcesLead":
      "A register of key sources used to build the site’s materials.",
    "methodology.design.sourceLink": "Link",
    "methodology.design.sourceMetaYear": "Year",
    "methodology.design.sourceMetaAccess": "Access",
    "methodology.design.sourceMetaType": "Type",
    "methodology.design.sourceAccessPublic": "Public",
    "methodology.design.sourceTypeReference": "Reference",
    "methodology.design.lexiconKicker": "Lexicon",
    "methodology.design.glossaryHeading": "Glossary of terms",
    "methodology.design.ctaTitle": "Continue to research",
    "methodology.design.ctaLead":
      "The interactive map layer visualizes markers and the catalog in the project coordinate system; scientific illustrations are in the map library and research materials section.",
    "methodology.design.ctaOpenMap": "Open interactive map",
    "methodology.design.ctaResearchMaps": "Explore scientific maps",
    "methodology.design.tileAdilet": "Adilet portal",
    "methodology.design.tileUnep": "UNEP records",
    "methodology.design.tileOsm": "OSM data",
    "methodology.design.tileWikipedia": "Wikipedia",
    "footer.links.methodology": "Methodology and sources",
    "map.pointProvenance.title": "Point provenance",
    "map.pointProvenance.sourceTypes": "Text source types",
    "map.pointProvenance.coordQuality": "Coordinate reliability",
    "map.pointProvenance.primaryAtlas": "NNC interactive atlas",
    "map.sipSource.stsNnc": "sts.nnc.kz materials (NNC)",
    "map.sipSource.editorial": "Editorial note on open sources",
    "map.pointProvenance.coord.kml_export": "High-confidence: coordinates from the same KML/KMZ layer as the NNC map",
    "map.pointProvenance.coord.approx": "Approximate coordinates",
    "map.pointProvenance.coord.estimated_center": "Estimated object centre",
    "glossary.radionuclide.title": "Radionuclide",
    "glossary.radionuclide.desc":
      "An unstable atomic nucleus that decays over time, emitting radiation. Different radionuclides behave differently in soil, water, and living organisms.",
    "glossary.cs137.title": "Caesium-137 (Cs-137)",
    "glossary.cs137.desc":
      "A commonly measured product of nuclear tests and accidents. It accumulates in surface soil and can enter plants; monitoring compares it to norms and background for a given sampling protocol.",
    "glossary.sr90.title": "Strontium-90 (Sr-90)",
    "glossary.sr90.desc":
      "Chemically similar to calcium; can move through soil-plant-food chains. Often discussed on the STS in the context of locally contaminated plots.",
    "glossary.pu239240.title": "Plutonium-239+240",
    "glossary.pu239240.desc":
      "Reports and maps often sum plutonium isotopes together. The indicator helps track test legacies, but interpretation always depends on laboratory methodology.",
    "glossary.am241.title": "Americium-241 (Am-241)",
    "glossary.am241.desc":
      "Appears in long-lived contamination scenarios; may be shown alongside caesium and strontium on literature maps for comparison.",
    "glossary.bqkg.title": "Bq/kg",
    "glossary.bqkg.desc":
      "Becquerels per kilogram: specific activity—decays per second per unit mass. A number is not good or bad without norms and measurement context.",
    "glossary.usvh.title": "Microsieverts per hour (uSv/h)",
    "glossary.usvh.desc":
      "A common unit for handheld dose-rate meters in the field. Readings depend on probe height, averaging time, and calibration.",
    "glossary.fallout.title": "Fallout",
    "glossary.fallout.desc":
      "Radioactive material carried from a cloud after an explosion or accident and deposited on the surface. For fallout maps, scale, acquisition date, and the source legend matter.",
    "glossary.dosimetry.title": "Dosimetry",
    "glossary.dosimetry.desc":
      "Measuring and assessing human exposure. In the field it follows the escorting organisation's protocol; a tourist meter does not replace that protocol.",
    "glossary.adit.title": "Adit (horizontal mine working)",
    "glossary.adit.desc":
      "A horizontal or sloping underground working; an entrance into a rock mass. Underground tests at the STS are often linked to adit networks on sites such as Degelen.",
    "glossary.groundZero.title": "Ground zero",
    "glossary.groundZero.desc":
      "The nominal centre of a surface or near-surface test—under the burst. On diagrams this is an orienting mark, not an invitation to visit without clearance."
  },
};

