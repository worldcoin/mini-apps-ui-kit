import { countries } from "countries-list";
import { CountryData, defaultCountries, parseCountry } from "react-international-phone";

import { countryCodes as uiKitSupportedCountryCodes } from "../Flag/constants";

const supportedCountryCodesSet = new Set(
  uiKitSupportedCountryCodes.map((c) => c.toLowerCase()),
);

const supportedDefaultCountryCodes = defaultCountries.filter((defaultCountry) =>
  supportedCountryCodesSet.has(parseCountry(defaultCountry).iso2),
);

const defaultCountryCodesSet = new Set(defaultCountries.map((c) => parseCountry(c).iso2));

const unsupportedCountryCodes = Array.from(supportedCountryCodesSet).filter(
  (iso2) => !defaultCountryCodesSet.has(iso2),
);

const customCountries: CountryData[] = Object.entries(countries)
  .filter(([iso2]) => unsupportedCountryCodes.includes(iso2.toLowerCase()))
  .map(([iso2, country]): CountryData => {
    const { name, phone } = country;
    const dialCode = phone[0].toString();
    const iso2Lower = iso2.toLowerCase();

    return [name, iso2Lower, dialCode]; // CountryData is [name, iso2, dialCode, format, priority, areaCodes]
  });

export const extendedCountryDataList: CountryData[] = [
  ...supportedDefaultCountryCodes,
  ...customCountries,
].sort((a, b) => a[0].localeCompare(b[0])); // sorted by country name

export const DIAL_CODE_PREFIX = "+";

export const startAdornmentWidthByDialCodeLength: Record<string, number> = {
  "1": 4.4,
  "2": 5.2,
  "3": 5.8,
  "4": 6.2,
};
