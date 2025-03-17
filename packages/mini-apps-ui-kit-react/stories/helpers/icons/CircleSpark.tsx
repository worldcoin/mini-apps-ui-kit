export function CircleSpark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="circle-spark-icon"
      {...props}
    >
      <rect width="64" height="64" rx="32" fill="#9BA3AE" />
      <rect opacity="0.2" width="64" height="64" rx="32" fill="url(#paint0_radial_312_818)" />
      <rect
        x="0.363636"
        y="0.363636"
        width="63.2727"
        height="63.2727"
        rx="31.6364"
        stroke="url(#paint1_linear_312_818)"
        strokeWidth="0.727273"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.9999 17.8181C32.6024 17.8181 33.0908 18.3065 33.0908 18.909C33.0908 23.4124 34.0554 26.3335 35.8852 28.1513C37.7164 29.9706 40.6394 30.909 45.0908 30.909C45.6933 30.909 46.1818 31.3974 46.1818 31.9999C46.1818 32.6024 45.6933 33.0908 45.0908 33.0908C40.6467 33.0908 37.7216 34.0538 35.8877 35.8877C34.0538 37.7216 33.0908 40.6467 33.0908 45.0908C33.0908 45.6933 32.6024 46.1818 31.9999 46.1818C31.3974 46.1818 30.909 45.6933 30.909 45.0908C30.909 40.6485 29.9399 37.7229 28.1024 35.8883C26.2644 34.0534 23.3383 33.0908 18.909 33.0908C18.3065 33.0908 17.8181 32.6024 17.8181 31.9999C17.8181 31.3974 18.3065 30.909 18.909 30.909C23.3456 30.909 26.2696 29.971 28.1049 28.1507C29.9383 26.3322 30.909 23.4106 30.909 18.909C30.909 18.3065 31.3974 17.8181 31.9999 17.8181Z"
        fill="white"
      />
      <defs>
        <radialGradient
          id="paint0_radial_312_818"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(14.5455 -1.21665e-06) rotate(63.4349) scale(71.5542 71.2456)"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <linearGradient
          id="paint1_linear_312_818"
          x1="32"
          y1="0"
          x2="32"
          y2="64"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.3" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
