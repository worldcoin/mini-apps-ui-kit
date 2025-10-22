import { getCountryName } from "@/lib/utils";
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
  locale?: string;
}

export function useCountryGrouping({
  countries,
  defaultValue = "US",
  locale,
}: UseCountryGroupingProps) {
  const groupedCountries = countries.reduce<GroupedCountries>((acc, country) => {
    const parsedCountry = parseCountry(country);
    const firstLetter = getCountryName(
      {
        name: parsedCountry.name,
        countryCode: parsedCountry.iso2,
      },
      locale as any,
    )
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
