import { ElementType, forwardRef } from "react";
import { cn } from "../../lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

interface TypographyProps<T extends ElementType = "p">
  extends VariantProps<typeof typographyVariants> {
  as?: T;
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
>(({ variant, children, as: Component = "p", className, ...props }, ref) => {
  return (
    <Component
      className={cn(typographyVariants({ variant, className }))}
      ref={ref}
      {...props}
    >
      {children}
    </Component>
  );
});

Typography.displayName = "Typography";

export default Typography;
