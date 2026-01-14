import * as svgr from "@svgr/core";
import * as esbuild from "esbuild";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { generateExport, generateImport, toImportPath } from "../../lib/import-export";
import { getDts } from "../../lib/ts";
import { getTemplate as getIconTemplate } from "./resources/icon-template";
import {
  nativeSvgrOptions,
  svgrOptions,
  svgrOptionsOutline,
} from "./resources/svgr-options";

const outDir = "dist";

// Get project root directory (assuming this file is in bin/build/targets/react/)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "../../../..");

interface IconInfo {
  pascalName: string;
  pascalNameVariant: string;
  path: string;
}

interface IconContext {
  icons: {
    [variant: string]: IconInfo[];
  };
  global: {
    defaultVariant: string;
  };
}

interface JsTarget {
  format: string;
  module: string;
  dir: string;
  ext: string;
  dtsExt: string;
  path?: string;
  iconTemplate?: ReturnType<typeof getIconTemplate>;
  iconDts?: boolean;
}

const jsTargets: Omit<JsTarget, "path" | "iconTemplate" | "iconDts">[] = [
  {
    format: "cjs",
    module: "commonjs",
    dir: ".",
    ext: "js",
    dtsExt: "d.ts",
  },
  {
    format: "esm",
    module: "esnext",
    dir: "esm",
    ext: "mjs",
    dtsExt: "d.mts",
  },
];

const defaultTsOptions = {
  declaration: true,
  emitDeclarationOnly: true,
  target: "es6",
  strict: true,
  esModuleInterop: true,
  skipLibCheck: true,
};

/**
 * Converts a kebab-case string to PascalCase
 * @example "arrow-down" -> "ArrowDown"
 */
function toPascalCase(str: string): string {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
}

/**
 * Converts a variant name to PascalCase variant suffix
 * @example "outline" -> "Outline"
 */
function toVariantSuffix(variant: string): string {
  return variant.charAt(0).toUpperCase() + variant.slice(1).toLowerCase();
}

/**
 * Returns the default variant name
 */
function getDefaultVariant(): string {
  return "outline";
}

/**
 * Discovers all icons from the icons directory and builds the context object
 * @param iconsDir Path to the icons directory (defaults to project root /icons)
 * @returns Icon context object with all discovered icons
 */
async function discoverIcons(iconsDir?: string): Promise<IconContext> {
  const iconsPath = iconsDir || path.join(projectRoot, "icons");

  // Check if icons directory exists
  try {
    await fs.access(iconsPath);
  } catch {
    throw new Error(`Icons directory not found: ${iconsPath}`);
  }

  const context: IconContext = {
    icons: {},
    global: {
      defaultVariant: getDefaultVariant(),
    },
  };

  // Read all variant directories
  const entries = await fs.readdir(iconsPath, { withFileTypes: true });
  const variantDirs = entries.filter((entry) => entry.isDirectory());

  for (const variantDir of variantDirs) {
    const variant = variantDir.name;
    const variantPath = path.join(iconsPath, variant);
    const icons: IconInfo[] = [];

    // Read all SVG files in the variant directory
    const files = await fs.readdir(variantPath);
    const svgFiles = files.filter((file) => file.endsWith(".svg"));

    for (const svgFile of svgFiles) {
      const iconName = path.basename(svgFile, ".svg");
      const iconPath = path.join(variantPath, svgFile);
      const pascalName = toPascalCase(iconName);
      const variantSuffix = toVariantSuffix(variant);
      const pascalNameVariant = `${pascalName}${variantSuffix}`;

      icons.push({
        pascalName,
        pascalNameVariant,
        path: iconPath,
      });
    }

    // Sort icons by name for consistent output
    icons.sort((a, b) => a.pascalName.localeCompare(b.pascalName));

    if (icons.length > 0) {
      context.icons[variant] = icons;
    }
  }

  return context;
}

