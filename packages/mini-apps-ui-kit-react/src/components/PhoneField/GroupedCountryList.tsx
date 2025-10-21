import { withHaptics } from "@/lib/haptics";
import countriesInstance from "i18n-iso-countries";

import type { Direction } from "../../types/global";
import { DrawerClose } from "../Drawer";
import { CountryCode } from "../Flag";
import { Magnifier } from "../Icons/Magnifier";
import { Typography } from "../Typography";
import CountryListItem from "./CountryListItem";

interface GroupedCountries {
  [key: string]: {
    countryCode: CountryCode;
    name: string;
  }[];
}

interface GroupedCountryListProps {
  groupedCountries: GroupedCountries;
  value: CountryCode;
  onSelect: (countryCode: CountryCode) => void;
  dir?: Direction;
  locale?: string | string[];
}

export function GroupedCountryList({
  groupedCountries,
  onSelect,
  value,
  dir,
  locale,
}: GroupedCountryListProps) {
  if (Object.keys(groupedCountries).length === 0) {
    return (
      <div className="flex flex-col items-center justify-center grow text-gray-400 gap-2 h-full">
        <Magnifier className="size-8" />
        <Typography variant="body" level={3}>
          No search results
        </Typography>
      </div>
    );
  }

  return (
    <div dir={dir}>
      {Object.entries(groupedCountries)
        .sort(([a], [b]) => a.localeCompare(b, locale as any))
        .map(([letter, countries]) => (
          <div key={letter} className="group">
            <Typography variant="subtitle" level={3} className="text-gray-400 mb-2">
              {letter}
            </Typography>
            {countries
              .sort((a, b) => a.name.localeCompare(b.name, locale as any))
              .map((country) => (
                <DrawerClose key={country.countryCode} asChild>
                  <CountryListItem
                    countryCode={country.countryCode}
                    countryName={
                      countriesInstance.getName(country.countryCode, locale as any) ?? ""
                    }
                    onClick={withHaptics(onSelect)}
                    isSelected={value === country.countryCode}
                    dir={dir}
                  />
                </DrawerClose>
              ))}
            <div className="h-[1px] bg-gray-200 my-4 group-last:hidden" />
          </div>
        ))}
    </div>
  );
}
