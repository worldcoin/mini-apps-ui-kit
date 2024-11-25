import uiKitPlugin from "@repo/tailwind";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  plugins: [uiKitPlugin],
};

export default config;
