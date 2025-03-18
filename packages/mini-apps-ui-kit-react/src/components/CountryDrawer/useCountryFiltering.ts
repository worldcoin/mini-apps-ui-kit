import { defaultCountries } from "react-international-phone";

import { CountryCode } from "../Flag";
import { filterCountries, getCountryDataListByCodes } from "../PhoneField/utils";

interface UseCountryFilteringProps {
  countries?: CountryCode[];
  searchText: string;
}

export function useCountryFiltering({ countries, searchText }: UseCountryFilteringProps) {
  const richCountries = countries ? getCountryDataListByCodes(countries) : defaultCountries;
  const filteredCountries = filterCountries(richCountries, searchText);

  return filteredCountries;
}
