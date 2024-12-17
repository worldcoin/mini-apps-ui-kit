import React from "react";

const IE = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="512"
      height="512"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_4_7184)">
        <path
          d="M256 512C397.385 512 512 397.385 512 256C512 114.615 397.385 0 256 0C114.615 0 0 114.615 0 256C0 397.385 114.615 512 256 512Z"
          fill="#F0F0F0"
        />
        <path
          d="M512 256C512 145.93 442.528 52.0941 345.043 15.9241V496.079C442.528 459.906 512 366.072 512 256Z"
          fill="#FF9811"
        />
        <path
          d="M0 256C0 366.072 69.472 459.906 166.957 496.078V15.9241C69.472 52.0941 0 145.93 0 256Z"
          fill="#6DA544"
        />
      </g>
      <defs>
        <clipPath id="clip0_4_7184">
          <rect width="512" height="512" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IE;
