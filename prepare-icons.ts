/// <reference types="node" />
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define paths
const SOURCE_ICONS_DIR = path.join(__dirname, "source-icons");
const TARGET_ICONS_DIR = path.join(__dirname, "icons");

// Variant mapping
const VARIANT_MAP: Record<string, string> = {
  Dynamic: "outline",
  Regular: "regular",
  Solid: "solid",
};

// Valid variant names
const VALID_VARIANTS = new Set(["Dynamic", "Regular", "Solid"]);

/**
 * Converts a string to kebab-case (lowercase with hyphens, no spaces)
 */
function toKebabCase(str: string): string {
  return str
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[^\w-]/g, "") // Remove special characters except word chars and hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
    .replace(/^-|-$/g, ""); // Remove leading/trailing hyphens
}

/**
 * Replaces fill and stroke color values with currentColor in SVG content
 * Preserves fill="none" and fill='none' (case-insensitive)
 */
function replaceColorsWithCurrentColor(svgContent: string): string {
  // Replace fill colors with currentColor, but preserve fill="none" or fill='none'
  // Handle both double and single quotes, case-insensitive
  svgContent = svgContent.replace(/fill=["'](?!none["'])([^"']*)["']/gi, 'fill="currentColor"');

  // Replace stroke colors with currentColor
  // Handle both double and single quotes
  svgContent = svgContent.replace(/stroke=["']([^"']*)["']/gi, 'stroke="currentColor"');

  return svgContent;
}

/**
 * Creates a directory if it doesn't exist
 */
function ensureDirectoryExists(dirPath: string): void {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

/**
 * Checks if a path is a directory
 */
function isDirectory(dirPath: string): boolean {
  try {
    return fs.statSync(dirPath).isDirectory();
  } catch {
    return false;
  }
}

/**
 * Processes a single icon directory
 */
function processIconDirectory(iconDirPath: string, iconName: string): void {
  const files = fs.readdirSync(iconDirPath);

  for (const file of files) {
    const filePath = path.join(iconDirPath, file);
    const stats = fs.statSync(filePath);

    // Skip if not a file
    if (!stats.isFile()) {
      continue;
    }

    // Extract variant name from filename (e.g., "Dynamic.svg" -> "Dynamic")
    const variantName = path.basename(file, ".svg");

    // Skip non-standard variants
    if (!VALID_VARIANTS.has(variantName)) {
      continue;
    }

    // Get target directory for this variant
    const targetVariantDir = VARIANT_MAP[variantName];
    if (!targetVariantDir) {
      continue;
    }

    // Create target directory if it doesn't exist
    const targetDir = path.join(TARGET_ICONS_DIR, targetVariantDir);
    ensureDirectoryExists(targetDir);

    // Read SVG content
    const svgContent = fs.readFileSync(filePath, "utf-8");

    // Replace colors with currentColor
    const processedContent = replaceColorsWithCurrentColor(svgContent);

    // Write processed file with icon name
    const targetFilePath = path.join(targetDir, `${iconName}.svg`);
    fs.writeFileSync(targetFilePath, processedContent, "utf-8");

    console.log(`✓ Copied ${variantName} variant: ${iconName}.svg → ${targetVariantDir}/`);
  }
}

/**
 * Main function to transform icons
 */
function transformIcons(): void {
  console.log("Starting icon transformation...\n");

  // Create target directories
  Object.values(VARIANT_MAP).forEach((variantDir) => {
    const targetDir = path.join(TARGET_ICONS_DIR, variantDir);
    ensureDirectoryExists(targetDir);
  });

  // Read source icons directory
  if (!fs.existsSync(SOURCE_ICONS_DIR)) {
    console.error(`Error: Source directory not found: ${SOURCE_ICONS_DIR}`);
    process.exit(1);
  }

  const entries = fs.readdirSync(SOURCE_ICONS_DIR, { withFileTypes: true });

  let processedCount = 0;
  let skippedCount = 0;

  for (const entry of entries) {
    // Skip loose files (only process directories)
    if (!entry.isDirectory()) {
      skippedCount++;
      continue;
    }

    const iconDirPath = path.join(SOURCE_ICONS_DIR, entry.name);
    const iconName = toKebabCase(entry.name);

    // Process the icon directory
    processIconDirectory(iconDirPath, iconName);
    processedCount++;
  }

  console.log(`\n✓ Transformation complete!`);
  console.log(`  Processed: ${processedCount} icon directories`);
  console.log(`  Skipped: ${skippedCount} loose files`);
}

// Run the transformation
transformIcons();
