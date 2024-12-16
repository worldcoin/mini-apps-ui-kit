"use client";

import { DROPDOWN_CONTAINER_STYLES } from "@/lib/constants/dropdownStyles";
import { cn } from "@/lib/utils";
import * as RadixSelect from "@radix-ui/react-select";
import { cva } from "class-variance-authority";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import {
  CountryIso2,
  CountrySelectorDropdown,
  DialCodePreview,
  FlagImage,
  ParsedCountry,
  defaultCountries,
  usePhoneInput,
} from "react-international-phone";

import Input, { InputProps } from "../Input";
import { typographyVariants } from "../Typography";
import { ArrowDown } from "./ArrowDown";

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
   * Default country value (iso2).
   * @default "us"
   */
  defaultCountry?: CountryIso2;
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

const PhoneField = forwardRef<HTMLDivElement, PhoneFieldProps>(
  (
    {
      value,
      onChange,
      placeholder = "Enter phone number",
      defaultCountry = "us",
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
        defaultCountry,
        disableDialCodePrefill,
        value,
        countries: defaultCountries,
        onChange: (data) => {
          onChange?.(data.phone);
        },
      },
    );

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

    const handleCountrySelect = (selectedCountry: ParsedCountry) => {
      setCountry(selectedCountry.iso2);
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
            open={isCountrySelectorOpen}
            onOpenChange={setIsCountrySelectorOpen}
            disabled={disabled}
          >
            <RadixSelect.Trigger className={cn(triggerVariants({ disabled }))}>
              <div className="relative w-6 h-6 rounded-full overflow-hidden flex items-center justify-center mr-2">
                <FlagImage iso2={country.iso2} className="w-[150%] h-[150%] object-cover" />
              </div>
              {!hideDialCode && (
                <DialCodePreview
                  prefix="+"
                  dialCode={country.dialCode}
                  className={cn(
                    typographyVariants({ variant: "subtitle", level: 2 }),
                    "p-0 mr-2 border-none bg-transparent",
                  )}
                />
              )}
              <span className="w-2.5 h-1.5">
                <ArrowDown className="text-gray-400" />
              </span>
            </RadixSelect.Trigger>

            <RadixSelect.Portal>
              <RadixSelect.Content
                ref={contentRef}
                position="popper"
                className={cn(DROPDOWN_CONTAINER_STYLES, "-ml-3 mt-5 w-auto")}
                onCloseAutoFocus={handleDropdownCloseAutoFocus}
                onPointerDown={handlePointerDownOutside}
              >
                <CountrySelectorDropdown
                  show
                  selectedCountry={country.iso2}
                  onSelect={handleCountrySelect}
                  className="p-2 relative bg-gray-0 shadow-none"
                  listItemClassName={cn(
                    "p-2 font-sans hover:bg-gray-100 rounded-md",
                    typographyVariants({ variant: "body", level: 2 }),
                  )}
                />
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
