import React from "react";

const BB = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="512"
      height="512"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_4_7094)">
        <path
          d="M367.304 25.402C333.648 9.128 295.89 0 256 0C216.11 0 178.352 9.128 144.696 25.402L122.435 256L144.696 486.598C178.352 502.872 216.11 512 256 512C295.89 512 333.648 502.872 367.304 486.598L389.565 256L367.304 25.402Z"
          fill="#FFDA44"
        />
        <path
          d="M144.696 25.4111C59.066 66.8171 0 154.506 0 256C0 357.494 59.066 445.183 144.696 486.589V25.4111Z"
          fill="#0052B4"
        />
        <path
          d="M367.304 25.4111V486.589C452.934 445.183 512 357.493 512 256C512 154.507 452.934 66.8171 367.304 25.4111Z"
          fill="#0052B4"
        />
        <path
          d="M333.913 155.826L348.846 163.292L333.913 155.826L318.979 148.36C318.079 150.161 298.58 189.834 295.395 250.435H272.696V155.826L256 133.565L239.304 155.826V250.435H216.605C213.419 189.834 193.921 150.161 193.02 148.36L163.154 163.293C163.36 163.703 183.653 205.008 183.653 267.131V283.827H239.305V378.436H272.696V283.827H328.348V267.13C328.348 235.012 333.905 208.528 338.568 191.966C343.651 173.906 348.814 163.359 348.865 163.254L333.913 155.826Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_4_7094">
          <rect width="512" height="512" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BB;
