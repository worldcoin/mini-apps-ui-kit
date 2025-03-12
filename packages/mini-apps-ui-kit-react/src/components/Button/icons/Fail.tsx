import { cn } from "../../../lib/utils";

interface FailProps {
  /**
   * Additional CSS classes to apply to the spinner
   */
  className?: string;
}

export const Fail = ({ className }: FailProps) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-6 text-error-600", className)}
    >
      <rect x="0.5" width="24" height="24" rx="12" fill="currentColor" />
      <rect
        opacity="0.2"
        x="0.5"
        width="24"
        height="24"
        rx="12"
        fill="url(#paint0_radial_578_338)"
      />
      <rect
        x="0.636364"
        y="0.136364"
        width="23.7273"
        height="23.7273"
        rx="11.8636"
        stroke="url(#paint1_linear_578_338)"
        strokeWidth="0.272727"
      />
      <path
        d="M9.50403 14.7233L12.3637 11.8636M15.2233 9.00403L12.3637 11.8636M12.3637 11.8636L9.50403 9.00403M12.3637 11.8636L15.2233 14.7233"
        stroke="white"
        strokeWidth="1.5"
      />
      <defs>
        <radialGradient
          id="paint0_radial_578_338"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(5.95455) rotate(63.4349) scale(26.8328 26.7171)"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <linearGradient
          id="paint1_linear_578_338"
          x1="12.5"
          y1="0"
          x2="12.5"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.3" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
