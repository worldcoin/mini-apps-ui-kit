"use client";

import haptics from "@/lib/haptics";
import { cn } from "@/lib/utils";
import { LongPressOptions, useLongPress } from "@uidotdev/usehooks";

import { typographyVariants } from "../Typography/Typography";
import { Delete } from "./Delete";

interface NumberPadProps {
  /**
   * The current value displayed in the number pad
   */
  value?: string;
  /**
   * Whether the number pad is disabled
   */
  disabled?: boolean;
  /**
   * Callback fired when the value changes
   */
  onChange?: (value: string) => void;
  /**
   * Callback fired on long press of the delete button
   */
  onLongDeletePress?: () => void;
  /**
   * Options for the long press
   * @type LongPressOptions
   * @property { number } threshold - The time in milliseconds before the long press is triggered
   * @property { (e: Event) => void } onStart - Callback fired when the long press starts
   * @property { (e: Event) => void } onFinish - Callback fired when the long press finishes
   * @property { (e: Event) => void } onCancel - Callback fired when the long press is cancelled
   * @default { threshold: 1500 }
   */
  longPressOptions?: LongPressOptions;
}

const buttons = [
  { value: "1" },
  { value: "2" },
  { value: "3" },
  { value: "4" },
  { value: "5" },
  { value: "6" },
  { value: "7" },
  { value: "8" },
  { value: "9" },
  { value: "." },
  { value: "0" },
  { value: "del", label: <Delete className="size-6" /> },
];

const NumberPad = ({
  value = "",
  onChange,
  disabled = false,
  onLongDeletePress = () => {},
  longPressOptions = {
    threshold: 1500,
  },
}: NumberPadProps) => {
  // Validate that value is a valid number or empty string
  if (value !== "" && isNaN(Number(value))) {
    console.error("NumberPad value must be a valid number or empty string");
  }

  const handleButtonClick = (buttonValue: string) => {
    haptics.impact("light");

    if (!onChange || disabled) return;

    if (buttonValue === "del") {
      onChange(value.slice(0, -1));
    } else if (buttonValue === "." && value.includes(".")) {
      // Don't add another decimal point if one already exists
      return;
    } else {
      const newValue = value + buttonValue;
      // Allow trailing decimal point for partial number input
      if (buttonValue === "." || !isNaN(Number(newValue))) {
        onChange(newValue);
      }
    }
  };

  const longPressAttributes = useLongPress(onLongDeletePress, longPressOptions);

  return (
    <div className="grid grid-cols-3 grid-rows-4 gap-1 w-full">
      {buttons.map((button) => (
        <button
          type="button"
          key={button.value}
          onClick={() => handleButtonClick(button.value)}
          disabled={disabled}
          className={cn(
            typographyVariants({ variant: "heading", level: 3 }),
            "h-12 min-w-28 flex items-center justify-center select-none",
            "disabled:text-gray-300 disabled:cursor-not-allowed",
          )}
          {...(button.value === "del" ? longPressAttributes : {})}
        >
          <span className="duration-200 transition-colors size-12 flex items-center justify-center rounded-full">
            {button.label || button.value}
          </span>
        </button>
      ))}
    </div>
  );
};

export { NumberPad };
export type { NumberPadProps };
