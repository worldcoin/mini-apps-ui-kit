import { cn } from "@/lib/utils";

import { CircularIcon, CircularIconProps } from "../CircularIcon/CircularIcon";
import { Clock } from "../Icons/Clock";
import { Tick } from "../Icons/Tick";
import { Warning } from "../Icons/Warning";
import { XMark } from "../Icons/XMark";

interface CircularStateProps extends Omit<CircularIconProps, "children"> {
  /** The state to display in the circular icon. */
  value: "success" | "error" | "warning" | "pending" | "critical";
}

const icon = {
  success: <Tick />,
  error: <XMark />,
  warning: <Warning />,
  pending: <Clock />,
  critical: <XMark />,
};

const iconClasses: Record<CircularStateProps["value"], string> = {
  success: "bg-success-600",
  error: "bg-gray-400",
  warning: "bg-warning-600",
  pending: "bg-gray-400",
  critical: "bg-error-600",
};

function CircularState({ value, size, className, ...props }: CircularStateProps) {
  return (
    <CircularIcon
      className={cn(
        "text-gray-0",
        size !== "xs" && "shadow-[inset_0_0_0_1px_rgba(255,255,255,0.3)]",
        iconClasses[value],
        "bg-[radial-gradient(111.32%_111.8%_at_22.73%_0%,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0)_100%)]",
        className,
      )}
      size={size}
      {...props}
    >
      {icon[value]}
    </CircularIcon>
  );
}

export { CircularState };
export type { CircularStateProps };
