import * as RadioGroup from "@radix-ui/react-radio-group";
import { RadioGroupProps as RadixRadioGroupProps } from "@radix-ui/react-radio-group";
import { forwardRef } from "react";

interface ColorPickerItemProps extends Omit<RadioGroup.RadioGroupItemProps, "value"> {
  value: string;
}

interface ColorPickerGroupProps
  extends Omit<RadixRadioGroupProps, "value" | "onValueChange" | "onChange"> {
  /** The currently selected color value */
  value?: string;
  /** ColorPickerItem components to render as options */
  children: React.ReactNode;
  /** Callback fired when the selected color changes */
  onChange?: (value: string) => void;
}

export const ColorPickerItem = forwardRef<HTMLButtonElement, ColorPickerItemProps>(
  ({ value, ...props }, ref) => {
    return (
      <RadioGroup.Item
        ref={ref}
        value={value}
        className="size-[2.5rem] cursor-default rounded-full outline-none flex items-center justify-center relative disabled:opacity-90 disabled:cursor-not-allowed"
        style={{
          background: value,
        }}
        {...props}
      >
        <RadioGroup.Indicator
          className="absolute flex size-[2.75rem] items-center rounded-full justify-center"
          style={{ boxShadow: `0px 0px 0px 4px ${value}` }}
        />
      </RadioGroup.Item>
    );
  },
);

export const ColorPickerGroup = forwardRef<HTMLDivElement, ColorPickerGroupProps>(
  ({ value, onChange, children, ...props }, ref) => {
    return (
      <RadioGroup.Root
        ref={ref}
        value={value}
        onValueChange={onChange}
        className="flex gap-4 items-center"
        {...props}
      >
        {children}
      </RadioGroup.Root>
    );
  },
);

export default ColorPickerGroup;
