import { IconProps } from "./types";
import { getBackgroundClass, getIconFillClass } from "./utils";

const BTC = (props: IconProps) => (
  <svg
    width="88"
    height="88"
    viewBox="0 0 88 88"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{ color: "#FF5A00" }}
  >
    <rect width="88" height="88" rx="44" className={getBackgroundClass(props)} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M41.9115 24.889H46.707V30.1736C51.5254 30.6529 54.6619 33.1054 54.6619 37.7023C54.6619 40.9261 53.0097 42.941 49.8664 44.1097V44.1903C52.9694 44.7947 55.6693 46.6484 55.6693 50.6782C55.6693 56.012 52.2208 58.3483 46.7071 58.7826L46.7071 64.162H41.9117L41.9117 58.8587H34.6741V30.086H41.9115V24.889ZM44.3456 54.4259H40.074V46.4469H45.0307C48.1336 46.4469 50.3097 47.4947 50.3097 50.3558C50.3097 53.4588 47.9724 54.4259 44.3456 54.4259ZM43.9829 42.1351H40.074V34.4784H44.265C47.4082 34.4784 49.3022 35.2038 49.3022 38.1456C49.3022 41.047 47.4485 42.1351 43.9829 42.1351Z"
      className={getIconFillClass(props)}
    />
  </svg>
);

export default BTC;
