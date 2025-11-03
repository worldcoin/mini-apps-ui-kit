import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { readdirSync } from "fs";
import preserveDirectives from "rollup-preserve-directives";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// Dynamically get all locale JSON files
const localesDir = resolve(__dirname, "src/locales");
const localeFiles = readdirSync(localesDir)
  .filter((file) => file.endsWith(".json"))
  .map((file) => {
    const localeName = file.replace(".json", "");
    return {
      key: `locales/${localeName}.json`,
      path: resolve(localesDir, file),
    };
  })
  .reduce((acc, { key, path }) => {
    acc[key] = path;
    return acc;
  }, {} as Record<string, string>);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: resolve(__dirname, "tsconfig.lib.json"),
      rollupTypes: false,
      include: ["src"],
      exclude: ["**/*.stories.tsx", "**/*.test.tsx", "**/*.test.ts"],
    }),
    preserveDirectives(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      name: "@worldcoin/mini-apps-ui-kit-react",
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime", "tailwindcss"],
      input: {
        index: resolve(__dirname, "src/index.ts"),
        tailwind: resolve(__dirname, "src/tailwind/index.ts"),
        ...localeFiles,
      },
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: "[name].js",
        chunkFileNames: "chunks/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
});
