import React from "react";

const VN = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="512"
      height="512"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_4_7329)">
        <path
          d="M256 512C397.385 512 512 397.385 512 256C512 114.615 397.385 0 256 0C114.615 0 0 114.615 0 256C0 397.385 114.615 512 256 512Z"
          fill="#D80027"
        />
        <path
          d="M256 133.565L283.628 218.594H373.033L300.702 271.144L328.33 356.174L256 303.623L183.67 356.174L211.298 271.144L138.968 218.594H228.372L256 133.565Z"
          fill="#FFDA44"
        />
      </g>
      <defs>
        <clipPath id="clip0_4_7329">
          <rect width="512" height="512" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default VN;
