import React from "react";

const BW = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="512"
      height="512"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_4_7105)">
        <path
          d="M12.089 178.086C4.24698 202.655 -2.32609e-05 228.828 0.000976739 255.999C-2.32609e-05 283.168 4.24698 309.342 12.09 333.912L256.001 345.044L499.911 333.912C507.752 309.342 512 283.167 512 256C512 228.83 507.753 202.655 499.911 178.086L256 166.956L12.089 178.086Z"
          fill="#F0F0F0"
        />
        <path
          d="M512 256C512 240.813 510.67 225.937 508.133 211.477H3.868C1.33 225.937 0 240.811 0 255.999C0 271.187 1.331 286.061 3.868 300.521H508.133C510.669 286.06 512 271.186 512 256Z"
          fill="black"
        />
        <path
          d="M256.001 511.999C370.217 511.999 466.947 437.196 499.911 333.911H12.0898C45.0548 437.195 141.786 511.997 256.001 511.999Z"
          fill="#338AF3"
        />
        <path
          d="M256.001 0.000976603C141.786 0.000976603 45.0559 74.804 12.0889 178.086L499.909 178.087C466.946 74.804 370.215 -0.0010234 256.001 0.000976603Z"
          fill="#338AF3"
        />
      </g>
      <defs>
        <clipPath id="clip0_4_7105">
          <rect width="512" height="512" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BW;
