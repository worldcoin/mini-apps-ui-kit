import { withHaptics } from "@/lib/haptics";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { CheckboxProps as RadixCheckboxProps } from "@radix-ui/react-checkbox";
import { forwardRef } from "react";

import { Tick } from "../Icons/Tick";

interface CheckboxProps
  extends Omit<RadixCheckboxProps, "onCheckedChange" | "onChange" | "className"> {
  /**
   * Whether to forward the root element
   * @default false
   */
  asChild?: boolean;

  /**
   * The initial checked state when the checkbox is uncontrolled
   */
  defaultChecked?: boolean;

  /**
   * The controlled checked state of the checkbox
   */
  checked?: boolean;

  /**
   * Event handler called when the checked state changes
   */
  onChange?: (checked: boolean) => void;

  /**
   * Whether the checkbox is disabled
   */
  disabled?: boolean;

  /**
   * Whether the checkbox is required
   */
  required?: boolean;

  /**
   * The name of the checkbox
   */
  name?: string;

  /**
   * The value of the checkbox
   * @default ""
   */
  value?: string;
}

const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ checked, onChange: onCheckedChange, disabled = false, ...props }, ref) => {
    return (
      <RadixCheckbox.Root
        ref={ref}
        checked={checked}
        onCheckedChange={withHaptics(onCheckedChange)}
        disabled={disabled}
        className="flex size-6 items-center justify-center rounded-md border-[0.09375rem] transition-all data-[state=checked]:border-gray-900 data-[state=checked]:bg-gray-900 data-[state=unchecked]:border-gray-200 data-[state=unchecked]:bg-transparent disabled:cursor-not-allowed disabled:opacity-20"
        {...props}
      >
        <RadixCheckbox.Indicator>
          <Tick className="text-gray-0" />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
    );
  },
);

Checkbox.displayName = "Checkbox";

export { Checkbox };
export type { CheckboxProps };
