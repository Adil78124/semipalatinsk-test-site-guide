import type { Lang, TranslationKey } from "@/components/i18n/translations";
import type { MapReferencePoint } from "@/data/sipMap/mapReferencePoints";
import type { SipGeoProperties } from "@/data/sipMap/sipMapGeoJson";
import type { SitePoint } from "@/data/sipMap/sitePointsData";

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function buildSipPopupHtml(
  t: (key: TranslationKey) => string,
  props: SipGeoProperties,
): string {
  const title = esc(t(props.titleKey));
  const desc = esc(t(props.descKey));
  const loc = props.locationKey ? esc(t(props.locationKey)) : "";

  const rows: string[] = [];

  if (loc) {
    rows.push(
      `<div class="sip-popup__row"><span class="sip-popup__k">${esc(t("map.popup.location"))}</span><span class="sip-popup__v">${loc}</span></div>`,
    );
  }

  if (props.elevationAvgM != null) {
    rows.push(
      `<div class="sip-popup__row"><span class="sip-popup__k">${esc(t("map.popup.avgElevation"))}</span><span class="sip-popup__v">${props.elevationAvgM} m</span></div>`,
    );
  }

  if (props.elevationMinM != null && props.elevationMaxM != null) {
    rows.push(
      `<div class="sip-popup__row"><span class="sip-popup__k">${esc(t("map.popup.elevationRange"))}</span><span class="sip-popup__v">${props.elevationMinM}–${props.elevationMaxM} m</span></div>`,
    );
  }

  const meta = rows.length
    ? `<div class="sip-popup__meta">${rows.join("")}</div>`
    : "";

  return `
    <div class="sip-popup">
      <div class="sip-popup__title">${title}</div>
      <p class="sip-popup__desc">${desc}</p>
      ${meta}
    </div>`;
}

export function buildElevationPopupHtml(
  t: (key: TranslationKey) => string,
  elevationM: number,
): string {
  return `
    <div class="sip-popup sip-popup--elev">
      <div class="sip-popup__title">${esc(t("map.popup.elevationTitle"))}</div>
      <div class="sip-elev__value">${esc(t("map.popup.elevationValue"))}: <strong>${elevationM} м</strong></div>
      <div class="sip-elev__hint">${esc(t("map.popup.elevationHint"))}</div>
    </div>`;
}

/** Hover-only: title + category (full text stays in the side panel). */
export function buildSitePointMiniTooltipHtml(
  t: (key: TranslationKey) => string,
  p: SitePoint,
): string {
  const title = esc(p.name);
  const cat = esc(t(`map.points.category.${p.category}` as TranslationKey));
  return `<div class="sip-tooltip-mini"><div class="sip-tooltip-mini__title">${title}</div><div class="sip-tooltip-mini__type">${cat}</div></div>`;
}

/** Hover-only: title + catalog type. */
export function buildCatalogEntryMiniTooltipHtml(
  t: (key: TranslationKey) => string,
  p: MapReferencePoint,
  lang: Lang,
): string {
  const title = esc(p.names[lang] ?? p.names.ru);
  const typeLabel = esc(t(`map.catalog.type.${p.mapType}` as TranslationKey));
  return `<div class="sip-tooltip-mini"><div class="sip-tooltip-mini__title">${title}</div><div class="sip-tooltip-mini__type">${typeLabel}</div></div>`;
}

export function buildSitePointPopupHtml(
  t: (key: TranslationKey) => string,
  p: SitePoint,
): string {
  const title = esc(p.name);
  const cat = esc(t(`map.points.category.${p.category}` as TranslationKey));
  const short = esc(p.shortDescription);
  const source = esc(t("map.points.sourceLabel"));
  const sourceValue = esc(p.sources.join(" + "));
  const coordPill =
    p.coordPrecision === "kml_export"
      ? `<span class="sip-pill sip-pill--muted">${esc(t("map.points.kmlExport"))}</span>`
      : p.coordPrecision === "estimated_center"
        ? `<span class="sip-pill sip-pill--muted">${esc(t("map.points.estimatedPosition"))}</span>`
        : p.coordPrecision === "approx"
          ? `<span class="sip-pill sip-pill--muted">${esc(t("map.points.approx"))}</span>`
          : "";

  return `
    <div class="sip-popup sip-popup--point">
      <div class="sip-popup__title">${title}</div>
      <div class="sip-popup__chips">
        <span class="sip-pill">${cat}</span>
        ${coordPill}
      </div>
      <p class="sip-popup__desc">${short}</p>
      <div class="sip-popup__meta">
        <div class="sip-popup__row">
          <span class="sip-popup__k">${source}</span>
          <span class="sip-popup__v">${sourceValue}</span>
        </div>
      </div>
      <button type="button" class="sip-popup__btn" data-sip-open="${esc(p.id)}">${esc(t("map.points.more"))}</button>
    </div>`;
}

