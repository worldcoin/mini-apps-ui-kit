import { forwardRef, useImperativeHandle, useRef } from "react";

import { Magnifier } from "../Icons/Magnifier";
import Input, { InputProps } from "../Input";
import PasteButton, { PASTE_BUTTON_WIDTH } from "../PasteButton/PasteButton";

export interface SearchFieldProps
  extends Omit<
    InputProps,
    "startAdornment" | "endAdornment" | "startAdornmentWidth" | "endAdornmentWidth"
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

const SearchField = forwardRef<HTMLInputElement, SearchFieldProps>(
  ({ showPasteButton, pasteButtonLabel, isValid, disabled, ...props }, forwardedRef) => {
    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(forwardedRef, () => inputRef.current!);
    return (
      <Input
        {...props}
        ref={inputRef}
        startAdornment={<Magnifier />}
        isValid={isValid}
        disabled={disabled}
        endAdornmentWidth={showPasteButton ? PASTE_BUTTON_WIDTH : undefined}
        endAdornment={
          showPasteButton &&
          !disabled && <PasteButton inputRef={inputRef} label={pasteButtonLabel} />
        }
      />
    );
  },
);

SearchField.displayName = "SearchField";

export default SearchField;
