"use client";

import dynamic from "next/dynamic";

const SipMapDynamic = dynamic<{ className?: string }>(
  async () => (await import("./SipMapClient")).SipMapClient,
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full min-h-[280px] w-full animate-pulse items-center justify-center bg-surface-container-low/60 text-[12px] text-on-surface-variant">
        Загрузка карты…
      </div>
    ),
  },
);

export function SipMap({ className }: { className?: string }) {
  return <SipMapDynamic className={className} />;
}