export function buildCatalogEntryPopupHtml(
  t: (key: TranslationKey) => string,
  p: MapReferencePoint,
  lang: Lang,
): string {
  const title = esc(p.names[lang] ?? p.names.ru);
  const typeLabel = esc(t(`map.catalog.type.${p.mapType}` as TranslationKey));
  const shortRaw = p.summary?.[lang] ?? p.summary?.ru ?? "";
  const short = shortRaw ? `<p class="sip-popup__desc">${esc(shortRaw)}</p>` : "";
  const descRaw = p.description?.[lang] ?? p.description?.ru ?? "";
  const desc = descRaw ? `<p class="sip-popup__desc sip-popup__desc--body">${esc(descRaw)}</p>` : "";
  const factRaw = p.interestingFact?.[lang] ?? p.interestingFact?.ru ?? "";
  const fact = factRaw
    ? `<div class="sip-popup__factblock"><div class="sip-popup__factlabel">${esc(t("map.catalog.interestingFact"))}</div><p class="sip-popup__desc sip-popup__fact">${esc(factRaw)}</p></div>`
    : "";
  const conf = esc(t(`map.catalog.confidence.${p.confidence}` as TranslationKey));
  const st = esc(t(`map.catalog.sourceType.${p.sourceType}` as TranslationKey));
  const src = esc(p.sourceName);
  const approx = p.isApproximate
    ? `<span class="sip-pill sip-pill--muted">${esc(t("map.catalog.approxCoords"))}</span>`
    : "";
  const link = p.sourceUrl
    ? `<div class="sip-popup__row"><span class="sip-popup__k">${esc(t("map.catalog.link"))}</span><span class="sip-popup__v"><a href="${esc(p.sourceUrl)}" target="_blank" rel="noreferrer">${esc(t("map.catalog.openSource"))}</a></span></div>`
    : "";
  const gmaps = p.googleMapsUrl
    ? `<div class="sip-popup__row"><span class="sip-popup__k">${esc(t("map.catalog.googleMaps"))}</span><span class="sip-popup__v"><a href="${esc(p.googleMapsUrl)}" target="_blank" rel="noreferrer">${esc(t("map.catalog.openGoogleMaps"))}</a></span></div>`
    : "";

  const openId = p.sipSiteId ?? p.id;
  const dataAttr = p.sipSiteId ? "data-sip-open" : "data-catalog-open";

  return `
    <div class="sip-popup sip-popup--point sip-popup--catalog">
      <div class="sip-popup__title">${title}</div>
      <div class="sip-popup__chips">
        <span class="sip-pill">${typeLabel}</span>
        ${approx}
      </div>
      ${short}
      ${desc}
      ${fact}
      <div class="sip-popup__meta">
        <div class="sip-popup__row"><span class="sip-popup__k">${esc(t("map.catalog.confidenceLabel"))}</span><span class="sip-popup__v">${conf}</span></div>
        <div class="sip-popup__row"><span class="sip-popup__k">${esc(t("map.catalog.sourceKindLabel"))}</span><span class="sip-popup__v">${st}</span></div>
        <div class="sip-popup__row"><span class="sip-popup__k">${esc(t("map.catalog.sourceTextLabel"))}</span><span class="sip-popup__v">${src}</span></div>
        ${link}
        ${gmaps}
      </div>
      <button type="button" class="sip-popup__btn" ${dataAttr}="${esc(openId)}">${esc(t("map.points.more"))}</button>
    </div>`;
}
