import React from "react";

const JP = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="512"
      height="513"
      viewBox="0 0 512 513"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_4_7189)">
        <path
          d="M256 512.989C397.385 512.989 512 398.374 512 256.989C512 115.604 397.385 0.989258 256 0.989258C114.615 0.989258 0 115.604 0 256.989C0 398.374 114.615 512.989 256 512.989Z"
          fill="#F0F0F0"
        />
        <path
          d="M256 368.293C317.472 368.293 367.304 318.461 367.304 256.989C367.304 195.518 317.472 145.685 256 145.685C194.529 145.685 144.696 195.518 144.696 256.989C144.696 318.461 194.529 368.293 256 368.293Z"
          fill="#D80027"
        />
      </g>
      <defs>
        <clipPath id="clip0_4_7189">
          <rect width="512" height="512" fill="white" transform="translate(0 0.989258)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default JP;
