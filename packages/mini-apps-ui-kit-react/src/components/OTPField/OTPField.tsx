"use client";

import { withHaptics } from "@/lib/haptics";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import type { OTPInputProps } from "input-otp";
import {
  OTPInput,
  REGEXP_ONLY_CHARS,
  REGEXP_ONLY_DIGITS,
  REGEXP_ONLY_DIGITS_AND_CHARS,
} from "input-otp";
import * as React from "react";

import { typographyVariants } from "../Typography/Typography";

export const inputVariants = cva(
  cn(
    "peer h-[3.5rem] w-full rounded-[0.625rem] border border-gray-100 bg-gray-100 px-4 outline-none transition duration-300",
    "placeholder:text-gray-500",
    "focus:border-gray-300 focus:bg-gray-0 focus-visible:outline-none",
    "disabled:cursor-not-allowed disabled:opacity-50",
  ),
  {
    variants: {
      error: {
        true: "border-error-600 focus:border-error-600 bg-gray-0",
      },
    },
    defaultVariants: {
      error: false,
    },
  },
);

const patternDictionary = {
  digits: REGEXP_ONLY_DIGITS,
  chars: REGEXP_ONLY_CHARS,
  digitsAndChars: REGEXP_ONLY_DIGITS_AND_CHARS,
};

const inputModeDictionary = {
  digits: "numeric",
  chars: "text",
  digitsAndChars: "text",
} as const;

type OTPFieldProps = Omit<
  OTPInputProps,
  | "render"
  | "className"
  | "containerClassName"
  | "textAlign"
  | "inputMode"
  | "pushPasswordManagerStrategy"
  | "noScriptCSSFallback"
  | "maxLength"
  | "placeholder"
> & {
  /**
   * The number of input slots/characters in the OTP field.
   * Defaults to 6 if not specified.
   */
  maxLength?: number;

  /**
   * Whether the OTP field is in an error state.
   * When true, displays error styling.
   */
  error?: boolean;

  /**
   * Custom regex pattern to validate the input.
   * If not provided, uses the pattern from the selected mode.
   */
  pattern?: string;

  /**
   * The input mode that determines allowed characters.
   * - digits: Only numbers 0-9
   * - chars: Only letters A-Z
   * - digitsAndChars: Both numbers and letters
   * Defaults to "digits" if not specified.
   */
  mode?: keyof typeof patternDictionary;

  /**
   * The current value of the OTP input.
   * Used for controlled component behavior.
   */
  value?: string;

  /**
   * Callback fired when the input value changes.
   * @param newValue The new input value
   */
  onChange?: (newValue: string) => unknown;

  /**
   * Callback fired when all slots are filled.
   * Called with the complete OTP value.
   */
  onComplete?: (...args: any[]) => unknown;

  /**
   * Function to transform pasted text before inserting.
   * Useful for handling formatted strings, e.g. "123-456" -> "123456"
   * @param pastedText The text being pasted
   * @returns The transformed text to insert
   */
  pasteTransformer?: (pastedText: string) => string;
};

const OTPField = React.forwardRef<React.ElementRef<typeof OTPInput>, OTPFieldProps>(
  ({ maxLength = 6, error, children, mode = "digits", pattern, onChange, ...props }, ref) => {
    return (
      <OTPInput
        ref={ref}
        {...props}
        maxLength={maxLength}
        inputMode={inputModeDictionary[mode]}
        pattern={pattern || patternDictionary[mode]}
        onChange={withHaptics(onChange)}
        containerClassName="flex items-center gap-2 has-[:disabled]:opacity-50"
        render={({ slots }) => (
          <>
            {slots.map(({ isActive, char }, idx) => (
              <div
                key={idx}
                ref={ref}
                role="textbox"
                className={cn(
                  inputVariants({ error }),
                  typographyVariants({ variant: "body", level: 2 }),
                  "w-12 h-[4.25rem] rounded-lg flex items-center justify-center",
                  (isActive || error) && "z-10 bg-gray-0",
                )}
              >
                {char}
              </div>
            ))}
          </>
        )}
      />
    );
  },
);

OTPField.displayName = "OTPField";

export { OTPField };
export type { OTPFieldProps };
