import plugin from "tailwindcss/plugin";

export const gray = {
  "--gray-900": "#181818",
  "--gray-700": "#414651",
  "--gray-500": "#717680",
  "--gray-400": "#A4A7AE",
  "--gray-350": "#B1B8C2",
  "--gray-300": "#D5D7DA",
  "--gray-200": "#E9EAEB",
  "--gray-100": "#F5F5F5",
  "--gray-50": "#FAFAFA",
  "--gray-0": "#FFFFFF",
};

export const success = {
  "--success-900": "#004D13",
  "--success-800": "#00741D",
  "--success-700": "#009B26",
  "--success-600": "#00C230",
  "--success-500": "#33D167",
  "--success-400": "#66DC8D",
  "--success-300": "#99E8B3",
  "--success-200": "#CCF3D9",
  "--success-100": "#E6F9EC",
};

export const error = {
  "--error-900": "#611005",
  "--error-800": "#911808",
  "--error-700": "#C2200A",
  "--error-600": "#F2280D",
  "--error-500": "#F7503F",
  "--error-400": "#F97B6F",
  "--error-300": "#FBA79F",
  "--error-200": "#FDD3CF",
  "--error-100": "#FEE9E7",
};

export const warning = {
  "--warning-900": "#664600",
  "--warning-800": "#996800",
  "--warning-700": "#CC8B00",
  "--warning-600": "#FFAE00",
  "--warning-500": "#FFB833",
  "--warning-400": "#FFC966",
  "--warning-300": "#FFDB99",
  "--warning-200": "#FFEDCC",
  "--warning-100": "#FFF6E6",
};

export const info = {
  "--info-900": "#002466",
  "--info-800": "#003799",
  "--info-700": "#004ACC",
  "--info-600": "#005CFF",
  "--info-500": "#3385FF",
  "--info-400": "#66A3FF",
  "--info-300": "#99C2FF",
  "--info-200": "#CCE0FF",
  "--info-100": "#E6F0FF",
};

const uiKitTailwindPlugin = plugin(
  function ({ addBase }) {
    addBase({
      ":root": {
        "--font-sans": "Rubik",
        "--font-display": "Sora",
        "--font-mono": "DM Mono",
        ...gray,
        ...success,
        ...error,
        ...warning,
        ...info,
      },
    });
  },
  {
    theme: {
      fontFamily: {
        sans: "var(--font-sans)",
        display: "var(--font-display)",
        mono: "var(--font-mono)",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        gray: {
          900: "var(--gray-900)",
          800: "var(--gray-800)",
          700: "var(--gray-700)",
          500: "var(--gray-500)",
          400: "var(--gray-400)",
          350: "var(--gray-350)",
          300: "var(--gray-300)",
          200: "var(--gray-200)",
          100: "var(--gray-100)",
          50: "var(--gray-50)",
          0: "var(--gray-0)",
        },
        success: {
          900: "var(--success-900)",
          800: "var(--success-800)",
          700: "var(--success-700)",
          600: "var(--success-600)",
          500: "var(--success-500)",
          400: "var(--success-400)",
          300: "var(--success-300)",
          200: "var(--success-200)",
          100: "var(--success-100)",
        },
        error: {
          900: "var(--error-900)",
          800: "var(--error-800)",
          700: "var(--error-700)",
          600: "var(--error-600)",
          500: "var(--error-500)",
          400: "var(--error-400)",
          300: "var(--error-300)",
          200: "var(--error-200)",
          100: "var(--error-100)",
        },
        warning: {
          900: "var(--warning-900)",
          800: "var(--warning-800)",
          700: "var(--warning-700)",
          600: "var(--warning-600)",
          500: "var(--warning-500)",
          400: "var(--warning-400)",
          300: "var(--warning-300)",
          200: "var(--warning-200)",
          100: "var(--warning-100)",
        },
        info: {
          900: "var(--info-900)",
          800: "var(--info-800)",
          700: "var(--info-700)",
          600: "var(--info-600)",
          500: "var(--info-500)",
          400: "var(--info-400)",
          300: "var(--info-300)",
          200: "var(--info-200)",
          100: "var(--info-100)",
        },
      },
      lineHeight: {
        none: "1",
        narrow: "1.2",
        compact: "1.3",
      },
      extend: {
        boxShadow: {
          card: "0 0.625rem 1.875rem 0 #191C201A",
          "regular-large": "0 1rem 2.5rem -0.5rem #585C5F29",
        },
      },
    },
  },
);

export default uiKitTailwindPlugin;
