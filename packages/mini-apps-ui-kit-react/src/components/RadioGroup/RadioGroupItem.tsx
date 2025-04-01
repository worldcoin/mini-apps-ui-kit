import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { RadioGroupItemProps as RadixRadioGroupItemProps } from "@radix-ui/react-radio-group";
import { forwardRef } from "react";

import { Tick } from "../icons/Tick";

export interface RadioGroupItemProps extends Omit<RadixRadioGroupItemProps, "className"> {
  /**
   * The value of the radio group item.
   */
  value: string;
  /**
   * When true, prevents the user from interacting with the radio item.
   */
  disabled?: boolean;
}

export const RadioGroupItem = forwardRef<HTMLButtonElement, RadioGroupItemProps>(
  ({ value, disabled, ...rest }, ref) => {
    return (
      <RadioGroupPrimitive.Item
        ref={ref}
        value={value}
        className="size-6 rounded-full border-[0.09375rem] transition-all data-[state=checked]:border-gray-900 data-[state=unchecked]:border-gray-200 data-[state=checked]:bg-gray-900 data-[state=unchecked]:bg-transparent disabled:cursor-not-allowed disabled:opacity-50"
        disabled={disabled}
        {...rest}
      >
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
          <Tick className="text-gray-0" />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
    );
  },
);

RadioGroupItem.displayName = "RadioGroupItem";

export default RadioGroupItem;
