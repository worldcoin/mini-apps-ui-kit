import { cn } from "../../lib/utils";

interface SuccessIconProps {
  /**
   * Additional CSS classes to apply to the spinner
   */
  className?: string;
}

export const SuccessIcon = ({ className }: SuccessIconProps) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-6", className)}
    >
      <rect x="0.5" width="24" height="24" rx="12" fill="#00C230" />
      <rect
        opacity="0.2"
        x="0.5"
        width="24"
        height="24"
        rx="12"
        fill="url(#paint0_radial_578_332)"
      />
      <rect
        x="0.636364"
        y="0.136364"
        width="23.7273"
        height="23.7273"
        rx="11.8636"
        stroke="url(#paint1_linear_578_332)"
        stroke-width="0.272727"
      />
      <path
        d="M8.54541 12.4091L10.7272 14.5909L16.1818 9.13633"
        stroke="white"
        stroke-width="1.5"
      />
      <defs>
        <radialGradient
          id="paint0_radial_578_332"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(5.95455) rotate(63.4349) scale(26.8328 26.7171)"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </radialGradient>
        <linearGradient
          id="paint1_linear_578_332"
          x1="12.5"
          y1="0"
          x2="12.5"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" stop-opacity="0.3" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
