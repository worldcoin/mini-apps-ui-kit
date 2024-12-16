import React from "react";

const CH = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="513"
      height="512"
      viewBox="0 0 513 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_4_7301)">
        <path
          d="M256.578 512C397.963 512 512.578 397.385 512.578 256C512.578 114.615 397.963 0 256.578 0C115.193 0 0.578125 114.615 0.578125 256C0.578125 397.385 115.193 512 256.578 512Z"
          fill="#D80027"
        />
        <path
          d="M390.143 211.479H301.1V122.435H212.056V211.479H123.013V300.522H212.056V389.565H301.1V300.522H390.143V211.479Z"
          fill="#F0F0F0"
        />
      </g>
      <defs>
        <clipPath id="clip0_4_7301">
          <rect width="512" height="512" fill="white" transform="translate(0.578125)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CH;
