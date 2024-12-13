import React from "react";

const SS = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="512"
      height="512"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_4_7291)">
        <path
          d="M256 512C397.385 512 512 397.385 512 256C512 114.615 397.385 0 256 0C114.615 0 0 114.615 0 256C0 397.385 114.615 512 256 512Z"
          fill="#F0F0F0"
        />
        <path
          d="M492.029 156.753C453.26 64.662 362.188 0 256 0C185.306 0 121.313 28.659 74.989 74.989L139.099 156.753H492.029Z"
          fill="black"
        />
        <path
          d="M139.826 354.32L74.989 437.011C121.313 483.341 185.306 512 256 512C362.546 512 453.878 446.906 492.424 354.32H139.826Z"
          fill="#496E2D"
        />
        <path
          d="M55.652 188.29V322.782H503.182C508.924 301.491 512 279.107 512 256C512 232.558 508.842 209.858 502.939 188.29H55.652Z"
          fill="#A2001D"
        />
        <path
          d="M74.98 74.98C-24.994 174.954 -24.994 337.045 74.98 437.02C116.293 395.707 156.026 355.974 256 256L74.98 74.98Z"
          fill="#0052B4"
        />
        <path
          d="M83.386 192.352L114.631 235.953L165.759 219.708L133.948 262.901L165.193 306.504L114.285 289.597L82.473 332.789L82.823 279.146L31.913 262.237L83.037 245.993L83.386 192.352Z"
          fill="#FFDA44"
        />
      </g>
      <defs>
        <clipPath id="clip0_4_7291">
          <rect width="512" height="512" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SS;
