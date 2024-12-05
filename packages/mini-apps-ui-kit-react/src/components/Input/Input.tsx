import * as React from "react";

import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { typographyVariants } from "../Typography";
import { Slot } from "@radix-ui/react-slot";
// "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
// flex  file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground
const inputVariants = cva(
  "h-[3.125rem] w-full rounded-xl border border-gray-100 bg-gray-100 px-3 py-4 text-base text-gray-900 outline-none transition-colors duration-200 placeholder:text-gray-400 focus:border-gray-200 focus:bg-gray-0 focus:shadow-card focus-visible:outline-none disabled:cursor-not-allowed",
  {
    variants: {
      error: {
        true: "border-error-700 bg-error-100 focus:border-error-700 focus:bg-error-100",
      },
      type: {
        file: "file:text-foreground file:border-0 file:bg-transparent file:text-sm file:font-medium",
        // text: "",
        // password: "",
        // email: "",
        // number: "",
        // tel: "",
        // url: "",
        // search: "",
        // date: "",
        // time: "",
        // datetime: "",
        // month: "",
        // week: "",
        // color: "",
        // range: "",
      },
    },
    defaultVariants: {
      error: false,
    },
  },
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    Omit<VariantProps<typeof inputVariants>, "type"> {
  error?: boolean;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, startAdornment, endAdornment, ...props }, ref) => {
    return (
      <div className="relative flex items-center">
        {startAdornment && (
          <div className="absolute left-3 flex items-center">
            <Slot className="">{startAdornment}</Slot>
          </div>
        )}
        <input
          type={type}
          className={cn(
            inputVariants({ error }),
            typographyVariants({ variant: "body", level: 3 }),
            startAdornment && "pl-10",
            endAdornment && "pr-10",
            className,
          )}
          ref={ref}
          {...props}
        />
        {endAdornment && (
          <div className="absolute right-3 flex items-center">
            <Slot className="">{endAdornment}</Slot>
          </div>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";

export default Input;
