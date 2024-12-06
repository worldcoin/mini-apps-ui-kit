import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { CheckboxProps as RadixCheckboxProps } from "@radix-ui/react-checkbox";
import { type VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";

import { Tick } from "../Icons/Tick";

export interface CheckboxProps
  extends Omit<RadixCheckboxProps, "onCheckedChange" | "onChange" | "className">,
    VariantProps<typeof checkboxClasses> {
  /**
   * The checked state of the checkbox.
   * @default false
   */
  checked?: boolean;
  /**
   * Callback function that is triggered when the checked state changes.
   */
  onChange?: (checked: boolean) => void;
  /**
   * The disabled state of the checkbox.
   * @default false
   */
  disabled?: boolean;
}

const checkboxClasses = cva(
  "flex h-6 w-6 items-center justify-center rounded-md border-[0.09375rem] transition-all",
  {
    variants: {
      checked: {
        true: "border-gray-900 bg-gray-900",
        false: "border-gray-400 bg-transparent",
      },
      disabled: {
        true: "cursor-not-allowed opacity-20", // TODO: rework opacity to match design when it's provided
        false: "",
      },
    },
    defaultVariants: {
      checked: false,
      disabled: false,
    },
  },
);

const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ checked = false, onChange: onCheckedChange, disabled = false, ...rest }, ref) => {
    return (
      <RadixCheckbox.Root
        ref={ref}
        checked={checked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        className={checkboxClasses({ checked, disabled })}
        {...rest}
      >
        <RadixCheckbox.Indicator>
          <Tick />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
    );
  },
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
