import countries, { LocaleData } from "i18n-iso-countries";

export const i18n = {
  registerLocale: (locale: LocaleData) => {
    countries.registerLocale(locale);
  },
};
