"use client";

import { Toaster as Sonner } from "sonner";

import { Fail } from "../Icons/Fail";
import { Success } from "../Icons/Success";

type ToasterProps = React.ComponentProps<typeof Sonner>;

export const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      position="bottom-center"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      icons={{
        success: <Success />,
        error: <Fail />,
      }}
      {...props}
    />
  );
};
