import React from "react";

const QA = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="512"
      height="512"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_4_7261)">
        <path
          d="M256 512C397.385 512 512 397.385 512 256C512 114.615 397.385 0 256 0C114.615 0 0 114.615 0 256C0 397.385 114.615 512 256 512Z"
          fill="#F0F0F0"
        />
        <path
          d="M512 256C512 114.616 397.384 0 256 0C205.92 0 159.206 14.395 119.748 39.251L175.861 63.092L100.174 95.25L175.861 127.407L100.174 159.563L175.861 191.718L100.174 223.869L175.861 256.018L100.174 288.174L175.861 320.328L100.174 352.479L175.861 384.633L100.174 416.789L175.861 448.94L119.773 472.768C159.226 497.612 205.93 512 256 512C397.384 512 512 397.384 512 256Z"
          fill="#751A46"
        />
      </g>
      <defs>
        <clipPath id="clip0_4_7261">
          <rect width="512" height="512" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default QA;
