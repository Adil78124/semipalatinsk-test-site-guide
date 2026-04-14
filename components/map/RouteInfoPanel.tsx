"use client";

import type { SipRoute, SipRouteZone } from "@/data/routes/sipRoutes.types";

function routeZoneLabel(zone: SipRouteZone): string {
  if (zone === "research") return "справочный исследовательский коридор";
  return "справочный маршрутный коридор";
}

type Props = {
  routes: SipRoute[];
  selectedName: string | null;
  onSelectRoute: (name: string) => void;
  onClearSelection: () => void;
  hoveredStopKey: string | null;
  onHoverStop: (key: string | null) => void;
};

export function RouteInfoPanel({
  routes,
  selectedName,
  onSelectRoute,
  onClearSelection,
  hoveredStopKey,
  onHoverStop,
}: Props) {
  const selected = selectedName ? routes.find((r) => r.name === selectedName) ?? null : null;
  const riskTone = (risk: "low" | "medium" | "high") =>
    risk === "low"
      ? "border-emerald-700/30 bg-emerald-50 text-emerald-900"
      : risk === "medium"
        ? "border-amber-700/30 bg-amber-50 text-amber-900"
        : "border-rose-700/30 bg-rose-50 text-rose-900";

  return (
    <div className="overflow-hidden rounded-2xl border border-outline-variant/15 bg-white/95 shadow-[0_10px_28px_rgba(24,30,27,0.08)]">
      <div className="border-b border-outline-variant/10 bg-gradient-to-b from-surface-container-low/70 to-transparent px-3 py-2.5">
        <h2 className="font-headline text-sm font-extrabold text-on-surface leading-tight">
          Маршруты по дорогам (реконструкция)
        </h2>
        <p className="mt-1 text-[11px] leading-relaxed text-on-surface-variant">
          Линии построены по дорожным коридорам на подложке. Локальные ориентиры могут иметь приблизительные координаты и требуют GIS-проверки.
        </p>
        {routes.length > 0 ? (
          <div className="mt-2 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={onClearSelection}
              className={[
                "rounded-xl px-3 py-1.5 text-[11px] font-extrabold transition-colors",
                selectedName === null
                  ? "border border-outline-variant/20 bg-white text-on-surface hover:bg-surface-container-low"
                  : "bg-primary text-on-primary",
              ].join(" ")}
            >
              {selectedName === null ? "Маршруты скрыты" : "Скрыть маршрут"}
            </button>
          </div>
        ) : null}
      </div>

      {routes.length > 0 ? (
        <div className="max-h-[220px] overflow-y-auto sm:max-h-[250px]">
          <ul className="divide-y divide-outline-variant/10 bg-white">
            {routes.map((r) => {
              const active = r.name === selectedName;
              return (
                <li key={r.name}>
                  <button
                    type="button"
                    onClick={() => onSelectRoute(r.name)}
                    className={[
                      "w-full px-3 py-2.5 text-left transition-colors",
                      active ? "bg-primary/10" : "hover:bg-surface-container-low/80",
                    ].join(" ")}
                  >
                    <div className="text-[12px] font-bold text-on-surface leading-snug line-clamp-2">{r.name}</div>
                    <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] text-on-surface-variant tabular-nums">
                      <span className={["inline-flex rounded-full border px-1.5 py-0.5 font-bold", riskTone(r.risk)].join(" ")}>
                        {r.risk}
                      </span>
                      <span>
                        <span className="font-semibold text-on-surface">Режим линии:</span> {routeZoneLabel(r.zone)}
                      </span>
                      <span className="text-outline-variant">·</span>
                      <span>
                        <span className="font-semibold text-on-surface">Риск:</span> {r.risk}
                      </span>
                      <span className="text-outline-variant">·</span>
                      <span>{r.total_distance_km} км</span>
                      <span className="text-outline-variant">·</span>
                      <span>{r.estimated_time_hours} ч</span>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div className="bg-white px-3 py-3 text-[11px] leading-relaxed text-on-surface-variant">
          Сейчас маршруты удалены. Когда вы пришлёте новые треки/точки — подключим их и настроим отображение по дорожным
          коридорам.
        </div>
      )}

      {selected ? (
        <div className="border-t border-outline-variant/10 bg-white px-3 py-3">
          <h3 className="font-headline text-xs font-extrabold uppercase tracking-wide text-on-surface-variant">
            Карточка маршрута
          </h3>
          <dl className="mt-2 space-y-1.5 text-[11px] text-on-surface-variant">
            <div>
              <dt className="sr-only">Название</dt>
              <dd className="font-bold text-on-surface text-[12px] leading-snug">{selected.name}</dd>
            </div>
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              <span>
                <span className="font-semibold text-on-surface">Режим линии:</span>{" "}
                {routeZoneLabel(selected.zone)}
              </span>
              <span>
                <span className="font-semibold text-on-surface">Риск:</span> {selected.risk}
              </span>
            </div>
            <div className="flex flex-wrap gap-x-3 gap-y-1 tabular-nums">
              <span>
                <span className="font-semibold text-on-surface">Длина:</span> {selected.total_distance_km} км
              </span>
              <span>
                <span className="font-semibold text-on-surface">Длительность:</span> ~{selected.estimated_time_hours} ч
              </span>
            </div>
            <div>
              <dt className="font-semibold text-on-surface">Предупреждение</dt>
              <dd className="mt-1 whitespace-pre-line leading-relaxed">{selected.warning}</dd>
            </div>
          </dl>

          <div className="mt-3">
            <div className="text-[11px] font-extrabold text-on-surface">Остановки</div>
            <ol className="mt-2 max-h-[min(40vh,280px)] space-y-3 overflow-y-auto pr-1 text-[11px] leading-relaxed">
              {selected.points
                .map((p, pointIdx) => ({ p, pointIdx }))
                .filter(({ p }) => (p.kind ?? "stop") === "stop")
                .map(({ p, pointIdx }, idx) => (
                <li
                  key={`${selected.name}-${pointIdx}`}
                  onMouseEnter={() => onHoverStop(`${selected.name}::${pointIdx}`)}
                  onMouseLeave={() => onHoverStop(null)}
                  className={[
                    "rounded-xl border p-2.5 transition-colors",
                    hoveredStopKey === `${selected.name}::${pointIdx}`
                      ? "border-primary/35 bg-primary/10"
                      : "border-outline-variant/12 bg-surface-container-low/35",
                  ].join(" ")}
                >
                  <div className="flex items-start gap-2">
                    <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-outline-variant/25 bg-white text-[10px] font-extrabold text-on-surface">
                      {idx + 1}
                    </span>
                    <div className="font-bold text-on-surface leading-snug">{p.name}</div>
                  </div>
                  {p.lat == null || p.lng == null ? (
                    <div className="mt-1 text-[10px] font-bold text-amber-900/90">
                      Координаты ориентировочные — требуется GIS-проверка
                    </div>
                  ) : null}
                  <div className="mt-1 text-on-surface-variant">{p.description}</div>
                  <div className="mt-2 grid gap-1 text-[10px]">
                    <div>
                      <span className={["inline-flex rounded-full border px-1.5 py-0.5 font-bold", riskTone(p.risk_level)].join(" ")}>
                        risk: {p.risk_level}
                      </span>
                    </div>
                    <div>
                      <span className="font-semibold text-on-surface">Макс. время:</span> {p.max_time_minutes} мин
                    </div>
                    <div className="rounded-md bg-white/90 px-2 py-1.5 text-[10px] text-on-surface-variant leading-snug">
                      <span className="font-semibold text-on-surface">Меры безопасности:</span> {p.safety_note}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      ) : (
        <div className="border-t border-outline-variant/10 px-3 py-2.5 text-[11px] text-on-surface-variant">
          {routes.length > 0
            ? "Выберите маршрут, чтобы увидеть линию GeoJSON и остановки. По умолчанию маршруты скрыты."
            : "Маршруты пока отсутствуют."}
        </div>
      )}
    </div>
  );
}
