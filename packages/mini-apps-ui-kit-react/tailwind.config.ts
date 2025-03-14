import type { Config } from "tailwindcss";

import uiKitTailwindPlugin from "./src/tailwind";

const config: Config = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./stories/**/*.{html,js,ts,jsx,tsx}",
    "./.storybook/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{mdx,md}",
  ],
  plugins: [uiKitTailwindPlugin, require("tailwindcss-animate")],
};

export default config;
