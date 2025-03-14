"use client";

import { cn } from "@/lib/utils";
import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import { BottomBar, BottomBarProps } from "../BottomBar";
import { Button } from "../Button";
import { XMark } from "../Icons/XMark";
import { Typography } from "../Typography";

interface AlertDialogContextValue {
  dismissible?: boolean;
}

const AlertDialogContext = React.createContext<AlertDialogContextValue | undefined>(undefined);

const useAlertDialog = () => {
  const context = React.useContext(AlertDialogContext);
  if (context === undefined) {
    throw new Error("useAlertDialog must be used within an AlertDialog");
  }
  return context;
};

const AlertDialog = ({
  shouldScaleBackground = true,
  dismissible = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root> & { dismissible?: boolean }) => (
  <AlertDialogContext.Provider value={{ dismissible }}>
    <DrawerPrimitive.Root
      shouldScaleBackground={shouldScaleBackground}
      dismissible={dismissible}
      {...props}
    />
  </AlertDialogContext.Provider>
);
AlertDialog.displayName = "Drawer";

const AlertDialogTrigger = DrawerPrimitive.Trigger;

const AlertDialogPortal = DrawerPrimitive.Portal;

const AlertDialogClose = DrawerPrimitive.Close;

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-gray-900/40", className)}
    {...props}
  />
));
AlertDialogOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn("fixed inset-x-0 bottom-0 z-50 mt-24 h-auto", className)}
      {...props}
    >
      <div className="flex flex-col rounded-[1.75rem] bg-gray-0 m-3 p-8">{children}</div>
    </DrawerPrimitive.Content>
  </AlertDialogPortal>
));
AlertDialogContent.displayName = "DrawerContent";

const AlertDialogHeader = ({
  icon,
  children,
  ...props
}: Omit<React.HTMLAttributes<HTMLDivElement>, "className"> & {
  icon?: React.ReactNode;
}) => {
  const { dismissible } = useAlertDialog();
  return (
    <div className="flex justify-between items-center gap-4 mb-4 w-full" {...props}>
      <div className="flex flex-col gap-6">
        {icon}
        {children}
      </div>
      {dismissible && (
        <div className="shrink-0">
          <AlertDialogClose asChild>
            <Button variant="tertiary" size="sm" icon={<XMark />}></Button>
          </AlertDialogClose>
        </div>
      )}
    </div>
  );
};
AlertDialogHeader.displayName = "DrawerHeader";

const AlertDialogFooter = (props: BottomBarProps) => <BottomBar {...props} />;
AlertDialogFooter.displayName = "DrawerFooter";

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, children, ...props }, ref) => (
  <DrawerPrimitive.Title ref={ref} {...props} asChild>
    <Typography variant="heading" level={2}>
      {children}
    </Typography>
  </DrawerPrimitive.Title>
));
AlertDialogTitle.displayName = DrawerPrimitive.Title.displayName;

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, children, ...props }, ref) => (
  <DrawerPrimitive.Description ref={ref} className="text-gray-500 mb-8" {...props} asChild>
    <Typography>{children}</Typography>
  </DrawerPrimitive.Description>
));
AlertDialogDescription.displayName = DrawerPrimitive.Description.displayName;

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogClose,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
};
