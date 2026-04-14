"use client";

export type MapMode = "scheme" | "relief" | "satellite";

type Props = {
  value: MapMode;
  onChange: (mode: MapMode) => void;
};

export function MapModeSwitch({ value, onChange }: Props) {
  const modeBtn = (mode: MapMode, label: string) => (
    <button
      key={mode}
      type="button"
      onClick={() => onChange(mode)}
      className={[
        "rounded-lg px-2.5 py-1.5 text-[11px] font-bold transition-colors",
        value === mode
          ? "bg-primary text-on-primary shadow-sm"
          : "text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface",
      ].join(" ")}
    >
      {label}
    </button>
  );

  return (
    <div className="rounded-xl border border-outline-variant/12 bg-white/92 p-2 shadow-sm">
      <div className="mb-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-on-surface-variant">
        Режим карты
      </div>
      <div className="grid grid-cols-3 gap-1">
        {modeBtn("scheme", "Схема")}
        {modeBtn("relief", "Рельеф")}
        {modeBtn("satellite", "Спутник")}
      </div>
    </div>
  );
}

