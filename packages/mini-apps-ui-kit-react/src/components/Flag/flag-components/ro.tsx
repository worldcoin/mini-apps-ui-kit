import React from "react";

const RO = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="512"
      height="512"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_4_7265)">
        <path
          d="M345.043 15.922C317.309 5.633 287.314 1.33097e-07 256 1.33097e-07C224.686 -0.000999867 194.69 5.633 166.957 15.922L144.696 255.999L166.957 496.076C194.689 506.368 224.685 512 256 512C287.313 512 317.31 506.368 345.043 496.076L367.303 256L345.043 15.922Z"
          fill="#FFDA44"
        />
        <path
          d="M512 256C512 145.93 442.528 52.093 345.043 15.923V496.079C442.528 459.905 511.999 366.072 512 256Z"
          fill="#D80027"
        />
        <path
          d="M0 255.999C0 366.072 69.472 459.905 166.955 496.078L166.956 15.924C69.472 52.094 0 145.928 0 255.999H0Z"
          fill="#0052B4"
        />
      </g>
      <defs>
        <clipPath id="clip0_4_7265">
          <rect width="512" height="512" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default RO;
