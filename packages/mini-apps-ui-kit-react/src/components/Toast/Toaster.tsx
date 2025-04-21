"use client";

import { Toast, ToastProvider, ToastViewport } from "./Toast";
import { useToast } from "./use-toast";

function Toaster({ duration }: { duration?: number }) {
  const { toasts } = useToast();

  return (
    <ToastProvider duration={duration} swipeDirection="up">
      {toasts.map(({ id, ...props }) => (
        <Toast key={id} {...props} />
      ))}
      <ToastViewport />
    </ToastProvider>
  );
}

Toaster.displayName = "Toaster";

export { Toaster };
