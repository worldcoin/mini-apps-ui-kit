import { IconProps } from "./types";
import { getBackgroundClass, getIconFillClass } from "./utils";

const LINK = (props: IconProps) => (
  <svg
    width="88"
    height="88"
    viewBox="0 0 88 88"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{ color: "#2A5ADA" }}
  >
    <rect width="88" height="88" rx="44" className={getBackgroundClass(props)} />
    <path
      d="M44 20L39.5963 22.5321L27.5963 29.4679L23.1926 32V56L27.5963 58.5321L39.7064 65.4679L44.1101 68L48.5137 65.4679L60.4036 58.5321L64.8073 56V32L60.4036 29.4679L48.4036 22.5321L44 20ZM32 50.9358V37.0642L44 30.1284L56 37.0642V50.9358L44 57.8716L32 50.9358Z"
      className={getIconFillClass(props)}
    />
  </svg>
);

export default LINK;
