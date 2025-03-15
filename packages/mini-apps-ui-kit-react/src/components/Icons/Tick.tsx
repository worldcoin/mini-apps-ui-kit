import { cn } from "../../lib/utils";

interface TickProps {
  /**
   * Additional CSS classes to apply to the tick icon
   */
  className?: string;
}

export function Tick({ className }: TickProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-4 w-4", className)}
      data-testid="tick-icon"
    >
      <path
        d="M3.33334 8.66669L6.00001 11.3334L12.6667 4.66669"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}
