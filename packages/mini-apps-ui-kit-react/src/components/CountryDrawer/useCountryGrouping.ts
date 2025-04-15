import { parseCountry } from "react-international-phone";

import { CountryCode } from "../Flag";
import { getValidatedCountryCode } from "../PhoneField/utils";

interface GroupedCountries {
  [key: string]: {
    countryCode: CountryCode;
    name: string;
  }[];
}

interface UseCountryGroupingProps {
  countries: any[];
  defaultValue?: CountryCode;
}

export function useCountryGrouping({
  countries,
  defaultValue = "US",
}: UseCountryGroupingProps) {
  const groupedCountries = countries.reduce<GroupedCountries>((acc, country) => {
    const parsedCountry = parseCountry(country);
    const firstLetter = parsedCountry.name.charAt(0).toUpperCase();

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
