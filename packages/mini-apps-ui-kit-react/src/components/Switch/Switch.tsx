"use client";

import { forwardRef } from "react";
import * as RadixSwitch from "@radix-ui/react-switch";
import { SwitchProps as RadixSwitchProps } from "@radix-ui/react-switch";
import { type VariantProps, cva } from "class-variance-authority";

export interface SwitchProps
  extends Omit<RadixSwitchProps, "onCheckedChange" | "onChange" | "className">,
    VariantProps<typeof switchClasses> {
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

const switchClasses = cva(
  "relative inline-flex h-auto w-10 items-center rounded-full border-2 transition-all",
  {
    variants: {
      checked: {
        true: "border-gray-900 bg-gray-900",
        false: "border-gray-300 bg-gray-300",
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

const thumbClasses = cva(
  "bg-gray-0 block h-5 w-5 transform rounded-full transition-transform",
  {
    variants: {
      checked: {
        true: "translate-x-4",
        false: "translate-x-0",
      },
    },
    defaultVariants: {
      checked: false,
    },
  },
);

const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  ({ checked = false, onChange: onCheckedChange, disabled = false, ...rest }, ref) => {
    return (
      <RadixSwitch.Root
        ref={ref}
        checked={checked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        className={switchClasses({ checked, disabled })}
        {...rest}
      >
        <RadixSwitch.Thumb className={thumbClasses({ checked })} />
      </RadixSwitch.Root>
    );
  },
);

Switch.displayName = "Switch";

export default Switch;
