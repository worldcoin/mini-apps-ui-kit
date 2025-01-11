import react from "@vitejs/plugin-react";
import { glob } from "glob";
import { resolve } from "path";
import preserveDirectives from "rollup-preserve-directives";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: resolve(__dirname, "tsconfig.lib.json"),
    }),
    preserveDirectives(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    // sourcemap: true,

    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      name: "@worldcoin/mini-apps-ui-kit-react",
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime", "tailwindcss"],
      input: Object.fromEntries([
        ["index", resolve(__dirname, "src/index.ts")],
        ["tailwind/index", resolve(__dirname, "src/tailwind/index.ts")],
        ...glob
          .sync("src/components/**/*.{ts,tsx}")
          .map((file) => [file.slice(4).replace(/\.(ts|tsx)$/, ""), resolve(__dirname, file)]),
      ]),
      output: {
        // Ensure each entry point creates its own directory
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: "[name].js",
      },
    },
  },
});
