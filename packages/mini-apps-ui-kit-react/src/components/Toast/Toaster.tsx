"use client";

import { Toast, ToastProvider, ToastViewport } from "./Toast";
import { useToast } from "./use-toast";

export function Toaster({ duration }: { duration?: number }) {
  const { toasts } = useToast();

  return (
    <ToastProvider duration={duration}>
      {toasts.map(({ id, ...props }) => (
        <Toast key={id} {...props} />
      ))}
      <ToastViewport />
    </ToastProvider>
  );
}
