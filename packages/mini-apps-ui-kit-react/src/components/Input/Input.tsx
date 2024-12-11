import type { VariantProps } from "class-variance-authority";

import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "../../lib/utils";
import EndAdornment from "./EndAdornment";

const DEFAULT_ADORNMENT_WIDTH = 1.5;

export const inputVariants = cva(
  "peer h-[3.125rem] w-full rounded-xl border-2 border-gray-100 bg-gray-100 px-2.5 py-4 text-base leading-none text-gray-900 outline-none transition duration-300 file:hidden placeholder:text-gray-400 focus:border-gray-200 focus:bg-gray-0 focus:shadow-card focus-visible:outline-none disabled:cursor-not-allowed",
  {
    variants: {
      error: {
        true: "border-error-700 bg-error-100 focus:border-error-700 focus:bg-error-100",
      },
      isFocused: {
        true: "border-gray-200 bg-gray-0 shadow-card",
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
  "absolute bottom-3 top-3 flex items-center justify-end overflow-hidden",
  {
    variants: {
      error: {
        true: "text-error-700",
      },
      disabled: {
        true: "text-gray-300 cursor-not-allowed",
        false: "text-gray-400",
      },
      position: {
        start: "left-3",
        end: "right-3",
      },
    },
    defaultVariants: {
      error: false,
      disabled: false,
    },
  },
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "className" | "style">,
    Omit<VariantProps<typeof inputVariants>, "type"> {
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
  /**
   * If true, the input will display in a focused state with focus styling
   * @default false
   */
  isFocused?: boolean;

  /**
   * If true, displays a paste button as an end adornment
   * @default false
   */
  showPasteButton?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = "text",
      error,
      startAdornment,
      endAdornment,
      isValid,
      showPasteButton,
      startAdornmentWidth = DEFAULT_ADORNMENT_WIDTH,
      endAdornmentWidth = DEFAULT_ADORNMENT_WIDTH,
      isFocused = false,
      disabled,
      ...props
    },
    ref,
  ) => {
    const inputRef: React.RefObject<HTMLInputElement> = React.useMemo(
      () => ref || React.createRef<HTMLInputElement>(),
      [ref],
    );
    return (
      <div className="relative flex w-full items-center">
        {startAdornment && (
          <Slot
            className={cn(iconVariants({ error, disabled, position: "start" }))}
            style={{ width: `${startAdornmentWidth}rem` }}
          >
            {startAdornment}
          </Slot>
        )}
        <input
          ref={inputRef}
          type={type}
          disabled={disabled}
          className={cn(inputVariants({ error, isFocused }))}
          {...props}
          style={{
            ...(startAdornment && {
              paddingLeft: `${1 + startAdornmentWidth}rem`,
            }),
            ...((endAdornment || showPasteButton) && {
              paddingRight: `${1 + endAdornmentWidth}rem`,
            }),
            ...(isValid && { paddingRight: `${1 + DEFAULT_ADORNMENT_WIDTH}rem` }),
          }}
        />
        {(endAdornment || isValid || showPasteButton) && (
          <Slot
            className={cn(iconVariants({ error, disabled, position: "end" }))}
            style={{ width: `${endAdornmentWidth}rem` }}
          >
            <EndAdornment
              isValid={isValid}
              showPasteButton={showPasteButton}
              inputRef={inputRef}
              endAdornment={endAdornment}
            />
          </Slot>
        )}
      </div>
    );
  },
);
// endAdornmentWidth={3.875}

Input.displayName = "Input";

export default Input;
