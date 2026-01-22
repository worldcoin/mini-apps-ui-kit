#!/usr/bin/env node
/**
 * Generate React icon components from SVG files
 *
 * This script uses the build target to generate React components
 * for all icons in the icons/ directory (outline, regular, solid variants)
 * and outputs them to dist/icons/
 */
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get paths
const packageRoot = path.resolve(__dirname, "..");
const projectRoot = path.resolve(packageRoot, "../..");
const iconsDir = path.join(projectRoot, "icons");
const outputDir = path.join(packageRoot, "dist", "icons");

async function generateIcons() {
  console.log("🎨 Generating React icon components...\n");
  console.log(`📁 Icons directory: ${iconsDir}`);
  console.log(`📦 Output directory: ${outputDir}\n`);

  try {
    const fs = await import("node:fs/promises");

    // Dynamically import the build target to ensure proper module resolution
    // Use file:// URL for proper module resolution with absolute path
    const buildTargetPath = path.resolve(
      __dirname,
      "../../../bin/build/targets/react/index.js",
    );
    // Convert Windows paths to use forward slashes for file:// URLs
    const normalizedPath = buildTargetPath.replace(/\\/g, "/");
    const buildTargetUrl = `file://${normalizedPath}`;
    const buildTargetModule = await import(buildTargetUrl);
    const buildReactTarget = buildTargetModule.default;

    if (typeof buildReactTarget !== "function") {
      throw new Error(
        `buildReactTarget is not a function. Got: ${typeof buildReactTarget}. Module keys: ${Object.keys(buildTargetModule).join(", ")}`,
      );
    }

    // Call the build target with auto-discovery
    // The build target appends '/dist' to target.path
    // We want output in: packageRoot/dist/icons/
    // So we pass target.path = packageRoot/dist/icons
    // Output will be: packageRoot/dist/icons/dist/
    // Then we'll move everything up one level
    const ctx = {
      iconsDir,
    };

    const target = {
      path: outputDir, // This will become outputDir/dist
      native: false, // React web, not React Native
    };

    console.log("🚀 Starting icon generation...\n");
    await buildReactTarget(ctx, target);

    // The build target outputs to: outputDir/dist/
    // We need to move contents to: outputDir/
    const tempOutputPath = path.join(outputDir, "dist");

    try {
      await fs.access(tempOutputPath);

      // Move all contents from dist/ to parent
      const entries = await fs.readdir(tempOutputPath, { withFileTypes: true });

      for (const entry of entries) {
        const sourcePath = path.join(tempOutputPath, entry.name);
        const destPath = path.join(outputDir, entry.name);

        if (entry.isDirectory()) {
          // If destination exists, remove it first, then rename
          try {
            await fs.access(destPath);
            await fs.rm(destPath, { recursive: true, force: true });
          } catch {
            // Destination doesn't exist, that's fine
          }
          await fs.rename(sourcePath, destPath);
          console.log(`  ✓ Moved ${entry.name}/ directory`);
        } else {
          // If destination file exists, remove it first
          try {
            await fs.unlink(destPath);
          } catch {
            // File doesn't exist, that's fine
          }
          await fs.rename(sourcePath, destPath);
          console.log(`  ✓ Moved ${entry.name} file`);
        }
      }

      // Remove empty dist directory
      await fs.rmdir(tempOutputPath);
    } catch (error: any) {
      // If dist/ doesn't exist, the build might have failed or structure is unexpected
      if (error.code === "ENOENT") {
        console.error(`  ❌ Expected output directory not found: ${tempOutputPath}`);
        console.error("  This might indicate the build target output structure has changed.");
      } else if (error.code === "ENOTEMPTY") {
        console.error(`  ❌ Cannot move directory: destination already exists`);
        console.error(`  Source: ${error.path}`);
        console.error(`  Destination: ${error.dest}`);
        console.error("  This might happen if a previous build was interrupted.");
        console.error("  Try cleaning the dist/icons directory and rebuilding.");
      }
      throw error;
    }

    console.log("✅ Icon generation completed successfully!");
    console.log(`📁 Icons generated to: ${outputDir}`);
  } catch (error) {
    console.error("❌ Icon generation failed:");
    console.error(error);
    process.exit(1);
  }
}

// Run the generation
generateIcons();
