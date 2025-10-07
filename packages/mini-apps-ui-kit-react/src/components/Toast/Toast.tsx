"use client";

import { cn } from "@/lib/utils";
import * as ToastPrimitives from "@radix-ui/react-toast";
import * as React from "react";

import { Fail } from "../Icons/Fail";
import { Success } from "../Icons/Success";
import { Typography } from "../Typography";

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed top-6 z-100 flex max-h-screen w-full p-0.5 right-0 left-0 flex-col pointer-events-none",
      className,
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> & {
    variant: "success" | "error";
  }
>(({ className, title, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(
        "group pointer-events-none relative flex w-full items-center justify-center",
        "transition-all",
        "data-[swipe=cancel]:translate-x-0",
        "data-[swipe=end]:animate-out",
        "data-[swipe=end]:translate-x-(--radix-toast-swipe-end-x)",
        "data-[swipe=move]:translate-x-(--radix-toast-swipe-move-x)",
        "data-[swipe=move]:transition-none",
        "data-[state=closed]:animate-out",
        "data-[state=closed]:slide-out-to-top-full",
        "data-[state=closed]:fade-out-50",
        "data-[state=open]:animate-in",
        "data-[state=open]:slide-in-from-top-full",
        "data-[state=open]:pointer-events-none",
      )}
      {...props}
    >
      <div className="grid grid-cols-[auto_1fr] items-center gap-2 rounded-full bg-gray-0 h-9 pl-2 pr-3 border border-gray-200 shrink-0 text-gray-900">
        {variant === "success" ? <Success /> : <Fail />}
        <div className="flex flex-1 items-center">
          <Typography variant="subtitle" level={3}>
            {title}
          </Typography>
        </div>
      </div>
    </ToastPrimitives.Root>
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

export { type ToastProps, ToastProvider, ToastViewport, Toast };
