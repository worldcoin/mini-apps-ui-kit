"use client";

import { DROPDOWN_CONTAINER_STYLES } from "@/lib/constants/dropdownStyles";
import { cn } from "@/lib/utils";
import * as RadixSelect from "@radix-ui/react-select";
import { forwardRef, useImperativeHandle, useMemo, useRef, useState } from "react";
import { parseCountry, usePhoneInput } from "react-international-phone";

import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "../Drawer";
import { CountryCode } from "../Flag/Flag";
import { Input, InputProps } from "../Input";
import { SearchField } from "../SearchField";
import { Typography } from "../Typography";
import CountryListItem from "./CountryListItem";
import CountrySelectorButton from "./CountrySelectorButton";
import {
  DIAL_CODE_PREFIX,
  extendedCountries,
  startAdornmentWidthByDialCodeLength,
} from "./constants";
import { filterCountries, getValidatedCountryCode } from "./utils";

export interface PhoneFieldProps
  extends Omit<InputProps, "onChange" | "startAdornment" | "startAdornmentWidth"> {
  /**
   * Current phone number value.
   */
  value?: string;
  /**
   * Callback triggered when the phone number changes.
   */
  onChange?: (phone: string) => void;
  /**
   * If true, the dial code will be hidden.
   * The dial code is still displayed at the start of the input and in the dropdown.
   * @default false
   */
  hideDialCode?: boolean;
  /**
   * Disable dial code prefill on initialization.
   * Dial code prefill works only when empty phone value have been provided.
   * @default true
   */
  disableDialCodePrefill?: boolean;
  /**
   * If true, the input will display in an error state with error styling
   */
  error?: boolean;
  /**
   * If true, the input will display in a valid state with success styling
   */
  isValid?: boolean;
  /**
   * The placeholder text to display when no value is selected.
   */
  placeholder?: string;
  /**
   * When true, prevents the user from interacting with phone field.
   * @default false
   */
  disabled?: boolean;
  /**
   * Default ISO 3166-1 alpha-2 country code (e.g. 'US', 'GB', 'FR')
   * @default "US"
   */
  defaultCountryCode?: CountryCode;
  /**
   * Element to be rendered at the end (right side) of the input.
   * The component passed to this prop must accept a `style` prop.
   * The component should use currentColor to match the Input's styling.
   */
  endAdornment?: React.ReactNode;
  /**
   * Width of the end adornment in rem
   * @default 1.25
   */
  endAdornmentWidth?: number;
  /**
   * Display mode for the country selector: "dropdown" for desktop or "drawer" for mobile.
   * @default "dropdown"
   */
  countrySelectorMode?: "dropdown" | "drawer";
}

