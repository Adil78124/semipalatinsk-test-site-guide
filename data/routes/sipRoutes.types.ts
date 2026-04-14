export type SipRouteZone = "routed" | "research";

export type SipRiskLevel = "low" | "medium" | "high";

export type SipRoutePointKind = "stop" | "node";

export type SipCoordPrecision = "verified" | "approx";
export type SipCoordSource = "sts.nnc.kz_kml" | "satellite_estimate" | "unknown";

export type SipRoutePoint = {
  name: string;
  lat: number | null;
  lng: number | null;
  description: string;
  risk_level: SipRiskLevel;
  max_time_minutes: number;
  safety_note: string;
  /**
   * stop: ключевая остановка (нумерация, карточка маршрута, “путевые” popups)
   * node: дорожный/технический узел для “привязки” линии маршрута к коридорам/дорогам
   */
  kind?: SipRoutePointKind;
  precision?: SipCoordPrecision;
  source?: SipCoordSource;
};

export type SipRoute = {
  name: string;
  zone: SipRouteZone;
  risk: SipRiskLevel;
  total_distance_km: number;
  estimated_time_hours: number;
  warning: string;
  points: SipRoutePoint[];
};

