"use client";

export type SipMapLayerToggles = {
  stsBoundary: boolean;
  testSites: boolean;
  routes: boolean;
  stops: boolean;
  references: boolean;
};

type Props = {
  value: SipMapLayerToggles;
  onChange: (next: SipMapLayerToggles) => void;
};

const rowCls =
  "flex cursor-pointer select-none items-center gap-2.5 rounded-lg border border-outline-variant/10 bg-white/80 px-2.5 py-2 text-left text-[12px] text-on-surface transition-colors hover:bg-surface-container-low/90";

export function MapLayerControls({ value, onChange }: Props) {
  const toggle = (key: keyof SipMapLayerToggles) => {
    onChange({ ...value, [key]: !value[key] });
  };

  const showAll = () => {
    onChange({ stsBoundary: true, testSites: true, routes: true, stops: true, references: true });
  };

  return (
    <div className="rounded-xl border border-outline-variant/12 bg-white/90 p-3 shadow-sm">
      <div className="mb-2.5 flex items-center justify-between gap-2">
        <h3 className="font-headline text-[11px] font-extrabold uppercase tracking-[0.12em] text-on-surface-variant">
          Слои карты
        </h3>
        <button
          type="button"
          onClick={showAll}
          className="shrink-0 rounded-lg border border-outline-variant/20 bg-surface-container-low px-2.5 py-1 text-[10px] font-bold text-on-surface hover:bg-surface-container"
        >
          Показать все слои
        </button>
      </div>
      <p className="mb-2.5 text-[10px] leading-snug text-on-surface-variant">
        Научно-информационный слой: включайте контекст полигона и испытательных площадок отдельно от маршрутов.
      </p>
      <div className="grid grid-cols-1 gap-2">
        <label className={rowCls}>
          <input
            type="checkbox"
            className="rounded border-outline-variant/40"
            checked={value.stsBoundary}
            onChange={() => toggle("stsBoundary")}
          />
          <span className="leading-snug">
            <span className="font-bold">Граница СИП</span>
            <span className="mt-0.5 block text-[11px] text-on-surface-variant">Схематичный внешний контур территории</span>
          </span>
        </label>
        <label className={rowCls}>
          <input
            type="checkbox"
            className="rounded border-outline-variant/40"
            checked={value.references}
            onChange={() => toggle("references")}
          />
          <span className="leading-snug">
            <span className="font-bold">Ориентиры местности</span>
            <span className="mt-0.5 block text-[11px] text-on-surface-variant">Курчатов, Иртыш, транспортные коридоры</span>
          </span>
        </label>
        <label className={rowCls}>
          <input
            type="checkbox"
            className="rounded border-outline-variant/40"
            checked={value.testSites}
            onChange={() => toggle("testSites")}
          />
          <span className="leading-snug">
            <span className="font-bold">Испытательные участки</span>
            <span className="mt-0.5 block text-[11px] text-on-surface-variant">Схематичные контуры ключевых площадок</span>
          </span>
        </label>
        <label className={rowCls}>
          <input
            type="checkbox"
            className="rounded border-outline-variant/40"
            checked={value.routes}
            onChange={() => toggle("routes")}
          />
          <span className="leading-snug">
            <span className="font-bold">Справочные маршруты</span>
            <span className="mt-0.5 block text-[11px] text-on-surface-variant">
              Линии вдоль дорожных коридоров для ориентира в интерфейсе; не утверждённый маршрутный документ
            </span>
          </span>
        </label>
        <label className={rowCls}>
          <input
            type="checkbox"
            className="rounded border-outline-variant/40"
            checked={value.stops}
            onChange={() => toggle("stops")}
          />
          <span className="leading-snug">
            <span className="font-bold">Остановки</span>
            <span className="mt-0.5 block text-[11px] text-on-surface-variant">Точки маршрутов и уровень риска на месте</span>
          </span>
        </label>
      </div>
    </div>
  );
}
