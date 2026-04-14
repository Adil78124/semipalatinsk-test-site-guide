"use client";

import type { GoogleRouteCard } from "@/data/routes/googleRoutes";

function MetaChip({
  icon,
  label,
}: {
  icon: string;
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-outline-variant/14 bg-surface-container-low/70 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-on-surface-variant">
      <span className="material-symbols-outlined text-[14px] text-on-surface-variant">{icon}</span>
      {label}
    </span>
  );
}

function GoogleRouteCardView({ route }: { route: GoogleRouteCard }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-outline-variant/18 bg-surface shadow-sm transition-shadow hover:shadow-md">
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface-container-low">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={route.image}
          alt={route.title}
          loading="lazy"
          className="h-full w-full object-cover saturate-[0.82] contrast-[1.02] brightness-[0.92] transition-transform duration-700 group-hover:scale-[1.015]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
        <div className="pointer-events-none absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/25 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white/90 backdrop-blur">
          <span className="material-symbols-outlined text-[14px] text-white/85">route</span>
          маршрут
        </div>
      </div>

      <div className="flex h-full flex-col gap-3 p-4 sm:p-5">
        <div className="min-w-0">
          <h3 className="font-headline text-[15px] font-extrabold leading-snug text-on-surface">
            {route.title}
          </h3>
          <p className="mt-1 text-[12px] leading-relaxed text-on-surface-variant line-clamp-3">
            {route.description}
          </p>
        </div>

        {(route.type || route.difficulty || route.purpose) ? (
          <div className="flex flex-wrap gap-2">
            {route.type ? <MetaChip icon="directions_car" label={route.type} /> : null}
            {route.difficulty ? <MetaChip icon="signal_cellular_alt" label={route.difficulty} /> : null}
            {route.purpose ? <MetaChip icon="visibility" label={route.purpose} /> : null}
          </div>
        ) : null}

        <div className="grid grid-cols-1 gap-2 text-[11px] leading-snug text-on-surface-variant sm:grid-cols-2">
          <div className="rounded-xl border border-outline-variant/14 bg-surface-container-low/70 px-3 py-2">
            <div className="text-[10px] font-extrabold uppercase tracking-wide text-on-surface-variant/90">
              Старт
            </div>
            <div className="mt-1 font-bold text-on-surface">{route.start}</div>
          </div>
          <div className="rounded-xl border border-outline-variant/14 bg-surface-container-low/70 px-3 py-2">
            <div className="text-[10px] font-extrabold uppercase tracking-wide text-on-surface-variant/90">
              Направление
            </div>
            <div className="mt-1 font-semibold text-on-surface line-clamp-2">{route.end}</div>
          </div>
        </div>

        {route.warning ? (
          <div className="rounded-xl border border-outline-variant/14 bg-surface-container-low/60 px-3 py-2 text-[11px] leading-relaxed text-on-surface-variant">
            <div className="mb-1 inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-on-surface-variant">
              <span className="material-symbols-outlined text-[14px]">info</span>
              важно
            </div>
            <div className="text-on-surface-variant">{route.warning}</div>
          </div>
        ) : null}

        <div className="flex items-center justify-between gap-3 text-[11px] text-on-surface-variant">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-outline-variant/14 bg-surface-container-low/70 px-3 py-1.5">
            <span className="material-symbols-outlined text-[16px] text-on-surface-variant">schedule</span>
            <span className="font-bold text-on-surface">{route.duration}</span>
          </div>

          <a
            href={route.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-outline-variant/20 bg-surface px-4 py-2 text-[12px] font-extrabold text-on-surface shadow-sm transition-colors hover:bg-surface-container-low"
            aria-label={`${route.title}: открыть в Google Maps`}
          >
            Открыть в Google Maps
            <span className="material-symbols-outlined text-[16px] text-on-surface-variant" aria-hidden>
              open_in_new
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}

export function GoogleRoutesSection({
  routes,
  className,
}: {
  routes: GoogleRouteCard[];
  className?: string;
}) {
  return (
    <section className={["bg-surface", className ?? ""].join(" ")}>
      <div className="container mx-auto px-6 md:px-8 py-16 sm:py-20">
        <div className="flex items-end justify-between gap-6 mb-8">
          <div className="min-w-0">
            <span className="font-label text-xs font-bold text-tertiary uppercase tracking-[0.2em] mb-3 block">
              Маршруты
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl font-extrabold leading-tight text-on-surface">
              Простые маршруты
              <span className="text-on-surface-variant"> через Google Maps</span>
            </h2>
            <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-on-surface-variant">
              Выберите маршрут и откройте его в Google Maps. На нашей карте остаются только точки для ориентации.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {routes.map((r) => (
            <GoogleRouteCardView key={r.id} route={r} />
          ))}
        </div>
      </div>
    </section>
  );
}

