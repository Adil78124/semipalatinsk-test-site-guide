/** Приглушённая «научно-картографическая» палитра для слоя СИП / STS */

export const SIP_SCIENCE_PALETTE = {
  stsOutline: {
    color: "#3d4a42",
    weight: 3,
    fillOpacity: 0,
  },
  siteDangerous: {
    stroke: "rgba(120, 52, 48, 0.9)",
    fill: "rgba(176, 82, 68, 0.22)",
  },
  siteLimited: {
    stroke: "rgba(140, 100, 40, 0.92)",
    fill: "rgba(196, 148, 72, 0.24)",
  },
  /** Рекомендательный маршрутный коридор (иллюстрация на карте) */
  routeRouted: {
    color: "#1f5c48",
    weight: 5,
    opacity: 0.92,
  },
  /** Экспедиционный/научный маршрут (высокий риск) */
  routeResearch: {
    color: "#6a2a2a",
    weight: 5,
    opacity: 0.9,
  },
  riskMarker: {
    low: { stroke: "#1b5e3a", fill: "#2f7a56" },
    medium: { stroke: "#a85a1a", fill: "#c76f24" },
    high: { stroke: "#9b2c2c", fill: "#b83838" },
  },
  label: {
    border: "rgba(56, 66, 60, 0.35)",
    background: "rgba(255, 255, 255, 0.94)",
    text: "#1c2420",
    textMuted: "#4a554e",
  },
} as const;
