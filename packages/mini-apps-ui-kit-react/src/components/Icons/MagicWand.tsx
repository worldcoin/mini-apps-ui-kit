import { cn } from "../../lib/utils";

interface MagicWandProps {
  /**
   * Additional CSS classes to apply to the icon
   */
  className?: string;
}

export function MagicWand({ className }: MagicWandProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-5", className)}
    >
      <path
        d="M14.0774 3.8389L3.82886 14.0874L4.48362 14.7421L5.25751 15.516L5.91227 16.1707L16.1607 5.92225L15.506 5.26752L14.7321 4.49363L14.0774 3.8389Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M11.2844 6.63257L13.3678 8.7159"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.2313 3.98142C10.6148 3.98142 10.9258 3.6705 10.9258 3.28697C10.9258 2.90344 10.6148 2.59253 10.2313 2.59253C9.84778 2.59253 9.53687 2.90344 9.53687 3.28697C9.53687 3.6705 9.84778 3.98142 10.2313 3.98142Z"
        fill="currentColor"
      />
      <path
        d="M6.87508 3.125L7.43777 4.64564L8.95841 5.20833L7.43777 5.77102L6.87508 7.29167L6.31239 5.77102L4.79175 5.20833L6.31239 4.64564L6.87508 3.125Z"
        fill="currentColor"
      />
      <path
        d="M15 10.8333L15.6752 12.658L17.5 13.3333L15.6752 14.0085L15 15.8333L14.3248 14.0085L12.5 13.3333L14.3248 12.658L15 10.8333Z"
        fill="currentColor"
      />
    </svg>
  );
}
