import { resolve } from "path";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: resolve(__dirname, "test-tree-shaking.js"),
      output: {
        format: "es",
      },
    },
  },
  plugins: [
    visualizer({
      filename: "bundle-analysis.html",
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
});
