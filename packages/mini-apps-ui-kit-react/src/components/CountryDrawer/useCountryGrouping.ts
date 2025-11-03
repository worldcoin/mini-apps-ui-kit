import { getCountryName } from "@/lib/utils";
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
  locale,
}: UseCountryGroupingProps) {
  const groupedCountries = countries.reduce<GroupedCountries>((acc, country) => {
    const parsedCountry = parseCountry(country);
    const firstLetter = getCountryName(parsedCountry.iso2, locale ?? "en", parsedCountry.name)
      .charAt(0)
      .toUpperCase();

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
