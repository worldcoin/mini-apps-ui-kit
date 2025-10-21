"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import * as React from "react";

// Import Dialog components
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  Dialog as DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "../Dialog/Dialog";
// Import Drawer components
import {
  DrawerClose as DrawerCloseComponent,
  DrawerContent as DrawerContentComponent,
  DrawerHeader as DrawerHeaderComponent,
  Drawer as DrawerRoot,
  DrawerTitle as DrawerTitleComponent,
  DrawerTrigger as DrawerTriggerComponent,
} from "../Drawer/Drawer";
// Import types
import type {
  DrawerCloseProps,
  DrawerContentProps,
  DrawerHeaderProps,
  DrawerProps,
  DrawerTitleProps,
  DrawerTriggerProps,
} from "../Drawer/types";

// Define the breakpoint for mobile vs desktop
const MOBILE_BREAKPOINT = "(max-width: 768px)";

// Main DrawerDialog component that conditionally renders Dialog or Drawer
const DrawerDialog = (props: DrawerProps) => {
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

  if (isMobile) {
    return <DrawerRoot {...props} />;
  }

  return <DialogRoot {...props} />;
};
DrawerDialog.displayName = "DrawerDialog";

// DrawerDialogTrigger - maps to DialogTrigger on desktop, DrawerTrigger on mobile
const DrawerDialogTrigger = React.forwardRef<
  React.ElementRef<typeof DialogTrigger>,
  DrawerTriggerProps
>((props, ref) => {
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

  if (isMobile) {
    return <DrawerTriggerComponent {...props} ref={ref} />;
  }

  return <DialogTrigger {...props} ref={ref} />;
});
DrawerDialogTrigger.displayName = "DrawerDialogTrigger";

// DrawerDialogClose - maps to DialogClose on desktop, DrawerClose on mobile
const DrawerDialogClose = React.forwardRef<
  React.ElementRef<typeof DialogClose>,
  DrawerCloseProps
>((props, ref) => {
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

  if (isMobile) {
    return <DrawerCloseComponent {...props} ref={ref} />;
  }

  return <DialogClose {...props} ref={ref} />;
});
DrawerDialogClose.displayName = "DrawerDialogClose";

// DrawerDialogContent - maps to DialogContent on desktop, DrawerContent on mobile
const DrawerDialogContent = React.forwardRef<
  React.ElementRef<typeof DialogContent>,
  DrawerContentProps
>((props, ref) => {
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

  if (isMobile) {
    return <DrawerContentComponent {...props} ref={ref} />;
  }

  return <DialogContent {...props} ref={ref} />;
});
DrawerDialogContent.displayName = "DrawerDialogContent";

// DrawerDialogHeader - maps to DialogHeader on desktop, DrawerHeader on mobile
const DrawerDialogHeader = (props: DrawerHeaderProps) => {
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

  if (isMobile) {
    return <DrawerHeaderComponent {...props} />;
  }

  return <DialogHeader {...props} />;
};
DrawerDialogHeader.displayName = "DrawerDialogHeader";

// DrawerDialogTitle - maps to DialogTitle on desktop, DrawerTitle on mobile
const DrawerDialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogTitle>,
  DrawerTitleProps
>((props, ref) => {
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

  if (isMobile) {
    return <DrawerTitleComponent {...props} ref={ref} />;
  }

  return <DialogTitle {...props} ref={ref} />;
});
DrawerDialogTitle.displayName = "DrawerDialogTitle";

// DrawerDialogDescription - maps to DialogDescription on desktop, not available on mobile
const DrawerDialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogDescription>,
  React.ComponentProps<typeof DialogDescription>
>((props, ref) => {
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

  if (isMobile) {
    // DrawerDescription is not exported from Drawer, so we return null on mobile
    return null;
  }

  return <DialogDescription {...props} ref={ref} />;
});
DrawerDialogDescription.displayName = "DrawerDialogDescription";

// DrawerDialogFooter - maps to DialogFooter on desktop, DrawerFooter on mobile
const DrawerDialogFooter = (props: React.ComponentProps<"div">) => {
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

  if (isMobile) {
    // DrawerFooter is actually BottomBar, so we need to handle this differently
    return <DrawerHeaderComponent {...props} />;
  }

  return <DialogFooter {...props} />;
};
DrawerDialogFooter.displayName = "DrawerDialogFooter";

// DrawerDialogOverlay - maps to DialogOverlay on desktop, DrawerOverlay on mobile
const DrawerDialogOverlay = (props: React.ComponentProps<typeof DialogOverlay>) => {
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

  if (isMobile) {
    // DrawerOverlay is handled internally by DrawerContent, so we don't render it separately
    return null;
  }

  return <DialogOverlay {...props} />;
};
DrawerDialogOverlay.displayName = "DrawerDialogOverlay";

// DrawerDialogPortal - maps to DialogPortal on desktop, not needed on mobile (handled by DrawerContent)
const DrawerDialogPortal = (props: React.ComponentProps<typeof DialogPortal>) => {
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

  if (isMobile) {
    // Portal is handled internally by DrawerContent
    return <>{props.children}</>;
  }

  return <DialogPortal {...props} />;
};
DrawerDialogPortal.displayName = "DrawerDialogPortal";

export {
  DrawerDialog,
  DrawerDialogClose,
  DrawerDialogContent,
  DrawerDialogDescription,
  DrawerDialogFooter,
  DrawerDialogHeader,
  DrawerDialogOverlay,
  DrawerDialogPortal,
  DrawerDialogTitle,
  DrawerDialogTrigger,
};

// Re-export types
export type {
  DrawerProps as DrawerDialogProps,
  DrawerContentProps as DrawerDialogContentProps,
  DrawerHeaderProps as DrawerDialogHeaderProps,
  DrawerTitleProps as DrawerDialogTitleProps,
  DrawerTriggerProps as DrawerDialogTriggerProps,
  DrawerCloseProps as DrawerDialogCloseProps,
};
