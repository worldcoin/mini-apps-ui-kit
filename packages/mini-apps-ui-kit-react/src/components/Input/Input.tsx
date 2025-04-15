"use client";

import { cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "../../lib/utils";
import { Tick } from "../Icons/Tick";
import { typographyVariants } from "../Typography/Typography";

const inputContainerVariants = cva(
  [
    "bg-gray-100",
    "text-gray-900",
    "h-[3.5rem]",
    "inline-flex",
    "w-full",
    "shrink",
    "cursor-text",
    "items-center",
    "overflow-hidden",
    "border",
    "border-gray-100",
    "rounded-[0.625rem]",
    "outline-none",
    "transition-all",
    "duration-300",
    "ease-out",
    "px-4",
    // Focus state
    "focus-within:border-gray-300",
    "focus-within:bg-gray-0",
    "focus-within:isolate",
    // Disabled state (applied via group-disabled on parent if needed, or directly)
    "has-[input:disabled]:cursor-not-allowed",
    "has-[input:disabled]:opacity-50",
  ],
  {
    variants: {
      error: {
        true: ["bg-gray-0", "border-error-600", "focus-within:border-error-600"],
        false: "",
      },
      areDividers: {
        true: "gap-2.5",
        false: "gap-2",
      },
    },
    defaultVariants: {
      error: false,
      areDividers: false,
    },
  },
);

const inputElementVariants = cva(
  [
    "peer",
    "inline-block",
    "h-full",
    "grow",
    "w-full",
    "appearance-none",
    "bg-transparent",
    "border-none",
    "text-gray-900",
    "placeholder:text-transparent",
    "focus:outline-none",
    "focus-visible:outline-none",
    "disabled:cursor-not-allowed",
  ],
  {
    variants: {
      variant: {
        default: "placeholder:text-gray-500",
        "floating-label": ["pt-6 pb-2"],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const floatingLabelVariants = cva([
  "text-gray-500",
  "pointer-events-none",
  "absolute",
  "start-0",
  "w-fit",
  "max-w-full",
  "top-1/2",
  "overflow-hidden",
  "bg-transparent",
  "text-ellipsis",
  "whitespace-nowrap", // Prevent wrapping
  // Positioning & Transition
  "translate-y-[-50%]",
  "transition-[top,transform,scale,opacity,color]",
  "duration-100",
  "ease-out",
  // Peer states for floating effect (when input has value or is focused)
  "peer-focus:pointer-events-auto",
  "peer-focus:top-[1.125rem]",
  "peer-focus:text-xs",
  "peer-focus:bg-base-100", // Match input background
  // State when placeholder is not shown (i.e., input has value)
  "peer-[:not(:placeholder-shown)]:pointer-events-auto",
  "peer-[:not(:placeholder-shown)]:top-[1.125rem]",
  "peer-[:not(:placeholder-shown)]:text-xs",
]);

const dividerVariants = cva("border-r h-[1.625rem] w-1", {
  variants: {
    error: {
      true: "border-error-600",
      false: "border-gray-300",
    },
  },
  defaultVariants: {
    error: false,
  },
});

interface InputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "className" | "style" | "placeholder" | "size" // Omit HTML size attribute
  > {
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
   */
  startAdornment?: React.ReactNode;
  /**
   * Element to be rendered at the end (right side) of the input.
   */
  endAdornment?: React.ReactNode;
  // Removed isFocused prop as focus state is handled by CSS focus-within
  /**
   * Additional class name for the input container
   */
  className?: string;
  /**
   * Label text to be displayed above the input or as floating label
   */
  label?: string;
  /**
   * Variant of the input
   * @default "default"
   */
  variant?: "default" | "floating-label";
  /**
   * If true, the start divider will be shown when startAdornment is present.
   * @default false // Default dividers to false
   */
  showStartDivider?: boolean;
  /**
   * If true, the end divider will be shown when endAdornment or isValid is present.
   * @default false // Default dividers to false
   */
  showEndDivider?: boolean;
  /**
   * Id for the input element, used for label association. Auto-generated if not provided.
   */
  id?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = "text",
      error = false,
      startAdornment,
      endAdornment,
      isValid,
      disabled,
      className,
      label,
      id: providedId,
      showStartDivider = false,
      showEndDivider = false,
      variant = "default",
      ...props
    },
    ref,
  ) => {
    const generatedId = React.useId();
    const id = providedId || generatedId;
    const hasStartAdornment = !!startAdornment;
    const hasEndAdornment = isValid || !!endAdornment;

    return (
      <div
        className={cn(
          inputContainerVariants({ error, areDividers: showStartDivider || showEndDivider }),
          className,
        )}
      >
        {hasStartAdornment && (
          <>
            <div className="inline-flex items-center justify-center shrink-0 text-gray-500">
              {startAdornment}
            </div>
            {showStartDivider && <div className={dividerVariants({ error })} />}
          </>
        )}

        {variant === "floating-label" ? (
          <div className="relative grow h-full">
            <input
              ref={ref}
              id={id}
              type={type}
              placeholder={label || " "}
              disabled={disabled}
              aria-invalid={error}
              className={cn(
                typographyVariants({ variant: "body", level: 3 }),
                inputElementVariants({
                  variant,
                }),
              )}
              {...props}
            />

            <label
              className={cn(
                floatingLabelVariants(),
                typographyVariants({ variant: "body", level: 3 }),
              )}
              htmlFor={id}
            >
              {label}
            </label>
          </div>
        ) : (
          <>
            {/* Screen-reader only label */}
            {label && (
              <label className="sr-only" htmlFor={id}>
                {label}
              </label>
            )}
            <input
              ref={ref}
              id={id}
              type={type}
              placeholder={label}
              disabled={disabled}
              aria-invalid={error}
              className={cn(
                inputElementVariants({
                  variant,
                }),
                typographyVariants({ variant: "body", level: 3 }),
              )}
              {...props}
            />
          </>
        )}

        {hasEndAdornment && (
          <>
            {showEndDivider && <div className={dividerVariants({ error })} />}
            <div className="inline-flex items-center justify-center shrink-0 text-gray-500">
              {isValid ? <Tick className="text-success-700" /> : endAdornment}
            </div>
          </>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };
export type { InputProps };
