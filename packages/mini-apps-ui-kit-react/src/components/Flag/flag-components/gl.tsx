import React from "react";

const GL = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="512"
      height="512"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_4_7166)">
        <path
          d="M0 256C0 114.616 114.616 0 256 0C397.384 0 512 114.616 512 256C500.87 256 256 289.391 256 289.391L0 256Z"
          fill="#F0F0F0"
        />
        <path
          d="M512 256C512 397.384 397.384 512 256 512C114.616 512 0 397.384 0 256"
          fill="#D80027"
        />
        <path
          d="M178.087 378.435C245.706 378.435 300.522 323.619 300.522 256C300.522 188.381 245.706 133.565 178.087 133.565C110.468 133.565 55.6523 188.381 55.6523 256C55.6523 323.619 110.468 378.435 178.087 378.435Z"
          fill="#F0F0F0"
        />
        <path
          d="M55.6523 256C55.6523 188.383 110.468 133.565 178.087 133.565C245.707 133.565 300.522 188.382 300.522 256"
          fill="#D80027"
        />
      </g>
      <defs>
        <clipPath id="clip0_4_7166">
          <rect width="512" height="512" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default GL;
