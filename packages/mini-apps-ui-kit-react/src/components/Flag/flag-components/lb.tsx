import React from "react";

const LB = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="512"
      height="512"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_4_7201)">
        <path
          d="M256 512C397.385 512 512 397.385 512 256C512 114.615 397.385 0 256 0C114.615 0 0 114.615 0 256C0 397.385 114.615 512 256 512Z"
          fill="#F0F0F0"
        />
        <path
          d="M256 0C154.506 0 66.8103 59.065 25.4023 144.696H486.597C445.19 59.065 357.493 0 256 0Z"
          fill="#D80027"
        />
        <path
          d="M256 512C357.493 512 445.19 452.935 486.598 367.304H25.4023C66.8103 452.935 154.506 512 256 512Z"
          fill="#D80027"
        />
        <path
          d="M322.783 300.522L256 178.087L189.217 300.522H239.304V333.913H272.696V300.522H322.783Z"
          fill="#6DA544"
        />
      </g>
      <defs>
        <clipPath id="clip0_4_7201">
          <rect width="512" height="512" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LB;
