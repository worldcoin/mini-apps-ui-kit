import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  solid?: boolean;
}

export const Contacts: React.FC<IconProps> = ({ size = 24, solid = false, ...props }) => {
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
        <g clip-path="url(#clip0_570_1184)">
          <path
            d="M1.82495 20C1.82495 16.4101 4.7351 13.5 8.32495 13.5C11.9148 13.5 14.825 16.4101 14.825 20V22.5H1.82495V20Z"
            fill="currentColor"
          />
          <path
            d="M25.4272 23.45H26.3772V22.5V18C26.3772 13.8855 23.0418 10.55 18.9272 10.55C14.8127 10.55 11.4772 13.8855 11.4772 18V22.5V23.45H12.4272H25.4272Z"
            fill="currentColor"
            stroke="white"
            stroke-width="1.9"
          />
          <path
            d="M11.4272 9C11.4272 10.933 9.86024 12.5 7.92725 12.5C5.99425 12.5 4.42725 10.933 4.42725 9C4.42725 7.067 5.99425 5.5 7.92725 5.5C9.86024 5.5 11.4272 7.067 11.4272 9Z"
            fill="currentColor"
          />
          <path
            d="M22.4272 7C22.4272 8.933 20.8602 10.5 18.9272 10.5C16.9942 10.5 15.4272 8.933 15.4272 7C15.4272 5.067 16.9942 3.5 18.9272 3.5C20.8602 3.5 22.4272 5.067 22.4272 7Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_570_1184">
            <rect width="26" height="26" fill="white" transform="translate(0.625)" />
          </clipPath>
        </defs>
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
        d="M2.91724 21.5385C2.91724 18.2248 5.60353 15.5385 8.91724 15.5385C12.2309 15.5385 14.9172 18.2248 14.9172 21.5385V23.2308H2.91724V21.5385Z"
        fill="white"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M14.3351 19.3846C14.3351 16.0709 17.0214 13.3846 20.3351 13.3846C23.6488 13.3846 26.3351 16.0709 26.3351 19.3846V23.2308H14.3351V19.3846Z"
        fill="white"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M11.2582 9.69231C11.2582 11.2217 10.0184 12.4615 8.48896 12.4615C6.95955 12.4615 5.71973 11.2217 5.71973 9.69231C5.71973 8.16291 6.95955 6.92308 8.48896 6.92308C10.0184 6.92308 11.2582 8.16291 11.2582 9.69231Z"
        fill="white"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M23.1043 7.53846C23.1043 9.06786 21.8645 10.3077 20.3351 10.3077C18.8057 10.3077 17.5659 9.06786 17.5659 7.53846C17.5659 6.00905 18.8057 4.76923 20.3351 4.76923C21.8645 4.76923 23.1043 6.00905 23.1043 7.53846Z"
        fill="white"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
};

export default Contacts;
