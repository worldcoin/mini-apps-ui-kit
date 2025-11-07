export type LocaleData = {
  locale: string;
  countries: {
    [alpha2Key: string]: string[] | string;
  };
};

export interface I18nStore {
  registerLocale: (localeData: LocaleData) => void;
  getName: (code: string, locale: LocaleData["locale"]) => string | undefined;
  clear: (locale?: LocaleData["locale"]) => void;
}

const normalizeLocale = (locale: string) => locale.trim().toLowerCase();

const validateLocaleData = (localeData: LocaleData) => {
  if (!localeData.locale) {
    throw new TypeError("Missing localeData.locale");
  }

  if (!localeData.countries) {
    throw new TypeError("Missing localeData.countries");
  }
};

export function createI18nStore(initialLocales: Iterable<LocaleData> = []): I18nStore {
  const registeredLocales = new Map<LocaleData["locale"], LocaleData["countries"]>();

  const registerLocale = (localeData: LocaleData) => {
    validateLocaleData(localeData);
    const normalizedLocale = normalizeLocale(localeData.locale);
    registeredLocales.set(normalizedLocale, localeData.countries);
  };

  const getName = (code: string, locale: LocaleData["locale"]): string | undefined => {
    const normalizedLocale = normalizeLocale(locale);
    const codeMaps = registeredLocales.get(normalizedLocale);
    const nameList = codeMaps?.[code];
    return Array.isArray(nameList) ? nameList[0] : nameList;
  };

  const clear = (locale?: LocaleData["locale"]) => {
    if (typeof locale === "string") {
      registeredLocales.delete(normalizeLocale(locale));
      return;
    }

    registeredLocales.clear();
  };

  for (const localeData of initialLocales) {
    registerLocale(localeData);
  }

  return {
    registerLocale,
    getName,
    clear,
  };
}

export const i18n = createI18nStore();
