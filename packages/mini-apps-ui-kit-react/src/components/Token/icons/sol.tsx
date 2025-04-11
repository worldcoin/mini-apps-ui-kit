import { IconProps } from "./types";
import { getBackgroundClass, getIconFillClass } from "./utils";

const SOL = (props: IconProps) => (
  <svg
    width="88"
    height="88"
    viewBox="0 0 88 88"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="88" height="88" rx="44" className={getBackgroundClass(props)} />
    <g clip-path="url(#clip0_2277_732)">
      <path
        d="M27.6616 54.1925C27.9537 53.8944 28.3553 53.7205 28.7813 53.7205H67.4088C68.1146 53.7205 68.4676 54.59 67.9686 55.0993L60.338 62.888C60.0459 63.1862 59.6443 63.3601 59.2184 63.3601H20.5909C19.885 63.3601 19.5321 62.4905 20.031 61.9812L27.6616 54.1925Z"
        className={
          props.variant !== "color" || props.disabled ? getIconFillClass(props) : undefined
        }
        fill={props.variant === "color" ? "url(#paint0_linear_2277_732)" : undefined}
      />
      <path
        d="M27.6616 25.1121C27.9659 24.8139 28.3675 24.64 28.7813 24.64H67.4088C68.1146 24.64 68.4676 25.5096 67.9686 26.0189L60.338 33.8076C60.0459 34.1057 59.6443 34.2796 59.2184 34.2796H20.5909C19.885 34.2796 19.5321 33.4101 20.031 32.9008L27.6616 25.1121Z"
        className={
          props.variant !== "color" || props.disabled ? getIconFillClass(props) : undefined
        }
        fill={props.variant === "color" ? "url(#paint1_linear_2277_732)" : undefined}
      />
      <path
        d="M60.338 39.5591C60.0459 39.261 59.6443 39.0871 59.2184 39.0871H20.5909C19.885 39.0871 19.5321 39.9566 20.031 40.4659L27.6616 48.2547C27.9537 48.5528 28.3553 48.7267 28.7813 48.7267H67.4088C68.1146 48.7267 68.4676 47.8571 67.9686 47.3478L60.338 39.5591Z"
        className={
          props.variant !== "color" || props.disabled ? getIconFillClass(props) : undefined
        }
        fill={props.variant === "color" ? "url(#paint2_linear_2277_732)" : undefined}
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_2277_732"
        x1="63.7187"
        y1="19.9873"
        x2="36.1134"
        y2="71.7889"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#00FFA3" />
        <stop offset="1" stop-color="#DC1FFF" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_2277_732"
        x1="52.0295"
        y1="13.758"
        x2="24.4242"
        y2="65.5596"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#00FFA3" />
        <stop offset="1" stop-color="#DC1FFF" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_2277_732"
        x1="57.8369"
        y1="16.8528"
        x2="30.2316"
        y2="68.6544"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#00FFA3" />
        <stop offset="1" stop-color="#DC1FFF" />
      </linearGradient>
      <clipPath id="clip0_2277_732">
        <rect width="48.4" height="38.72" fill="white" transform="translate(19.8 24.64)" />
      </clipPath>
    </defs>
  </svg>
);

export default SOL;
