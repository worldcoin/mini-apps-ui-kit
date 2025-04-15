import { IconProps } from "./types";
import { getBackgroundClass, getIconFillClass } from "./utils";

const XRP = (props: IconProps) => (
  <svg
    width="88"
    height="88"
    viewBox="0 0 88 88"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{ color: "#23292F" }}
  >
    <rect width="88" height="88" rx="44" className={getBackgroundClass(props)} />
    <path
      d="M60.9687 24.125H67.9062L53.4687 38.42C48.2403 43.5941 39.7634 43.5941 34.5312 38.42L20.0881 24.125H27.0312L38 34.9841C39.5981 36.5592 41.7519 37.4421 43.9958 37.4421C46.2397 37.4421 48.3934 36.5592 49.9916 34.9841L60.9687 24.125Z"
      className={getIconFillClass(props)}
    />
    <path
      d="M26.9422 63.875H20L34.5312 49.4919C39.7597 44.3178 48.2366 44.3178 53.4688 49.4919L68 63.875H61.0625L50 52.9278C48.4019 51.3527 46.2481 50.4697 44.0042 50.4697C41.7603 50.4697 39.6066 51.3527 38.0084 52.9278L26.9422 63.875Z"
      className={getIconFillClass(props)}
    />
  </svg>
);

export default XRP;
