import { cn } from "@/lib/utils";
import * as RadixSelect from "@radix-ui/react-select";
import { forwardRef, useState } from "react";
import {
  // CountrySelector,
  CountrySelectorDropdown,
  // DialCodePreview,
  FlagImage,
  ParsedCountry,
  defaultCountries,
  // parseCountry,
  usePhoneInput,
} from "react-international-phone";

import Input, { InputProps } from "../Input";
import { ArrowDown } from "../Select/ArrowDown";
import { dropdownContainerStyles } from "../Select/Select";

export interface PhoneFieldProps
  extends Omit<InputProps, "startAdornment" | "endAdornment" | "onChange"> {
  /**
   * Current phone number value.
   */
  value: string;
  /**
   * Callback triggered when the phone number changes.
   */
  onChange: (phone: string) => void;
}

const PhoneField = forwardRef<HTMLDivElement, PhoneFieldProps>(
  ({ value, onChange, error, placeholder = "Enter phone number", ...props }, ref) => {
    const {
      inputValue,
      handlePhoneValueChange,
      // isCountrySelectorOpen,
      inputRef,
      country,
      // selectedCountry,
      // toggleCountrySelector,
      setCountry,
    } = usePhoneInput({
      defaultCountry: "us",
      value,
      countries: defaultCountries,
      onChange: (data) => {
        onChange?.(data.phone);
      },
    });

    const [isCountrySelectorOpen, setIsCountrySelectorOpen] = useState(false);

    const onOpenChange = (open: boolean) => {
      setIsCountrySelectorOpen(open);
    };

    const handleCountrySelect = (selectedCountry: ParsedCountry) => {
      setCountry(selectedCountry.iso2);
      setIsCountrySelectorOpen(false);
    };

    console.log("====================================");
    console.log("PhoneField", { inputValue, country, isCountrySelectorOpen });
    console.log("====================================");

    return (
      <div className="relative w-full" ref={ref}>
        <Input
          {...props}
          ref={inputRef}
          value={inputValue}
          onChange={handlePhoneValueChange}
          placeholder={placeholder}
          startAdornmentWidth={3}
          error={error}
          startAdornment={
            <RadixSelect.Root
              open={isCountrySelectorOpen}
              // open
              onOpenChange={onOpenChange}
            >
              <RadixSelect.Trigger className="flex items-center bg-transparent border-none focus:outline-none cursor-pointer">
                <div className="relative w-6 h-6 rounded-full overflow-hidden flex items-center justify-center mr-1">
                  <FlagImage iso2={country.iso2} className="w-[150%] h-[150%] object-cover" />
                </div>
                <span className="h-5 w-5">
                  <ArrowDown className="text-gray-400" />
                </span>
              </RadixSelect.Trigger>

              <RadixSelect.Portal>
                <RadixSelect.Content
                  position="popper"
                  className={cn(dropdownContainerStyles, "-ml-3 mt-5 w-auto")}
                >
                  <CountrySelectorDropdown
                    show
                    selectedCountry={country.iso2}
                    onSelect={handleCountrySelect}
                    className="relative bg-gray-0 shadow-none"
                  />
                </RadixSelect.Content>
              </RadixSelect.Portal>
            </RadixSelect.Root>
          }
        />
      </div>
    );
  },
);

PhoneField.displayName = "PhoneField";

export default PhoneField;
