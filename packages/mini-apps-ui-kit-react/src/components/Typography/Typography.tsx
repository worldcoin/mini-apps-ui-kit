import { ElementType, forwardRef } from "react";
import { cn } from "../../lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

interface TypographyProps<T extends ElementType = "p">
  extends VariantProps<typeof typographyVariants> {
  /**
   * The HTML element to render the typography as
   * @default "p"
   */
  as?: T;
  /**
   * The variant of the typography
   * @default "B2"
   */
  variant?:
    | "D1"
    | "N1"
    | "N2"
    | "N3"
    | "N4"
    | "N5"
    | "N6"
    | "H1"
    | "H2"
    | "H3"
    | "H4"
    | "S1"
    | "S2"
    | "S3"
    | "S4"
    | "B1"
    | "B2"
    | "B3"
    | "B4";
}

const typographyVariants = cva("", {
  variants: {
    variant: {
      D1: "text-[56px] font-semibold tracking-normal leading-[1.2] font-display",
      N1: "text-[44px] font-semibold tracking-normal leading-[1.2] font-display",
      N2: "text-[34px] font-semibold tracking-normal leading-[1.2] font-display",
      N3: "text-[30px] font-semibold tracking-normal leading-[1.2] font-display",
      N4: "text-[26px] font-semibold tracking-normal leading-[1.2] font-display",
      N5: "text-[20px] font-semibold tracking-normal leading-[1.2] font-display",
      N6: "text-base font-semibold tracking-normal leading-[1.2] font-display",
      H1: "text-[30px] font-semibold tracking-[-0.01em] leading-[1.2] font-display",
      H2: "text-[26px] font-semibold tracking-[-0.01em] leading-[1.2] font-display",
      H3: "text-[20px] font-semibold tracking-[-0.01em] leading-[1.2] font-display",
      H4: "text-[20px] font-semibold tracking-[-0.01em] leading-[1.2] font-sans",
      S1: "text-[18px] font-medium tracking-normal leading-[1.2] font-sans",
      S2: "text-base font-medium tracking-normal leading-[1.2] font-sans",
      S3: "text-sm font-medium tracking-normal leading-[1.2] font-sans",
      S4: "text-xs font-medium tracking-normal leading-[1.2] font-sans",
      B1: "text-lg font-normal tracking-normal leading-[1.3] font-sans",
      B2: "text-base font-normal tracking-normal leading-[1.3] font-sans",
      B3: "text-sm font-normal tracking-normal leading-[1.3] font-sans",
      B4: "text-xs font-normal tracking-normal leading-[1.3] font-sans",
    },
  },
  defaultVariants: {
    variant: "B2",
  },
});

const Typography = forwardRef<
  HTMLElement,
  TypographyProps & React.ComponentPropsWithoutRef<ElementType>
>(
  (
    { variant = "B2", children, as: Component = "p", className, ...props },
    ref,
  ) => {
    return (
      <Component
        className={cn(typographyVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

Typography.displayName = "Typography";

export default Typography;
