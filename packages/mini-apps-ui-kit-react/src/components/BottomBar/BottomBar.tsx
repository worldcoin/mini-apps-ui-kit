"use client";

import { type VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";

const bottomBarVariants = cva("w-full gap-4", {
  variants: {
    direction: {
      horizontal: "grid grid-cols-1 [&>*]:col-span-1 [&:has(>*:nth-child(2))]:grid-cols-2",
      vertical: "flex flex-col-reverse",
    },
  },
  defaultVariants: {
    direction: "horizontal",
  },
});

export interface BottomBarProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "className">,
    VariantProps<typeof bottomBarVariants> {
  /**
   * The direction of the bottom bar
   * @default "horizontal"
   */
  direction?: "horizontal" | "vertical";
}

export const BottomBar = forwardRef<HTMLDivElement, BottomBarProps>(
  ({ children, direction, ...props }, ref) => {
    return (
      <div ref={ref} className={bottomBarVariants({ direction })} {...props}>
        {children}
      </div>
    );
  },
);

BottomBar.displayName = "BottomBar";
