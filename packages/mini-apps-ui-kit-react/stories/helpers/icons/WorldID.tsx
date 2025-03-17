import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  solid?: boolean;
}

export const WorldID: React.FC<IconProps> = ({ size = 24, solid = false, ...props }) => {
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
        <path
          d="M13.875 3.25C8.49022 3.25 4.125 7.61522 4.125 13C4.125 18.3847 8.49022 22.75 13.875 22.75C19.2597 22.75 23.625 18.3847 23.625 13C23.625 7.61522 19.2597 3.25 13.875 3.25Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <mask
          id="mask0_528_3444"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="5"
          y="4"
          width="18"
          height="18"
        >
          <circle cx="13.875" cy="13" r="8.82143" fill="currentColor" />
        </mask>
        <g mask="url(#mask0_528_3444)">
          <ellipse cx="13.875" cy="19.1071" rx="8.35714" ry="2.78571" fill="white" />
          <path
            d="M6.07465 18.8502C6.07465 18.8502 8.32413 16.9002 13.8746 16.9002C19.4251 16.9002 21.6746 18.8502 21.6746 18.8502"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.8746 13.0002C15.4901 13.0002 16.7996 11.6907 16.7996 10.0752C16.7996 8.45978 15.4901 7.15021 13.8746 7.15021C12.2592 7.15021 10.9496 8.45978 10.9496 10.0752C10.9496 11.6907 12.2592 13.0002 13.8746 13.0002Z"
            fill="white"
          />
        </g>
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
      <path
        d="M14.8746 3.50012C9.07564 3.50012 4.37463 8.20113 4.37463 14.0001C4.37463 19.7991 9.07564 24.5001 14.8746 24.5001C20.6736 24.5001 25.3746 19.7991 25.3746 14.0001C25.3746 8.20113 20.6736 3.50012 14.8746 3.50012Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.47461 20.3001C6.47461 20.3001 8.89713 18.2001 14.8746 18.2001C20.852 18.2001 23.2746 20.3001 23.2746 20.3001"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.8746 14.0001C16.6144 14.0001 18.0246 12.5899 18.0246 10.8501C18.0246 9.11044 16.6144 7.70013 14.8746 7.70013C13.1349 7.70013 11.7246 9.11044 11.7246 10.8501C11.7246 12.5899 13.1349 14.0001 14.8746 14.0001Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default WorldID;
