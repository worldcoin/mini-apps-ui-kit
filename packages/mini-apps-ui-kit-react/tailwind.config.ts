import type { Config } from "tailwindcss";
import uiKitTailwindPlugin from "./src/tailwind";

const config: Config = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  plugins: [uiKitTailwindPlugin],
};

export default config;
