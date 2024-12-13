import * as RadioGroup from "@radix-ui/react-radio-group";
import { RadioGroupProps as RadixRadioGroupProps } from "@radix-ui/react-radio-group";
import { forwardRef } from "react";

interface ColorPickerItemProps extends Omit<RadioGroup.RadioGroupItemProps, "value"> {
  value: string;
}

interface ColorPickerGroupProps
  extends Omit<RadixRadioGroupProps, "value" | "onValueChange" | "onChange"> {
  value: string;
  children: React.ReactNode;
  onChange: (value: string) => void;
}

const ColorPickerItem = forwardRef<HTMLButtonElement, ColorPickerItemProps>(
  ({ value, ...props }, ref) => {
    return (
      <RadioGroup.Item
        ref={ref}
        value={value}
        className="size-[3.25rem] cursor-default rounded-full outline-none flex items-center justify-center relative disabled:opacity-90 disabled:cursor-not-allowed"
        style={{
          background: value,
        }}
        {...props}
      >
        <RadioGroup.Indicator
          className="absolute flex size-[3.5rem] items-center rounded-full justify-center opacity-25"
          style={{ boxShadow: `0px 0px 0px 2px ${value}` }}
        />
      </RadioGroup.Item>
    );
  },
);

const ColorPickerGroup = forwardRef<HTMLDivElement, ColorPickerGroupProps>(
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

export { ColorPickerGroup, ColorPickerItem };
export default ColorPickerGroup;
