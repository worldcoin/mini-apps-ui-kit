import { cn } from "../../lib/utils";

interface SpinnerProps {
  /**
   * Additional CSS classes to apply to the spinner
   */
  className?: string;
}

const Spinner = ({ className }: SpinnerProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-6 animate-spin text-gray-900", className)}
    >
      <circle
        cx="12"
        cy="12"
        r="10.75"
        stroke="currentColor"
        strokeOpacity="0.16"
        strokeWidth="2.5"
      />
      <path
        d="M17.8921 1.54613C16.1312 0.553676 14.1482 0.0220795 12.1271 0.000672984C10.1059 -0.0207335 8.11211 0.468744 6.33065 1.42368L7.50987 3.62356C8.92079 2.86725 10.4999 2.47958 12.1007 2.49653C13.7014 2.51349 15.2719 2.93451 16.6665 3.72054L17.8921 1.54613Z"
        fill="currentColor"
      />
    </svg>
  );
};

Spinner.displayName = "Spinner";

export { Spinner };
export type { SpinnerProps };