export default async (ctx: any, target: any) => {
  // Auto-discover icons if ctx is not provided or ctx.icons is missing
  if (!ctx || !ctx.icons) {
    const iconsDir = ctx?.iconsDir || path.join(projectRoot, "icons");
    ctx = await discoverIcons(iconsDir);
  }

  // Ensure ctx has the required structure
  if (!ctx.icons || Object.keys(ctx.icons).length === 0) {
    throw new Error("No icons found. Please ensure icons exist in the icons directory.");
  }

  if (!ctx.global || !ctx.global.defaultVariant) {
    ctx.global = {
      defaultVariant: getDefaultVariant(),
    };
  }

  const localJsTargets: JsTarget[] = jsTargets.map((jsTarget) => ({
    ...jsTarget,
  }));

  const promises: Promise<any>[] = [];

  const outPath = path.join(target.path, outDir);

  // Preparation
  // (needs to run in a separate loop, otherwise leads to uncaught exceptions in case of errors in main loop)
  for (const jsTarget of localJsTargets) {
    jsTarget.path = path.join(outPath, jsTarget.dir);

    await fs.mkdir(jsTarget.path, { recursive: true });

    for (const variant of Object.keys(ctx.icons)) {
      jsTarget.path = path.join(outPath, jsTarget.dir);

      await fs.mkdir(path.join(jsTarget.path, variant), { recursive: true });
    }
  }

  // Calculate total icons for progress tracking
  const iconsPerVariant = Object.values(ctx.icons).reduce(
    (sum: number, icons: any) => sum + (Array.isArray(icons) ? icons.length : 0),
    0,
  );
  const totalIcons = iconsPerVariant;

  // Step 1: Transform all icons with SVGR once (cache results)
  console.log(`\n🔄 Step 1: Transforming ${totalIcons} icons with SVGR...`);
  const iconTemplate = getIconTemplate(target.native);
  const svgrCache = new Map<string, string>(); // Cache: iconPath -> React component code

  let svgrProcessed = 0;
  for (const [variant, icons] of Object.entries(ctx.icons)) {
    const iconArray = icons as any[];
    console.log(`  📦 Transforming ${variant} variant (${iconArray.length} icons)...`);

    for (const icon of iconArray) {
      svgrProcessed++;
      // Use variant-specific cache key to handle different SVGR options per variant
      const cacheKey = `${icon.path}:${variant}`;
      if (!svgrCache.has(cacheKey)) {
        const reactComponent = await getReactComponent(
          icon.path,
          target.native,
          iconTemplate,
          variant,
        );
        svgrCache.set(cacheKey, reactComponent);
      }
      if (svgrProcessed % 50 === 0) {
        console.log(`    ✓ Transformed ${svgrProcessed}/${totalIcons} icons...`);
      }
    }
  }
  console.log(`  ✅ Transformed all ${totalIcons} icons\n`);

  // Step 2: Generate type definitions (only once, reuse for all formats)
  console.log(`📝 Step 2: Generating type definitions...`);
  const firstVariant = Object.keys(ctx.icons)[0];
  const firstIconArray = ctx.icons[firstVariant];
  if (firstIconArray && firstIconArray.length > 0) {
    const firstIcon = firstIconArray[0];
    const tsxPath = path.join(localJsTargets[0].path!, firstVariant, "icon.tsx");
    const reactComponent = svgrCache.get(`${firstIcon.path}:${firstVariant}`);

    if (reactComponent) {
      for (const jsTarget of localJsTargets) {
        const dtsPath = path.join(jsTarget.path!, `icon.${jsTarget.dtsExt}`);
        const iconDts = generateDts(
          tsxPath,
          dtsPath,
          reactComponent,
          jsTarget.module,
          target.native,
        );
        promises.push(iconDts);
      }
    }
  }
  await Promise.all(promises.splice(0, promises.length)); // Wait for DTS generation

  // Step 3: Build all icons with esbuild (in batches for better performance)
  console.log(
    `\n⚡ Step 3: Building ${totalIcons} icons with esbuild (${localJsTargets.length} formats)...`,
  );
  const BATCH_SIZE = 50; // Process 50 icons at a time
  let buildProcessed = 0;

  for (const jsTarget of localJsTargets) {
    const mainIndex = prepareIndex(jsTarget);
    const formatLabel = jsTarget.format.toUpperCase();

    for (const [variant, icons] of Object.entries(ctx.icons)) {
      const variantIndex = prepareIndex(jsTarget, variant);
      const iconArray = icons as any[];

      // Process icons in batches
      for (let i = 0; i < iconArray.length; i += BATCH_SIZE) {
        const batch = iconArray.slice(i, i + BATCH_SIZE);
        const batchPromises: Promise<void>[] = [];

        for (const icon of batch) {
          buildProcessed++;
          const progress = `[${buildProcessed}/${totalIcons * localJsTargets.length}]`;
          if (
            buildProcessed % 50 === 0 ||
            buildProcessed === totalIcons * localJsTargets.length
          ) {
            console.log(
              `  ${progress} Building ${icon.pascalName} (${variant}, ${formatLabel})...`,
            );
          }

          const mainIndexComponentName =
            variant === ctx.global.defaultVariant ? icon.pascalName : icon.pascalNameVariant;

          const jsPath = path.join(
            jsTarget.path!,
            variant,
            `${icon.pascalName}.${jsTarget.ext}`,
          );

          mainIndex.add(mainIndexComponentName, jsPath);
          variantIndex.add(icon.pascalName, jsPath);

          const reactComponent = svgrCache.get(`${icon.path}:${variant}`)!;
          const iconJs = generateJs(jsPath, reactComponent, jsTarget.format);

          batchPromises.push(iconJs);
        }

        // Wait for batch to complete before starting next batch
        await Promise.all(batchPromises);
      }

      promises.push(variantIndex.generate());
    }

    promises.push(mainIndex.generate());
  }

  console.log(`\n📝 Step 4: Generating index files...`);
  const results = await Promise.all(promises);
  console.log(
    `\n✅ Successfully generated ${iconsPerVariant} icon components in ${localJsTargets.length} format(s)!`,
  );

  return results;
};

