import { IconProps } from "./types";
import { getBackgroundClass, getIconFillClass } from "./utils";

const ETH = (props: IconProps) => (
  <svg
    width="88"
    height="88"
    viewBox="0 0 88 88"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{ color: "#3385FF" }}
  >
    <rect width="88" height="88" rx="44" className={getBackgroundClass(props)} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M44 51.5001L31 44.0001L44 24.0001L57 44.0001L44 51.5001ZM44 54.5001L31 47.0001L44 65.0001L57 47.0001L44 54.5001Z"
      className={getIconFillClass(props)}
    />
  </svg>
);

export default ETH;
