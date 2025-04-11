import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { RadioGroupProps as RadixRadioGroupProps } from "@radix-ui/react-radio-group";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";

interface RadioGroupProps
  extends Omit<RadixRadioGroupProps, "onValueChange" | "onChange" | "className"> {
  /**
   * The value of the radio item that should be checked when initially rendered.
   * Use when you do not need to control the state of the radio items.
   */
  defaultValue?: string;
  /**
   * The controlled value of the radio item to check.
   * Should be used in conjunction with onChange.
   */
  value?: string;
  /**
   * Callback function that is triggered when the value of the radio group changes.
   * @param value - The new value of the selected radio group item.
   */
  onChange?: (value: string) => void;
  /**
   * When true, prevents the user from interacting with radio items.
   * @default false
   */
  disabled?: boolean;
  /**
   * The orientation of the radio group.
   * @default "vertical"
   */
  orientation?: "horizontal" | "vertical";
  /**
   * The name of the group. Submitted with its owning form as part of a name/value pair.
   */
  name?: string;
}

const radioGroupVariants = cva(`flex disabled:cursor-not-allowed disabled:opacity-20`, {
  variants: {
    orientation: {
      vertical: "flex-col",
      horizontal: "flex-row",
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
});

const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      defaultValue,
      onChange: onValueChange,
      orientation = "vertical",
      disabled = false,
      name,
      ...rest
    },
    ref,
  ) => {
    return (
      <RadioGroupPrimitive.Root
        ref={ref}
        defaultValue={defaultValue}
        onValueChange={onValueChange}
        className={radioGroupVariants({ orientation })}
        disabled={disabled}
        orientation={orientation}
        name={name}
        {...rest}
      />
    );
  },
);

RadioGroup.displayName = "RadioGroup";

export { RadioGroup };
export type { RadioGroupProps };
