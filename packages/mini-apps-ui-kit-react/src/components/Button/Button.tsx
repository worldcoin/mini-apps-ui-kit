"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";
import Spinner from "./Spinner";

const buttonVariants = cva(
  "font-display font-semibold leading-[1.2] tracking-normal transition-colors flex items-center justify-center pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-gray-900 text-gray-0 hover:bg-gray-700 active:bg-gray-500 disabled:bg-gray-100 disabled:text-gray-300",
        secondary:
          "bg-gray-200 text-gray-900 hover:bg-gray-300 active:bg-gray-400 disabled:bg-gray-100 disabled:text-gray-300",
        tertiary:
          "bg-transparent text-gray-500 border border-gray-200 hover:bg-gray-100 active:bg-gray-200 disabled:text-gray-300",
        ghost:
          "bg-transparent text-gray-500 hover:bg-gray-100 active:bg-gray-200 disabled:text-gray-300",
      },
      size: {
        sm: "text-sm h-10 px-2",
        md: "text-base h-12 px-3",
        lg: "text-base h-14 px-4",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded",
        md: "rounded-xl",
        lg: "rounded-2xl",
        full: "rounded-full",
      },
      isLoading: {
        true: "bg-transparent text-transparent disabled:bg-transparent disabled:text-transparent border-none",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      radius: "md",
    },
  },
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * The variant style to use
   * @default "primary"
   */
  variant?: "primary" | "secondary" | "tertiary" | "ghost";
  /**
   * The size of the button
   * @default "md"
   */
  size?: "sm" | "md" | "lg";
  /**
   * The border radius of the button
   * @default "md"
   */
  radius?: "none" | "sm" | "md" | "lg" | "full";
  /**
   * Whether the button is in a loading state
   * @default false
   */
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant, size, radius, className, isLoading, children, ...props },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={buttonVariants({
          variant,
          size,
          radius,
          isLoading,
          className,
        })}
        {...props}
      >
        {children}
        {isLoading && <Spinner className="absolute" />}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
