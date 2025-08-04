import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

import { cn } from "../../lib/utils";

type CircularIconSize = "xs" | "sm" | "md" | "lg" | "xl";

interface CircularIconProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
  size?: CircularIconSize;
}

const sizeClasses: Record<CircularIconSize, string> = {
  xs: "size-6",
  sm: "size-11",
  md: "size-12",
  lg: "size-16",
  xl: "size-22",
};

const iconClasses: Record<CircularIconSize, string> = {
  xs: "size-3.5",
  sm: "size-6",
  md: "size-6.5",
  lg: "size-8.5",
  xl: "size-12",
};

function CircularIcon({ children, className, size = "md", ...props }: CircularIconProps) {
  return (
    <div
      className={cn(
        "rounded-full flex items-center justify-center",
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      <Slot className={iconClasses[size]}>{children}</Slot>
    </div>
  );
}

export { CircularIcon };
export type { CircularIconProps };
