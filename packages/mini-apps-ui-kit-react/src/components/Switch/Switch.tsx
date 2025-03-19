"use client";

import * as RadixSwitch from "@radix-ui/react-switch";
import { SwitchProps as RadixSwitchProps } from "@radix-ui/react-switch";
import { forwardRef } from "react";

export interface SwitchProps
  extends Omit<RadixSwitchProps, "onCheckedChange" | "onChange" | "className"> {
  /**
   * The checked state of the switch.
   * @default false
   */
  checked?: boolean;
  /**
   * Callback function that is triggered when the checked state changes.
   */
  onChange?: (checked: boolean) => void;
  /**
   * Disables the switch when set to true.
   * @default false
   */
  disabled?: boolean;
}

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  ({ checked, onChange: onCheckedChange, disabled = false, ...rest }, ref) => {
    return (
      <RadixSwitch.Root
        ref={ref}
        checked={checked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        className="relative inline-flex h-6 w-10 items-center rounded-full border-2 transition-all data-[state=checked]:border-gray-900 data-[state=checked]:bg-gray-900 data-[state=unchecked]:border-gray-300 data-[state=unchecked]:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-20"
        {...rest}
      >
        <RadixSwitch.Thumb className="bg-gray-0 block h-5 w-5 transform rounded-full transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0" />
      </RadixSwitch.Root>
    );
  },
);

Switch.displayName = "Switch";

export default Switch;
