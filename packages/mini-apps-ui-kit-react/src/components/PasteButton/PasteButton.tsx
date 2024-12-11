import type { ButtonHTMLAttributes } from "react";

import * as React from "react";

import { cn } from "../../lib/utils";
import Typography from "../Typography";

interface PasteButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  inputRef?: React.RefObject<HTMLInputElement>;
  label?: string;
}

export const PASTE_BUTTON_WIDTH = 3.875;

const PasteButton = React.forwardRef<HTMLButtonElement, PasteButtonProps>(
  ({ children, inputRef, label = "Paste", className, ...props }, ref) => {
    return (
      <button
        type="button"
        ref={ref}
        className={cn(
          className,
          "bottom-1 right-1 top-1  flex h-[2.625rem] w-[3.875rem] items-center justify-center rounded-lg px-4 text-base font-medium text-gray-500 transition duration-300 bg-gray-0 peer-focus:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50",
        )}
        onClick={async () => {
          try {
            if (inputRef?.current) {
              const text = await navigator.clipboard.readText();
              inputRef.current.value = text;
            }
          } catch (error) {
            console.error("Failed to read clipboard:", error);
          }
        }}
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
