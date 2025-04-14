import haptics from "@/lib/haptics";
import type { ButtonHTMLAttributes } from "react";
import * as React from "react";

import { cn } from "../../lib/utils";
import { Clear } from "./Clear";

interface ClearButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Reference to an input element that will receive the pasted text
   */
  inputRef: React.ForwardedRef<HTMLInputElement>;
  /**
   * Optional callback function that will be called after a successful paste
   */
  onClear?: () => void;
}

const ClearButton = React.forwardRef<HTMLButtonElement, ClearButtonProps>(
  ({ children, inputRef, className, onClear, ...props }, ref) => {
    const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      e.stopPropagation();

      if (inputRef && "current" in inputRef && inputRef.current) {
        inputRef.current.value = "";
        onClear?.();
        haptics.impact("light");
      }
    };

    return (
      <button
        type="button"
        ref={ref}
        className={cn(className)}
        onMouseDown={handleClear}
        {...props}
      >
        <Clear />
      </button>
    );
  },
);

ClearButton.displayName = "ClearButton";

export { ClearButton };
export type { ClearButtonProps };
