import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "../../lib/utils";
import { inputVariants } from "../Input/Input";
import { typographyVariants } from "../Typography";

export interface TextAreaProps
  extends Omit<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
      "className" | "style" | "placeholder"
    >,
    VariantProps<typeof inputVariants> {
  /**
   * If true, the textarea will display in an error state with error styling
   */
  error?: boolean;
  /**
   * If true, the textarea will display in a focused state with focus styling
   * @default false
   */
  isFocused?: boolean;
  /**
   * The label text for the textarea
   */
  label?: string;
  /**
   * Variant of the input
   * @default "default"
   */
  variant?: "default" | "floating-label";
}

const textAreaVariants = cva("min-h-[7.5rem] resize-y", {
  variants: {
    variant: {
      "floating-label": "pt-8",
      default: "pt-4",
    },
  },
});

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ error, isFocused = false, disabled, label, variant = "default", id, ...props }, ref) => {
    return (
      <div className="relative flex w-full items-center group">
        <textarea
          ref={ref}
          id={id}
          placeholder={label}
          disabled={disabled}
          className={cn(
            inputVariants({ error, isFocused, variant }),
            typographyVariants({ variant: "body", level: 3 }),
            textAreaVariants({ variant }),
          )}
          {...props}
        />
        {variant === "floating-label" && (
          <label
            htmlFor={id}
            className={cn(
              typographyVariants({ variant: "body", level: 3 }),
              cn(
                // Initial state
                "peer-placeholder-shown:text-sm",
                "peer-focus:text-xs peer-focus:border-gray-300 peer-focus:bg-gray-0",
                // End state
                "absolute text-gray-500 duration-300 transform text-xs top-0 pt-4 z-10 pl-4 w-full bg-gray-100 rounded-t-[0.625rem] border-t border-x border-gray-100",
              ),
            )}
          >
            {label}
          </label>
        )}
      </div>
    );
  },
);

TextArea.displayName = "TextArea";

export default TextArea;
