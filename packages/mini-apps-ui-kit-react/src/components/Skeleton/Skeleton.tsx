import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

import { TypographyComponentProps } from "../Typography/Typography";

interface SkeletonProps extends ComponentProps<"div"> {
  /**
   * Width of the skeleton
   */
  width?: string | number;
  /**
   * Height of the skeleton
   */
  height?: string | number;
}

const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, width, height, style, ...props }, ref) => {
    return (
      <div
        role="status"
        ref={ref}
        className={cn("rounded-md skeleton m-0", className)}
        style={{
          ...style,
          width,
          height,
        }}
        {...props}
      />
    );
  },
);

Skeleton.displayName = "Skeleton";

type SkeletonTypographyProps = Omit<SkeletonProps, "height"> & {
  /**
   * Number of lines to show
   * @default 1
   */
  lines?: number;
  /**
   * The variant of the typography
   * @default "body"
   */
  variant?: TypographyComponentProps["variant"];
  /**
   * The level of the typography
   * @default 2
   */
  level?: TypographyComponentProps["level"];
};

export const skeletonVariants = cva("", {
  variants: {
    variant: {
      display: "",
      heading: "",
      subtitle: "",
      label: "",
      body: "",
      number: "",
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
      className: "h-[4.2rem] py-[0.35rem]",
    },
    // Heading
    {
      variant: "heading",
      level: 1,
      className: "h-[2.55rem] py-[0.2125rem]",
    },
    {
      variant: "heading",
      level: 2,
      className: "h-[2.25rem] py-[0.1875rem]",
    },
    {
      variant: "heading",
      level: 3,
      className: "h-[1.95rem] py-[0.1625rem]",
    },
    {
      variant: "heading",
      level: 4,
      className: "h-[1.65rem] py-[0.1375rem]",
    },
    // Subtitle
    {
      variant: "subtitle",
      level: 1,
      className: "h-[1.425rem] py-[0.11875rem]",
    },
    {
      variant: "subtitle",
      level: 2,
      className: "h-[1.275rem] py-[0.10625rem]",
    },
    {
      variant: "subtitle",
      level: 3,
      className: "h-[1.125rem] py-[0.09375rem]",
    },
    {
      variant: "subtitle",
      level: 4,
      className: "h-[0.975rem] py-[0.08125rem]",
    },
    // Label
    {
      variant: "label",
      level: 1,
      className: "h-[1.275rem] py-[0.10625rem]",
    },
    {
      variant: "label",
      level: 2,
      className: "h-[1.125rem] py-[0.09375rem]",
    },
    // Body
    {
      variant: "body",
      level: 1,
      className: "h-[1.54375rem] py-[0.178125rem]",
    },
    {
      variant: "body",
      level: 2,
      className: "h-[1.38125rem] py-[0.159375rem]",
    },
    {
      variant: "body",
      level: 3,
      className: "h-[1.21875rem] py-[0.140625rem]",
    },
    {
      variant: "body",
      level: 4,
      className: "h-[1.05625rem] py-[0.121875rem]",
    },
    // Number
    {
      variant: "number",
      level: 1,
      className: "h-[3.3rem] py-[0.275rem]",
    },
    {
      variant: "number",
      level: 2,
      className: "h-[3rem] py-[0.25rem]",
    },
    {
      variant: "number",
      level: 3,
      className: "h-[2.25rem] py-[0.1875rem]",
    },
    {
      variant: "number",
      level: 4,
      className: "h-[1.575rem] py-[0.13125rem]",
    },
    {
      variant: "number",
      level: 5,
      className: "h-[1.275rem] py-[0.10625rem]",
    },
  ],
  defaultVariants: {
    variant: "body",
    level: 2,
  },
});

const SkeletonTypography = ({
  variant = "body",
  level = 2,
  lines = 1,
  className,
}: SkeletonTypographyProps) => {
  return Array.from({ length: lines }).map((_, index) => (
    <div key={index} className={skeletonVariants({ variant, level })}>
      <Skeleton className={cn("w-full h-full", className)}>&nbsp;</Skeleton>
    </div>
  ));
};

SkeletonTypography.displayName = "SkeletonTypography";

export { Skeleton, SkeletonTypography };
export type { SkeletonProps, SkeletonTypographyProps };
