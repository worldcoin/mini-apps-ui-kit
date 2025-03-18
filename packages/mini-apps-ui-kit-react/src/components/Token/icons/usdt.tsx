import { IconProps } from "./types";
import { getBackgroundClass, getIconFillClass } from "./utils";

const USDT = (props: IconProps) => (
  <svg
    width="88"
    height="88"
    viewBox="0 0 88 88"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{ color: "#28D9A6" }}
  >
    <rect width="88" height="88" rx="44" className={getBackgroundClass(props)} />
    <path
      d="M48.4722 37.3457V31.9535H60.8028V23.7377H27.2262V31.9535H39.5582V37.3414C29.5358 37.8017 22 39.7866 22 42.1644C22 44.5423 29.5395 46.5272 39.5582 46.9904V64.2623H48.4751V46.989C58.4794 46.5272 66 44.5437 66 42.1681C66 39.7924 58.4794 37.8089 48.4751 37.3472M48.4751 45.526V45.5217C48.2235 45.5376 46.931 45.6152 44.0529 45.6152C41.7519 45.6152 40.1331 45.5499 39.5626 45.5202V45.5275C30.7081 45.1353 24.0987 43.5933 24.0987 41.7483C24.0987 39.9033 30.7088 38.3635 39.5626 37.9706V43.9913C40.1426 44.0312 41.8012 44.129 44.0906 44.129C46.8403 44.129 48.2228 44.0145 48.4766 43.9913V37.9706C57.3137 38.3643 63.9078 39.9077 63.9078 41.7461C63.9078 43.5846 57.3108 45.1287 48.4766 45.5224"
      className={getIconFillClass(props)}
    />
  </svg>
);

export default USDT;
