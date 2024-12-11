import { cn } from "../../lib/utils";

interface MagnifierProps {
  /**
   * Additional CSS classes to apply to the Magnifier icon
   */
  className?: string;
}

export function Magnifier({ className }: MagnifierProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-4 w-4", className)}
    >
      <g clip-path="url(#clip0_352_148)">
        <path
          d="M15.4167 15.4167L18.3334 18.3334M17.5001 9.58335C17.5001 5.2111 13.9557 1.66669 9.58342 1.66669C5.21116 1.66669 1.66675 5.2111 1.66675 9.58335C1.66675 13.9556 5.21116 17.5 9.58342 17.5C13.9557 17.5 17.5001 13.9556 17.5001 9.58335Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_352_148">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
