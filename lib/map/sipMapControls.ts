import type { Control, Map as LeafletMap, TileLayer } from "leaflet";
import type { BasemapId } from "@/lib/map/sipMapConfig";

type BasemapControlOptions = {
  standard: TileLayer;
  topo: TileLayer;
  labels: { standard: string; topo: string };
  initial: BasemapId;
  onChange?: (id: BasemapId) => void;
};

export function createBasemapToggleControl(
  L: typeof import("leaflet"),
  map: LeafletMap,
  opts: BasemapControlOptions,
): Control {
  let active: BasemapId = opts.initial;

  const apply = (id: BasemapId) => {
    active = id;
    if (id === "standard") {
      map.removeLayer(opts.topo);
      if (!map.hasLayer(opts.standard)) opts.standard.addTo(map);
    } else {
      map.removeLayer(opts.standard);
      if (!map.hasLayer(opts.topo)) opts.topo.addTo(map);
    }
    opts.onChange?.(id);
  };

  const ControlCls = L.Control.extend({
    options: { position: "topright" },
    onAdd(): HTMLElement {
      const wrap = L.DomUtil.create("div", "sip-basemap-toggle leaflet-control");
      const bar = L.DomUtil.create("div", "sip-basemap-toggle__bar", wrap);

      const mkBtn = (id: BasemapId, label: string) => {
        const btn = L.DomUtil.create("button", "sip-basemap-toggle__btn", bar);
        btn.type = "button";
        btn.textContent = label;
        btn.setAttribute("aria-pressed", id === active ? "true" : "false");
        if (id === active) btn.classList.add("sip-basemap-toggle__btn--active");

        L.DomEvent.on(btn, "click", (e) => {
          L.DomEvent.stop(e);
          if (active === id) return;
          bar.querySelectorAll("button").forEach((b) => {
            b.classList.remove("sip-basemap-toggle__btn--active");
            b.setAttribute("aria-pressed", "false");
          });
          btn.classList.add("sip-basemap-toggle__btn--active");
          btn.setAttribute("aria-pressed", "true");
          apply(id);
        });
        return btn;
      };

      mkBtn("standard", opts.labels.standard);
      mkBtn("topo", opts.labels.topo);

      L.DomEvent.disableClickPropagation(wrap);
      L.DomEvent.disableScrollPropagation(wrap);
      return wrap;
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const c = new (ControlCls as any)();
  return c;
}
