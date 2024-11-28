"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";
import Spinner from "./Spinner";
import { Slot } from "@radix-ui/react-slot";

const buttonVariants = cva(
  "font-display font-semibold leading-[1.2] tracking-normal transition-colors flex items-center justify-center gap-1",
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
        sm: "text-sm h-10 px-2 min-w-10",
        md: "text-base h-12 px-3 min-w-12",
        lg: "text-base h-14 px-4 min-w-14",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded",
        md: "rounded-xl",
        lg: "rounded-2xl",
        full: "rounded-full",
      },
      isLoading: {
        true: "bg-transparent text-transparent fill-transparent disabled:bg-transparent disabled:text-transparent border-none",
        false: "",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
      radius: "md",
      fullWidth: false,
    },
  },
);
const iconContainerStyles = {
  sm: {
    width: "1rem",
    height: "1rem",
  },
  md: {
    width: "1.25rem",
    height: "1.25rem",
  },
  lg: {
    width: "1.5rem",
    height: "1.5rem",
  },
};

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
  /**
   * Optional icon to display in the button (max size 16x16px)
   * Set the icon color to `currentColor` to match the button variant color
   */
  icon?: React.ReactNode;
  /**
   * Whether the button should take up the full width of its container
   * @default false
   */
  fullWidth?: boolean;
  /**
   * Whether the button should be rendered as a slot
   * @default false
   */
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant,
      size = "lg",
      radius,
      className,
      isLoading,
      children,
      icon,
      fullWidth,
      asChild,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={buttonVariants({
          variant,
          size,
          radius,
          isLoading,
          fullWidth,
        })}
        {...props}
      >
        {icon && (
          <Slot
            style={{
              ...iconContainerStyles[size],
              opacity: isLoading ? 0 : 1,
            }}
          >
            {icon}
          </Slot>
        )}
        {children && <span>{children}</span>}

        {isLoading && <Spinner className="absolute" />}
      </Comp>
    );
  },
);

Button.displayName = "Button";

export default Button;
