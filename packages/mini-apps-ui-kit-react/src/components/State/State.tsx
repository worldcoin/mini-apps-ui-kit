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

function State({ value, className, ...props }: StateProps) {
  return (
    <CircularIcon className={cn("text-gray-0", iconClasses[value], className)} {...props}>
      {icon[value]}
    </CircularIcon>
  );
}

export { State };
export type { StateProps };
