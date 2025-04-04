import { cn } from "@/lib/utils";
import React from "react";

import { Fail } from "../Icons/Fail";
import { Success } from "../Icons/Success";
import { Spinner } from "../Spinner";
import { Typography } from "../Typography";

interface LiveFeedbackProps {
  /** The current state of the feedback. Controls which icon and label are shown. */
  state?: "pending" | "success" | "failed";
  /** The content to wrap with live feedback, typically a button or form element */
  children: React.ReactNode;
  /** Optional className to apply to the wrapper div */
  className?: string;
  /** Optional labels to show next to the icons for each state */
  label?: {
    /** Text to show during the pending state */
    pending: string;
    /** Text to show when operation succeeds */
    success: string;
    /** Text to show when operation fails */
    failed: string;
  };
}

export function LiveFeedback({ state, children, className, label }: LiveFeedbackProps) {
  return (
    <div className={cn("relative", className)}>
      <div
        className={cn(
          "w-full h-full",
          state && "invisible", // Hide children but preserve space
        )}
      >
        {children}
      </div>

      {state && (
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center gap-2",
            state === "success" && "text-success-600",
            state === "failed" && "text-error-600",
          )}
        >
          {state === "pending" && (
            <>
              <Spinner className="size-6" />
              {label?.pending && (
                <Typography variant="label" level={2}>
                  {label.pending}
                </Typography>
              )}
            </>
          )}
          {state === "success" && (
            <>
              <Success className="size-6" />
              {label?.success && (
                <Typography variant="label" level={2}>
                  {label.success}
                </Typography>
              )}
            </>
          )}
          {state === "failed" && (
            <>
              <Fail className="size-6" />
              {label?.failed && (
                <Typography variant="label" level={2}>
                  {label.failed}
                </Typography>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}
