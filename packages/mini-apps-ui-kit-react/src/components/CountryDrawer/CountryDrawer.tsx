"use client";

import { useRef, useState } from "react";

import { Button } from "../Button";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "../Drawer";
import { CountryCode } from "../Flag";
import { GroupedCountryList } from "../PhoneField/GroupedCountryList";
import { SearchField } from "../SearchField";
import { TopBar } from "../TopBar";
import { XMark } from "../icons/XMark";
import { useCountryFiltering } from "./useCountryFiltering";
import { useCountryGrouping } from "./useCountryGrouping";

interface CountryDrawerProps {
  /** Currently selected country code */
  value: CountryCode;
  /** Optional list of country codes to show. If not provided, shows all countries */
  countries?: CountryCode[];
  /** Whether the drawer trigger is disabled */
  disabled?: boolean;
  /** Default country code when no value is selected */
  defaultValue?: CountryCode;
  /** Content to render as the drawer trigger */
  children: React.ReactNode;
  /** Title text shown in the drawer header */
  title?: string;
  /** Label text shown in the search field */
  searchLabel?: string;
  /** Callback fired when a country is selected */
  onChange: (countryCode: string) => void;
  /** Optional callback fired when drawer open/close animation completes */
  onAnimationEnd?: (open: boolean) => void;
}

export function CountryDrawer({
  onChange,
  value,
  countries,
  onAnimationEnd,
  disabled = false,
  children,
  defaultValue = "US",
  title = "Country",
  searchLabel,
}: CountryDrawerProps) {
  const [searchText, setSearchText] = useState("");
  const [open, setOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const filteredCountries = useCountryFiltering({
    countries,
    searchText,
  });

  const groupedCountries = useCountryGrouping({
    countries: filteredCountries,
    defaultValue,
  });

  const handleCountrySelect = (countryCode: CountryCode) => {
    onChange(countryCode);
    setSearchText("");
    setOpen(false);
  };

  return (
    <Drawer open={open} onOpenChange={setOpen} onAnimationEnd={onAnimationEnd} height="full">
      <DrawerTrigger asChild className="outline-none" disabled={disabled}>
        {children}
      </DrawerTrigger>

      <DrawerContent>
        <TopBar
          title={title}
          startAdornment={
            <DrawerClose asChild>
              <Button variant="tertiary" size="icon">
                <XMark />
              </Button>
            </DrawerClose>
          }
        />

        <div className="p-6 shrink-0">
          <SearchField
            ref={searchRef}
            value={searchText}
            onChange={handleSearchChange}
            label={searchLabel}
          />
        </div>

        <div className="no-scrollbar w-full overflow-auto px-6 grow">
          <GroupedCountryList
            groupedCountries={groupedCountries}
            onSelect={handleCountrySelect}
            value={value}
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
