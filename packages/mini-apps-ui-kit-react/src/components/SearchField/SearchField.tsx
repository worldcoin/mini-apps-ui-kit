import { forwardRef, useImperativeHandle, useRef } from "react";

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
    useImperativeHandle(forwardedRef, () => inputRef.current!);

    let endAdornment = endAdornmentProp;
    let endAdornmentWidth = endAdornmentWidthProp;
    if (showPasteButton && !disabled) {
      endAdornment = <PasteButton inputRef={inputRef} label={pasteButtonLabel} />;
      endAdornmentWidth = PASTE_BUTTON_WIDTH;
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
      />
    );
  },
);

SearchField.displayName = "SearchField";

export default SearchField;
