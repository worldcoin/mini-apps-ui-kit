"use client";

import { cn } from "@/lib/utils";
import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import { BottomBarProps } from "../BottomBar";
import { BottomBar } from "../BottomBar";
import { Button } from "../Button";
import { XMark } from "../Icons/XMark";
import { Typography } from "../Typography";
import {
  DrawerCloseProps,
  DrawerContentProps,
  DrawerDescriptionProps,
  DrawerHeaderProps,
  DrawerProps,
  DrawerTitleProps,
  DrawerTriggerProps,
} from "./types";
import { DrawerContext, useDrawer } from "./use-drawer";

/**
 * A drawer component that slides up from the bottom of the screen
 * @param props DrawerProps
 */
const Drawer = ({
  dismissible = true,
  height = "full",
  modal = true,
  ...props
}: DrawerProps) => (
  <DrawerContext.Provider value={{ dismissible, height }}>
    <DrawerPrimitive.Root
      shouldScaleBackground={false}
      dismissible={dismissible}
      modal={modal}
      direction="bottom"
      handleOnly
      {...props}
    />
  </DrawerContext.Provider>
);
Drawer.displayName = "Drawer";

const DrawerTrigger = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Trigger>,
  DrawerTriggerProps
>((props, ref) => <DrawerPrimitive.Trigger ref={ref} {...props} />);

DrawerTrigger.displayName = DrawerPrimitive.Trigger.displayName;

const DrawerClose = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Close>,
  DrawerCloseProps
>((props, ref) => <DrawerPrimitive.Close ref={ref} {...props} />);

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>((props, ref) => (
  <DrawerPrimitive.Overlay ref={ref} className="fixed inset-0 z-50 bg-gray-900/40" {...props} />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

/**
 * The content container of the drawer
 */
const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  DrawerContentProps
>((props, ref) => {
  const { height } = useDrawer();
  return (
    <DrawerPrimitive.Portal>
      <DrawerOverlay />

      <DrawerPrimitive.Content
        ref={ref}
        {...props}
        className={cn(
          "fixed inset-x-0 bottom-0 z-50 bg-gray-0 outline-none flex flex-col",
          height === "full" ? "top-0 rounded-none" : "h-auto rounded-t-[1.75rem]",
          props.className,
        )}
      />
    </DrawerPrimitive.Portal>
  );
});
DrawerContent.displayName = "DrawerContent";

/**
 * The header section of the drawer
 */
const DrawerHeader = ({ icon, children, ...props }: DrawerHeaderProps) => {
  const { dismissible } = useDrawer();
  return (
    <div className="flex justify-between items-center gap-4 mb-2 w-full" {...props}>
      {dismissible && (
        <div className="shrink-0">
          <DrawerClose asChild>
            <Button variant="tertiary" size="icon">
              <XMark />
            </Button>
          </DrawerClose>
        </div>
      )}
      <div className="flex flex-col gap-6">{children}</div>
      {dismissible && <div className="shrink-0 size-10" />}
    </div>
  );
};
DrawerHeader.displayName = "DrawerHeader";

const DrawerFooter = (props: BottomBarProps) => <BottomBar {...props} />;
DrawerFooter.displayName = "DrawerFooter";

/**
 * The title component of the drawer
 */
const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  DrawerTitleProps
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title ref={ref} {...props} asChild>
    <Typography variant="subtitle" level={1}>
      {props.children}
    </Typography>
  </DrawerPrimitive.Title>
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

/**
 * The description component of the drawer
 */
const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  DrawerDescriptionProps
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description ref={ref} className="text-gray-500" {...props} asChild>
    <Typography variant="body" level={2}>
      {props.children}
    </Typography>
  </DrawerPrimitive.Description>
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

export { Drawer, DrawerTrigger, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle };
