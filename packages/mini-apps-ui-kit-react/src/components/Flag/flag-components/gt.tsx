import React from "react";

const GT = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="512"
      height="512"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_4_7169)">
        <path
          d="M256 512C397.385 512 512 397.385 512 256C512 114.615 397.385 0 256 0C114.615 0 0 114.615 0 256C0 397.385 114.615 512 256 512Z"
          fill="#F0F0F0"
        />
        <path
          d="M512 256C512 154.506 452.935 66.81 367.304 25.402V486.597C452.935 445.19 512 357.493 512 256Z"
          fill="#338AF3"
        />
        <path
          d="M0 256C0 357.493 59.065 445.19 144.696 486.598V25.402C59.065 66.81 0 154.506 0 256Z"
          fill="#338AF3"
        />
        <path
          d="M322.898 299.288L279.612 256.002L320.815 214.797L318.948 193.035L307.152 181.237L256 232.389L204.848 181.237L193.052 193.035L191.185 214.797L232.388 256.002L189.101 299.288L212.713 322.898L256 279.613L299.287 322.898L322.898 299.288Z"
          fill="#ACABB1"
        />
        <path
          d="M318.963 193.037L295.352 216.648C305.423 226.719 311.653 240.632 311.653 256C311.653 286.736 286.736 311.652 256.001 311.652C225.266 311.652 200.348 286.736 200.348 256C200.348 240.632 206.578 226.719 216.649 216.648L193.038 193.037C176.923 209.149 166.957 231.41 166.957 256C166.957 305.178 206.823 345.043 256 345.043C305.177 345.043 345.043 305.177 345.043 256C345.043 231.411 335.077 209.15 318.963 193.037Z"
          fill="#6DA544"
        />
      </g>
      <defs>
        <clipPath id="clip0_4_7169">
          <rect width="512" height="512" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default GT;
