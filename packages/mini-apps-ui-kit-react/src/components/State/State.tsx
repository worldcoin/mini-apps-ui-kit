import { cn } from "@/lib/utils";

import { CircularIcon, CircularIconProps } from "../CircularIcon/CircularIcon";
import { Clock } from "../Icons/Clock";
import { Tick } from "../Icons/Tick";
import { Warning } from "../Icons/Warning";
import { XMark } from "../Icons/XMark";

interface StateProps extends CircularIconProps {
  value: "success" | "error" | "warning" | "pending" | "critical";
}

const icon = {
  success: <Tick />,
  error: <XMark />,
  warning: <Warning />,
  pending: <Clock />,
  critical: <XMark />,
};

const iconClasses: Record<StateProps["value"], string> = {
  success: "bg-success-600",
  error: "bg-gray-400",
  warning: "bg-warning-600",
  pending: "bg-gray-400",
  critical: "bg-error-600",
};

function State({ value, size, className, ...props }: StateProps) {
  return (
    <CircularIcon
      className={cn(
        "text-gray-0",
        size !== "xs" && "shadow-[inset_0_0_0_1px_rgba(255,255,255,0.3)]",
        iconClasses[value],
        className,
      )}
      size={size}
      {...props}
    >
      {icon[value]}
    </CircularIcon>
  );
}

export { State };
export type { StateProps };
