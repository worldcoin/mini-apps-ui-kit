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
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export interface TypographySubtitleBodyMonoProps extends TypographyProps {
  variant?: "subtitle" | "body" | "mono";
  level?: 1 | 2 | 3 | 4;
}

export interface TypographyHeadingProps extends TypographyProps {
  variant?: "heading";
  level?: 1 | 2 | 3;
}

export type TypographyComponentProps =
  | TypographyNumberProps
  | TypographySubtitleBodyMonoProps
  | TypographyHeadingProps;

export const typographyVariants = cva("", {
  variants: {
    variant: {
      number: "font-display font-semibold leading-narrow tracking-normal",
      heading: "font-display font-semibold tracking-[-0.01em] leading-narrow",
      subtitle: "font-sans font-medium leading-narrow tracking-normal",
      body: "font-sans font-normal leading-compact tracking-normal",
      mono: "font-mono font-normal tracking-normal",
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
      className: "text-sm leading-none",
    },
    {
      variant: "mono",
      level: 2,
      className: "text-xs leading-narrow",
    },
    {
      variant: "mono",
      level: 3,
      className: "text-2xs leading-narrow",
    },
    {
      variant: "mono",
      level: 4,
      className: "text-[0.5rem] leading-compact",
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
