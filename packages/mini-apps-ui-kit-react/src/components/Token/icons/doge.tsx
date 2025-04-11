import { IconProps } from "./types";
import { getBackgroundClass, getIconFillClass } from "./utils";

const DOGE = (props: IconProps) => (
  <svg
    width="88"
    height="88"
    viewBox="0 0 88 88"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{ color: "#988430" }}
  >
    <rect width="88" height="88" rx="44" className={getBackgroundClass(props)} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M63.871 34.1006C59.9176 23.8914 50.1446 22 50.1446 22H22.2619L22.3695 32.3989H27.9223V55.6198H22.2615V66H49.3728C55.9067 66 61.1444 59.4339 61.1444 59.4339C69.5318 47.5297 63.8705 34.1006 63.8705 34.1006H63.871ZM49.5183 52.4379C49.5183 52.4379 47.3917 55.506 45.0779 55.506H40.4495L40.3398 32.4244H46.2796C46.2796 32.4244 49.0317 32.9998 50.9543 38.4459C50.9543 38.4459 53.5033 46.2433 49.5183 52.4379Z"
      className={getIconFillClass(props)}
    />
  </svg>
);

export default DOGE;
