import { useI18n } from "@/lib/I18nProvider";
import { CountryData, parseCountry } from "react-international-phone";

import { CountryCode } from "../Flag";
import { getValidatedCountryCode } from "../PhoneField/utils";

interface GroupedCountries {
  [key: string]: {
    countryCode: CountryCode;
    name: string;
  }[];
}

interface UseCountryGroupingProps {
  countries: CountryData[];
  defaultValue?: CountryCode;
  locale?: string;
}

export function useCountryGrouping({
  countries,
  defaultValue = "US",
  locale = "en",
}: UseCountryGroupingProps) {
  const i18nStore = useI18n();
  const groupedCountries = countries.reduce<GroupedCountries>((acc, country) => {
    const parsedCountry = parseCountry(country);
    const countryName = i18nStore.getName(parsedCountry.iso2, locale);
    const firstLetter =
      countryName?.charAt(0).toUpperCase() ?? parsedCountry.name.charAt(0).toUpperCase();

    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }

    acc[firstLetter].push({
      countryCode: getValidatedCountryCode(parsedCountry.iso2, defaultValue),
      name: parsedCountry.name,
    });

    return acc;
  }, {});

  return groupedCountries;
}
