"use client";

import { cn } from "@/lib/utils";
import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import { BottomBar, BottomBarProps } from "../BottomBar";
import { Button } from "../Button";
import { XMark } from "../Icons/XMark";
import { Typography } from "../Typography";
import {
  AlertDialogCloseProps,
  AlertDialogContentProps,
  AlertDialogDescriptionProps,
  AlertDialogHeaderProps,
  AlertDialogProps,
  AlertDialogTitleProps,
  AlertDialogTriggerProps,
} from "./types";
import { AlertDialogContext, useAlertDialog } from "./use-alert-dialog";

const AlertDialog = ({ dismissible = true, modal = true, ...props }: AlertDialogProps) => (
  <AlertDialogContext.Provider value={{ dismissible }}>
    <DrawerPrimitive.Root
      shouldScaleBackground={false}
      dismissible={dismissible}
      modal={modal}
      {...props}
    />
  </AlertDialogContext.Provider>
);
AlertDialog.displayName = "AlertDialog";

const AlertDialogTrigger = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Trigger>,
  AlertDialogTriggerProps
>((props, ref) => <DrawerPrimitive.Trigger ref={ref} {...props} />);
AlertDialogTrigger.displayName = "AlertDialogTrigger";

const AlertDialogPortal = DrawerPrimitive.Portal;

const AlertDialogClose = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Close>,
  AlertDialogCloseProps
>((props, ref) => <DrawerPrimitive.Close ref={ref} {...props} />);
AlertDialogClose.displayName = "AlertDialogClose";

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  AlertDialogContentProps
>(({ className, children, ...props }, ref) => (
  <AlertDialogPortal>
    <DrawerPrimitive.Overlay
      ref={ref}
      className={cn("fixed inset-0 z-50 bg-gray-900/40", className)}
      {...props}
    />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn("fixed inset-x-0 bottom-0 z-50 mt-24 h-auto", className)}
      {...props}
    >
      <div className="flex flex-col rounded-[1.75rem] bg-gray-0 m-3 p-8">{children}</div>
    </DrawerPrimitive.Content>
  </AlertDialogPortal>
));
AlertDialogContent.displayName = "AlertDialogContent";

const AlertDialogHeader = ({ icon, children, ...props }: AlertDialogHeaderProps) => {
  const { dismissible } = useAlertDialog();
  return (
    <div
      className={cn(
        "flex justify-between gap-4 mb-4 w-full",
        icon ? "items-start" : "items-center",
      )}
      {...props}
    >
      <div className="flex flex-col gap-6">
        {icon}
        {children}
      </div>
      {dismissible && (
        <div className="shrink-0">
          <AlertDialogClose asChild>
            <Button variant="tertiary" size="icon">
              <XMark />
            </Button>
          </AlertDialogClose>
        </div>
      )}
    </div>
  );
};
AlertDialogHeader.displayName = "AlertDialogHeader";

const AlertDialogFooter = (props: BottomBarProps) => <BottomBar {...props} />;
AlertDialogFooter.displayName = "AlertDialogFooter";

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  AlertDialogTitleProps
>(({ className, children, ...props }, ref) => (
  <DrawerPrimitive.Title ref={ref} {...props} asChild>
    <Typography variant="heading" level={2}>
      {children}
    </Typography>
  </DrawerPrimitive.Title>
));
AlertDialogTitle.displayName = "AlertDialogTitle";

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  AlertDialogDescriptionProps
>(({ className, children, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn("text-gray-500 mb-8", className)}
    {...props}
    asChild
  >
    <Typography>{children}</Typography>
  </DrawerPrimitive.Description>
));
AlertDialogDescription.displayName = "AlertDialogDescription";

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogTrigger,
  AlertDialogClose,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
};