export const PhoneField = forwardRef<HTMLDivElement, PhoneFieldProps>(
  (
    {
      value,
      onChange,
      placeholder = "Enter phone number",
      defaultCountryCode = "US",
      hideDialCode = false,
      disableDialCodePrefill = true,
      disabled = false,
      error = false,
      isValid,
      endAdornment,
      endAdornmentWidth,
      countrySelectorMode = "dropdown",
      ...props
    },
    ref,
  ) => {
    const contentRef = useRef<HTMLDivElement | null>(null);
    const [isCountrySelectorOpen, setIsCountrySelectorOpen] = useState(false);
    const [shouldFocus, setShouldFocus] = useState(false);
    const [searchText, setSearchText] = useState("");

    const { inputValue, country, inputRef, handlePhoneValueChange, setCountry } = usePhoneInput(
      {
        defaultCountry: defaultCountryCode.toLowerCase(),
        disableDialCodePrefill,
        value,
        countries: extendedCountries,
        onChange: (data) => {
          onChange?.(data.phone);
        },
      },
    );

    const selectedCountryCode = getValidatedCountryCode(country.iso2, defaultCountryCode);
    const defaultStartAdornmentWidth = 2.8; // when dial code is disabled for button
    const currentDialCode = `${DIAL_CODE_PREFIX}${country.dialCode}`;
    const startAdornmentWidth = hideDialCode
      ? defaultStartAdornmentWidth
      : startAdornmentWidthByDialCodeLength[country.dialCode.length];

    // This allows the parent component to interact with the input element directly
    useImperativeHandle(ref, () => inputRef.current as HTMLDivElement);

    const handleCountrySelectorClose = (event?: Event) => {
      event?.preventDefault();

      if (shouldFocus) {
        // This allow to schedule focus on the input element during the next repaint cycle
        requestAnimationFrame(() => {
          inputRef.current?.focus();
        });
      }

      setShouldFocus(false);
    };

    const handlePointerDownOutside = (event: React.PointerEvent<HTMLDivElement>) => {
      const isInsideContent = contentRef.current?.contains(event.target as Node);

      setShouldFocus(!!isInsideContent);
    };

    const handleCountrySelect = (selectedCountry: string) => {
      setCountry(selectedCountry.toLowerCase());
      setIsCountrySelectorOpen(false);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchText(event.target.value);
    };

    const filteredCountries = useMemo(
      () => filterCountries(extendedCountries, searchText),
      [extendedCountries, searchText],
    );

    const handleDrawerAnimationEnd = (open: boolean) => {
      if (open) {
        setShouldFocus(true);
      }
    };

    return (
      <Input
        {...props}
        ref={inputRef}
        value={inputValue}
        onChange={handlePhoneValueChange}
        placeholder={placeholder}
        disabled={disabled}
        error={error}
        isValid={isValid}
        endAdornment={endAdornment}
        endAdornmentWidth={endAdornmentWidth}
        startAdornmentWidth={startAdornmentWidth}
        isFocused={isCountrySelectorOpen}
        startAdornment={
          countrySelectorMode === "drawer" ? (
            <Drawer
              open={isCountrySelectorOpen}
              onOpenChange={setIsCountrySelectorOpen}
              onClose={handleCountrySelectorClose}
              onAnimationEnd={handleDrawerAnimationEnd}
            >
              <DrawerTrigger asChild className="outline-none">
                <CountrySelectorButton
                  disabled={disabled}
                  countryCode={selectedCountryCode}
                  hideDialCode={hideDialCode}
                  dialCode={currentDialCode}
                />
              </DrawerTrigger>

              <DrawerContent className="h-[96%]">
                <div className="max-w-md w-full mx-auto flex flex-col flex-grow">
                  <Typography variant="subtitle" level={2} className="px-4 py-2">
                    Select country
                  </Typography>

                  <div className="px-4 pt-2 pb-4">
                    <SearchField
                      placeholder="Search name or number"
                      value={searchText}
                      onChange={handleSearchChange}
                    />
                  </div>

                  <div
                    className="no-scrollbar mx-auto w-full flex flex-col flex-grow flex-basis-0 overflow-auto p-2"
                    style={{
                      // Explicitly setting flex-basis ensures that the remaining space in the flex container is used,
                      // height issues are fixed, and proper scrolling is enabled.
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
                              handleCountrySelect(countryCode);
                              setSearchText("");
                            }}
                            isSelected={selectedCountryCode === countryCode}
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
          ) : (
            <RadixSelect.Root
              value={selectedCountryCode}
              open={isCountrySelectorOpen}
              onOpenChange={setIsCountrySelectorOpen}
              onValueChange={handleCountrySelect}
              disabled={disabled}
            >
              <RadixSelect.Trigger>
                <CountrySelectorButton
                  disabled={disabled}
                  countryCode={selectedCountryCode}
                  hideDialCode={hideDialCode}
                  dialCode={currentDialCode}
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
                    {extendedCountries.map((country) => {
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
                            isSelected={selectedCountryCode === countryCode}
                          />
                        </RadixSelect.Item>
                      );
                    })}
                  </RadixSelect.Viewport>
                </RadixSelect.Content>
              </RadixSelect.Portal>
            </RadixSelect.Root>
          )
        }
      />
    );
  },
);

PhoneField.displayName = "PhoneField";

export default PhoneField;
