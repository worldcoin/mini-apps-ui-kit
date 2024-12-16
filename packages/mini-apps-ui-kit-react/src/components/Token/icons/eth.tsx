import React from "react";

const ETH = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="88"
    height="88"
    viewBox="0 0 88 88"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="44" cy="44" r="44" fill="#007FD3" />
    <circle cx="44" cy="44" r="44" fill="url(#paint0_radial_12_1277)" />
    <circle cx="44" cy="44" r="44" fill="url(#paint1_radial_12_1277)" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M43.6241 23.0001L43.6242 23V23.0003L56.7466 44.3895L43.6241 38.5258L30.5 44.3895L43.6241 23.0003V23L43.6241 23.0001ZM43.6241 64.9999V65.0001L43.6242 65L43.6242 65.0001V64.9999L56.7553 46.8331L43.6242 54.4506V54.4489L30.5 46.8331L43.6241 64.9999ZM43.6242 52.0088L56.7466 44.3895L43.6242 38.5294V38.5293L43.6241 38.5294L43.6241 38.5293V38.5294L30.5 44.3895L43.6241 52.0088V52.0089L43.6241 52.0088L43.6242 52.0089V52.0088Z"
      fill="url(#paint2_linear_12_1277)"
    />
    <defs>
      <radialGradient
        id="paint0_radial_12_1277"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(83.9633 70.1674) rotate(170.361) scale(62.5095 57.5688)"
      >
        <stop stopColor="#0AA5DE" />
        <stop offset="1" stopColor="#0AA5DE" stopOpacity="0" />
      </radialGradient>
      <radialGradient
        id="paint1_radial_12_1277"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(6.45871 8.33481) rotate(71.0626) scale(53.4853 52.1862)"
      >
        <stop stopColor="#0B62DF" />
        <stop offset="0.963542" stopColor="#0B62DF" stopOpacity="0" />
      </radialGradient>
      <linearGradient
        id="paint2_linear_12_1277"
        x1="43.6277"
        y1="23"
        x2="43.6277"
        y2="65.0001"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.5" stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0.8" />
      </linearGradient>
    </defs>
  </svg>
);

export default ETH;
