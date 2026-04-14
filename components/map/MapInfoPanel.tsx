"use client";

import type { Lang, TranslationKey } from "@/components/i18n/translations";
import { STS_ATLAS_URL, type MapReferencePoint } from "@/data/sipMap/mapReferencePoints";
import type { SitePointSource } from "@/data/sipMap/sitePointsData";
import type { SitePoint } from "@/data/sipMap/sitePointsData";

export type MapInfoSelection =
  | { mode: "sip"; site: SitePoint }
  | { mode: "catalog"; entry: MapReferencePoint };

function sipSourceLabel(source: SitePointSource, t: (key: TranslationKey) => string): string {
  if (source === "sts.nnc.kz") return t("map.sipSource.stsNnc");
  return t("map.sipSource.editorial");
}

export function MapInfoPanel({
  selection,
  lang,
  t,
  onClose,
  onMinimize,
  layout = "card",
}: {
  selection: MapInfoSelection;
  lang: Lang;
  t: (key: TranslationKey) => string;
  onClose: () => void;
  /** Fullscreen map: collapse panel to a map-edge control without clearing the selection. */
  onMinimize?: () => void;
  /** `sidebar`: full-height column (GIS right panel). `card`: compact rounded card. */
  layout?: "card" | "sidebar";
}) {
  const isSidebar = layout === "sidebar";
  const shell = isSidebar
    ? "flex min-h-0 min-w-0 max-w-full flex-1 flex-col bg-white/[0.98] shadow-none backdrop-blur md:h-full"
    : "shrink-0 overflow-hidden rounded-xl border border-outline-variant/15 bg-white/95 shadow-[0_8px_24px_rgba(0,0,0,0.1)] backdrop-blur flex min-h-0 max-w-full flex-col";

  if (selection.mode === "sip") {
    const sipSite = selection.site;
    return (
      <div className={shell}>
        <div
          className={`flex shrink-0 items-start justify-between gap-2 border-b border-outline-variant/10 bg-white/90 px-3 py-2.5 backdrop-blur ${isSidebar ? "sticky top-0 z-10" : ""}`}
        >
          <div className="min-w-0">
            <div className="text-[13px] font-extrabold leading-tight text-on-surface">{sipSite.name}</div>
            <div className="text-[11px] text-on-surface-variant">
              {t(`map.points.category.${sipSite.category}` as TranslationKey)}
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-0.5">
            {isSidebar && onMinimize ? (
              <button
                type="button"
                className="material-symbols-outlined rounded-full p-1.5 text-on-surface-variant hover:bg-surface-container-low"
                aria-label={t("map.sidebar.minimizePanel")}
                onClick={onMinimize}
              >
                dock_to_right
              </button>
            ) : null}
            <button
              type="button"
              className="material-symbols-outlined rounded-full p-1.5 text-on-surface-variant hover:bg-surface-container-low"
              aria-label={t("map.points.close")}
              onClick={onClose}
            >
              close
            </button>
          </div>
        </div>
        <div
          className={`min-w-0 px-3 py-3 ${isSidebar ? "flex-1 overflow-y-auto overscroll-contain [-webkit-overflow-scrolling:touch]" : ""}`}
        >
          <p className="mb-3 text-[12px] leading-relaxed text-on-surface-variant">{sipSite.shortDescription}</p>
          <div className="whitespace-pre-wrap text-[12px] leading-relaxed text-on-surface">{sipSite.fullDescription}</div>
          <div className="mt-3 space-y-2 text-[11px] text-on-surface-variant">
            <div className="rounded-lg border border-outline-variant/12 bg-surface-container-low/50 p-2.5">
              <div className="text-[11px] font-bold text-on-surface">{t("map.pointProvenance.title")}</div>
              <div className="mt-1.5 text-[11px]">
                <span className="font-bold text-on-surface-variant">{t("map.pointProvenance.sourceTypes")}:</span>{" "}
                {sipSite.sources.map((s) => sipSourceLabel(s, t)).join(" · ")}
              </div>
              <div className="mt-1 flex flex-wrap items-center gap-2 text-[11px]">
                <span className="font-bold text-on-surface-variant">{t("map.pointProvenance.coordQuality")}:</span>
                <span>{t(`map.pointProvenance.coord.${sipSite.coordPrecision}` as TranslationKey)}</span>
                {sipSite.coordPrecision === "kml_export" ? (
                  <span className="inline-flex items-center rounded-full border border-outline-variant/20 bg-surface-container-low px-2 py-0.5 text-[10px]">
                    {t("map.points.kmlExport")}
                  </span>
                ) : sipSite.coordPrecision === "estimated_center" ? (
                  <span className="inline-flex items-center rounded-full border border-outline-variant/20 bg-surface-container-low px-2 py-0.5 text-[10px]">
                    {t("map.points.estimatedPosition")}
                  </span>
                ) : sipSite.coordPrecision === "approx" ? (
                  <span className="inline-flex items-center rounded-full border border-outline-variant/20 bg-surface-container-low px-2 py-0.5 text-[10px]">
                    {t("map.points.approx")}
                  </span>
                ) : null}
              </div>
              <a
                href={STS_ATLAS_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-primary"
              >
                {t("map.pointProvenance.primaryAtlas")}
                <span className="material-symbols-outlined text-[14px]">open_in_new</span>
              </a>
            </div>
            {sipSite.accuracyNote ? (
              <p className="border-l-2 border-outline-variant/25 pl-2 text-[10px] leading-snug text-on-surface-variant/95">
                {sipSite.accuracyNote}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    );
  }

  const catalogEntry = selection.entry;
  return (
    <div className={shell}>
      <div
        className={`flex shrink-0 items-start justify-between gap-2 border-b border-outline-variant/10 bg-white/90 px-3 py-2.5 backdrop-blur ${isSidebar ? "sticky top-0 z-10" : ""}`}
      >
        <div className="min-w-0">
          <div className="text-[13px] font-extrabold leading-tight text-on-surface">
            {catalogEntry.names[lang] ?? catalogEntry.names.ru}
          </div>
          <div className="text-[11px] text-on-surface-variant">
            {t(`map.catalog.type.${catalogEntry.mapType}` as TranslationKey)}
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-0.5">
          {isSidebar && onMinimize ? (
            <button
              type="button"
              className="material-symbols-outlined rounded-full p-1.5 text-on-surface-variant hover:bg-surface-container-low"
              aria-label={t("map.sidebar.minimizePanel")}
              onClick={onMinimize}
            >
              dock_to_right
            </button>
          ) : null}
          <button
            type="button"
            className="material-symbols-outlined rounded-full p-1.5 text-on-surface-variant hover:bg-surface-container-low"
            aria-label={t("map.points.close")}
            onClick={onClose}
          >
            close
          </button>
        </div>
      </div>
      <div
        className={`min-w-0 space-y-2.5 px-3 py-3 text-[11px] text-on-surface-variant ${isSidebar ? "flex-1 overflow-y-auto overscroll-contain [-webkit-overflow-scrolling:touch]" : ""}`}
      >
        {(catalogEntry.summary?.[lang] ?? catalogEntry.summary?.ru) ? (
          <p className="font-medium leading-relaxed text-on-surface">
            {catalogEntry.summary?.[lang] ?? catalogEntry.summary?.ru}
          </p>
        ) : null}
        {(catalogEntry.description?.[lang] ?? catalogEntry.description?.ru) ? (
          <p className="leading-relaxed">{catalogEntry.description?.[lang] ?? catalogEntry.description?.ru}</p>
        ) : null}
        {(catalogEntry.interestingFact?.[lang] ?? catalogEntry.interestingFact?.ru) ? (
          <div className="rounded-lg border border-primary/15 bg-primary/[0.06] px-2.5 py-2">
            <div className="mb-1 text-[10px] font-extrabold uppercase tracking-wide text-primary">
              {t("map.catalog.interestingFact")}
            </div>
            <p className="leading-relaxed text-on-surface">
              {catalogEntry.interestingFact?.[lang] ?? catalogEntry.interestingFact?.ru}
            </p>
          </div>
        ) : null}
        <div className="space-y-2 border-t border-outline-variant/10 pt-2.5">
          <div className="text-[11px] font-bold text-on-surface">{t("map.pointProvenance.title")}</div>
          <div>
            <span className="font-bold text-on-surface">{t("map.catalog.confidenceLabel")}:</span>{" "}
            {t(`map.catalog.confidence.${catalogEntry.confidence}` as TranslationKey)}
          </div>
          <div>
            <span className="font-bold text-on-surface">{t("map.catalog.sourceKindLabel")}:</span>{" "}
            {t(`map.catalog.sourceType.${catalogEntry.sourceType}` as TranslationKey)}
          </div>
          <div>
            <span className="font-bold text-on-surface">{t("map.catalog.sourceTextLabel")}:</span> {catalogEntry.sourceName}
          </div>
          {catalogEntry.isApproximate ? (
            <span className="inline-flex rounded-full border border-outline-variant/20 bg-surface-container-low px-2 py-0.5 text-[10px]">
              {t("map.catalog.approxCoords")}
            </span>
          ) : null}
          {catalogEntry.sourceUrl ? (
            <a
              href={catalogEntry.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-bold text-primary"
            >
              {t("map.catalog.openSource")}
              <span className="material-symbols-outlined text-[14px]">open_in_new</span>
            </a>
          ) : null}
          {catalogEntry.googleMapsUrl ? (
            <a
              href={catalogEntry.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-bold text-primary"
            >
              {t("map.catalog.googleMaps")}: {t("map.catalog.openGoogleMaps")}
              <span className="material-symbols-outlined text-[14px]">open_in_new</span>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
