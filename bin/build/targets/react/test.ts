#!/usr/bin/env node
/**
 * Test script for the React build target
 *
 * This script tests the icon build process by calling the build function
 * with sample icon data.
 *
 * Usage:
 *   pnpm tsx bin/build/targets/react/test.ts
 *   or
 *   node --loader tsx bin/build/targets/react/test.ts
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import buildReactTarget from "./index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper function to convert kebab-case to PascalCase
function toPascalCase(str: string): string {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
}

// Helper function to convert a variant name to PascalCase variant suffix
function toVariantSuffix(variant: string): string {
  return variant.charAt(0).toUpperCase() + variant.slice(1).toLowerCase();
}

// Helper function to get icon path
function getIconPath(variant: string, iconName: string): string {
  const projectRoot = path.resolve(__dirname, "../../../..");
  return path.join(projectRoot, "icons", variant, `${iconName}.svg`);
}

// Sample icons to test with (using real icons from the icons directory)
const sampleIcons = [
  { name: "airplane", variant: "outline" },
  { name: "check", variant: "outline" },
  { name: "home", variant: "outline" },
  { name: "settings", variant: "outline" },
  { name: "user", variant: "outline" },
];

// Create mock context object
const ctx = {
  icons: {
    outline: sampleIcons
      .map((icon) => {
        const pascalName = toPascalCase(icon.name);
        const variantSuffix = toVariantSuffix(icon.variant);
        return {
          pascalName,
          pascalNameVariant: `${pascalName}${variantSuffix}`,
          path: getIconPath(icon.variant, icon.name),
        };
      })
      .sort((a, b) => a.pascalName.localeCompare(b.pascalName)), // Sort icons by name for consistent output
  },
  global: {
    defaultVariant: "outline",
  },
};

// Create mock target object
const target = {
  path: path.join(__dirname, "../../../test-output"), // Output to test-output directory
  native: false, // Set to true for React Native
};

// Main test function
async function test() {
  console.log("🚀 Starting React build target test...\n");

  // Validate icon files exist
  console.log("🔍 Validating icon files...");
  const missingIcons: string[] = [];
  for (const icon of sampleIcons) {
    const iconPath = getIconPath(icon.variant, icon.name);
    if (!fs.existsSync(iconPath)) {
      missingIcons.push(iconPath);
    }
  }

  if (missingIcons.length > 0) {
    console.error("❌ Missing icon files:");
    missingIcons.forEach((path) => console.error(`  - ${path}`));
    process.exit(1);
  }
  console.log(`✅ All ${sampleIcons.length} icon files found\n`);

  console.log("Context:", {
    iconCount: sampleIcons.length,
    variant: "outline",
    defaultVariant: ctx.global.defaultVariant,
  });
  console.log("Target:", {
    path: target.path,
    native: target.native,
  });
  console.log("\n");

  try {
    console.log("⏳ Building icons...");
    await buildReactTarget(ctx, target);
    console.log("✅ Build completed successfully!");
    console.log(`📁 Output directory: ${target.path}/dist`);
    console.log("\nGenerated files:");
    console.log("  - Individual icon components");
    console.log("  - Index files");
  } catch (error) {
    console.error("❌ Build failed:");
    console.error(error);
    process.exit(1);
  }
}

// Run the test
test();
