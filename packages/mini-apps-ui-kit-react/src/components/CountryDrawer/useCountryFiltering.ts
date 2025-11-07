import { useI18n } from "@/lib/I18nProvider";
import { defaultCountries } from "react-international-phone";

import { CountryCode } from "../Flag";
import { filterCountries, getCountryDataListByCodes } from "../PhoneField/utils";

interface UseCountryFilteringProps {
  countries?: CountryCode[];
  searchText: string;
  locale: string;
}

export function useCountryFiltering({
  countries,
  searchText,
  locale,
}: UseCountryFilteringProps) {
  const i18nStore = useI18n();
  const richCountries = countries ? getCountryDataListByCodes(countries) : defaultCountries;
  const filteredCountries = filterCountries({
    countries: richCountries,
    searchText,
    i18nStore,
    locale,
  });

  return filteredCountries;
}
