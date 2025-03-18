import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "../../lib/utils";
import { Tick } from "../Icons/Tick";
import { typographyVariants } from "../Typography";

const DEFAULT_ADORNMENT_WIDTH = 1.5;

export const inputVariants = cva(
  cn(
    "peer h-[3.5rem] w-full rounded-[0.625rem] border border-gray-100 bg-gray-100 px-4 outline-none transition duration-300",
    "file:hidden",
    "invalid:border-error-600 invalid:focus:border-error-600 invalid:bg-gray-0",
    "placeholder:text-gray-500",
    "focus:border-gray-300 focus:bg-gray-0 focus-visible:outline-none",
    "disabled:cursor-not-allowed disabled:opacity-50",
  ),
  {
    variants: {
      error: {
        true: "border-error-600 focus:border-error-600 bg-gray-0",
      },
      isLabel: {
        true: "pt-6 pb-2 placeholder:text-transparent",
        false: "",
      },
      isFocused: {
        true: "focus:border-gray-300 focus:bg-gray-0 focus-visible:outline-none",
        false: "",
      },
      variant: {
        "floating-label": "pt-6 pb-2 placeholder:text-transparent",
        default: "",
      },
    },
    defaultVariants: {
      error: false,
      isFocused: false,
      variant: "default",
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
      position: {
        start: "left-0",
        end: "right-0",
      },
    },
  },
);

const dividerVariants = cva("border-r  h-[1.625rem] absolute", {
  variants: {
    position: {
      start: "left-0",
      end: "right-0",
    },
    error: {
      true: "border-error-600",
      false: "border-gray-300",
    },
  },
  defaultVariants: {
    error: false,
  },
});

export interface InputProps
  extends Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      "className" | "style" | "placeholder"
    >,
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
  /**
   * Label text to be displayed above the input
   */
  label?: string;
  /**
   * Variant of the input
   * @default "default"
   */
  variant?: "default" | "floating-label";
  /**
   * If true, the dividers will be shown
   * @default true
   */
  showStartDivider?: boolean;
  /**
   * If true, the end divider will be shown
   * @default true
   */
  showEndDivider?: boolean;
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
      disabled,
      className,
      label,
      id,
      showStartDivider,
      showEndDivider,
      variant = "default",
      ...props
    },
    ref,
  ) => {
    return (
      <div className="relative flex w-full items-center group">
        {startAdornment && (
          <div
            className={cn(iconVariants({ disabled, position: "start" }))}
            style={{ width: `${startAdornmentWidth + 1}rem` }}
          >
            {startAdornment}
            {showStartDivider && (
              <div className={dividerVariants({ position: "end", error })} />
            )}
          </div>
        )}
        <input
          ref={ref}
          id={id}
          type={type}
          placeholder={label}
          disabled={disabled}
          className={cn(
            inputVariants({ error, isLabel: variant === "floating-label" }),
            typographyVariants({ variant: "body", level: 3 }),
            className,
          )}
          {...props}
          style={{
            ...(startAdornment && {
              paddingLeft: `${(showStartDivider ? 1.6 : 1) + startAdornmentWidth}rem`,
            }),
            ...(endAdornment && {
              paddingRight: `${(showEndDivider ? 1.6 : 1) + endAdornmentWidth}rem`,
            }),
            ...(isValid && { paddingRight: `${1 + DEFAULT_ADORNMENT_WIDTH}rem` }),
          }}
        />
        {(isValid || endAdornment) && (
          <div
            className={cn(iconVariants({ disabled, position: "end" }))}
            style={{ width: `${endAdornmentWidth + 1}rem` }}
          >
            {isValid ? <Tick className="text-success-700" /> : endAdornment}
            {showEndDivider && (
              <div className={dividerVariants({ position: "start", error })} />
            )}
          </div>
        )}
        {variant === "floating-label" && (
          <label
            htmlFor={id}
            className={cn(
              typographyVariants({ variant: "body", level: 3 }),
              cn(
                // Initial state
                "peer-placeholder-shown:text-sm peer-placeholder-shown:translate-y-0",
                "peer-focus:-translate-y-[0.6rem] peer-focus:text-xs",
                // End state
                "absolute text-gray-500 duration-300 transform text-xs",
                "-translate-y-[0.6rem] z-10 pl-4",
              ),
            )}
            style={{
              ...(startAdornment && {
                paddingLeft: `${1 + startAdornmentWidth}rem`,
              }),
            }}
          >
            {label}
          </label>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
