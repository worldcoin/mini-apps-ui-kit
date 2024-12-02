import * as React from "react";

import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { typographyVariants } from "../Typography";

// flex  file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground
const inputVariants = cva(
  "bg-gray-100 placeholder:text-gray-400 text-gray-900 h-[3.125rem] border border-gray-100 rounded-xl px-3 py-4 focus:bg-gray-0 focus:border-gray-200 w-full outline-none transition-colors duration-200 focus:shadow-card  disabled:cursor-not-allowed focus-visible:outline-none ",
  {
    variants: {
      error: {
        true: "border-error-700 bg-error-100 focus:border-error-700 focus:bg-error-100",
      },
    },
    defaultVariants: {
      error: false,
    },
  },
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          inputVariants({ error }),
          typographyVariants({ variant: "body", level: 3 }),
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export default Input;
