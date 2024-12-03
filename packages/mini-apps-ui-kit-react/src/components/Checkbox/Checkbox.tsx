import { forwardRef } from "react";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { CheckboxProps as RadixCheckboxProps } from "@radix-ui/react-checkbox";
import { cva, type VariantProps } from "class-variance-authority";
import { Tick } from "../Icons/Tick";

export interface CheckboxProps
  extends Omit<
      RadixCheckboxProps,
      "onCheckedChange" | "onChange" | "className"
    >,
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
  "w-6 h-6 border-[0.09375rem] rounded-md flex items-center justify-center transition-all",
  {
    variants: {
      checked: {
        true: "bg-gray-900 border-gray-900",
        false: "bg-transparent border-gray-400",
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

const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  (
    { checked = false, onChange: onCheckedChange, disabled = false, ...rest },
    ref,
  ) => {
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
