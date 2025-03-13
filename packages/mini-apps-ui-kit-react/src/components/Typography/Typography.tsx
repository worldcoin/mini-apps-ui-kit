import { cva } from "class-variance-authority";
import { PropsWithChildren, forwardRef } from "react";

import { cn } from "../../lib/utils";

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * The HTML element to render the typography as
   * @default "p"
   */
  as?:
    | "p"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "span"
    | "small"
    | "strong"
    | "div"
    | "em";
}

export interface TypographyNumberProps extends TypographyProps {
  variant?: "number";
  level?: 1 | 2 | 3 | 4 | 5;
}

export interface TypographyCommonProps extends TypographyProps {
  variant?: "heading" | "subtitle" | "body";
  level?: 1 | 2 | 3 | 4;
}

export interface TypographyLabelProps extends TypographyProps {
  variant?: "label";
  level?: 1 | 2;
}

export interface TypographyDisplayProps extends TypographyProps {
  variant?: "display";
  level?: 1;
}

export type TypographyComponentProps =
  | TypographyNumberProps
  | TypographyCommonProps
  | TypographyLabelProps
  | TypographyDisplayProps;

export const typographyVariants = cva("", {
  variants: {
    variant: {
      display: "font-display font-semibold leading-narrow tracking-[-0.02em]",
      heading: "font-display font-semibold leading-narrow tracking-[-0.01em]",
      subtitle: "font-sans font-medium leading-narrow",
      label: "font-sans font-semibold leading-narrow",
      body: "font-sans font-normal leading-compact",
      number: "font-display font-semibold",
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
    // Display
    {
      variant: "display",
      level: 1,
      className: "text-7xl",
    },
    // Heading
    {
      variant: "heading",
      level: 1,
      className: "text-4xl",
    },
    {
      variant: "heading",
      level: 2,
      className: "text-3xl",
    },
    {
      variant: "heading",
      level: 3,
      className: "text-2xl",
    },
    {
      variant: "heading",
      level: 4,
      className: "text-[1.375rem]",
    },
    // Subtitle
    {
      variant: "subtitle",
      level: 1,
      className: "text-lg",
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
    // Label
    {
      variant: "label",
      level: 1,
      className: "text-base",
    },
    {
      variant: "label",
      level: 2,
      className: "text-sm",
    },
    // Body
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
    // Number
    {
      variant: "number",
      level: 1,
      className: "text-6xl tracking-[-0.01em]",
    },
    {
      variant: "number",
      level: 2,
      className: "text-5xl tracking-[-0.02em]",
    },
    {
      variant: "number",
      level: 3,
      className: "text-3xl tracking-[-0.01em]",
    },
    {
      variant: "number",
      level: 4,
      className: "text-xl tracking-[-0.02em]",
    },
    {
      variant: "number",
      level: 5,
      className: "text-base tracking-[-0.02em]",
    },
  ],
  defaultVariants: {
    variant: "body",
    level: 2,
  },
});

export const Typography = forwardRef<HTMLElement, PropsWithChildren<TypographyComponentProps>>(
  (
    { variant = "body", level = 2, children, as: Component = "p", className, ...props },
    ref,
  ) => {
    return (
      <Component
        className={cn(typographyVariants({ variant, level, className }))}
        ref={ref as never}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

Typography.displayName = "Typography";

export default Typography;
