"use client";

import { SIP_SCIENCE_PALETTE } from "@/lib/map/sipScientificMapPalette";

export function MapLegend() {
  const p = SIP_SCIENCE_PALETTE;
  return (
    <div className="rounded-xl border border-outline-variant/12 bg-white/90 p-3 shadow-sm">
      <h3 className="font-headline text-[11px] font-extrabold uppercase tracking-[0.12em] text-on-surface-variant">
        Легенда
      </h3>
      <ul className="mt-2.5 space-y-2.5 text-[11px] text-on-surface leading-snug">
        <li className="flex items-start gap-2.5">
          <span className="mt-1.5 h-0.5 w-8 shrink-0 rounded-full" style={{ backgroundColor: p.stsOutline.color }} />
          <span>
            <span className="font-bold">Граница СИП</span>
          </span>
        </li>
        <li className="flex items-start gap-2.5">
          <span
            className="mt-0.5 h-6 w-8 shrink-0 rounded border"
            style={{
              borderColor: p.siteDangerous.stroke,
              backgroundColor: p.siteDangerous.fill,
            }}
          />
          <span>
            <span className="font-bold">Испытательные участки</span>
          </span>
        </li>
        <li className="flex items-start gap-2.5">
          <span
            className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full"
            style={{
              backgroundColor: p.riskMarker.low.fill,
              boxShadow: `inset 0 0 0 1px ${p.riskMarker.low.stroke}`,
            }}
          />
          <span>
            <span className="font-bold">Остановка</span>, low
          </span>
        </li>
        <li className="flex items-start gap-2.5">
          <span
            className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full"
            style={{
              backgroundColor: p.riskMarker.medium.fill,
              boxShadow: `inset 0 0 0 1px ${p.riskMarker.medium.stroke}`,
            }}
          />
          <span>
            <span className="font-bold">Остановка</span>, medium
          </span>
        </li>
        <li className="flex items-start gap-2.5">
          <span
            className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full"
            style={{
              backgroundColor: p.riskMarker.high.fill,
              boxShadow: `inset 0 0 0 1px ${p.riskMarker.high.stroke}`,
            }}
          />
          <span>
            <span className="font-bold">Остановка</span>, high
          </span>
        </li>
      </ul>
    </div>
  );
}
