"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import * as React from "react";

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
import {
  DrawerClose as DrawerCloseComponent,
  DrawerContent as DrawerContentComponent,
  DrawerHeader as DrawerHeaderComponent,
  Drawer as DrawerRoot,
  DrawerTitle as DrawerTitleComponent,
  DrawerTrigger as DrawerTriggerComponent,
} from "../Drawer/Drawer";
import type {
  DrawerCloseProps,
  DrawerContentProps,
  DrawerHeaderProps,
  DrawerProps,
  DrawerTitleProps,
  DrawerTriggerProps,
} from "../Drawer/types";

const MOBILE_BREAKPOINT = "(max-width: 768px)";

const DrawerDialog = (props: DrawerProps) => {
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

  if (isMobile) {
    return <DrawerRoot {...props} />;
  }

  return <DialogRoot {...props} />;
};
DrawerDialog.displayName = "DrawerDialog";

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

const DrawerDialogContent = React.forwardRef<
  React.ElementRef<typeof DialogContent>,
  DrawerContentProps & { dialogClassName?: string }
>((props, ref) => {
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

  if (isMobile) {
    return <DrawerContentComponent {...props} ref={ref} />;
  }

  return (
    <DialogContent
      {...props}
      ref={ref}
      className={cn(props.className, props.dialogClassName)}
    />
  );
});
DrawerDialogContent.displayName = "DrawerDialogContent";

const DrawerDialogHeader = (props: DrawerHeaderProps) => {
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

  if (isMobile) {
    return <DrawerHeaderComponent {...props} />;
  }

  return <DialogHeader {...props} />;
};
DrawerDialogHeader.displayName = "DrawerDialogHeader";

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

const DrawerDialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogDescription>,
  React.ComponentProps<typeof DialogDescription>
>((props, ref) => {
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

  if (isMobile) {
    return null;
  }

  return <DialogDescription {...props} ref={ref} />;
});
DrawerDialogDescription.displayName = "DrawerDialogDescription";

const DrawerDialogFooter = (props: React.ComponentProps<"div">) => {
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

  if (isMobile) {
    return <DrawerHeaderComponent {...props} />;
  }

  return <DialogFooter {...props} />;
};
DrawerDialogFooter.displayName = "DrawerDialogFooter";

const DrawerDialogOverlay = (props: React.ComponentProps<typeof DialogOverlay>) => {
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

  if (isMobile) {
    return null;
  }

  return <DialogOverlay {...props} />;
};
DrawerDialogOverlay.displayName = "DrawerDialogOverlay";

const DrawerDialogPortal = (props: React.ComponentProps<typeof DialogPortal>) => {
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

  if (isMobile) {
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

export type {
  DrawerProps as DrawerDialogProps,
  DrawerContentProps as DrawerDialogContentProps,
  DrawerHeaderProps as DrawerDialogHeaderProps,
  DrawerTitleProps as DrawerDialogTitleProps,
  DrawerTriggerProps as DrawerDialogTriggerProps,
  DrawerCloseProps as DrawerDialogCloseProps,
};
