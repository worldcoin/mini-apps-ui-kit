import React from "react";

const CZ = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="512"
      height="512"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_4_7136)">
        <path
          d="M256 512C397.385 512 512 397.385 512 256C512 114.615 397.385 0 256 0C114.615 0 0 114.615 0 256C0 397.385 114.615 512 256 512Z"
          fill="#F0F0F0"
        />
        <path
          d="M233.739 256C233.739 256 75.1305 437.055 74.9805 437.019C121.306 483.346 185.307 512 256 512C397.384 512 512 397.384 512 256H233.739Z"
          fill="#D80027"
        />
        <path
          d="M74.9795 74.98C-24.9945 174.954 -24.9945 337.045 74.9795 437.02C116.293 395.707 156.026 355.974 256 256L74.9795 74.98Z"
          fill="#0052B4"
        />
      </g>
      <defs>
        <clipPath id="clip0_4_7136">
          <rect width="512" height="512" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CZ;
