import type { ButtonHTMLAttributes } from "react";
import * as React from "react";

import { cn } from "../../lib/utils";
import Typography from "../Typography";

interface PasteButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Reference to an input element that will receive the pasted text
   */
  inputRef: React.ForwardedRef<HTMLInputElement>;
  /**
   * Text to display on the paste button
   * @default "Paste"
   */
  label?: string;
  /**
   * Optional callback function that will be called after a successful paste
   */
  onPaste?: () => void;
}

export const PASTE_BUTTON_WIDTH = 3.875;

const PasteButton = React.forwardRef<HTMLButtonElement, PasteButtonProps>(
  ({ children, inputRef, label = "Paste", className, onPaste, ...props }, ref) => {
    const handlePaste = async () => {
      try {
        if (inputRef && "current" in inputRef && inputRef.current) {
          const text = await navigator.clipboard.readText();
          inputRef.current.value = text;
          onPaste?.();
        }
      } catch (error) {
        console.error("Failed to read clipboard:", error);
      }
    };

    return (
      <button
        type="button"
        ref={ref}
        className={cn(
          className,
          "flex h-full w-full items-center justify-center rounded-lg px-4 text-base font-medium text-gray-500 transition duration-300 bg-gray-0 group-focus-within:bg-gray-100 disabled:cursor-not-allowed",
        )}
        onClick={handlePaste}
        {...props}
      >
        <Typography variant="subtitle" level={4} className="uppercase text-gray-900">
          {label}
        </Typography>
      </button>
    );
  },
);

PasteButton.displayName = "PasteButton";

export default PasteButton;
