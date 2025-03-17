import { DrawerClose } from "../Drawer";
import { CountryCode } from "../Flag";
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
  onSelect: (countryCode: CountryCode) => void;
  showEmptyState?: boolean;
}

export function GroupedCountryList({
  groupedCountries,
  onSelect,
  showEmptyState,
}: GroupedCountryListProps) {
  if (showEmptyState) {
    return (
      <Typography variant="body" level={2} className="text-center">
        No countries found
      </Typography>
    );
  }

  return (
    <>
      {Object.entries(groupedCountries)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([letter, countries]) => (
          <div key={letter}>
            <Typography variant="subtitle" level={3} className="text-gray-400 mb-2">
              {letter}
            </Typography>
            {countries.map((country) => (
              <DrawerClose key={country.countryCode} asChild>
                <CountryListItem
                  countryCode={country.countryCode}
                  countryName={country.name}
                  onClick={onSelect}
                />
              </DrawerClose>
            ))}
            <div className="h-[1px] bg-gray-100 my-4 last:hidden" />
          </div>
        ))}
    </>
  );
}
