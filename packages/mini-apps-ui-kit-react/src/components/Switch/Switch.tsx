import { forwardRef } from "react";
import * as RadixSwitch from "@radix-ui/react-switch";
import {
  SwitchProps as RadixSwitchProps,
  SwitchThumbProps as RadixSwitchThumbProps,
} from "@radix-ui/react-switch";

export interface SwitchProps extends RadixSwitchProps {
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
        className={`w-10 h-auto border-2 rounded-full relative inline-flex items-center transition-all ${checked ? "border-gray-900 bg-gray-900" : "border-gray-300 bg-gray-300"} ${disabled ? "opacity-20 cursor-not-allowed" : ""} ${className}`}
        {...rest}
      >
        <RadixSwitch.Thumb
          className={`block w-5 h-5 rounded-full bg-gray-0 transition-transform transform ${checked ? "translate-x-4" : "translate-x-0"} ${thumbClassName}`}
          {...thumbProps}
        />
      </RadixSwitch.Root>
    );
  },
);

Switch.displayName = "Switch";

export default Switch;
