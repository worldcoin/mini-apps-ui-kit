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
}

export function GroupedCountryList({
  groupedCountries,
  onSelect,
  value,
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
    <>
      {Object.entries(groupedCountries)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([letter, countries]) => (
          <div key={letter} className="group">
            <Typography variant="subtitle" level={3} className="text-gray-400 mb-2">
              {letter}
            </Typography>
            {countries.map((country) => (
              <DrawerClose key={country.countryCode} asChild>
                <CountryListItem
                  countryCode={country.countryCode}
                  countryName={country.name}
                  onClick={onSelect}
                  isSelected={value === country.countryCode}
                />
              </DrawerClose>
            ))}
            <div className="h-[1px] bg-gray-200 my-4 group-last:hidden" />
          </div>
        ))}
    </>
  );
}
