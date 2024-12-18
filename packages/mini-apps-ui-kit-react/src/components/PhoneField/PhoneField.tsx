"use client";

import { DROPDOWN_CONTAINER_STYLES } from "@/lib/constants/dropdownStyles";
import { cn } from "@/lib/utils";
import * as RadixSelect from "@radix-ui/react-select";
import { cva } from "class-variance-authority";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { parseCountry, usePhoneInput } from "react-international-phone";

import Flag, { CountryCode } from "../Flag/Flag";
import { isSupportedCountryCode } from "../Flag/utils";
import Input, { InputProps } from "../Input";
import Typography from "../Typography";
import { ArrowDown } from "./ArrowDown";
import { extendedCountries } from "./constants";

export interface PhoneFieldProps
  extends Omit<InputProps, "onChange" | "startAdornment" | "startAdornmentWidth"> {
  /**
   * Current phone number value.
   */
  value: string;
  /**
   * Callback triggered when the phone number changes.
   */
  onChange: (phone: string) => void;
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
}

const triggerVariants = cva(
  "flex items-center bg-transparent border-none focus:outline-none cursor-pointer",
  {
    variants: {
      disabled: {
        true: "cursor-not-allowed opacity-20",
        false: "",
      },
    },
    defaultVariants: {
      disabled: false,
    },
  },
);

const startAdornmentWidthByDialCodeLength: Record<string, number> = {
  "1": 4.4,
  "2": 5.2,
  "3": 5.8,
  "4": 6.2,
};

const getValidatedCountryCode = (
  code: string,
  defaultCountryCode: CountryCode,
): CountryCode => {
  const upperCaseCode = code.toUpperCase() as CountryCode;

  return isSupportedCountryCode(upperCaseCode) ? upperCaseCode : defaultCountryCode;
};

const PhoneField = forwardRef<HTMLDivElement, PhoneFieldProps>(
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
      ...props
    },
    ref,
  ) => {
    const contentRef = useRef<HTMLDivElement | null>(null);
    const [isCountrySelectorOpen, setIsCountrySelectorOpen] = useState(false);
    const [shouldFocus, setShouldFocus] = useState(false);

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

    const prefix = "+";
    const selectedCountryCode = getValidatedCountryCode(country.iso2, defaultCountryCode);
    const defaultStartAdornmentWidth = 2.8; // when dial code is disabled for button
    const startAdornmentWidth = hideDialCode
      ? defaultStartAdornmentWidth
      : startAdornmentWidthByDialCodeLength[country.dialCode.length];

    // This allows the parent component to interact with the input element directly
    useImperativeHandle(ref, () => inputRef.current as HTMLDivElement);

    const handleDropdownCloseAutoFocus = (event: Event) => {
      event.preventDefault();

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
          <RadixSelect.Root
            value={selectedCountryCode}
            open={isCountrySelectorOpen}
            onOpenChange={setIsCountrySelectorOpen}
            onValueChange={handleCountrySelect}
            disabled={disabled}
          >
            <RadixSelect.Trigger className={cn(triggerVariants({ disabled }))}>
              <div className="w-6 h-6 mr-2">
                <Flag countryCode={selectedCountryCode} size={24} />
              </div>
              {!hideDialCode && (
                <Typography variant="subtitle" level={2} className="mr-2">
                  {`${prefix}${country.dialCode}`}
                </Typography>
              )}
              <span className="w-2.5 h-1.5">
                <ArrowDown className="text-gray-400" />
              </span>
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
                onCloseAutoFocus={handleDropdownCloseAutoFocus}
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
                        <div
                          data-country={countryCode}
                          className={cn(
                            "flex items-center w-full cursor-pointer rounded-md p-2 hover:bg-gray-100",
                            selectedCountryCode === countryCode && "bg-gray-200",
                          )}
                        >
                          <span className="w-6 h-6">
                            <Flag countryCode={countryCode} size={24} />
                          </span>
                          <Typography
                            variant="body"
                            level={2}
                            className="mx-2 overflow-hidden text-ellipsis whitespace-nowrap"
                          >
                            {parsedCountry.name}
                          </Typography>
                          <Typography variant="body" level={2} className="ml-auto">
                            {`${prefix}${parsedCountry.dialCode}`}
                          </Typography>
                        </div>
                      </RadixSelect.Item>
                    );
                  })}
                </RadixSelect.Viewport>
              </RadixSelect.Content>
            </RadixSelect.Portal>
          </RadixSelect.Root>
        }
      />
    );
  },
);

PhoneField.displayName = "PhoneField";

export default PhoneField;
