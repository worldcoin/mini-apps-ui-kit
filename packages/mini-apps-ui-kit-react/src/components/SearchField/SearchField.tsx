"use client";

import { createChangeEvent } from "@/lib/utils";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";

import ClearButton from "../ClearButton";
import { Magnifier } from "../Icons/Magnifier";
import { Input, InputProps } from "../Input";
import PasteButton, { PASTE_BUTTON_WIDTH } from "../PasteButton/PasteButton";

export interface SearchFieldProps
  extends Omit<InputProps, "startAdornment" | "startAdornmentWidth"> {
  /**
   * If true, the input will display in an error state with error styling
   */
  error?: boolean;
  /**
   * If true, the input will display in a valid state with success styling
   */
  isValid?: boolean;
  /**
   * If true, displays a paste button as an end adornment
   * @default false
   */
  showPasteButton?: boolean;
  /**
   * Label for the paste button
   * @default "Paste"
   */
  pasteButtonLabel?: string;
}

export const SearchField = forwardRef<HTMLInputElement, SearchFieldProps>(
  (
    {
      showPasteButton,
      pasteButtonLabel,
      isValid,
      disabled,
      type = "search",
      autoComplete = "off",
      spellCheck = "false",
      endAdornment: endAdornmentProp,
      endAdornmentWidth: endAdornmentWidthProp,
      ...props
    },
    forwardedRef,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    useImperativeHandle(forwardedRef, () => inputRef.current!);

    let endAdornment = endAdornmentProp;
    let endAdornmentWidth = endAdornmentWidthProp;
    if (showPasteButton && !disabled) {
      endAdornment = (
        <PasteButton
          inputRef={inputRef}
          label={pasteButtonLabel}
          onPaste={() => {
            if (inputRef.current) {
              const event = createChangeEvent(inputRef.current);
              props.onChange?.(event);
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
            }
          }}
        />
      );
      endAdornmentWidth = 1.25;
    }

    return (
      <Input
        {...props}
        ref={inputRef}
        startAdornment={<Magnifier />}
        isValid={isValid}
        disabled={disabled}
        endAdornmentWidth={endAdornmentWidth}
        endAdornment={endAdornment}
        type={type}
        autoComplete={autoComplete}
        spellCheck={spellCheck}
        onFocus={(e) => {
          setIsFocused(true);
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          props.onBlur?.(e);
        }}
      />
    );
  },
);

SearchField.displayName = "SearchField";

export default SearchField;
