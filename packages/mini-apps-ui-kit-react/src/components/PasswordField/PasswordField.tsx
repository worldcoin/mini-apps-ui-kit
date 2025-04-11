"use client";

import haptics from "@/lib/haptics";
import { forwardRef, useState } from "react";

import { Eye } from "../Icons/Eye";
import { EyeClosed } from "../Icons/EyeClosed";
import { Input, InputProps } from "../Input";

interface PasswordFieldProps extends Omit<InputProps, "startAdornment"> {
  /**
   * If true, the input will display in an error state with error styling
   */
  error?: boolean;
  /**
   * If true, the input will display in a valid state with success styling
   */
  isValid?: boolean;
}

const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
  (
    {
      isValid,
      disabled,
      type = "password",
      autoComplete = "current-password",
      spellCheck = "false",
      inputMode = "text",
      autoCapitalize = "off",
      autoCorrect = "off",
      ...props
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
      <Input
        {...props}
        ref={ref}
        isValid={isValid}
        disabled={disabled}
        endAdornment={
          <button
            type="button"
            onClick={() => {
              setShowPassword(!showPassword);
              haptics.impact("light");
            }}
          >
            {showPassword ? <EyeClosed /> : <Eye />}
          </button>
        }
        type={showPassword ? "text" : "password"}
        autoComplete={autoComplete}
        spellCheck={spellCheck}
        inputMode={inputMode}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
      />
    );
  },
);

PasswordField.displayName = "PasswordField";

export { PasswordField };
export type { PasswordFieldProps };
