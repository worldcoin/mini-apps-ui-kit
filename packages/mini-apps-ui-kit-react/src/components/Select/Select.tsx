"use client";

import * as RadixSelect from "@radix-ui/react-select";
import { cva } from "class-variance-authority";
import { forwardRef, useEffect, useState } from "react";

import { cn } from "../../lib/utils";
import { typographyVariants } from "../Typography";
import { ArrowDown } from "./ArrowDown";

export interface SelectOption {
  /**
   * The value of the option.
   */
  value: string;
  /**
   * The label to display for the option.
   */
  label: string;
}

export interface SelectProps
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
   * The error message to display when there is an error.
   */
  error?: string;
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

const triggerVariants = cva(
  "text-base flex h-[3.125rem] w-full min-w-[6rem] cursor-pointer items-center justify-between whitespace-nowrap rounded-xl border-2 px-3 py-4 font-sans outline-none transition-all transition-transform [&>span:first-of-type]:line-clamp-1",
  {
    variants: {
      isOpen: {
        true: "border-gray-200 bg-gray-0 shadow-card",
        false: "border-gray-100 bg-gray-100",
      },
      value: {
        true: "border-gray-200 bg-gray-0 text-gray-900",
        false: "text-gray-400",
      },
      defaultValue: {
        true: "border-gray-200 bg-gray-0 text-gray-900",
        false: "",
      },
      error: {
        true: "shadow-none border border-error-700 bg-error-100",
        false: "",
      },
      disabled: {
        true: "cursor-not-allowed opacity-20",
        false: "",
      },
    },
    defaultVariants: {
      isOpen: false,
      defaultValue: false,
      value: false,
      error: false,
      disabled: false,
    },
  },
);

const Select = forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      options = [],
      placeholder = "Select...",
      value,
      onChange,
      open,
      onOpenChange,
      error,
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
        onValueChange={onChange}
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
            typographyVariants({ variant: "body", level: 3 }),
            triggerVariants({
              isOpen,
              value: !!value,
              error: !!error,
              disabled,
              defaultValue: !!defaultValue,
            }),
          )}
        >
          <RadixSelect.Value placeholder={placeholder} />
          <RadixSelect.Icon className="h-5 w-5">
            <ArrowDown />
          </RadixSelect.Icon>
        </RadixSelect.Trigger>

        <RadixSelect.Portal>
          <RadixSelect.Content
            position="popper"
            className={cn(
              "relative z-50 mt-1 max-h-[11.75rem] w-full overflow-hidden rounded-2xl bg-gray-0 shadow-regular-large",
            )}
          >
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
                    "w-full cursor-pointer select-none rounded-md p-2 font-sans outline-none hover:bg-gray-100",
                    value === option.value && "bg-gray-200",
                    typographyVariants({ variant: "body", level: 2 }),
                  )}
                >
                  <RadixSelect.ItemText>{option.label}</RadixSelect.ItemText>
                </RadixSelect.Item>
              ))}
            </RadixSelect.Viewport>
          </RadixSelect.Content>
        </RadixSelect.Portal>

        {error && (
          <p
            className={cn(
              "mt-1 w-full overflow-hidden text-ellipsis whitespace-normal px-2 py-1 text-error-700",
              typographyVariants({ variant: "body", level: 3 }),
              disabled && "cursor-not-allowed opacity-20",
            )}
          >
            {error}
          </p>
        )}
      </RadixSelect.Root>
    );
  },
);

Select.displayName = "Select";

export default Select;
