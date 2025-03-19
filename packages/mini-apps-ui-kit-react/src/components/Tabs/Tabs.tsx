"use client";

import { Slot } from "@radix-ui/react-slot";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import * as React from "react";

import { cn } from "../../lib/utils";
import { Typography } from "../Typography";
import { TabItemProps, TabsProps } from "./types";

/**
 * A tab navigation component that allows users to switch between different views
 */
const Tabs = React.forwardRef<React.ElementRef<typeof ToggleGroup.Root>, TabsProps>(
  ({ children, ...props }, ref) => {
    return (
      <ToggleGroup.Root
        ref={ref}
        type="single"
        className="grid w-full px-5 items-center auto-cols-fr"
        style={{
          gridTemplateColumns: `repeat(${React.Children.count(children)}, 1fr)`,
        }}
        {...props}
      >
        {children}
      </ToggleGroup.Root>
    );
  },
);
Tabs.displayName = "Tabs";

/**
 * Individual tab item that can be selected
 */
const TabItem = React.forwardRef<React.ElementRef<typeof ToggleGroup.Item>, TabItemProps>(
  ({ icon, label, altIcon, ...props }, ref) => (
    <ToggleGroup.Item
      ref={ref}
      className={cn(
        "w-full flex-1 flex flex-col items-center justify-center gap-1 relative min-w-0 group",
        "focus:outline-none transition-colors duration-200",
        "text-gray-350 hover:text-gray-500 data-[state=on]:text-gray-900",
      )}
      {...props}
    >
      {/* Only show the outline icon when NOT alt */}
      <Slot className={cn("h-[1.625rem] shrink-0", altIcon && "group-data-[state=on]:hidden")}>
        {icon}
      </Slot>
      {/* Only show the solid icon when alt */}
      {altIcon && (
        <Slot className="h-[1.625rem] shrink-0 hidden group-data-[state=on]:block">
          {altIcon}
        </Slot>
      )}
      {label && (
        <Typography
          as="span"
          variant="subtitle"
          className="text-2xs truncate w-full text-center px-1 leading-none"
        >
          {label}
        </Typography>
      )}
    </ToggleGroup.Item>
  ),
);
TabItem.displayName = "TabItem";

export { Tabs, TabItem };
