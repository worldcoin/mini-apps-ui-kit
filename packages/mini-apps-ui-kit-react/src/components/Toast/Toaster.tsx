"use client";

import { cn } from "@/lib/utils";

import {
  AlertDialog,
  AlertDialogClose,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../AlertDialog";
import { Button } from "../Button";
import { CircularState } from "../CircularState";
import { Toast, ToastProvider, ToastViewport } from "./Toast";
import { useToast } from "./use-toast";

function Toaster({ duration }: { duration?: number }) {
  const { toasts, drawer } = useToast();

  return (
    <>
      <ToastProvider duration={duration} swipeDirection="up">
        {toasts.map(({ id, ...props }) => (
          <Toast key={id} {...props} />
        ))}
        <ToastViewport />
      </ToastProvider>
      {drawer && (
        <AlertDialog open={drawer.open} onOpenChange={drawer.onOpenChange}>
          <AlertDialogContent>
            <AlertDialogHeader
              icon={
                <CircularState
                  size="lg"
                  value={drawer.variant === "success" ? "success" : "critical"}
                />
              }
            >
              <AlertDialogTitle>{drawer.title}</AlertDialogTitle>
              {drawer.description && (
                <AlertDialogDescription className={cn(!drawer.action && "mb-0")}>
                  {drawer.description}
                </AlertDialogDescription>
              )}
            </AlertDialogHeader>
            {drawer.action && (
              <AlertDialogFooter>
                <AlertDialogClose>
                  <Button fullWidth onClick={drawer.action.onClick}>
                    {drawer.action.label}
                  </Button>
                </AlertDialogClose>
              </AlertDialogFooter>
            )}
          </AlertDialogContent>
        </AlertDialog>
      )}
    </>
  );
}

Toaster.displayName = "Toaster";

export { Toaster };
