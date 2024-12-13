import React from "react";

const TD = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="512"
      height="512"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_4_7122)">
        <path
          d="M256 0.000976562C224.686 0.000976562 194.689 5.63398 166.957 15.924L155.826 256.001L166.956 496.078C194.689 506.369 224.686 512.001 256 512.001C287.314 512.001 317.311 506.369 345.043 496.078L356.174 256.001L345.044 15.924C317.311 5.63398 287.314 0.000976563 256 0.000976563V0.000976562Z"
          fill="#FFDA44"
        />
        <path
          d="M512 256.001C512 145.93 442.528 52.0951 345.043 15.9241V496.079C442.528 459.907 512 366.072 512 256.001Z"
          fill="#D80027"
        />
        <path
          d="M166.957 496.078V15.9241C69.472 52.0951 0 145.93 0 256.001C0 366.072 69.472 459.907 166.957 496.078Z"
          fill="#0052B4"
        />
      </g>
      <defs>
        <clipPath id="clip0_4_7122">
          <rect width="512" height="512" fill="white" transform="translate(0 0.000976562)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default TD;
