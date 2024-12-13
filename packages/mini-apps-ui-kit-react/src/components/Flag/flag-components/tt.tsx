import React from "react";

const TT = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="512"
      height="512"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_4_7312)">
        <path
          d="M138.616 28.426C115.698 40.255 94.185 55.76 74.973 74.972C55.76 94.185 40.255 115.698 28.427 138.616L193.034 318.965L373.383 483.572C396.302 471.743 417.815 456.238 437.027 437.027C456.24 417.814 471.744 396.301 483.573 373.383L318.966 193.033L138.616 28.426Z"
          fill="#F0F0F0"
        />
        <path
          d="M437.027 437.027C447.766 426.288 457.344 414.829 465.776 402.81L109.191 46.2241C97.172 54.6551 85.713 64.2331 74.974 74.9721C64.235 85.7111 54.657 97.1701 46.225 109.19L402.81 465.774C414.828 457.343 426.288 447.766 437.027 437.027Z"
          fill="black"
        />
        <path
          d="M74.972 437.027C155.739 517.794 277.036 533.298 373.382 483.572L28.427 138.616C-21.298 234.962 -5.79095 356.26 74.972 437.027Z"
          fill="#D80027"
        />
        <path
          d="M437.027 74.973C356.26 -5.79304 234.963 -21.297 138.617 28.426L483.572 373.384C533.298 277.038 517.794 155.739 437.027 74.973Z"
          fill="#D80027"
        />
      </g>
      <defs>
        <clipPath id="clip0_4_7312">
          <rect width="512" height="512" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default TT;
