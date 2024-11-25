import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import { glob } from "glob";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: resolve(__dirname, "tsconfig.lib.json"),
    }),
  ],
  build: {
    sourcemap: true,
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      fileName: "index",
      formats: ["es"],
      name: "mini-apps-ui-kit/react",
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      input: {
        index: resolve(__dirname, "src/index.ts"),
        ...Object.fromEntries(
          glob.sync("src/components/**/*.{ts,tsx}").map((file) => [
            // This removes the 'src/' and file extension
            file.slice(4).replace(/\.(ts|tsx)$/, ""),
            resolve(__dirname, file),
          ]),
        ),
      },
      output: {
        globals: {
          react: "React",
          "react-dom": "React-dom",
          "react/jsx-runtime": "react/jsx-runtime",
        },
        // Ensure each entry point creates its own directory
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: "[name].js",
      },
    },
  },
});
