import { withHaptics } from "@/lib/haptics";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import * as React from "react";

import { cn } from "../../lib/utils";
import { typographyVariants } from "../Typography/Typography";
import { ToggleGroupItemProps, ToggleGroupRootProps } from "./types";

const ToggleGroupRoot = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  ToggleGroupRootProps
>(({ onValueChange, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn("inline-flex gap-5")}
    onValueChange={withHaptics(onValueChange) as any}
    {...props}
  />
));
ToggleGroupRoot.displayName = "ToggleGroup";

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  ToggleGroupItemProps
>(({ className, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Item
    ref={ref}
    className={cn(
      typographyVariants({ variant: "subtitle", level: 4 }),
      "size-8 rounded-full transition-all text-gray-400 bg-gray-0 outline-none",
      "hover:bg-gray-50",
      "data-[state=on]:bg-gray-100 data-[state=on]:text-gray-900",
      "disabled:pointer-events-none disabled:opacity-50",
      className,
    )}
    {...props}
  >
    {children}
  </ToggleGroupPrimitive.Item>
));
ToggleGroupItem.displayName = "ToggleGroupItem";

export { ToggleGroupRoot, ToggleGroupItem };
