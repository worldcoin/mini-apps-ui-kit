import { DROPDOWN_CONTAINER_STYLES } from "@/lib/constants/dropdownStyles";
import { cn } from "@/lib/utils";
import * as RadixSelect from "@radix-ui/react-select";
import { useRef } from "react";
import { parseCountry } from "react-international-phone";

import { CountryCode } from "../Flag";
import CountryListItem from "./CountryListItem";
import CountrySelectorButton from "./CountrySelectorButton";
import { DIAL_CODE_PREFIX } from "./constants";
import { getCountryDataListByCodes, getValidatedCountryCode } from "./utils";

interface CountrySelectProps {
  disabled: boolean;
  value: CountryCode;
  hideDialCode: boolean;
  dialCode: string;
  onSelect?: (countryCode: string) => void;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  countries?: CountryCode[];
  defaultCountryCode?: CountryCode;
  error?: boolean;
}

export function CountrySelect({
  disabled,
  value,
  hideDialCode,
  dialCode,
  onSelect,
  open,
  onOpenChange,
  countries,
  defaultCountryCode = "US",
  error,
}: CountrySelectProps) {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLDivElement | null>(null);
  const countryDataList = getCountryDataListByCodes(countries);

  const handleCountrySelectorClose = (event?: Event) => {
    event?.preventDefault();
  };

  const handlePointerDownOutside = (event: React.PointerEvent<HTMLDivElement>) => {
    const isInsideContent = contentRef.current?.contains(event.target as Node);
    if (!isInsideContent) {
      onOpenChange?.(false);
    }
  };

  return (
    <RadixSelect.Root
      value={value}
      open={open}
      onValueChange={onSelect}
      onOpenChange={onOpenChange}
    >
      <RadixSelect.Trigger>
        <CountrySelectorButton
          disabled={disabled}
          countryCode={value}
          hideDialCode={hideDialCode}
          dialCode={dialCode}
          error={error}
        />
      </RadixSelect.Trigger>

      <RadixSelect.Portal>
        <RadixSelect.Content
          ref={(contentElRef) => {
            contentRef.current = contentElRef;

            if (contentElRef && inputRef.current) {
              contentElRef.style.width = `${inputRef.current.offsetWidth}px`;
            }
          }}
          position="popper"
          className={cn(DROPDOWN_CONTAINER_STYLES, "-ml-3 mt-5 w-auto")}
          onCloseAutoFocus={handleCountrySelectorClose}
          onPointerDown={handlePointerDownOutside}
        >
          <RadixSelect.Viewport className="h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] p-2">
            {countryDataList.map((country) => {
              const parsedCountry = parseCountry(country);
              const countryCode = getValidatedCountryCode(
                parsedCountry.iso2,
                defaultCountryCode,
              );

              return (
                <RadixSelect.Item
                  key={countryCode}
                  value={countryCode}
                  className="outline-none"
                >
                  <CountryListItem
                    countryCode={countryCode}
                    countryName={parsedCountry.name}
                    dialCode={`${DIAL_CODE_PREFIX}${parsedCountry.dialCode}`}
                    isSelected={countryCode === value}
                  />
                </RadixSelect.Item>
              );
            })}
          </RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
}

export default CountrySelect;
