import React from "react";

const TO = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="512"
      height="512"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_4_7310)">
        <path
          d="M256 511.999C397.385 511.999 512 397.384 512 255.999C512 114.614 397.385 -0.000976562 256 -0.000976562C114.615 -0.000976562 0 114.614 0 255.999C0 397.384 114.615 511.999 256 511.999Z"
          fill="#F0F0F0"
        />
        <path
          d="M166.957 133.564V100.173H133.565V133.564H100.174V166.956H133.565V200.347H166.957V166.956H200.348V133.564H166.957Z"
          fill="#D80027"
        />
        <path
          d="M256 -0.000976562V255.999C114.616 256 58.425 255.999 0 256C0 397.383 114.616 511.999 256 511.999C397.384 511.999 512 397.383 512 255.999C512 114.615 397.384 -0.000976562 256 -0.000976562Z"
          fill="#D80027"
        />
      </g>
      <defs>
        <clipPath id="clip0_4_7310">
          <rect width="512" height="512" fill="white" transform="translate(0 -0.000976562)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default TO;
