import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import { ReactNode, forwardRef } from "react";

import { Typography } from "../Typography";

type ChipVariant = "default" | "success" | "warning" | "error" | "important";

export interface ChipProps {
  /**
   * The variant of the chip. Default value is "default".
   */
  variant?: ChipVariant;
  /**
   * The label text displayed on the chip.
   */
  label: string;
  /**
   * Optional icon to display alongside the label.
   */
  icon?: ReactNode;
  /**
   *  Optional additional CSS class names.
   */
  className?: string;
}

const chipVariants = cva(
  "inline-flex h-7 items-center gap-2 rounded-full px-2 font-sans text-sm font-medium leading-none",
  {
    variants: {
      variant: {
        default: "bg-gray-100 text-gray-900",
        success: "bg-success-100 text-success-700",
        warning: "bg-warning-100 text-warning-700",
        error: "bg-error-100 text-error-700",
        important: "bg-info-100 text-info-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export const Chip = forwardRef<HTMLDivElement, ChipProps & VariantProps<typeof chipVariants>>(
  ({ className = "", icon, label, variant = "default" }, ref) => {
    return (
      <div ref={ref} className={chipVariants({ variant, className })}>
        {icon && <Slot style={{ width: "1rem", height: "1rem" }}>{icon}</Slot>}
        <Typography variant="subtitle" level={3}>
          {label}
        </Typography>
      </div>
    );
  },
);

Chip.displayName = "Chip";

export default Chip;
