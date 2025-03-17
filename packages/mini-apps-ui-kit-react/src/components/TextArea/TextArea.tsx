import type { VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "../../lib/utils";
import { inputVariants } from "../Input/Input";
import { typographyVariants } from "../Typography";

export interface TextAreaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "className" | "style">,
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
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ error, isFocused = false, disabled, ...props }, ref) => {
    return (
      <div className="relative flex w-full items-center group">
        <textarea
          ref={ref}
          disabled={disabled}
          className={cn(
            inputVariants({ error, isFocused }),
            typographyVariants({ variant: "body", level: 3 }),
            "min-h-[7.5rem] resize-y",
          )}
          {...props}
        />
      </div>
    );
  },
);

TextArea.displayName = "TextArea";

export default TextArea;
