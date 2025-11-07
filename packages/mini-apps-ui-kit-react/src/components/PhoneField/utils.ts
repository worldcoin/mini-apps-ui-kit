import { I18nStore } from "@/lib/i18n";
import { CountryData, defaultCountries, parseCountry } from "react-international-phone";

import { CountryCode } from "../Flag";
import { isSupportedCountryCode } from "../Flag/utils";
import { DIAL_CODE_PREFIX } from "./constants";

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

  return countries.filter((country) => {
    const parsedCountry = parseCountry(country);
    const countryName =
      i18nStore.getName(parsedCountry.iso2.toLocaleUpperCase(), locale) ?? parsedCountry.name;
    const dialCode = `${DIAL_CODE_PREFIX}${parsedCountry.dialCode.toLowerCase()}`;
    const searchLower = searchText.toLowerCase();

    return (
      countryName.toLocaleLowerCase().includes(searchLower) ||
      dialCode.toLocaleLowerCase().includes(searchLower)
    );
  });
};
