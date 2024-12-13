import React from "react";

const KW = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="512"
      height="512"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_4_7197)">
        <path
          d="M496.077 345.043C506.367 317.31 512 287.314 512 256C512 224.686 506.367 194.69 496.077 166.957L256 144.696L15.923 166.957C5.633 194.69 0 224.686 0 256C0 287.314 5.633 317.31 15.923 345.043L256 367.304L496.077 345.043Z"
          fill="#F0F0F0"
        />
        <path
          d="M256 512C366.07 512 459.906 442.528 496.076 345.043H15.9219C52.0939 442.528 145.928 512 256 512Z"
          fill="#D80027"
        />
        <path
          d="M256 0C145.928 0 52.0939 69.472 15.9219 166.957H496.077C459.906 69.472 366.07 0 256 0Z"
          fill="#6DA544"
        />
        <path
          d="M74.9795 74.98C-24.9945 174.954 -24.9945 337.045 74.9795 437.02C101.075 410.925 126.545 385.455 166.956 345.044V166.957L74.9795 74.98Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_4_7197">
          <rect width="512" height="512" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default KW;
