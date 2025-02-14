import type { Preview } from "@storybook/react";

import "../public/globals.css";
import "./preview.css";
import theme from "./theme";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
    docs: {
      theme,
    },
  },
  tags: ["autodocs"],
};

export default preview;
