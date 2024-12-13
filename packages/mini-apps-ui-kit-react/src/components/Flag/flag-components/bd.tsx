import React from "react";

const BD = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="512"
      height="512"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_4_7093)">
        <path
          d="M256 512C397.385 512 512 397.385 512 256C512 114.615 397.385 0 256 0C114.615 0 0 114.615 0 256C0 397.385 114.615 512 256 512Z"
          fill="#496E2D"
        />
        <path
          d="M200.348 367.304C261.819 367.304 311.652 317.471 311.652 256C311.652 194.528 261.819 144.696 200.348 144.696C138.876 144.696 89.0439 194.528 89.0439 256C89.0439 317.471 138.876 367.304 200.348 367.304Z"
          fill="#D80027"
        />
      </g>
      <defs>
        <clipPath id="clip0_4_7093">
          <rect width="512" height="512" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BD;
