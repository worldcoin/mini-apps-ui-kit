import { ElementType, forwardRef } from "react";
import { cn } from "../../lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

export interface TypographyProps<T extends ElementType = "p">
  extends Omit<VariantProps<typeof typographyVariants>, "variant" | "level"> {
  /**
   * The HTML element to render the typography as
   * @default "p"
   */
  as?: T;
  /**
   * The variant and level combinations for typography
   * @default "body"
   */
  variant?:
    | {
        variant: "number";
        level: 1 | 2 | 3 | 4 | 5 | 6;
      }
    | {
        variant: "heading" | "subtitle" | "body" | "mono";
        level: 1 | 2 | 3 | 4;
      };
}

const typographyVariants = cva("", {
  variants: {
    variant: {
      number: "font-semibold tracking-normal leading-[1.2] font-display",
      heading: "font-semibold tracking-[-0.01em] leading-[1.2] font-display",
      subtitle: "font-medium tracking-normal leading-[1.2] font-sans",
      body: "font-normal tracking-normal leading-[1.3] font-sans",
      mono: "font-normal tracking-normal font-mono",
    },
    level: {
      1: "",
      2: "",
      3: "",
      4: "",
      5: "",
      6: "",
    },
  },
  compoundVariants: [
    {
      variant: "number",
      level: 1,
      className: "text-[3.5rem]",
    },
    {
      variant: "number",
      level: 2,
      className: "text-[2.75rem]",
    },
    {
      variant: "number",
      level: 3,
      className: "text-[2.125rem]",
    },
    {
      variant: "number",
      level: 4,
      className: "text-[1.875rem]",
    },
    {
      variant: "number",
      level: 5,
      className: "text-[1.625rem]",
    },
    {
      variant: "number",
      level: 6,
      className: "text-[1.25rem]",
    },
    {
      variant: "heading",
      level: 1,
      className: "text-[1.875rem]",
    },
    {
      variant: "heading",
      level: 2,
      className: "text-[1.625rem]",
    },
    {
      variant: "heading",
      level: 3,
      className: "text-[1.25rem]",
    },
    {
      variant: "subtitle",
      level: 1,
      className: "text-[1.125rem]",
    },
    {
      variant: "subtitle",
      level: 2,
      className: "text-base",
    },
    {
      variant: "subtitle",
      level: 3,
      className: "text-sm",
    },
    {
      variant: "subtitle",
      level: 4,
      className: "text-xs",
    },
    {
      variant: "body",
      level: 1,
      className: "text-lg",
    },
    {
      variant: "body",
      level: 2,
      className: "text-base",
    },
    {
      variant: "body",
      level: 3,
      className: "text-sm",
    },
    {
      variant: "body",
      level: 4,
      className: "text-xs",
    },
    {
      variant: "mono",
      level: 1,
      className: "text-sm leading-[1]",
    },
    {
      variant: "mono",
      level: 2,
      className: "text-xs leading-[1.25]",
    },
    {
      variant: "mono",
      level: 3,
      className: "text-2xs leading-[1.25]",
    },
    {
      variant: "mono",
      level: 4,
      className: "text-[0.5rem] leading-[1.3]",
    },
  ],
  defaultVariants: {
    variant: "body",
    level: 2,
  },
});

const Typography = forwardRef<
  HTMLElement,
  TypographyProps & React.ComponentPropsWithoutRef<ElementType>
>(
  (
    {
      variant = "body",
      level = 1,
      children,
      as: Component = "p",
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <Component
        className={cn(typographyVariants({ variant, level, className }))}
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
