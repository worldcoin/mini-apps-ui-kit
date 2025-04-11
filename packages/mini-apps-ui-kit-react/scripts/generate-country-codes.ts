import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FLAG_COMPONENTS_DIR = path.join(__dirname, "../src/components/Flag/flag-components");
const TYPES_FILE = path.join(__dirname, "../src/components/Flag/constants.ts");

// Read all files in the flag-components directory
const files = fs
  .readdirSync(FLAG_COMPONENTS_DIR)
  .filter((file) => file.endsWith(".tsx") && file !== "index.tsx")
  .map((file) => file.replace(".tsx", "").toUpperCase());

// Generate the type definition
const typeDefinition = `// This file is auto-generated. Do not edit manually.  Run 'pnpm generate:country-codes' to update. 
export const countryCodes = [${files.map((code) => `"${code}"`).join(", ")}] as const;
`;

// Write the type definition to types.ts
fs.writeFileSync(TYPES_FILE, typeDefinition);

console.log("Successfully generated CountryCode type in types.ts");
