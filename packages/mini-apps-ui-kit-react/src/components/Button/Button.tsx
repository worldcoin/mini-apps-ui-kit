"use client";

import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";

import { typographyVariants } from "../Typography/Typography";

const buttonVariants = cva(
  "flex items-center justify-center rounded-full gap-2 font-sans leading-[1.2] tracking-normal transition-colors",
  {
    variants: {
      variant: {
        primary:
          "bg-gray-900 text-gray-0 hover:bg-gray-700 disabled:bg-gray-100 disabled:text-gray-300",
        secondary:
          "bg-transparent text-gray-900 border border-gray-200 hover:bg-gray-50 disabled:text-gray-300 disabled:border-gray-100",
        tertiary:
          "bg-gray-100 text-gray-900 hover:bg-gray-200 disabled:text-gray-300 disabled:bg-gray-50",
      },
      size: {
        sm: "h-10 min-w-10 px-4",
        lg: "h-14 min-w-14 px-4",
        icon: "size-10",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
      fullWidth: false,
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
  variant?: "primary" | "secondary" | "tertiary";
  /**
   * The size of the button
   * @default "lg"
   */
  size?: "sm" | "lg" | "icon";
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
  ({ variant = "primary", size = "lg", fullWidth, asChild, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        {...props}
        className={cn(
          buttonVariants({
            variant,
            size,
            fullWidth,
          }),
          typographyVariants({
            variant: "label",
            level: size === "lg" ? 1 : 2,
          }),
          props.className,
        )}
      >
        {children}
      </Comp>
    );
  },
);

Button.displayName = "Button";

export { Button };
export type { ButtonProps };
