import { forwardRef, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

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
  "font-sans h-7 inline-flex items-center gap-2 px-2 rounded-full font-medium text-sm leading-none",
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

const Chip = forwardRef<
  HTMLDivElement,
  ChipProps & VariantProps<typeof chipVariants>
>(({ className = "", icon, label, variant = "default" }, ref) => {
  return (
    <div ref={ref} className={chipVariants({ variant, className })}>
      {icon && <Slot style={{ width: "1rem", height: "1rem" }}>{icon}</Slot>}
      <span>{label}</span>
    </div>
  );
});

Chip.displayName = "Chip";

export default Chip;
