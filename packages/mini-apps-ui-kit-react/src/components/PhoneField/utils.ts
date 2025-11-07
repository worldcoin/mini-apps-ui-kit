import { I18nStore } from "@/lib/i18n";
import { CountryData, defaultCountries, parseCountry } from "react-international-phone";

import { CountryCode } from "../Flag";
import { isSupportedCountryCode } from "../Flag/utils";
import { DIAL_CODE_PREFIX } from "./constants";

/**
 * Normalizes a string by removing accents and diacritics, then converts to lowercase.
 * This makes string comparison accent-agnostic.
 * @param str - The string to normalize
 * @returns The normalized string in lowercase without accents/diacritics
 */
export const normalizeString = (str: string): string => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
};

export const getValidatedCountryCode = (
  code: string,
  defaultCountryCode: CountryCode,
): CountryCode => {
  const upperCaseCode = code.toUpperCase() as CountryCode;

  return isSupportedCountryCode(upperCaseCode) ? upperCaseCode : defaultCountryCode;
};

export const getCountryDataListByCodes = (
  countryCodes: CountryCode[] | undefined,
): CountryData[] => {
  if (!countryCodes?.length) {
    return defaultCountries;
  }

  const countryCodeSet = new Set(countryCodes);

  return defaultCountries.filter((country) => {
    const countryCode = parseCountry(country).iso2.toUpperCase();

    return countryCodeSet.has(countryCode as CountryCode);
  });
};

export const filterCountries = ({
  countries,
  searchText,
  i18nStore,
  locale,
}: {
  countries: CountryData[];
  searchText: string;
  i18nStore: I18nStore;
  locale: string;
}) => {
  if (!searchText) {
    return countries;
  }

  const normalizedSearch = normalizeString(searchText);

  return countries.filter((country) => {
    const parsedCountry = parseCountry(country);
    const countryName =
      i18nStore.getName(parsedCountry.iso2.toLocaleUpperCase(), locale) ?? parsedCountry.name;
    const dialCode = `${DIAL_CODE_PREFIX}${parsedCountry.dialCode.toLowerCase()}`;

    return (
      normalizeString(countryName).includes(normalizedSearch) ||
      normalizeString(dialCode).includes(normalizedSearch)
    );
  });
};
