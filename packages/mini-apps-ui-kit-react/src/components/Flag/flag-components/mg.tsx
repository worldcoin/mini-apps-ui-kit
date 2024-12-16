import React from "react";

const MG = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="512"
      height="512"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_4_7209)">
        <path
          d="M256 512C397.385 512 512 397.385 512 256C512 114.615 397.385 0 256 0C114.615 0 0 114.615 0 256C0 397.385 114.615 512 256 512Z"
          fill="#F0F0F0"
        />
        <path
          d="M166.957 256V496.077C194.689 506.368 224.686 512 256 512C397.384 512 512 397.384 512 256C512 114.616 166.957 256 166.957 256Z"
          fill="#6DA544"
        />
        <path
          d="M256 0C224.686 0 194.689 5.633 166.957 15.923V256H512C512 114.616 397.384 0 256 0Z"
          fill="#D80027"
        />
      </g>
      <defs>
        <clipPath id="clip0_4_7209">
          <rect width="512" height="512" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MG;
