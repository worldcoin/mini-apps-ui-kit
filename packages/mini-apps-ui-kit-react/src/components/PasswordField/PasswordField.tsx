"use client";

import { forwardRef, useState } from "react";

import { Input, InputProps } from "../Input";
import { Eye } from "../icons/Eye";
import { EyeClosed } from "../icons/EyeClosed";

export interface PasswordFieldProps extends Omit<InputProps, "startAdornment"> {
  /**
   * If true, the input will display in an error state with error styling
   */
  error?: boolean;
  /**
   * If true, the input will display in a valid state with success styling
   */
  isValid?: boolean;
}

export const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
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
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
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

export default PasswordField;
