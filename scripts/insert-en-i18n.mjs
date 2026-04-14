import fs from "fs";
const p = "components/i18n/translations.ts";
let s = fs.readFileSync(p, "utf8");

const en = String.raw`
    "site.disclaimer.unified":
      "Site materials are for reference and public education only. They do not replace official clearance to enter the STS, radiation monitoring regulations, decisions of competent authorities, or the territory operator. Texts and coordinates compile open scientific, institutional, and reference sources listed in the methodology section; nothing here authorises self-directed actions on the ground.",
    "site.disclaimer.unifiedShort":
      "This site is informational: it does not replace official clearance, monitoring, or STS visit regulations.",
    "methodology.teaser.kicker": "Data transparency",
    "methodology.teaser.title": "Data sources and methodology",
    "methodology.teaser.lead":
      "Where map points come from, what KML/KMZ means in this project, and how to read the visit regime. Full detail on a dedicated page.",
    "methodology.teaser.moreLink": "Full methodology and publications",
    "methodology.teaser.acc.dataTitle": "Map and coordinates",
    "methodology.teaser.acc.dataBody":
      "STS pad markers draw on NNC materials; coordinates match the project's «Главная.kmz» KML/KMZ export (same Google My Maps layer as the NNC interactive atlas). These are interface anchors, not a legally certified boundary survey. The fullscreen catalog adds source types (official atlas, scientific paper, OSM, etc.).",
    "methodology.teaser.acc.pubsTitle": "Publications and portals",
    "methodology.teaser.acc.pubsBody":
      "The research-maps section uses figures from the open-access paper Panitskiy et al. (PLOS ONE, 2023, DOI 10.1371/journal.pone.0294632). Institutional sources already linked in the project (NNC, Adilet, IAEA, UNEP, etc.) are listed on the methodology page.",
    "methodology.teaser.acc.glossTitle": "Glossary",
    "methodology.teaser.acc.glossBody":
      "Short explanations of radionuclides, units, fallout, dosimetry, adits, and ground zero—full list on the methodology page.",
    "methodology.page.title": "Data sources and methodology",
    "methodology.page.lead":
      "How data on this site are organised—not an exhaustive legal handbook. For binding decisions, rely on current documents from the territory operator and Kazakhstan's legal acts.",
    "methodology.backHome": "Back to home",
    "methodology.sec.mapPoints.title": "Map points",
    "methodology.sec.mapPoints.body":
      "Major STS pads are based on NNC (sts.nnc.kz) materials with editorial notes. Marker coordinates are synced with the project KML/KMZ file from the same Google My Maps layer shown on the NNC portal.",
    "methodology.sec.kml.title": "What KML/KMZ means here",
    "methodology.sec.kml.body":
      "KML/KMZ are geodata exchange formats. This project uses the «Главная.kmz» point export: a practical tie-in to the public atlas, not a legally attested boundary survey.",
    "methodology.sec.notGeodetic.title": "Not official boundaries",
    "methodology.sec.notGeodetic.body":
      "Marker sets and helper polygons are not an official geodetic definition of STS limits or access zones. Lines on the map orient the UI; authoritative information comes from competent bodies.",
    "methodology.sec.textsSources.title": "Texts",
    "methodology.sec.textsSources.body":
      "Descriptions summarise open NNC materials, scientific publications (including the cited PLOS ONE article), and editorial wording. If a primary source disagrees, the primary source prevails.",
    "methodology.sec.visitRegime.title": "Visit regime on the site",
    "methodology.sec.visitRegime.body":
      "The Territory visit regime section gives reference wording from public sources. It does not replace a clearance order, safety passport, or escort instructions.",
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
    "map.shortDisclaimer":
      "The site map is not an official clearance document, legal zoning map, or geodetic boundary description. Field work and movements rely solely on current documents from competent authorities and the territory operator.",
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
      "The nominal centre of a surface or near-surface test—under the burst. On diagrams this is an orienting mark, not an invitation to visit without clearance."`;

if (!s.includes('"about.project.cta": "Open map"')) throw new Error("anchor not found");
s = s.replace(
  /    "about\.project\.cta": "Open map",\n  \},\n\};/,
  `    "about.project.cta": "Open map",${en}\n  },\n};`,
);
fs.writeFileSync(p, s);
