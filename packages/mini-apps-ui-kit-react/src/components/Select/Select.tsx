"use client";

import { DROPDOWN_CONTAINER_STYLES } from "@/lib/constants/dropdownStyles";
import { withHaptics } from "@/lib/haptics";
import * as RadixSelect from "@radix-ui/react-select";
import { cva } from "class-variance-authority";
import { forwardRef, useEffect, useState } from "react";

import { cn } from "../../lib/utils";
import { ArrowDown } from "../Icons/ArrowDown";
import { typographyVariants } from "../Typography/Typography";

const selectVariants = cva(
  cn(
    "flex items-center justify-between whitespace-nowrap [&>span:first-of-type]:line-clamp-1",
    "peer h-[3.5rem] w-full rounded-[0.625rem] border border-gray-100 bg-gray-100 px-4 outline-none transition duration-300",
    "placeholder:text-gray-500",
    "focus:border-gray-300 focus:bg-gray-0 focus-visible:outline-none",
    "disabled:cursor-not-allowed disabled:opacity-50",
    // Radix Select styles
    "data-[placeholder]:text-gray-500",
    "data-[state=closed]:bg-gray-100 data-[state=closed]:border-gray-100",
  ),
  {
    variants: {
      error: {
        true: "!border-error-600 !focus:border-error-600 !bg-gray-0",
      },
      isLabel: {
        true: "pt-6 pb-2 placeholder:text-transparent",
        false: "",
      },
      isFocused: {
        true: "focus:border-gray-300 focus:bg-gray-0 focus-visible:outline-none",
        false: "",
      },
      variant: {
        "floating-label": "pt-6 pb-2 placeholder:text-transparent",
        default: "",
      },
    },
    defaultVariants: {
      error: false,
      isFocused: false,
      variant: "default",
    },
  },
);

interface SelectOption {
  /**
   * The value of the option.
   */
  value: string;
  /**
   * The label to display for the option.
   */
  label: string;
}

interface SelectProps
  extends Omit<RadixSelect.SelectProps, "className" | "onValueChange" | "style"> {
  /**
   * The value of the select item that should be selected by default.
   * Use when you do not need to control the state of the select items.
   */
  defaultValue?: string;
  /**
   * The controlled value of the select.
   * Should be used in conjunction with onChange.
   */
  value?: string;
  /**
   * Callback triggered when the selected value changes.
   */
  onChange?: (value: string) => void;
  /**
   * The options to display in the select dropdown.
   */
  options: SelectOption[];
  /**
   * The placeholder text to display when no value is selected.
   */
  placeholder?: string;
  /**
   * If true, the select will display in an error state with error styling
   * @default false
   */
  error?: boolean;
  /**
   * The open state of the select when it is initially rendered.
   * Use when you do not need to control its open state.
   * @default false
   */
  defaultOpen?: boolean;
  /**
   * The controlled open state of the select. Must be used in conjunction with onOpenChange.
   */
  open?: boolean;
  /**
   * Callback triggered when the open state changes
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * When true, prevents the user from interacting with select.
   * @default false
   */
  disabled?: boolean;
  /**
   * The name of the select. Submitted with its owning form as part of a name/value pair.
   */
  name?: string;
}

const Select = forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      options = [],
      placeholder = "Select...",
      value,
      onChange,
      open,
      onOpenChange,
      error = false,
      defaultOpen = false,
      disabled = false,
      name,
      defaultValue,
      ...rest
    },
    ref,
  ) => {
    const [isOpen, setIsOpen] = useState(open ?? defaultOpen);

    const handleOpenChange = (open: boolean) => {
      setIsOpen(open);
      onOpenChange?.(open);
    };

    useEffect(() => {
      if (open !== undefined) {
        setIsOpen(open);
      }
    }, [open]);

    if (!Array.isArray(options)) {
      console.error("`options` must be an array of objects with `value` and `label` keys.");
    }

    return (
      <RadixSelect.Root
        value={value}
        open={isOpen}
        onValueChange={withHaptics(onChange)}
        defaultOpen={defaultOpen}
        onOpenChange={handleOpenChange}
        name={name}
        disabled={disabled}
        defaultValue={defaultValue}
        {...rest}
      >
        <RadixSelect.Trigger
          ref={ref}
          className={cn(
            typographyVariants({ variant: "body" }),
            selectVariants({ error, isFocused: isOpen }),
          )}
        >
          <RadixSelect.Value placeholder={placeholder} />
          <RadixSelect.Icon>
            <ArrowDown className="text-gray-400 size-6" />
          </RadixSelect.Icon>
        </RadixSelect.Trigger>

        <RadixSelect.Portal>
          <RadixSelect.Content position="popper" className={cn(DROPDOWN_CONTAINER_STYLES)}>
            <RadixSelect.Viewport
              className={cn(
                "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] p-2",
                options.length === 0 && "hidden",
              )}
            >
              {options.map((option) => (
                <RadixSelect.Item
                  key={`${option.value}/${option.label}`}
                  value={option.value}
                  className={cn(
                    "w-full cursor-pointer select-none rounded-md p-2 font-sans outline-none hover:bg-gray-50",
                    value === option.value && "bg-gray-100",
                    typographyVariants({ variant: "body", level: 3 }),
                  )}
                >
                  <RadixSelect.ItemText>{option.label}</RadixSelect.ItemText>
                </RadixSelect.Item>
              ))}
            </RadixSelect.Viewport>
          </RadixSelect.Content>
        </RadixSelect.Portal>
      </RadixSelect.Root>
    );
  },
);

Select.displayName = "Select";

export { Select };
export type { SelectProps, SelectOption };
