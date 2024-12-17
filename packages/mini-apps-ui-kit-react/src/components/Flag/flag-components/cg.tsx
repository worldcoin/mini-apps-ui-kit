import React from "react";

const CG = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="512"
      height="512"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_4_7264)">
        <path
          d="M138.771 483.645L326.836 326.837L483.644 138.772C459.264 91.524 420.606 52.845 373.377 28.434L185.163 185.165L28.4341 373.377C52.8431 420.608 91.5221 459.265 138.771 483.645Z"
          fill="#FFDA44"
        />
        <path
          d="M437.027 437.028C517.793 356.261 533.298 234.964 483.573 138.618L138.617 483.574C234.963 533.298 356.261 517.793 437.027 437.028Z"
          fill="#D80027"
        />
        <path
          d="M74.9732 74.973C-5.79279 155.739 -21.2968 277.037 28.4262 373.383L373.383 28.427C277.037 -21.298 155.739 -5.79198 74.9732 74.973Z"
          fill="#6DA544"
        />
      </g>
      <defs>
        <clipPath id="clip0_4_7264">
          <rect width="512.001" height="512.001" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CG;
