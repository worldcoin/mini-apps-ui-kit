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
      D1: "text-[56px] font-semibold tracking-normal leading-[1.2] font-sora",
      N1: "text-[44px] font-semibold tracking-normal leading-[1.2] font-sora",
      N2: "text-[34px] font-semibold tracking-normal leading-[1.2] font-sora",
      N3: "text-[30px] font-semibold tracking-normal leading-[1.2] font-sora",
      N4: "text-[26px] font-semibold tracking-normal leading-[1.2] font-sora",
      N5: "text-[20px] font-semibold tracking-normal leading-[1.2] font-sora",
      N6: "text-base font-semibold tracking-normal leading-[1.2] font-sora",
      H1: "text-[30px] font-semibold tracking-[-0.01em] leading-[1.2] font-sora",
      H2: "text-[26px] font-semibold tracking-[-0.01em] leading-[1.2] font-sora",
      H3: "text-[20px] font-semibold tracking-[-0.01em] leading-[1.2] font-sora",
      H4: "text-[20px] font-semibold tracking-[-0.01em] leading-[1.2] font-rubik",
      S1: "text-[18px] font-medium tracking-normal leading-[1.2] font-rubik",
      S2: "text-base font-medium tracking-normal leading-[1.2] font-rubik",
      S3: "text-sm font-medium tracking-normal leading-[1.2] font-rubik",
      S4: "text-xs font-medium tracking-normal leading-[1.2] font-rubik",
      B1: "text-lg font-normal tracking-normal leading-[1.3] font-rubik",
      B2: "text-base font-normal tracking-normal leading-[1.3] font-rubik",
      B3: "text-sm font-normal tracking-normal leading-[1.3] font-rubik",
      B4: "text-xs font-normal tracking-normal leading-[1.3] font-rubik",
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
