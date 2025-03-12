"use client";

import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";

import { Spinner } from "../Spinner";
import { Typography } from "../Typography";
import { Fail, Success } from "./icons";

const buttonVariants = cva(
  "flex items-center justify-center rounded-full gap-1 font-display leading-[1.2] tracking-normal transition-colors",
  {
    variants: {
      variant: {
        primary:
          "bg-gray-900 text-gray-0 hover:bg-gray-700 active:bg-gray-700 disabled:bg-gray-100 disabled:text-gray-300",
        secondary:
          "bg-transparent text-gray-900 border border-gray-200 hover:bg-gray-50 active:bg-gray-50 disabled:text-gray-300 disabled:border-gray-100",
        tertiary:
          "bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-200 disabled:text-gray-300 disabled:bg-gray-50",
      },
      size: {
        sm: "h-10 min-w-10 px-2",
        lg: "h-14 min-w-14 px-4",
      },
      stateful: {
        true: "border-none bg-transparent fill-transparent text-transparent hover:bg-transparent active:bg-transparent disabled:bg-transparent disabled:text-transparent",
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
      fullWidth: false,
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * The variant style to use
   * @default "primary"
   */
  variant?: "primary" | "secondary" | "tertiary";
  /**
   * The size of the button
   * @default "md"
   */
  size?: "sm" | "lg";
  /**
   * The state of the button
   * @default undefined
   */
  state?: "pending" | "success" | "failed";
  /**
   * Optional icon to display in the button.
   * The component passed to this prop must accept a `style` prop.
   * The component should use currentColor to match the Input's styling.
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

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant, size = "lg", className, children, icon, fullWidth, asChild, state, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    const stateful = !!state;

    return (
      <Comp
        ref={ref}
        className={buttonVariants({
          variant,
          size,
          stateful,
          fullWidth,
        })}
        {...props}
      >
        {icon && <Slot className={cn("size-6", stateful && "opacity-0")}>{icon}</Slot>}

        {children && (
          <Typography variant="label" level={size === "lg" ? 1 : 2}>
            {children}
          </Typography>
        )}

        {state === "pending" && <Spinner className="absolute size-6" />}
        {state === "success" && <Success className="absolute size-6" />}
        {state === "failed" && <Fail className="absolute size-6" />}
      </Comp>
    );
  },
);

Button.displayName = "Button";

export default Button;
