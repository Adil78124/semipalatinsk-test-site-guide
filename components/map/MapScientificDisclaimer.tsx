"use client";

import { UnifiedSiteDisclaimer } from "@/components/ui/UnifiedSiteDisclaimer";

export function MapScientificDisclaimer() {
  return (
    <aside
      className="rounded-xl border border-tertiary/25 bg-tertiary-fixed/90 p-3 shadow-sm"
      role="note"
      aria-label="Disclaimer"
    >
      <div className="flex gap-2">
        <span className="material-symbols-outlined shrink-0 text-[20px] text-on-tertiary-fixed" style={{ fontVariationSettings: "'FILL' 1" }}>
          gavel
        </span>
        <UnifiedSiteDisclaimer
          variant="compact"
          className="!border-0 !bg-transparent !p-0 !shadow-none !text-on-tertiary-fixed"
        />
      </div>
    </aside>
  );
}
