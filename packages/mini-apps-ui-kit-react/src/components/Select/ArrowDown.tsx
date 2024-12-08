import { cn } from "../../lib/utils";

interface ArrowDownProps {
  /**
   * Additional CSS classes to apply to the arrow down icon
   */
  className?: string;
}

export function ArrowDown({ className }: ArrowDownProps) {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-5 w-5", className)}
    >
      <path
        d="M5.66602 7.5L9.95891 11.7929C10.2922 12.1262 10.4589 12.2929 10.666 12.2929C10.8731 12.2929 11.0398 12.1262 11.3731 11.7929L15.666 7.5"
        stroke="var(--gray-900)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
