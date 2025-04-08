import { cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "../../lib/utils";
import { Tick } from "../Icons/Tick";
import { typographyVariants } from "../Typography";

const inputContainerVariants = cva(
  [
    "bg-gray-100",
    "text-base-content",
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
    "gap-2",
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
    },
    defaultVariants: {
      error: false,
    },
  },
);

const inputElementVariants = cva(
  [
    // Base styles for <input>
    "peer", // Add peer class for floating label interaction
    "inline-block",
    "h-full",
    "grow",
    "appearance-none",
    "bg-transparent",
    "border-none",
    "placeholder:text-base-content/50",
    "focus:outline-none",
    "focus-visible:outline-none",
    // Disabled state
    "disabled:cursor-not-allowed",
    // Floating label specific placeholder interaction
    // These are applied based on variant prop
  ],
  {
    variants: {
      variant: {
        default: "placeholder:text-base-content/50",
        "floating-label": [
          "placeholder:text-transparent", // Hide placeholder by default for floating
          "focus:placeholder:text-base-content/50", // Show placeholder on focus
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const floatingLabelContainerVariants = cva(["relative", "grow", "h-full"]);

const floatingLabelVariants = cva(
  [
    // Base styles from .input-floating-label
    "text-base-content/50",
    "pointer-events-none",
    "absolute",
    "start-0", // Position relative to container start
    "w-fit",
    "max-w-[calc(100%-2rem)]", // Prevent overlap with end adornment/padding
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
    "peer-focus:top-0",
    "peer-focus:translate-x-[-0.25rem]", // Adjust horizontal position slightly (example)
    "peer-focus:-translate-y-1/2", // Adjust vertical position (top is 0, translate -50%)
    "peer-focus:scale-75",
    "peer-focus:bg-base-100", // Match input background
    "peer-focus:px-1",
    "peer-focus:font-medium",
    "peer-focus:text-[var(--color-primary)]", // Focused label color
    // State when placeholder is not shown (i.e., input has value)
    "peer-[:not(:placeholder-shown)]:pointer-events-auto",
    "peer-[:not(:placeholder-shown)]:top-0",
    "peer-[:not(:placeholder-shown)]:translate-x-[-0.25rem]", // Adjust horizontal position slightly
    "peer-[:not(:placeholder-shown)]:-translate-y-1/2", // Adjust vertical position
    "peer-[:not(:placeholder-shown)]:scale-75",
    "peer-[:not(:placeholder-shown)]:bg-base-100",
    "peer-[:not(:placeholder-shown)]:px-1",
    "peer-[:not(:placeholder-shown)]:font-medium",
    // Error state color for label
    "peer-focus:peer-aria-[invalid=true]:text-error-600", // Adjust color if error+focused
    // Disabled state for label
    "peer-disabled:text-base-content/30",
  ],
  {
    variants: {
      error: {
        // Apply error color directly when input has aria-invalid=true
        true: "peer-aria-[invalid=true]:text-error-600 peer-focus:peer-aria-[invalid=true]:!text-error-600", // Apply error color even when not focused if invalid
        false: "",
      },
    },
    defaultVariants: {
      error: false,
    },
  },
);

const dividerVariants = cva("border-r h-[1.625rem] w-1", {
  variants: {
    error: {
      true: "border-error-600",
      false: "border-gray-300", // Consider using a theme variable like border-base-content/20 ?
    },
  },
  defaultVariants: {
    error: false,
  },
});

export interface InputProps
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

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = "text",
      error = false, // Default error to false
      startAdornment,
      endAdornment,
      isValid,
      disabled,
      className,
      label,
      id: providedId,
      showStartDivider = false, // Default dividers to false
      showEndDivider = false,
      variant = "default",
      ...props
    },
    ref,
  ) => {
    const generatedId = React.useId();
    const id = providedId || generatedId;
    const hasStartAdornment = !!startAdornment;
    // End adornment exists if isValid is true OR endAdornment prop is provided
    const hasEndAdornment = isValid || !!endAdornment;

    return (
      <div className={cn(inputContainerVariants({ error }), className)}>
        {hasStartAdornment && (
          <>
            <div className="inline-flex items-center justify-center shrink-0">
              {startAdornment}
            </div>
            {showStartDivider && <div className={dividerVariants({ error })} />}
          </>
        )}

        {variant === "floating-label" ? (
          <div
            className={cn(
              "relative grow h-full",
              variant === "floating-label" && "self-stretch",
            )}
          >
            <input
              ref={ref}
              id={id}
              type={type}
              // Use a space or label as placeholder for floating label CSS trick (:placeholder-shown)
              placeholder={label || " "}
              disabled={disabled}
              aria-invalid={error} // Accessibility for error state
              className={cn(
                inputElementVariants({
                  variant,
                }),
                "h-full", // Ensure input takes full height for label positioning
                // Remove input's own padding if corresponding adornment exists
                hasStartAdornment && "ps-0",
                hasEndAdornment && "pe-0",
              )}
              {...props}
            />
            {/* Floating Label */}
            <label className={cn(floatingLabelVariants({ error }))} htmlFor={id}>
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
                typographyVariants({ variant: "body" }),
              )}
              {...props}
            />
          </>
        )}

        {hasEndAdornment && (
          <>
            {showEndDivider && <div className={dividerVariants({ error })} />}
            <div className="inline-flex items-center justify-center shrink-0">
              {isValid ? <Tick className="text-success-700" /> : endAdornment}
            </div>
          </>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
