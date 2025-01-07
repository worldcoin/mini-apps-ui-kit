"use client";

import { cn } from "@/lib/utils";
import type { OTPInputProps } from "input-otp";
import {
  OTPInput,
  REGEXP_ONLY_CHARS,
  REGEXP_ONLY_DIGITS,
  REGEXP_ONLY_DIGITS_AND_CHARS,
} from "input-otp";
import * as React from "react";

import { inputVariants } from "../Input/Input";
import { typographyVariants } from "../Typography";

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
  ({ maxLength = 6, error, children, mode = "digits", pattern, ...props }, ref) => {
    return (
      <OTPInput
        ref={ref}
        {...props}
        maxLength={maxLength}
        inputMode={inputModeDictionary[mode]}
        pattern={pattern || patternDictionary[mode]}
        containerClassName="flex items-center gap-1 has-[:disabled]:opacity-50"
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
                  isActive && "z-10 bg-gray-0 shadow-card",
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

export default OTPField;
