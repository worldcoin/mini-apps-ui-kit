import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "../../lib/utils";
import { Tick } from "../Icons/Tick";
import { typographyVariants } from "../Typography";

const DEFAULT_ADORNMENT_WIDTH = 1.5;

export const inputVariants = cva(
  "peer h-[3.5rem] w-full rounded-[0.625rem] border border-gray-300 bg-gray-100 px-4 py-4 outline-none transition duration-300 file:hidden placeholder:text-gray-500 placeholder:focus:border-gray-200 focus:bg-gray-0 focus focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      error: {
        true: "border-error-600 focus:border-error-600 bg-gray-0",
      },
      isFocused: {
        true: "border-gray-200 bg-gray-0",
        false: "",
      },
    },
    defaultVariants: {
      error: false,
      isFocused: false,
    },
  },
);

export const iconVariants = cva(
  "absolute top-1 bottom-1 flex items-center justify-center overflow-hidden text-gray-400",
  {
    variants: {
      disabled: {
        true: "text-gray-300 cursor-not-allowed",
      },
      error: {
        true: "text-error-600",
      },
      position: {
        start: "left-1",
        end: "right-1",
      },
    },
    defaultVariants: {
      error: false,
    },
  },
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "className" | "style">,
    VariantProps<typeof inputVariants> {
  /**
   * If true, the input will display in an error state with error styling
   */
  error?: boolean;
  /**
   * If true, the input will display in a valid state with success styling
   */
  isValid?: boolean;
  /**
   * Element to be rendered at the start (left side) of the input.
   * The component passed to this prop must accept a `style` prop.
   * The component should use currentColor to match the Input's styling.
   * To change styles based on input focus, use Tailwind's `group-*` modifiers
   * since the input is wrapped in a group class.
   */
  startAdornment?: React.ReactNode;
  /**
   * Element to be rendered at the end (right side) of the input.
   * The component passed to this prop must accept a `style` prop.
   * The component should use currentColor to match the Input's styling.
   * To change styles based on input focus, use Tailwind's `group-*` modifiers
   * since the input is wrapped in a group class.
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
  /**
   * If true, the input will display in a focused state with focus styling
   * @default false
   */
  isFocused?: boolean;
  /**
   * Additional class name for the input
   */
  className?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = "text",
      error,
      startAdornment,
      endAdornment,
      isValid,
      startAdornmentWidth = DEFAULT_ADORNMENT_WIDTH,
      endAdornmentWidth = DEFAULT_ADORNMENT_WIDTH,
      isFocused = false,
      disabled,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div className="relative flex w-full items-center group">
        {startAdornment && (
          <div
            className={cn(iconVariants({ error, disabled, position: "start" }))}
            style={{ width: `${startAdornmentWidth + 0.75}rem` }}
          >
            {startAdornment}
          </div>
        )}
        <input
          ref={ref}
          type={type}
          disabled={disabled}
          className={cn(
            inputVariants({ error, isFocused }),
            typographyVariants({ variant: "body", level: 3 }),
            className,
          )}
          {...props}
          style={{
            ...(startAdornment && {
              paddingLeft: `${1 + startAdornmentWidth}rem`,
            }),
            ...(endAdornment && {
              paddingRight: `${1 + endAdornmentWidth}rem`,
            }),
            ...(isValid && { paddingRight: `${1 + DEFAULT_ADORNMENT_WIDTH}rem` }),
          }}
        />
        {(isValid || endAdornment) && (
          <div
            className={cn(iconVariants({ error, disabled, position: "end" }))}
            style={{ width: `${endAdornmentWidth + 0.75}rem` }}
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
