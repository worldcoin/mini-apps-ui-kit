"use client";

import type { OTPInputProps } from "input-otp";

import { cn } from "@/lib/utils";
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
  // The number of slots
  maxLength?: number;
  // Whether the OTP field is in an error state
  error?: boolean;
  // The pattern to validate the input
  pattern?: string;
  // The mode of the input
  mode?: keyof typeof patternDictionary;
  // Value state controlling the input
  value?: string;
  // Setter for the controlled value (or callback for uncontrolled value)
  onChange?: (newValue: string) => unknown;
  // Callback when the input is complete
  onComplete?: (...args: any[]) => unknown;
  // Transfomer function that allows pasting, for example, "XXX-XXX" even though the input's regex/pattern doesn't allow hyphen and its max length is 6.
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
