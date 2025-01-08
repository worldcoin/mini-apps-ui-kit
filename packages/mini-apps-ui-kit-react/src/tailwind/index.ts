import plugin from "tailwindcss/plugin";

const uiKitTailwindPlugin = plugin(
  function ({ addBase }) {
    addBase({
      ":root": {
        "--font-sans": "Rubik",
        "--font-display": "Sora",
        "--font-mono": "DM Mono",

        "--gray-900": "#191c20",
        "--gray-700": "#3c424b",
        "--gray-500": "#657080",
        "--gray-400": "#9ba3ae",
        "--gray-300": "#d6d9dd",
        "--gray-200": "#ebecef",
        "--gray-100": "#f3f4f5",
        "--gray-50": "#f9fafb",
        "--gray-25": "#fbfbfc",
        "--gray-0": "#ffffff",

        "--success-900": "#18964f",
        "--success-800": "#00ab11",
        "--success-700": "#00c313",
        "--success-300": "#d6f6de",
        "--success-100": "#f5fdf7",

        "--error-900": "#b71b58",
        "--error-800": "#dc0025",
        "--error-700": "#ff5a76",
        "--error-300": "#ffd7df",
        "--error-100": "#fff5f7",

        "--warning-900": "#b47500",
        "--warning-800": "#dc8f00",
        "--warning-700": "#ffb11b",
        "--warning-300": "#ffeece",
        "--warning-100": "#fff9ef",

        "--info-900": "#054cb7",
        "--info-800": "#0025dc",
        "--info-700": "#5a9cff",
        "--info-300": "#cee2ff",
        "--info-100": "#f3f8ff",
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
          700: "var(--gray-700)",
          500: "var(--gray-500)",
          400: "var(--gray-400)",
          300: "var(--gray-300)",
          200: "var(--gray-200)",
          100: "var(--gray-100)",
          50: "var(--gray-50)",
          25: "var(--gray-25)",
          0: "var(--gray-0)",
        },
        success: {
          900: "var(--success-900)",
          800: "var(--success-800)",
          700: "var(--success-700)",
          300: "var(--success-300)",
          100: "var(--success-100)",
        },
        error: {
          900: "var(--error-900)",
          800: "var(--error-800)",
          700: "var(--error-700)",
          300: "var(--error-300)",
          100: "var(--error-100)",
        },
        warning: {
          900: "var(--warning-900)",
          800: "var(--warning-800)",
          700: "var(--warning-700)",
          300: "var(--warning-300)",
          100: "var(--warning-100)",
        },
        info: {
          900: "var(--info-900)",
          800: "var(--info-800)",
          700: "var(--info-700)",
          300: "var(--info-300)",
          100: "var(--info-100)",
        },
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
