import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { RadioGroupItemProps as RadixRadioGroupItemProps } from "@radix-ui/react-radio-group";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";

import { Tick } from "../Icons/Tick";

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

const radioGroupItemVariants = cva(
  `h-6 w-6 rounded-full border border-[0.09375rem] transition-all data-[state=checked]:border-gray-900 data-[state=unchecked]:border-gray-400 data-[state=checked]:bg-gray-900 data-[state=unchecked]:bg-transparent`,
  {
    variants: {
      disabled: {
        true: "cursor-not-allowed opacity-20", // TODO: rework opacity to match design when it's provided
        false: "",
      },
    },
    defaultVariants: {
      disabled: false,
    },
  },
);

const RadioGroupItem = forwardRef<HTMLButtonElement, RadioGroupItemProps>(
  ({ value, disabled, ...rest }, ref) => {
    return (
      <RadioGroupPrimitive.Item
        ref={ref}
        value={value}
        className={radioGroupItemVariants({ disabled })}
        disabled={disabled}
        {...rest}
      >
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
          <Tick />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
    );
  },
);

RadioGroupItem.displayName = "RadioGroupItem";

export default RadioGroupItem;
