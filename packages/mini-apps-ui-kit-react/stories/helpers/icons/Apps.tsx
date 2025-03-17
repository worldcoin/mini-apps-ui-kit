import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  solid?: boolean;
}

export const Apps: React.FC<IconProps> = ({ size = 24, solid = false, ...props }) => {
  if (solid) {
    return (
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M3.83887 3.71452H11.2674C11.2674 4.24514 11.2674 10.4385 11.2674 11.1431C10.7368 11.1431 4.54346 11.1431 3.83887 11.1431C3.83889 10.0819 3.83887 4.47475 3.83887 3.71452Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1.9"
        />
        <path
          d="M3.83887 14.8573H11.2674C11.2674 15.3879 11.2674 21.5813 11.2674 22.2859C10.7368 22.2859 4.54346 22.2859 3.83887 22.2859C3.83889 21.2246 3.83887 15.6175 3.83887 14.8573Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1.9"
        />
        <path
          d="M14.9822 14.8573H22.4107C22.4107 15.3879 22.4107 21.5813 22.4107 22.2859C21.8801 22.2859 15.6868 22.2859 14.9822 22.2859C14.9822 21.2246 14.9822 15.6175 14.9822 14.8573Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1.9"
        />
        <path
          d="M14.9822 3.71452H22.4107C22.4107 4.24514 22.4107 10.4385 22.4107 11.1431C21.8801 11.1431 15.6868 11.1431 14.9822 11.1431C14.9822 10.0819 14.9822 4.47475 14.9822 3.71452Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1.9"
        />
      </svg>
    );
  }
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.12415 4.00018H12.1241C12.1241 4.57161 12.1241 11.2414 12.1241 12.0002C11.5527 12.0002 4.88294 12.0002 4.12415 12.0002C4.12417 10.8573 4.12414 4.81889 4.12415 4.00018Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M4.12415 16.0002H12.1241C12.1241 16.5716 12.1241 23.2414 12.1241 24.0002C11.5527 24.0002 4.88294 24.0002 4.12415 24.0002C4.12417 22.8573 4.12414 16.8189 4.12415 16.0002Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M16.1241 16.0002H24.1241C24.1241 16.5716 24.1241 23.2414 24.1241 24.0002C23.5527 24.0002 16.8829 24.0002 16.1241 24.0002C16.1242 22.8573 16.1241 16.8189 16.1241 16.0002Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M16.1241 4.00018H24.1241C24.1241 4.57161 24.1241 11.2414 24.1241 12.0002C23.5527 12.0002 16.8829 12.0002 16.1241 12.0002C16.1242 10.8573 16.1241 4.81889 16.1241 4.00018Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
};

export default Apps;
