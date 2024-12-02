"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { typographyVariants } from "../Typography";
import { cn } from "../../lib/utils";

const pillVariants = cva(
  "transition-colors h-9 inline-flex items-center px-4 rounded-full duration-200",
  {
    variants: {
      checked: {
        true: "bg-gray-100",
        false: "bg-transparent",
      },
    },
    defaultVariants: {
      checked: false,
    },
  },
);

export interface PillProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "style">,
    VariantProps<typeof pillVariants> {
  /**
   * Whether the pill is checked
   * @default false
   */
  checked?: boolean;
}

const Pill = forwardRef<HTMLButtonElement, PillProps>(
  ({ checked, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          pillVariants({ checked }),
          typographyVariants({ variant: "subtitle", level: 3 }),
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Pill.displayName = "Pill";

export default Pill;
