"use client";

import { cn } from "@/lib/utils";
import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

const Drawer = DrawerPrimitive.Root;
const DrawerTrigger = DrawerPrimitive.Trigger;
const DrawerClose = DrawerPrimitive.Close;
const DrawerTitle = DrawerPrimitive.Title;
const DrawerDescription = DrawerPrimitive.Description;

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPrimitive.Portal>
    <DrawerPrimitive.Overlay className="fixed inset-0 z-50">
      <div className="w-full h-full bg-gray-900 opacity-40" />
    </DrawerPrimitive.Overlay>

    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 h-auto flex flex-col rounded-t-2xl bg-gray-0 outline-none",
        className,
      )}
      {...props}
    >
      <DrawerPrimitive.Handle className="my-2" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPrimitive.Portal>
));

DrawerContent.displayName = "DrawerContent";

export { Drawer, DrawerTrigger, DrawerClose, DrawerContent, DrawerTitle, DrawerDescription };

// TODO: add stories
