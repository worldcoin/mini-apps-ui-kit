import { cn } from "../../lib/utils";

interface XMarkProps {
  /**
   * Additional CSS classes to apply to the icon
   */
  className?: string;
}

export function XMark({ className }: XMarkProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-6", className)}
    >
      <path
        d="M6.75729 17.2426L11.9999 12M17.2426 6.75736L11.9999 12M11.9999 12L6.75729 6.75736M11.9999 12L17.2426 17.2426"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
      />
    </svg>
  );
}
