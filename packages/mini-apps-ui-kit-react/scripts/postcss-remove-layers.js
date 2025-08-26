/**
 * PostCSS plugin to remove @layer directives for Tailwind v3 compatibility
 */
export default function removeLayersPlugin() {
    return {
        postcssPlugin: 'postcss-remove-layers',
        AtRule: {
            layer(atRule) {
                console.log(`Found @layer: ${atRule.name} with ${atRule.nodes?.length || 0} nodes`);

                // Remove the @layer atrule but keep its content
                if (atRule.nodes && atRule.nodes.length > 0) {
                    // Move all child nodes to the parent
                    atRule.parent.insertBefore(atRule, atRule.nodes);
                }
                // Remove the @layer atrule itself (including standalone statements)
                atRule.remove();
            }
        },
        // Also handle any remaining @layer references that might not be caught
        Once(root) {
            // Find and remove any remaining @layer statements
            root.walkAtRules('layer', (atRule) => {
                console.log(`Walking found @layer: ${atRule.name}`);
                if (atRule.nodes && atRule.nodes.length > 0) {
                    atRule.parent.insertBefore(atRule, atRule.nodes);
                }
                atRule.remove();
            });
        }
    };
}

removeLayersPlugin.postcss = true; 