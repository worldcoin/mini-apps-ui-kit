"use client";

import { createChangeEvent } from "@/lib/utils";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";

import ClearButton from "../ClearButton";
import { Input, InputProps } from "../Input";
import PasteButton, { PASTE_BUTTON_WIDTH } from "../PasteButton/PasteButton";

export interface WalletAddressFieldProps
  extends Omit<
    InputProps,
    "startAdornment" | "startAdornmentWidth" | "endAdornment" | "endAdornmentWidth"
  > {
  /**
   * If true, the input will display in an error state with error styling
   */
  error?: boolean;
  /**
   * If true, the input will display in a valid state with success styling
   */
  isValid?: boolean;
  /**
   * Label for the input
   * @default "Enter wallet address"
   */
  label?: string;
  /**
   * Label for the paste button
   * @default "Paste"
   */
  pasteButtonLabel?: string;
}

export const WalletAddressField = forwardRef<HTMLInputElement, WalletAddressFieldProps>(
  (
    {
      isValid,
      disabled,
      type = "text",
      autoComplete = "off",
      spellCheck = "false",
      label = "Wallet address",
      pasteButtonLabel = "Paste",
      ...props
    },
    forwardedRef,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isPasted, setIsPasted] = useState(false);
    const [value, setValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    useImperativeHandle(forwardedRef, () => inputRef.current!);

    let endAdornment;
    let endAdornmentWidth;
    if (!disabled && !isPasted && !value) {
      endAdornment = (
        <PasteButton
          inputRef={inputRef}
          label={pasteButtonLabel}
          onPaste={() => {
            if (inputRef.current) {
              const event = createChangeEvent(inputRef.current);
              props.onChange?.(event);
              setIsPasted(true);
            }
          }}
        />
      );
      endAdornmentWidth = PASTE_BUTTON_WIDTH;
    } else if (isFocused && !disabled) {
      endAdornment = (
        <ClearButton
          inputRef={inputRef}
          onClear={() => {
            if (inputRef.current) {
              const event = createChangeEvent(inputRef.current);
              props.onChange?.(event);
              setValue("");
            }
          }}
        />
      );
      endAdornmentWidth = 2.3;
    }

    return (
      <Input
        {...props}
        ref={inputRef}
        isValid={isValid}
        disabled={disabled}
        startAdornmentWidth={2.3}
        endAdornmentWidth={endAdornmentWidth}
        endAdornment={endAdornment}
        type={type}
        autoComplete={autoComplete}
        spellCheck={spellCheck}
        label={label}
        onFocus={(e) => {
          setIsFocused(true);
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          props.onBlur?.(e);
        }}
        onChange={(e) => {
          props.onChange?.(e);
          setValue(e.target.value);
        }}
      />
    );
  },
);

WalletAddressField.displayName = "WalletAddressField";

export default WalletAddressField;
