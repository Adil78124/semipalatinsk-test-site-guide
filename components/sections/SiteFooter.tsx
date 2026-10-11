"use client";

import React, { useContext } from "react";
import { usePathname } from "next/navigation";
import { I18nContext } from "@/components/providers/AppProviders";
import { UnifiedSiteDisclaimer } from "@/components/ui/UnifiedSiteDisclaimer";

const PROJECT_LINK =
  "https://abu.edu.kz/ru/science/projects%26initiatives/1747376582725/1760959493335/1760961589673";

export function SiteFooter() {
  const pathname = usePathname();
  const i18n = useContext(I18nContext);
  if (!i18n) return null;
  const { t } = i18n;
  const copyright = t("footer.meta.copyright");

  const homeHref = (hash: string) => (pathname === "/" ? hash : `/${hash}`);

  return (
    <footer id="contacts" className="w-full mt-24 scroll-mt-24 bg-[#f8faf9] dark:bg-[#191c1c] border-t border-[#bfcaba]/15">
      <div className="px-6 md:px-12 py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-6">
          <div className="font-['Manrope'] font-black text-[#0d631b] text-2xl">
            {t("brand")}
          </div>
          <div className="max-w-md space-y-3">
            <p className="font-['Inter'] text-sm text-[#191c1c] dark:text-[#f8faf9] opacity-70 leading-relaxed whitespace-pre-line">
              {t("footer.about")}
            </p>
            <a
              href={PROJECT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-['Inter'] text-sm font-bold text-primary underline underline-offset-4 transition-opacity hover:opacity-80"
            >
              {t("footer.partner")}
              <span className="material-symbols-outlined text-[16px] leading-none" aria-hidden>
                open_in_new
              </span>
            </a>
          </div>
        </div>

          <div className="lg:col-span-4 grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <h5 className="font-['Inter'] text-xs tracking-wide uppercase opacity-60 font-bold">
                {t("footer.links.title")}
              </h5>
              <ul className="space-y-3">
                <li>
                  <a
                    className="font-['Inter'] text-sm text-[#191c1c] dark:text-[#f8faf9] opacity-80 hover:opacity-100 underline underline-offset-4 transition-all"
                    href={homeHref("#home")}
                  >
                    {t("footer.links.home")}
                  </a>
                </li>
                <li>
                  <a
                    className="font-['Inter'] text-sm text-[#191c1c] dark:text-[#f8faf9] opacity-80 hover:opacity-100 underline underline-offset-4 transition-all"
                    href={homeHref("#sip-info")}
                  >
                    {t("footer.links.sip")}
                  </a>
                </li>
                <li>
                  <a
                    className="font-['Inter'] text-sm text-[#191c1c] dark:text-[#f8faf9] opacity-80 hover:opacity-100 underline underline-offset-4 transition-all"
                    href={homeHref("#map")}
                  >
                    {t("footer.links.mapRoutes")}
                  </a>
                </li>
                <li>
                  <a
                    className="font-['Inter'] text-sm text-[#191c1c] dark:text-[#f8faf9] opacity-80 hover:opacity-100 underline underline-offset-4 transition-all"
                    href="/map?mode=routes"
                  >
                    {t("footer.links.zones")}
                  </a>
                </li>
                <li>
                  <a
                    className="font-['Inter'] text-sm text-[#191c1c] dark:text-[#f8faf9] opacity-80 hover:opacity-100 underline underline-offset-4 transition-all"
                    href={homeHref("#safety")}
                  >
                    {t("footer.links.safety")}
                  </a>
                </li>
                <li>
                  <a
                    className="font-['Inter'] text-sm text-[#191c1c] dark:text-[#f8faf9] opacity-80 hover:opacity-100 underline underline-offset-4 transition-all"
                    href="/contacts"
                  >
                    {t("footer.links.contacts")}
                  </a>
                </li>
                <li>
                  <a
                    className="font-['Inter'] text-sm text-[#191c1c] dark:text-[#f8faf9] opacity-80 hover:opacity-100 underline underline-offset-4 transition-all"
                    href="/methodology"
                  >
                    {t("footer.links.methodology")}
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h5 className="font-['Inter'] text-xs tracking-wide uppercase opacity-60 font-bold">
                {t("footer.project.title")}
              </h5>
              <ul className="space-y-3">
                <li>
                  <a
                    className="font-['Inter'] text-sm text-[#191c1c] dark:text-[#f8faf9] opacity-80 hover:opacity-100 underline underline-offset-4 transition-all"
                    href={homeHref("#guide")}
                  >
                    {t("footer.project.sipInfo")}
                  </a>
                </li>
                <li>
                  <a
                    className="font-['Inter'] text-sm text-[#191c1c] dark:text-[#f8faf9] opacity-80 hover:opacity-100 underline underline-offset-4 transition-all"
                    href="/maps#sources"
                  >
                    {t("footer.project.sources")}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h5 className="font-['Inter'] text-xs tracking-wide uppercase opacity-60 font-bold">
              {t("footer.meta.title")}
            </h5>
            <UnifiedSiteDisclaimer
              variant="compact"
              className="font-['Inter'] !border-0 !bg-transparent !p-0 text-xs text-[#191c1c] opacity-70 dark:text-[#f8faf9]"
            />
          </div>
        </div>
      </div>

      {copyright ? (
        <div className="px-6 md:px-12 py-8 border-t border-outline-variant/10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4">
            <p className="text-[10px] font-label font-bold uppercase tracking-widest text-outline opacity-50">
              {copyright}
            </p>
          </div>
        </div>
      ) : null}
    </footer>
  );
}
