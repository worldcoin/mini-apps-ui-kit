import * as React from "react";

import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { Tick } from "../Icons/Tick";

const DEFAULT_ADORNMENT_WIDTH = 1.5;

export const inputVariants = cva(
  "h-[3.125rem] w-full rounded-xl border border-gray-100 bg-gray-100 px-3 py-4 text-base leading-none text-gray-900 outline-none transition-colors duration-200 file:hidden placeholder:text-gray-400 focus:border-gray-200 focus:bg-gray-0 focus:shadow-card focus-visible:outline-none disabled:cursor-not-allowed",
  {
    variants: {
      isError: {
        true: "border-error-700 bg-error-100 focus:border-error-700 focus:bg-error-100",
      },
    },
    defaultVariants: {
      isError: false,
    },
  },
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "className" | "style">,
    Omit<VariantProps<typeof inputVariants>, "type"> {
  /**
   * If true, the input will display in an error state with error styling
   */
  isError?: boolean;
  /**
   * If true, the input will display in a valid state with success styling
   */
  isValid?: boolean;
  /**
   * Element to be rendered at the start (left side) of the input.
   * The component passed to this prop must accept a `style` prop.
   * The component should use currentColor to match the Input's styling.
   */
  startAdornment?: React.ReactNode;
  /**
   * Element to be rendered at the end (right side) of the input.
   * The component passed to this prop must accept a `style` prop.
   * The component should use currentColor to match the Input's styling.
   */
  endAdornment?: React.ReactNode;
  /**
   * Width of the start adornment in rem
   * @default 1.25
   */
  startAdornmentWidth?: number;
  /**
   * Width of the end adornment in rem
   * @default 1.25
   */
  endAdornmentWidth?: number;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = "text",
      isError,
      startAdornment,
      endAdornment,
      isValid,
      startAdornmentWidth = DEFAULT_ADORNMENT_WIDTH,
      endAdornmentWidth = DEFAULT_ADORNMENT_WIDTH,
      ...props
    },
    ref,
  ) => {
    return (
      <div className="relative flex w-full items-center">
        {startAdornment && (
          <div
            className="absolute bottom-3 left-3 top-3 flex items-center justify-start overflow-hidden"
            style={{
              width: `${startAdornmentWidth}rem`,
            }}
          >
            {startAdornment}
          </div>
        )}
        <input
          ref={ref}
          type={type}
          className={cn(inputVariants({ isError }))}
          style={{
            ...(startAdornment && {
              paddingLeft: `${1 + startAdornmentWidth}rem`,
            }),
            ...(endAdornment && {
              paddingRight: `${1 + endAdornmentWidth}rem`,
            }),
            ...(isValid && { paddingRight: `${1 + DEFAULT_ADORNMENT_WIDTH}rem` }),
          }}
          {...props}
        />
        {(endAdornment || isValid) && (
          <div
            className="absolute bottom-3 right-3 top-3 flex items-center justify-end overflow-hidden"
            style={{
              width: `${endAdornmentWidth}rem`,
            }}
          >
            {isValid ? <Tick className="text-success-700" /> : endAdornment}
          </div>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";

export default Input;
