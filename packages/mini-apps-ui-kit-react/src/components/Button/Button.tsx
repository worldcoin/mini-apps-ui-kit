"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";

const buttonVariants = cva(
  "font-display font-semibold leading-[1.2] tracking-normal transition-colors",
  {
    variants: {
      variant: {
        primary: "bg-gray-900 text-gray-0",
        secondary: "bg-gray-200 text-gray-900",
        tertiary: "bg-transparent text-gray-500 border border-gray-200",
        ghost: "bg-transparent text-gray-500",
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
   * Optional color override for the button text
   */
  color?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, radius, className, color, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={buttonVariants({ variant, size, radius, className })}
        style={{ color: color }}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export default Button;
