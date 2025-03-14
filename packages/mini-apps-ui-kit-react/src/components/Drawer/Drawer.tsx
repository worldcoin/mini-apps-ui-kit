"use client";

import { cn } from "@/lib/utils";
import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import { BottomBarProps } from "../BottomBar";
import { BottomBar } from "../BottomBar";
import { Button } from "../Button";
import { XMark } from "../Icons/XMark";
import { Typography } from "../Typography";

interface DrawerContextValue {
  dismissible?: boolean;
}

const DrawerContext = React.createContext<DrawerContextValue | undefined>(undefined);

const useDrawer = () => {
  const context = React.useContext(DrawerContext);
  if (context === undefined) {
    throw new Error("useDrawer must be used within a Drawer");
  }
  return context;
};

const Drawer = ({
  shouldScaleBackground = true,
  dismissible = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root> & { dismissible?: boolean }) => (
  <DrawerContext.Provider value={{ dismissible }}>
    <DrawerPrimitive.Root shouldScaleBackground={shouldScaleBackground} {...props} />
  </DrawerContext.Provider>
);
Drawer.displayName = "Drawer";

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerClose = DrawerPrimitive.Close;

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-gray-900/40", className)}
    {...props}
  />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const DrawerContent: typeof DrawerPrimitive.Content = React.forwardRef<
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
        "fixed inset-x-0 bottom-0 z-50 mt-24 h-auto rounded-t-2xl bg-gray-0 outline-none p-8",
        className,
      )}
      {...props}
    >
      {children}
    </DrawerPrimitive.Content>
  </DrawerPrimitive.Portal>
));
DrawerContent.displayName = "DrawerContent";

const DrawerHeader = ({
  icon,
  children,
  ...props
}: Omit<React.HTMLAttributes<HTMLDivElement>, "className"> & {
  icon?: React.ReactNode;
}) => {
  const { dismissible } = useDrawer();
  return (
    <div className="flex justify-between items-center gap-4 mb-4 w-full" {...props}>
      {dismissible && (
        <div className="shrink-0">
          <DrawerClose asChild>
            <Button variant="tertiary" size="sm" icon={<XMark />}></Button>
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

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title ref={ref} {...props} asChild>
    <Typography variant="subtitle" level={1}>
      {props.children}
    </Typography>
  </DrawerPrimitive.Title>
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description ref={ref} className="text-gray-500" {...props} asChild>
    <Typography variant="body" level={2}>
      {props.children}
    </Typography>
  </DrawerPrimitive.Description>
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

export {
  Drawer,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  // DrawerPortal,
  // DrawerOverlay,
  // DrawerFooter,
  // DrawerDescription,
};
