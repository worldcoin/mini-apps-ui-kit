import { useEffect, useRef, useState } from "react";
import { CountryData, parseCountry } from "react-international-phone";

import { Button } from "../Button";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "../Drawer";
import { CountryCode } from "../Flag";
import { XMark } from "../Icons/XMark";
import { SearchField } from "../SearchField";
import { TopBar } from "../TopBar";
import { Typography } from "../Typography";
import CountryListItem from "./CountryListItem";
import CountrySelectorButton from "./CountrySelectorButton";
import { filterCountries, getValidatedCountryCode } from "./utils";

interface CountryDrawerProps {
  value: CountryCode;
  countries: CountryData[];
  disabled?: boolean;
  hideDialCode?: boolean;
  defaultCountryCode?: CountryCode;
  error?: boolean;
  dialCode: string;
  onSelect: (countryCode: string) => void;
  onAnimationEnd?: (open: boolean) => void;
}

export function CountryDrawer({
  onSelect,
  value,
  countries,
  onAnimationEnd,
  disabled = false,
  hideDialCode = false,
  dialCode,
  defaultCountryCode = "US",
  error,
}: CountryDrawerProps) {
  const [searchText, setSearchText] = useState("");
  const [open, setOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    if (open && searchRef.current) {
      searchRef.current.focus();
    }
  }, [open]);

  const filteredCountries = filterCountries(countries, searchText);

  const handleCountrySelect = (countryCode: CountryCode) => {
    onSelect(countryCode);
    setSearchText("");
    setOpen(false);
  };

  return (
    <Drawer open={open} onOpenChange={setOpen} onAnimationEnd={onAnimationEnd} fullPage>
      <DrawerTrigger asChild className="outline-none">
        <CountrySelectorButton
          disabled={disabled}
          value={value}
          hideDialCode={hideDialCode}
          dialCode={dialCode}
          error={error}
        />
      </DrawerTrigger>

      <DrawerContent className="px-0">
        <TopBar
          title="Country"
          startAdornment={
            <DrawerClose asChild>
              <Button variant="tertiary" size="sm" icon={<XMark />} />
            </DrawerClose>
          }
        />

        <div className="px-4 py-4">
          <SearchField
            ref={searchRef}
            placeholder="Search name or number"
            value={searchText}
            onChange={handleSearchChange}
          />
        </div>

        <div className="no-scrollbar w-full overflow-auto px-4 h-full">
          {filteredCountries.map((country) => {
            const parsedCountry = parseCountry(country);
            const countryCode = getValidatedCountryCode(parsedCountry.iso2, defaultCountryCode);

            return (
              <DrawerClose key={countryCode} asChild>
                <CountryListItem
                  countryCode={countryCode}
                  countryName={parsedCountry.name}
                  onClick={handleCountrySelect}
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
      </DrawerContent>
    </Drawer>
  );
}
