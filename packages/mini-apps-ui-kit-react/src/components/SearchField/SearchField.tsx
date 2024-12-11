import * as React from "react";

import { Magnifier } from "../Icons/Magnifier";
import Input, { InputProps } from "../Input";

export interface SearchFieldProps extends Omit<InputProps, "startAdornment" | "endAdornment"> {}

const SearchField = React.forwardRef<HTMLInputElement, SearchFieldProps>((props, ref) => {
  return <Input {...props} ref={ref} startAdornment={<Magnifier />} />;
});

SearchField.displayName = "SearchField";

export default SearchField;
