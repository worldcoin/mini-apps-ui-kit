import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FLAG_COMPONENTS_DIR = path.join(__dirname, "../public/flags");
const TYPES_FILE = path.join(__dirname, "../src/components/Flag/constants.ts");

// Read all files in the flag-components directory
const files = fs
    .readdirSync(FLAG_COMPONENTS_DIR)
    .filter((file) => file.endsWith(".svg"))
    .map((file) => file.replace(".svg", "").toUpperCase());

// Generate the type definition
const typeDefinition = `// This file is auto-generated. Do not edit manually.  Run 'pnpm generate:country-codes' to update. 

/**
 * Unsupported countries:
 * - Antarctica (AQ)
 * - Bouvet Island (BV) 
 * - Christmas Island (CX)
 * - Western Sahara (EH)
 * - French Guiana (GF)
 * - South Georgia and the South Sandwich Islands (GS)
 * - Heard Island and McDonald Islands (HM)
 * - Saint Kitts and Nevis (KN)
 * - Saint Martin (MF)
 * - New Caledonia (NC)
 * - Saint Pierre and Miquelon (PM)
 * - Reunion (RE)
 * - Saint Helena (SH)
 * - Svalbard and Jan Mayen (SJ)
 * - French Southern Territories (TF)
 * - U.S. Minor Outlying Islands (UM)
 * - U.S. Virgin Islands (VI)
 * - Wallis and Futuna (WF)
 * - Mayotte (YT)
 */

export const countryCodes = [${files.map((code) => `"${code}"`).join(", ")}] as const;
`;

// Write the type definition to types.ts
fs.writeFileSync(TYPES_FILE, typeDefinition);

console.log("Successfully generated CountryCode type in types.ts");