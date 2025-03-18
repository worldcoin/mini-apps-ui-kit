import plugin from "tailwindcss/plugin";

export const gray = {
  "--gray-0": "255 255 255",
  "--gray-50": "249 250 251",
  "--gray-100": "243 244 245",
  "--gray-200": "235 236 239",
  "--gray-300": "214 217 221",
  "--gray-350": "177 184 194",
  "--gray-400": "155 163 174",
  "--gray-500": "113 118 128",
  "--gray-700": "60 66 75",
  "--gray-900": "24 24 24",
};

export const success = {
  "--success-100": "230 249 236",
  "--success-200": "204 243 217",
  "--success-300": "153 232 179",
  "--success-400": "102 220 141",
  "--success-500": "51 209 103",
  "--success-600": "0 194 48",
  "--success-700": "0 155 38",
  "--success-800": "0 116 29",
  "--success-900": "0 77 19",
};

export const error = {
  "--error-100": "254 233 231",
  "--error-200": "253 211 207",
  "--error-300": "251 167 159",
  "--error-400": "249 123 111",
  "--error-500": "247 80 63",
  "--error-600": "242 40 13",
  "--error-700": "194 32 10",
  "--error-800": "145 24 8",
  "--error-900": "97 16 5",
};

export const warning = {
  "--warning-100": "255 246 230",
  "--warning-200": "255 237 204",
  "--warning-300": "255 219 153",
  "--warning-400": "255 201 102",
  "--warning-500": "255 184 51",
  "--warning-600": "255 174 0",
  "--warning-700": "204 139 0",
  "--warning-800": "153 104 0",
  "--warning-900": "102 70 0",
};

export const info = {
  "--info-100": "230 240 255",
  "--info-200": "204 224 255",
  "--info-300": "153 194 255",
  "--info-400": "102 163 255",
  "--info-500": "51 133 255",
  "--info-600": "0 92 255",
  "--info-700": "0 74 204",
  "--info-800": "0 55 153",
  "--info-900": "0 36 102",
};

const uiKitTailwindPlugin = plugin(
  function ({ addBase }) {
    addBase({
      ":root": {
        "--font-sans": "TWK Lausanne",
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
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        gray: {
          900: "rgb(var(--gray-900) / <alpha-value>)",
          800: "rgb(var(--gray-800) / <alpha-value>)",
          700: "rgb(var(--gray-700) / <alpha-value>)",
          500: "rgb(var(--gray-500) / <alpha-value>)",
          400: "rgb(var(--gray-400) / <alpha-value>)",
          350: "rgb(var(--gray-350) / <alpha-value>)",
          300: "rgb(var(--gray-300) / <alpha-value>)",
          200: "rgb(var(--gray-200) / <alpha-value>)",
          100: "rgb(var(--gray-100) / <alpha-value>)",
          50: "rgb(var(--gray-50) / <alpha-value>)",
          0: "rgb(var(--gray-0) / <alpha-value>)",
        },
        success: {
          900: "rgb(var(--success-900) / <alpha-value>)",
          800: "rgb(var(--success-800) / <alpha-value>)",
          700: "rgb(var(--success-700) / <alpha-value>)",
          600: "rgb(var(--success-600) / <alpha-value>)",
          500: "rgb(var(--success-500) / <alpha-value>)",
          400: "rgb(var(--success-400) / <alpha-value>)",
          300: "rgb(var(--success-300) / <alpha-value>)",
          200: "rgb(var(--success-200) / <alpha-value>)",
          100: "rgb(var(--success-100) / <alpha-value>)",
        },
        error: {
          900: "rgb(var(--error-900) / <alpha-value>)",
          800: "rgb(var(--error-800) / <alpha-value>)",
          700: "rgb(var(--error-700) / <alpha-value>)",
          600: "rgb(var(--error-600) / <alpha-value>)",
          500: "rgb(var(--error-500) / <alpha-value>)",
          400: "rgb(var(--error-400) / <alpha-value>)",
          300: "rgb(var(--error-300) / <alpha-value>)",
          200: "rgb(var(--error-200) / <alpha-value>)",
          100: "rgb(var(--error-100) / <alpha-value>)",
        },
        warning: {
          900: "rgb(var(--warning-900) / <alpha-value>)",
          800: "rgb(var(--warning-800) / <alpha-value>)",
          700: "rgb(var(--warning-700) / <alpha-value>)",
          600: "rgb(var(--warning-600) / <alpha-value>)",
          500: "rgb(var(--warning-500) / <alpha-value>)",
          400: "rgb(var(--warning-400) / <alpha-value>)",
          300: "rgb(var(--warning-300) / <alpha-value>)",
          200: "rgb(var(--warning-200) / <alpha-value>)",
          100: "rgb(var(--warning-100) / <alpha-value>)",
        },
        info: {
          900: "rgb(var(--info-900) / <alpha-value>)",
          800: "rgb(var(--info-800) / <alpha-value>)",
          700: "rgb(var(--info-700) / <alpha-value>)",
          600: "rgb(var(--info-600) / <alpha-value>)",
          500: "rgb(var(--info-500) / <alpha-value>)",
          400: "rgb(var(--info-400) / <alpha-value>)",
          300: "rgb(var(--info-300) / <alpha-value>)",
          200: "rgb(var(--info-200) / <alpha-value>)",
          100: "rgb(var(--info-100) / <alpha-value>)",
        },
      },
      lineHeight: {
        none: "1",
        narrow: "1.2",
        compact: "1.3",
      },
      fontSize: {
        "2xs": "0.6875rem",
        xs: "0.8125rem",
        sm: "0.9375rem",
        base: "1.0625rem",
        lg: "1.1875rem",
        xl: "1.3125rem",
        "2xl": "1.625rem",
        "3xl": "1.875rem",
        "4xl": "2.125rem",
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "3.5rem",
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
