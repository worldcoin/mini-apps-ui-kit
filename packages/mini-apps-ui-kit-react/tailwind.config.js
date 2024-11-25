module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      custom: "var(--mini-apps-ui-kit-font-family)",
    },
    colors: {
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
  },
  plugins: [],
};
