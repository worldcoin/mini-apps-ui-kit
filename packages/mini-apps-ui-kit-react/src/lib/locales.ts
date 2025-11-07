import type { LocaleData } from "./i18n";

// Centralized locale registry using static imports for SSR compatibility
const localeMap: Record<string, () => Promise<{ default: LocaleData }>> = {
  af: () => import("../locales/af.json"),
  am: () => import("../locales/am.json"),
  ar: () => import("../locales/ar.json"),
  az: () => import("../locales/az.json"),
  be: () => import("../locales/be.json"),
  bg: () => import("../locales/bg.json"),
  bn: () => import("../locales/bn.json"),
  br: () => import("../locales/br.json"),
  bs: () => import("../locales/bs.json"),
  ca: () => import("../locales/ca.json"),
  cs: () => import("../locales/cs.json"),
  cy: () => import("../locales/cy.json"),
  da: () => import("../locales/da.json"),
  de: () => import("../locales/de.json"),
  dv: () => import("../locales/dv.json"),
  el: () => import("../locales/el.json"),
  en: () => import("../locales/en.json"),
  es: () => import("../locales/es.json"),
  et: () => import("../locales/et.json"),
  eu: () => import("../locales/eu.json"),
  fa: () => import("../locales/fa.json"),
  fi: () => import("../locales/fi.json"),
  fr: () => import("../locales/fr.json"),
  ga: () => import("../locales/ga.json"),
  gl: () => import("../locales/gl.json"),
  ha: () => import("../locales/ha.json"),
  he: () => import("../locales/he.json"),
  hi: () => import("../locales/hi.json"),
  hr: () => import("../locales/hr.json"),
  hu: () => import("../locales/hu.json"),
  hy: () => import("../locales/hy.json"),
  id: () => import("../locales/id.json"),
  is: () => import("../locales/is.json"),
  it: () => import("../locales/it.json"),
  ja: () => import("../locales/ja.json"),
  ka: () => import("../locales/ka.json"),
  kk: () => import("../locales/kk.json"),
  km: () => import("../locales/km.json"),
  ko: () => import("../locales/ko.json"),
  ku: () => import("../locales/ku.json"),
  ky: () => import("../locales/ky.json"),
  lt: () => import("../locales/lt.json"),
  lv: () => import("../locales/lv.json"),
  mk: () => import("../locales/mk.json"),
  ml: () => import("../locales/ml.json"),
  mn: () => import("../locales/mn.json"),
  mr: () => import("../locales/mr.json"),
  ms: () => import("../locales/ms.json"),
  mt: () => import("../locales/mt.json"),
  nb: () => import("../locales/nb.json"),
  nl: () => import("../locales/nl.json"),
  nn: () => import("../locales/nn.json"),
  no: () => import("../locales/no.json"),
  pl: () => import("../locales/pl.json"),
  ps: () => import("../locales/ps.json"),
  pt: () => import("../locales/pt.json"),
  ro: () => import("../locales/ro.json"),
  ru: () => import("../locales/ru.json"),
  sd: () => import("../locales/sd.json"),
  sk: () => import("../locales/sk.json"),
  sl: () => import("../locales/sl.json"),
  so: () => import("../locales/so.json"),
  sq: () => import("../locales/sq.json"),
  sr: () => import("../locales/sr.json"),
  sv: () => import("../locales/sv.json"),
  sw: () => import("../locales/sw.json"),
  ta: () => import("../locales/ta.json"),
  tg: () => import("../locales/tg.json"),
  th: () => import("../locales/th.json"),
  tk: () => import("../locales/tk.json"),
  tr: () => import("../locales/tr.json"),
  tt: () => import("../locales/tt.json"),
  ug: () => import("../locales/ug.json"),
  uk: () => import("../locales/uk.json"),
  ur: () => import("../locales/ur.json"),
  uz: () => import("../locales/uz.json"),
  vi: () => import("../locales/vi.json"),
  zh: () => import("../locales/zh.json"),
};

/**
 * Loads a locale by its code. Returns the locale data, falling back to English
 * if the requested locale is not found.
 * 
 * This function uses static imports for SSR compatibility, allowing bundlers
 * to properly analyze and include the necessary locale files.
 * 
 * @param locale - The locale code (e.g., "en", "es", "fr")
 * @returns A promise that resolves to the locale data
 */
export async function loadLocale(locale: string): Promise<LocaleData> {
  const normalizedLocale = locale.toLowerCase();
  const loader = localeMap[normalizedLocale];

  if (!loader) {
    console.warn(`Locale "${normalizedLocale}" not found, falling back to "en"`);
    const fallback = await localeMap.en();
    return fallback.default;
  }

  const module = await loader();
  return module.default;
}

/**
 * Returns an array of all available locale codes.
 */
export const availableLocales = Object.keys(localeMap) as Array<
  keyof typeof localeMap
>;

