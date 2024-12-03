import { forwardRef } from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { RadioGroupItemProps as RadixRadioGroupItemProps } from "@radix-ui/react-radio-group";
import { cva } from "class-variance-authority";
import { Tick } from "../Icons/Tick";

export interface RadioGroupItemProps
  extends Omit<RadixRadioGroupItemProps, "className"> {
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
  `
  w-6 h-6 border border-[0.09375rem] rounded-full transition-all
  data-[state=unchecked]:bg-transparent data-[state=unchecked]:border-gray-400
  data-[state=checked]:bg-gray-900 data-[state=checked]:border-gray-900
  `,
  {
    variants: {
      disabled: {
        true: "opacity-20 cursor-not-allowed", // TODO: rework opacity to match design when it's provided
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
