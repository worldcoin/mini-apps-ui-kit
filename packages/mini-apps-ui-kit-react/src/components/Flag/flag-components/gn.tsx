import React from "react";

const GN = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="512"
      height="512"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_4_7172)">
        <path
          d="M345.046 15.925C317.312 5.63398 287.315 0.000976562 256 0.000976562C224.687 0.000976562 194.691 5.63398 166.959 15.923L155.828 256.001L166.958 496.079C194.691 506.369 224.687 512.001 256 512.001C287.316 512.001 317.312 506.369 345.046 496.077L356.176 256.001L345.046 15.925Z"
          fill="#FFDA44"
        />
        <path
          d="M0 256.001C0 366.071 69.472 459.907 166.957 496.077V15.923C69.472 52.095 0 145.929 0 256.001Z"
          fill="#D80027"
        />
        <path
          d="M512 256.001C512 145.929 442.528 52.095 345.043 15.923V496.078C442.528 459.907 512 366.071 512 256.001Z"
          fill="#6DA544"
        />
      </g>
      <defs>
        <clipPath id="clip0_4_7172">
          <rect width="512" height="512" fill="white" transform="translate(0 0.000976562)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default GN;
