import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { CheckboxProps as RadixCheckboxProps } from "@radix-ui/react-checkbox";
import { forwardRef } from "react";

import { Tick } from "../Icons/Tick";

export interface CheckboxProps
  extends Omit<RadixCheckboxProps, "onCheckedChange" | "onChange" | "className"> {
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

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ checked, onChange: onCheckedChange, disabled = false, ...rest }, ref) => {
    return (
      <RadixCheckbox.Root
        ref={ref}
        checked={checked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        className="flex h-6 w-6 items-center justify-center rounded-md border-[0.09375rem] transition-all data-[state=checked]:border-gray-900 data-[state=checked]:bg-gray-900 data-[state=unchecked]:border-gray-400 data-[state=unchecked]:bg-transparent disabled:cursor-not-allowed disabled:opacity-20"
        {...rest}
      >
        <RadixCheckbox.Indicator>
          <Tick className="text-gray-0" />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
    );
  },
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
