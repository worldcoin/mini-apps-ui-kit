import type { ButtonHTMLAttributes } from "react";
import * as React from "react";

import { cn } from "../../lib/utils";
import { Typography } from "../Typography";
import { MagicWand } from "../icons/MagicWand";

interface PasteButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onPaste"> {
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
  onPaste?: (value: string) => void;
}

const PasteButton = React.forwardRef<HTMLButtonElement, PasteButtonProps>(
  ({ children, inputRef, label = "Paste", className, onPaste, ...props }, ref) => {
    const handlePaste = async () => {
      try {
        if (inputRef && "current" in inputRef && inputRef.current) {
          const text = await navigator.clipboard.readText();
          inputRef.current.value = text;
          onPaste?.(text);
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
          "flex h-full w-full items-center justify-center px-4 gap-1 text-gray-900 transition duration-300 bg-transparent disabled:cursor-not-allowed",
        )}
        onClick={handlePaste}
        {...props}
      >
        <Typography variant="subtitle" level={3}>
          {label}
        </Typography>
        <MagicWand />
      </button>
    );
  },
);

PasteButton.displayName = "PasteButton";

export { PasteButton };
export type { PasteButtonProps };
