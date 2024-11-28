import { forwardRef } from "react";
import * as RadixSwitch from "@radix-ui/react-switch";
import {
  SwitchProps as RadixSwitchProps,
  SwitchThumbProps as RadixSwitchThumbProps,
} from "@radix-ui/react-switch";
import { cva, type VariantProps } from "class-variance-authority";

export interface SwitchProps
  extends RadixSwitchProps,
    VariantProps<typeof switchClasses> {
  /**
   * The checked state of the switch.
   * @default false
   */
  checked?: boolean;
  /**
   * Callback function that is triggered when the checked state changes.
   */
  onCheckedChange?: (checked: boolean) => void;
  /**
   * Disables the switch when set to true.
   * @default false
   */
  disabled?: boolean;
  /**
   * Additional class names to apply to the root element.
   */
  className?: string;
  /**
   * Additional class names to apply to the thumb element.
   */
  thumbClassName?: string;
  /**
   * Additional props to apply to the thumb element.
   * @type {Omit<RadixSwitchThumbProps, "className">}
   */
  thumbProps?: Omit<RadixSwitchThumbProps, "className">;
}

const switchClasses = cva(
  "w-10 h-auto border-2 rounded-full relative inline-flex items-center transition-all",
  {
    variants: {
      checked: {
        true: "border-gray-900 bg-gray-900",
        false: "border-gray-300 bg-gray-300",
      },
      disabled: {
        true: "opacity-20 cursor-not-allowed", // TODO: rework opacity to match design when it's provided
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
  "block w-5 h-5 rounded-full bg-gray-0 transition-transform transform",
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
  (
    {
      checked = false,
      onCheckedChange,
      disabled = false,
      className = "",
      thumbClassName = "",
      thumbProps,
      ...rest
    },
    ref,
  ) => {
    return (
      <RadixSwitch.Root
        ref={ref}
        checked={checked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        className={switchClasses({ checked, disabled, className })}
        {...rest}
      >
        <RadixSwitch.Thumb
          className={thumbClasses({ checked, className: thumbClassName })}
          {...thumbProps}
        />
      </RadixSwitch.Root>
    );
  },
);

Switch.displayName = "Switch";

export default Switch;
