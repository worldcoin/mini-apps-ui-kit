import { create } from "@storybook/theming/create";

export default create({
  base: "light",
  fontBase: "'TWK Lausanne', sans-serif",

  brandTitle: "Mini App UI Kit",
  brandUrl: "https://docs.world.org",
  brandImage: "https://docs.world.org/_next/static/media/world-logo.49cd9d35.svg",
  brandTarget: "_blank",
  //
  colorPrimary: "#191C20",
  colorSecondary: "#191C20",

  // UI
  appBg: "#F3F4F5",
  appContentBg: "#FFFFFF",
  appPreviewBg: "#EBECEF",
  appBorderColor: "#FFFFFF",
  appBorderRadius: 4,

  // Text colors
  textColor: "#191C20",
  textInverseColor: "#FFFFFF",
  textMutedColor: "#667085",

  // Toolbar default and active colors
  barTextColor: "#191C20",
  barSelectedColor: "#657080",
  barHoverColor: "#EBECEF",
  barBg: "#FFFFFF",

  // Form colors
  inputBg: "#FFFFFF",
  inputBorder: "#EBECEF",
  inputTextColor: "#191C20",
  inputBorderRadius: 12,

  buttonBorder: "#657080",
  buttonBg: "transparent",
});
