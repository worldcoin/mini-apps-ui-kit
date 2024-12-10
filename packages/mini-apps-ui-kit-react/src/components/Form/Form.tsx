import { cn } from "@/lib/utils";
import * as RadixForm from "@radix-ui/react-form";
import { forwardRef } from "react";

import { typographyVariants } from "../Typography";

export const Root = RadixForm.Root;
export const Field = RadixForm.Field;
export const Control = RadixForm.Control;
export const Message = forwardRef<
  React.ElementRef<typeof RadixForm.Message>,
  React.ComponentPropsWithoutRef<typeof RadixForm.Message> & {
    error?: boolean;
  }
>(({ className, error, ...props }, ref) => (
  <RadixForm.Message
    ref={ref}
    className={cn(
      "h-[1.625rem] mt-1",
      typographyVariants({
        variant: "body",
        level: 3,
      }),
      error ? "text-error-700" : "text-gray-500",
    )}
    {...props}
  />
));
export const ValidityState: typeof RadixForm.ValidityState = RadixForm.ValidityState;
export const Submit: typeof RadixForm.Submit = RadixForm.Submit;