async function getReactComponent(
  iconPath,
  native,
  template,
  variant?: string,
) {
  let iconContent = await fs.readFile(iconPath, "utf8");

  // For outline variants, move stroke-width from paths to SVG element
  if (variant === "outline" && !native) {
    // Extract stroke-width value from path elements (should be "2")
    const strokeWidthMatch = iconContent.match(/stroke-width\s*=\s*["']([^"']*)["']/i);
    const strokeWidth = strokeWidthMatch ? strokeWidthMatch[1] : "2";
    
    // Remove stroke-width from all path elements
    iconContent = iconContent.replace(
      /\s+stroke-width\s*=\s*["'][^"']*["']/gi,
      '',
    );
    
    // Add stroke-width to the SVG element if it doesn't already have it
    if (!/stroke-width\s*=\s*["']/i.test(iconContent)) {
      iconContent = iconContent.replace(
        /<svg\s+([^>]*?)>/i,
        (match, attributes) => {
          attributes = attributes.trim();
          return `<svg ${attributes} stroke-width="${strokeWidth}">`;
        },
      );
    }
  }

  // Use outline-specific options for outline variant
  // svgrOptionsOutline doesn't remove strokeWidth from SVG element
  const baseOptions = native
    ? nativeSvgrOptions
    : variant === "outline"
      ? svgrOptionsOutline
      : svgrOptions;

  const options = {
    ...baseOptions,
    template,
  };

  let result = await svgr.transform(iconContent, options);

  // Post-process: For outline icons, ensure strokeWidth is on SVG and removed from paths
  if (variant === "outline" && !native) {
    // Remove strokeWidth from all path elements in the JSX
    result = result.replace(
      /<path\s+([^>]*?)>/g,
      (match, attributes) => {
        // Remove strokeWidth attribute from paths
        attributes = attributes.replace(
          /\s+strokeWidth\s*=\s*["'][^"']*["']/g,
          '',
        );
        attributes = attributes.replace(
          /\s+strokeWidth\s*=\s*\{[^}]*\}/g,
          '',
        );
        attributes = attributes.trim();
        return `<path ${attributes}>`;
      },
    );

    // Ensure strokeWidth is on the SVG element (SVGR transforms <svg> to <Svg> in JSX)
    // Match <Svg in JSX context (after return or in JSX, not in type definitions)
    // Use a more specific pattern to avoid matching type definitions
    result = result.replace(
      /return\s+<Svg(\s+[^>]*?)>/g,
      (match, attributes) => {
        // Check if strokeWidth already exists
        if (!/\bstrokeWidth\s*=\s*["'{]/.test(attributes)) {
          // Add strokeWidth="2" to SVG element
          attributes = attributes.trim();
          return `return <Svg ${attributes} strokeWidth="2">`;
        } else {
          // Ensure it's "2" if it exists
          attributes = attributes.replace(
            /\bstrokeWidth\s*=\s*["'][^"']*["']/g,
            'strokeWidth="2"',
          );
          attributes = attributes.replace(
            /\bstrokeWidth\s*=\s*\{[^}]*\}/g,
            'strokeWidth="2"',
          );
          attributes = attributes.trim();
          return `return <Svg ${attributes}>`;
        }
      },
    );
  }

  return result;
}

