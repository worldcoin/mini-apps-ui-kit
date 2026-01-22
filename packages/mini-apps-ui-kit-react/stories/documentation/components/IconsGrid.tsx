import { useState, useMemo } from "react";
import * as IconsOutline from "../../../dist/icons/esm/outline/index.mjs";
import * as IconsRegular from "../../../dist/icons/esm/regular/index.mjs";
import * as IconsSolid from "../../../dist/icons/esm/solid/index.mjs";
import { Typography } from "../../../src/components/Typography";

type IconVariant = "outline" | "regular" | "solid";
type IconName = string;

const iconMap = {
  outline: IconsOutline,
  regular: IconsRegular,
  solid: IconsSolid,
};

// Helper function to get icon component based on variant
function getIconComponent(
  iconName: IconName,
  variant: IconVariant,
): React.ComponentType<React.SVGProps<SVGSVGElement>> | null {
  
  const icons = iconMap[variant];
  const componentName =iconName

  return (icons as Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>>)[
    componentName
  ] || null;
}

export function IconsGrid({
  variant = "outline",
  searchQuery = "",
}: {
  variant?: IconVariant;
  searchQuery?: string;
}) {
  const [selectedIcon, setSelectedIcon] = useState<IconName | null>(null);

  const handleIconClick = (iconName: IconName) => {
    setSelectedIcon(iconName);
  };

  const filteredIcons = useMemo(() => {
    const allIcons = Object.keys(iconMap[variant]);
    if (!searchQuery.trim()) {
      return allIcons;
    }
    const query = searchQuery.toLowerCase();
    return allIcons.filter((iconName) =>
      iconName.toLowerCase().includes(query)
    );
  }, [variant, searchQuery]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {filteredIcons.map((iconName: IconName) => {
          const IconComponent = getIconComponent(iconName, variant);
          const isSelected = selectedIcon === iconName;

          if (!IconComponent) {
            return null;
          }

          return (
            <button
              key={iconName}
              type="button"
              onClick={() => handleIconClick(iconName)}
              className={`
                flex flex-col items-center justify-center p-4 border border-gray-50 transition-all
                hover:bg-gray-50
                ${
                  isSelected
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200"
                }
              `}
              aria-label={`${iconName} icon`}
            >
              <div className="flex items-center justify-center h-12 w-12">
                <IconComponent
                  className="w-8 h-8 text-gray-900"
                  width={32}
                  height={32}
                />
              </div>
              <Typography
                variant="body"
                level={4}
                className="text-center text-gray-500 break-all"
              >
                {iconName}
              </Typography>
            </button>
          );
        })}
      </div>
    </div>
  );
}

