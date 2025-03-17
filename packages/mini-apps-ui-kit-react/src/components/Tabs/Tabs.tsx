"use client";

import * as ToggleGroup from "@radix-ui/react-toggle-group";
import * as React from "react";

import { cn } from "../../lib/utils";
import { Typography } from "../Typography";
import { TabItemProps, TabsProps } from "./types";

/**
 * A tab navigation component that allows users to switch between different views
 */
const Tabs = React.forwardRef<React.ElementRef<typeof ToggleGroup.Root>, TabsProps>(
  ({ className, children, ...props }, ref) => (
    <ToggleGroup.Root
      ref={ref}
      type="single"
      className={cn("flex w-full justify-between px-5 py-2", className)}
      {...props}
    >
      {children}
    </ToggleGroup.Root>
  ),
);
Tabs.displayName = "Tabs";

/**
 * Individual tab item that can be selected
 */
const TabItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroup.Item>,
  Omit<TabItemProps, "children">
>(({ className, icon, label, ...props }, ref) => (
  <ToggleGroup.Item
    ref={ref}
    className={cn(
      "h-10 flex flex-col items-center gap-1 relative",
      "focus:outline-none transition-colors duration-200",
      "text-gray-350 hover:text-gray-500 data-[state=on]:text-gray-900",
      className,
    )}
    {...props}
  >
    {icon && <div className="w-6 h-6">{icon}</div>}
    {label && (
      <Typography as="span" variant="subtitle" className="text-2xs truncate w-full">
        {label}
      </Typography>
    )}
  </ToggleGroup.Item>
));
TabItem.displayName = "TabItem";

export { Tabs, TabItem };
