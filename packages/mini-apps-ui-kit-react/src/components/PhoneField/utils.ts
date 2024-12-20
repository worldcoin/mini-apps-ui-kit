import { CountryData, parseCountry } from "react-international-phone";

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

export const filterCountries = (countries: CountryData[], searchText: string) => {
  if (!searchText) {
    return countries;
  }

  return countries.filter((country) => {
    const parsedCountry = parseCountry(country);
    const countryName = parsedCountry.name.toLowerCase();
    const dialCode = `${DIAL_CODE_PREFIX}${parsedCountry.dialCode.toLowerCase()}`;
    const searchLower = searchText.toLowerCase();

    return countryName.includes(searchLower) || dialCode.includes(searchLower);
  });
};