async function generateDts(inputPath, outputPath, input, module, native) {
  const dts = getDts(inputPath, await input, {
    ...defaultTsOptions,
    jsx: native ? "react-native" : "react",
    module,
    ...(module === "esnext" && { moduleResolution: "bundler" }),
  });

  return fs.writeFile(outputPath, dts);
}

async function generateJs(
  outputPath: string,
  input: string | Promise<string>,
  format: string,
): Promise<void> {
  const content = await input;
  const outputDir = path.dirname(outputPath);
  const fileName = path.basename(outputPath);
  const tempInputPath = path.join(outputDir, `.temp-${fileName}.tsx`);

  try {
    // Write temporary input file
    await fs.writeFile(tempInputPath, content, "utf8");

    // Use esbuild to transform the file (much faster than Vite for simple transformations)
    // Note: With bundle: false, external is not needed - imports remain as-is
    await esbuild.build({
      entryPoints: [tempInputPath],
      bundle: false, // Don't bundle, just transform (imports remain as-is)
      format: format === "cjs" ? "cjs" : "esm",
      outfile: outputPath,
      jsx: "automatic", // Use React 17+ automatic JSX transform
      minify: false, // Skip minification for faster builds (icons are small anyway)
      write: true,
      platform: "browser",
      target: "es2020",
      logLevel: "silent", // Suppress esbuild logs for cleaner output
    });

    // Clean up temporary file
    await fs.unlink(tempInputPath);
  } catch (error) {
    // Clean up on error
    try {
      await fs.unlink(tempInputPath);
    } catch {
      // Ignore cleanup errors
    }
    throw error;
  }
}

function prepareIndex(jsTarget: JsTarget, variant?: string) {
  const outputPath = path.join(jsTarget.path!, variant ?? "");

  const content: string[] = [];

  const iconJsPath = toImportPath(
    path.relative(outputPath, path.join(jsTarget.path!, `icon.${jsTarget.ext}`)),
  );

  const iconDtsImport = generateImport("Icon", iconJsPath);

  const dtsContent = [iconDtsImport, "type I = typeof Icon;"];

  function add(name, iconPath) {
    const iconImportPath = toImportPath(path.relative(outputPath, iconPath));

    content.push(generateExport(`default as ${name}`, iconImportPath));

    dtsContent.push(`export declare const ${name}: I;`);
  }

  function generate() {
    const indexJs = generateIndexJs(outputPath, content, jsTarget.format, jsTarget.ext);

    const indexDts = generateIndexDts(outputPath, dtsContent, jsTarget.dtsExt);

    return Promise.all([indexJs, indexDts]);
  }

  return { add, generate };
}

async function generateIndexJs(
  outputDir: string,
  content: string[],
  format: string,
  ext: string,
) {
  const contentStr = content.join("");
  const fileName = `index.${ext}`;
  const tempInputPath = path.join(outputDir, `.temp-index.ts`);
  const outputPath = path.join(outputDir, fileName);

  try {
    // Write temporary input file
    await fs.writeFile(tempInputPath, contentStr, "utf8");

    // Use esbuild to transform the file (much faster than Vite)
    await esbuild.build({
      entryPoints: [tempInputPath],
      bundle: false, // Don't bundle, just transform (imports remain as-is)
      format: format === "cjs" ? "cjs" : "esm",
      outfile: outputPath,
      minify: false, // Skip minification for faster builds
      write: true,
      platform: "browser",
      target: "es2020",
      logLevel: "silent", // Suppress esbuild logs
    });

    // Clean up temporary file
    await fs.unlink(tempInputPath);
  } catch (error) {
    // Clean up on error
    try {
      await fs.unlink(tempInputPath);
    } catch {
      // Ignore cleanup errors
    }
    throw error;
  }
}

async function generateIndexDts(outputDir, content, dtsExt) {
  return fs.writeFile(path.join(outputDir, `index.${dtsExt}`), content);
}
