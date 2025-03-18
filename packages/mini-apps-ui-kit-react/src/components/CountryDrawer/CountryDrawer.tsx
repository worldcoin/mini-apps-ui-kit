import { useRef, useState } from "react";

import { Button } from "../Button";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "../Drawer";
import { CountryCode } from "../Flag";
import { XMark } from "../Icons/XMark";
import { GroupedCountryList } from "../PhoneField/GroupedCountryList";
import { SearchField } from "../SearchField";
import { TopBar } from "../TopBar";
import { useCountryFiltering } from "./useCountryFiltering";
import { useCountryGrouping } from "./useCountryGrouping";

interface CountryDrawerProps {
  value: CountryCode;
  countries?: CountryCode[];
  disabled?: boolean;
  defaultValue?: CountryCode;
  children: React.ReactNode;
  onChange: (countryCode: string) => void;
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
    <Drawer open={open} onOpenChange={setOpen} onAnimationEnd={onAnimationEnd} fullPage>
      <DrawerTrigger asChild className="outline-none" disabled={disabled}>
        {children}
      </DrawerTrigger>

      <DrawerContent>
        <TopBar
          title="Country"
          startAdornment={
            <DrawerClose asChild>
              <Button variant="tertiary" size="icon">
                <XMark />
              </Button>
            </DrawerClose>
          }
        />

        <div className="p-6">
          <SearchField
            ref={searchRef}
            value={searchText}
            onChange={handleSearchChange}
            autoFocus={open}
          />
        </div>

        <div className="no-scrollbar w-full overflow-auto px-6 h-full">
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
