import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

import { cn } from "../../lib/utils";

export type CircularIconSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface CircularIconProps {
  children?: ReactNode;
  className?: string;
  size?: CircularIconSize;
}

const sizeClasses: Record<CircularIconSize, string> = {
  xs: "size-6",
  sm: "size-11",
  md: "size-12",
  lg: "size-16",
  xl: "size-[5.5rem]",
};

const iconClasses: Record<CircularIconSize, string> = {
  xs: "size-[0.875rem]",
  sm: "size-[1.5rem]",
  md: "size-[1.625rem]",
  lg: "size-[2.125rem]",
  xl: "size-12",
};

export function CircularIcon({ children, className, size = "md" }: CircularIconProps) {
  return (
    <div
      className={cn(
        "rounded-full flex items-center justify-center",
        sizeClasses[size],
        className,
      )}
    >
      <Slot className={iconClasses[size]}>{children}</Slot>
    </div>
  );
}
