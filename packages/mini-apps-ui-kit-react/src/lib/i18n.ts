export type LocaleData = {
  locale: string;
  countries: {
    [alpha2Key: string]: string[] | string;
  };
};

const registeredLocales = new Map<LocaleData["locale"], LocaleData["countries"]>();

export const i18n = {
  registerLocale: (localeData: LocaleData) => {
    if (!localeData.locale) {
      throw new TypeError("Missing localeData.locale");
    }

    if (!localeData.countries) {
      throw new TypeError("Missing localeData.countries");
    }

    registeredLocales.set(localeData.locale, localeData.countries);
  },
  getName: (code: string, lang: LocaleData["locale"]): string | undefined => {
    try {
      const codeMaps = registeredLocales.get(lang.toLowerCase());
      const nameList = codeMaps?.[code];
      return Array.isArray(nameList) ? nameList[0] : nameList;
    } catch (err) {
      return undefined;
    }
  },
};
