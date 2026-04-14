import fs from "fs";
const p = "components/i18n/translations.ts";
let s = fs.readFileSync(p, "utf8");
s = s.replace(/"glossary\.sr90\.title": "[^"]+"/, `"glossary.sr90.title": "Стронций-90 (Sr-90)"`);
s = s.replace(/"glossary\.pu239240\.title": "[^"]+"/, `"glossary.pu239240.title": "Плутоний-239+240 (Pu-239+240)"`);
fs.writeFileSync(p, s);
