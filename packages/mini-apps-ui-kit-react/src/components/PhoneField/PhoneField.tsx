"use client";

import { forwardRef, useImperativeHandle } from "react";
import { usePhoneInput } from "react-international-phone";

import { CountryDrawer } from "../CountryDrawer/CountryDrawer";
import { CountryCode } from "../Flag/types";
import { Input, InputProps } from "../Input";
import CountrySelectorButton from "./CountrySelectorButton";
import { DIAL_CODE_PREFIX } from "./constants";
import { getCountryDataListByCodes, getValidatedCountryCode } from "./utils";

interface PhoneFieldProps
  extends Omit<InputProps, "onChange" | "startAdornment" | "placeholder"> {
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
   * The label text to display
   */
  label?: string;
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
}

const PhoneField = forwardRef<HTMLDivElement, PhoneFieldProps>(
  (
    {
      value,
      onChange,
      countries,
      label = "Phone",
      defaultCountryCode = "US",
      disableDialCodePrefill = true,
      disabled = false,
      error = false,
      isValid,
      endAdornment,
      type = "tel",
      inputMode = "tel",
      autoCapitalize = "off",
      autoCorrect = "off",
      ...props
    },
    ref,
  ) => {
    const { inputValue, country, inputRef, handlePhoneValueChange, setCountry } = usePhoneInput(
      {
        defaultCountry: defaultCountryCode.toLowerCase(),
        disableDialCodePrefill,
        disableDialCodeAndPrefix: true,
        value,
        countries: getCountryDataListByCodes(countries),
        onChange: (data) => {
          onChange?.(
            data.phone,
            getValidatedCountryCode(data.country.iso2, defaultCountryCode),
          );
        },
      },
    );

    const selectedCountryCode = getValidatedCountryCode(country.iso2, defaultCountryCode);
    const currentDialCode = `${DIAL_CODE_PREFIX}${country.dialCode}`;

    // This allows the parent component to interact with the input element directly
    useImperativeHandle(ref, () => inputRef.current as HTMLDivElement);

    const handleCountrySelect = (selectedCountry: string) => {
      setCountry(selectedCountry.toLowerCase());
    };

    const handleDrawerAnimationEnd = (open: boolean) => {
      if (!open) {
        // This allow to schedule focus on the input element during the next repaint cycle
        requestAnimationFrame(() => {
          inputRef.current?.focus();
        });
      }
    };

    return (
      <Input
        {...props}
        ref={inputRef}
        type={type}
        inputMode={inputMode}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        value={inputValue}
        onChange={handlePhoneValueChange}
        label={label}
        disabled={disabled}
        error={error}
        isValid={isValid}
        endAdornment={endAdornment}
        showStartDivider
        startAdornment={
          <CountryDrawer
            value={selectedCountryCode}
            defaultValue={defaultCountryCode}
            countries={countries}
            onAnimationEnd={handleDrawerAnimationEnd}
            onChange={handleCountrySelect}
            disabled={disabled}
          >
            <CountrySelectorButton value={selectedCountryCode} label={currentDialCode} />
          </CountryDrawer>
        }
      />
    );
  },
);

PhoneField.displayName = "PhoneField";

export { PhoneField };
export type { PhoneFieldProps };
