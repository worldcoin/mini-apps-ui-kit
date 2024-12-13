import React from "react";

export function ArrowDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 1L5 5L9 1"
        stroke="currentColor"
        strokeWidth="1.84615"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
