import * as React from "react";

import { Magnifier } from "../Icons/Magnifier";
import Input, { InputProps } from "../Input";

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

const SearchField = React.forwardRef<HTMLInputElement, SearchFieldProps>((props, ref) => {
  return <Input {...props} ref={ref} startAdornment={<Magnifier />} />;
});

SearchField.displayName = "SearchField";

export default SearchField;
