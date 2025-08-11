#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🚀 Building CSS files for both Tailwind v3 and v4...');

// First, build the project using Vite (this generates the v4 CSS)
console.log('\n📦 Building project with Vite (generates v4 CSS)...');
try {
    execSync('pnpm build', { stdio: 'inherit' });
    console.log('✅ Vite build completed successfully');
} catch (error) {
    console.error('❌ Failed to build project:', error.message);
    process.exit(1);
}

// Check if the v4 CSS was generated
const v4CSSPath = './dist/styles.css';
if (!fs.existsSync(v4CSSPath)) {
    console.error('❌ V4 CSS file not found. Make sure the build completed successfully.');
    process.exit(1);
}

// Read the v4 CSS immediately after Vite build (before any processing)
console.log('\n📦 Reading generated v4 CSS...');
const v4CSS = fs.readFileSync(v4CSSPath, 'utf8');

// Create v4 CSS file (preserve with @layer directives)
console.log('\n📦 Creating v4 CSS file...');
fs.writeFileSync('./dist/styles-v4.css', v4CSS);
console.log('✅ v4 CSS file created (with @layer directives preserved)');

// Create v3 compatible CSS using PostCSS with @csstools/postcss-cascade-layers
console.log('\n📦 Creating v3 compatible CSS using PostCSS...');
try {
    // Import PostCSS and the cascade layers plugin
    const postcss = await import('postcss');
    const cascadeLayers = await import('@csstools/postcss-cascade-layers');
    const autoprefixer = await import('autoprefixer');

    // Process the CSS to remove @layer directives
    const result = await postcss.default([
        cascadeLayers.default({
            // This will remove all @layer directives and flatten the CSS
            onRevertLayerKeyword: (layerName) => {
                console.log(`Removing @layer directive: ${layerName}`);
            }
        }),
        autoprefixer.default
    ]).process(v4CSS, {
        from: undefined,
        to: undefined
    });

    // Write the processed CSS
    fs.writeFileSync('./dist/styles-v3.css', result.css);
    console.log('✅ v3 CSS file created using @csstools/postcss-cascade-layers');

} catch (error) {
    console.error('❌ Failed to process CSS with PostCSS:', error.message);
    console.log('🔄 Falling back to regex method...');

    // Fallback to regex method
    const v3CSS = v4CSS
        .replace(/@layer\s+(\w+)\s*\{([^}]*)\}/g, '$2')
        .replace(/@layer\s+[^;]+;/g, '')
        .replace(/@layer\s+\w+\s*\{/g, '')
        .replace(/\}\s*@layer/g, '')
        .replace(/\n\s*\n\s*\n/g, '\n\n')
        .trim();

    fs.writeFileSync('./dist/styles-v3.css', v3CSS);
    console.log('✅ v3 CSS file created using fallback method');
}

// Update the main styles.css to be v3 compatible (for backward compatibility)
console.log('\n📦 Updating main styles.css to be v3 compatible...');
const v3CSS = fs.readFileSync('./dist/styles-v3.css', 'utf8');
fs.writeFileSync('./dist/styles.css', v3CSS);
console.log('✅ Main styles.css updated for v3 compatibility');

console.log('\n🎉 All CSS files built successfully!');
console.log('\n📁 Generated files:');
console.log('  • dist/styles.css (v3 compatible, backward compatible)');
console.log('  • dist/styles-v3.css (v3 compatible, @layer directives removed)');
console.log('  • dist/styles-v4.css (v4 compatible, @layer directives preserved)');
console.log('\n💡 Usage:');
console.log('  • For Tailwind v3 projects: import "styles.css" or "styles-v3.css"');
console.log('  • For Tailwind v4 projects: import "styles-v4.css"');
console.log('\n⚠️  Note: The v3 versions have @layer directives safely removed using @csstools/postcss-cascade-layers'); 