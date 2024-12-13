import React from "react";

const ES = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="512"
      height="512"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_4_7292)">
        <path
          d="M0 256C0 287.314 5.633 317.31 15.923 345.043L256 367.304L496.077 345.043C506.367 317.31 512 287.314 512 256C512 224.686 506.367 194.69 496.077 166.957L256 144.696L15.923 166.957C5.633 194.69 0 224.686 0 256H0Z"
          fill="#FFDA44"
        />
        <path
          d="M496.077 166.957C459.906 69.473 366.071 0 256 0C145.929 0 52.094 69.473 15.923 166.957H496.077Z"
          fill="#D80027"
        />
        <path
          d="M15.923 345.043C52.094 442.527 145.929 512 256 512C366.071 512 459.906 442.527 496.077 345.043H15.923Z"
          fill="#D80027"
        />
      </g>
      <defs>
        <clipPath id="clip0_4_7292">
          <rect width="512" height="512" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ES;
