import { useEffect, useRef } from "react";
import { CountryData, parseCountry } from "react-international-phone";

import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "../Drawer";
import { CountryCode } from "../Flag";
import { SearchField } from "../SearchField";
import { Typography } from "../Typography";
import CountryListItem from "./CountryListItem";
import CountrySelectorButton from "./CountrySelectorButton";
import { DIAL_CODE_PREFIX } from "./constants";
import { filterCountries, getValidatedCountryCode } from "./utils";

interface CountryDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelect: (countryCode: string) => void;
  value: CountryCode;
  countries: CountryData[];
  searchText: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAnimationEnd?: (open: boolean) => void;
  disabled?: boolean;
  hideDialCode?: boolean;
  defaultCountryCode?: CountryCode;
  error?: boolean;
}

export function CountryDrawer({
  open,
  onOpenChange,
  onSelect,
  value,
  countries,
  searchText,
  onSearchChange,
  onAnimationEnd,
  disabled = false,
  hideDialCode = false,
  defaultCountryCode = "US",
  error,
}: CountryDrawerProps) {
  const searchRef = useRef<HTMLInputElement>(null);
  const selectedCountry = countries.find((c) => parseCountry(c).iso2 === value);
  const currentDialCode = selectedCountry
    ? `${DIAL_CODE_PREFIX}${parseCountry(selectedCountry).dialCode}`
    : "";

  useEffect(() => {
    if (open && searchRef.current) {
      searchRef.current.focus();
    }
  }, [open]);

  const filteredCountries = filterCountries(countries, searchText);

  return (
    <Drawer open={open} onOpenChange={onOpenChange} onAnimationEnd={onAnimationEnd} fullPage>
      <DrawerTrigger asChild className="outline-none">
        <CountrySelectorButton
          disabled={disabled}
          countryCode={value}
          hideDialCode={hideDialCode}
          dialCode={currentDialCode}
          error={error}
        />
      </DrawerTrigger>

      <DrawerContent>
        <div className="max-w-md w-full mx-auto flex flex-col flex-grow">
          <Typography variant="subtitle" level={2} className="px-4 py-2">
            Country
          </Typography>

          <div className="px-4 pt-2 pb-4">
            <SearchField
              ref={searchRef}
              placeholder="Search name or number"
              value={searchText}
              onChange={onSearchChange}
            />
          </div>

          <div
            className="no-scrollbar mx-auto w-full flex flex-col flex-grow flex-basis-0 overflow-auto p-2"
            style={{
              flexBasis: 0,
            }}
          >
            {filteredCountries.map((country) => {
              const parsedCountry = parseCountry(country);
              const countryCode = getValidatedCountryCode(
                parsedCountry.iso2,
                defaultCountryCode,
              );

              return (
                <DrawerClose key={countryCode} className="block w-full">
                  <CountryListItem
                    countryCode={countryCode}
                    countryName={parsedCountry.name}
                    dialCode={`${DIAL_CODE_PREFIX}${parsedCountry.dialCode}`}
                    onClick={() => {
                      onSelect(countryCode);
                    }}
                    isSelected={value === countryCode}
                  />
                </DrawerClose>
              );
            })}
            {filteredCountries.length === 0 && (
              <Typography variant="body" level={2} className="text-center">
                No countries found
              </Typography>
            )}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
