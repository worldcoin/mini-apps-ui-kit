import React from "react";

const BE = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="512"
      height="512"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_4_7097)">
        <path
          d="M345.043 15.923C317.31 5.633 287.314 0 256 0C224.686 0 194.69 5.633 166.957 15.923L144.696 256L166.957 496.077C194.69 506.368 224.686 512 256 512C287.314 512 317.31 506.368 345.043 496.077L367.304 256L345.043 15.923Z"
          fill="#FFDA44"
        />
        <path
          d="M512 256C512 145.93 442.528 52.0938 345.043 15.9238V496.079C442.528 459.906 512 366.072 512 256Z"
          fill="#D80027"
        />
        <path
          d="M0 256C0 366.072 69.472 459.906 166.957 496.078V15.9238C69.472 52.0938 0 145.93 0 256Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_4_7097">
          <rect width="512" height="512" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BE;
