import fs from "fs";
import { glob } from "glob";
import path from "path";

const FLAG_COMPONENTS_DIR = path.join(process.cwd(), "src/components/Flag/flag-components");
const OUTPUT_DIR = path.join(process.cwd(), "public/flags");

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function extractSVGs() {
  try {
    // Get all TSX files except index.ts
    const files = await glob("*.tsx", { cwd: FLAG_COMPONENTS_DIR });

    for (const file of files) {
      const filePath = path.join(FLAG_COMPONENTS_DIR, file);
      const content = fs.readFileSync(filePath, "utf-8");

      // Extract SVG content using regex
      const svgMatch = content.match(/<svg[\s\S]*?<\/svg>/);

      if (svgMatch) {
        const svgContent = svgMatch[0]
          .replace(/\s*{\.\.\.props}\s*/g, '') // Remove {...props} line
          .replace(/\n\s*\n/g, '\n'); // Clean up extra newlines
        const baseName = file.replace(".tsx", "").toUpperCase();
        const outputFileName = path.join(OUTPUT_DIR, `${baseName}.svg`);

        // Write SVG content to file
        fs.writeFileSync(outputFileName, svgContent);
        console.log(`Created ${outputFileName}`);
      } else {
        console.warn(`No SVG found in ${file}`);
      }
    }

    console.log("SVG extraction completed successfully!");
  } catch (error) {
    console.error("Error extracting SVGs:", error);
    process.exit(1);
  }
}

extractSVGs();
