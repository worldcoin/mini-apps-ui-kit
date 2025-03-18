import { useEffect, useRef, useState } from "react";
import { defaultCountries, parseCountry } from "react-international-phone";

import { Button } from "../Button";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "../Drawer";
import { CountryCode } from "../Flag";
import { XMark } from "../Icons/XMark";
import { GroupedCountryList } from "../PhoneField/GroupedCountryList";
import {
  filterCountries,
  getCountryDataListByCodes,
  getValidatedCountryCode,
} from "../PhoneField/utils";
import { SearchField } from "../SearchField";
import { TopBar } from "../TopBar";

interface CountryDrawerProps {
  value: CountryCode;
  countries?: CountryCode[];
  disabled?: boolean;
  defaultValue?: CountryCode;
  children: React.ReactNode;
  onChange: (countryCode: string) => void;
  onAnimationEnd?: (open: boolean) => void;
}

interface GroupedCountries {
  [key: string]: {
    countryCode: CountryCode;
    name: string;
  }[];
}

export function CountryDrawer({
  onChange,
  value,
  countries,
  onAnimationEnd,
  disabled = false,
  children,
  defaultValue = "US",
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

  const richCountries = countries ? getCountryDataListByCodes(countries) : defaultCountries;

  const filteredCountries = filterCountries(richCountries, searchText);

  const groupedCountries = filteredCountries.reduce<GroupedCountries>((acc, country) => {
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

  const handleCountrySelect = (countryCode: CountryCode) => {
    onChange(countryCode);
    setSearchText("");
    setOpen(false);
  };

  return (
    <Drawer open={open} onOpenChange={setOpen} onAnimationEnd={onAnimationEnd} fullPage>
      <DrawerTrigger asChild className="outline-none" disabled={disabled}>
        {children}
      </DrawerTrigger>

      <DrawerContent className="p-0">
        <TopBar
          title="Country"
          startAdornment={
            <DrawerClose asChild>
              <Button variant="tertiary" size="sm" icon={<XMark />} />
            </DrawerClose>
          }
        />

        <div className="p-6">
          <SearchField ref={searchRef} value={searchText} onChange={handleSearchChange} />
        </div>

        <div className="no-scrollbar w-full overflow-auto px-6 h-full">
          <GroupedCountryList
            groupedCountries={groupedCountries}
            onSelect={handleCountrySelect}
            showEmptyState={filteredCountries.length === 0}
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

// TODO: Export all countries.
