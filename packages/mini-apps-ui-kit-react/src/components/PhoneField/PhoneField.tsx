"use client";

import { forwardRef, useImperativeHandle, useMemo, useRef, useState } from "react";
import { usePhoneInput } from "react-international-phone";

import { CountryCode } from "../Flag/Flag";
import { Input, InputProps } from "../Input";
import { CountryDrawer } from "./CountryDrawer";
import { CountrySelect } from "./CountrySelect";
import { DIAL_CODE_PREFIX, startAdornmentWidthByDialCodeLength } from "./constants";
import { filterCountries, getCountryDataListByCodes, getValidatedCountryCode } from "./utils";

export interface PhoneFieldProps
  extends Omit<InputProps, "onChange" | "startAdornment" | "startAdornmentWidth"> {
  /**
   * Current phone number value.
   */
  value?: string;
  /**
   * Callback triggered when the phone number changes.
   */
  onChange?: (phone: string, countryCode: CountryCode) => void;
  /**
   * List of countries to display in the country selector.
   * If not provided, all countries will be displayed.
   */
  countries?: CountryCode[];
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
      countries,
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
      type = "tel",
      inputMode = "tel",
      autoComplete = "tel",
      autoCapitalize = "off",
      autoCorrect = "off",
      ...props
    },
    ref,
  ) => {
    const contentRef = useRef<HTMLDivElement | null>(null);
    const [isCountrySelectorOpen, setIsCountrySelectorOpen] = useState(false);
    const [shouldFocus, setShouldFocus] = useState(false);
    const [searchText, setSearchText] = useState("");

    const countryDataList = useMemo(() => getCountryDataListByCodes(countries), [countries]);

    const { inputValue, country, inputRef, handlePhoneValueChange, setCountry } = usePhoneInput(
      {
        defaultCountry: defaultCountryCode.toLowerCase(),
        disableDialCodePrefill,
        value,
        countries: countryDataList,
        onChange: (data) => {
          onChange?.(
            data.phone,
            getValidatedCountryCode(data.country.iso2, defaultCountryCode),
          );
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
      () => filterCountries(countryDataList, searchText),
      [countryDataList, searchText],
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
        type={type}
        inputMode={inputMode}
        autoComplete={autoComplete}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
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
            <CountryDrawer
              open={isCountrySelectorOpen}
              onOpenChange={setIsCountrySelectorOpen}
              onSelect={handleCountrySelect}
              value={selectedCountryCode}
              countries={filteredCountries}
              searchText={searchText}
              onSearchChange={handleSearchChange}
              onAnimationEnd={handleDrawerAnimationEnd}
              error={error}
            />
          ) : (
            <CountrySelect
              disabled={disabled}
              value={selectedCountryCode}
              hideDialCode={hideDialCode}
              dialCode={currentDialCode}
              onSelect={handleCountrySelect}
              open={isCountrySelectorOpen}
              onOpenChange={setIsCountrySelectorOpen}
              countries={countries}
              defaultCountryCode={defaultCountryCode}
              error={error}
            />
          )
        }
      />
    );
  },
);

PhoneField.displayName = "PhoneField";

export default PhoneField;
