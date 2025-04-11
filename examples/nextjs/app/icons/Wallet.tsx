import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  solid?: boolean;
}

export const Wallet: React.FC<IconProps> = ({ solid = false, ...props }) => {
  if (solid) {
    return (
      <svg
        width="26"
        height="26"
        viewBox="0 0 27 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <rect
          x="3.16046"
          y="4.64273"
          width="20.4286"
          height="16.7143"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1.9"
        />
        <rect
          x="16.625"
          y="10.8333"
          width="6.5"
          height="4.33333"
          fill="white"
          stroke="currentColor"
          strokeWidth="1.89583"
        />
      </svg>
    );
  }
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 29 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="3.375" y="5" width="22" height="18" stroke="currentColor" strokeWidth="2" />
      <rect
        x="17.875"
        y="11.6667"
        width="7"
        height="4.66667"
        fill="white"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
};
