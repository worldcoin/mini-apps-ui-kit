import { useState } from "react";
import { Input } from "../../../src/components/Input";
import { Typography } from "../../../src/components/Typography";
import { IconsGrid } from "./IconsGrid";

export function IconsBrowser() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-8">
      <Input
        type="search"
        label="Search icons"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="max-w-md"
      />
      <div className="space-y-6">
        <div>
          <Typography variant="heading" level={4} className="mb-2">
            Outline Variant
          </Typography>
          <Typography variant="body" className="text-gray-600 dark:text-gray-400 mb-4">
            Icons with customizable stroke width, allowing you to adjust the line thickness to match your design needs.
          </Typography>
          <IconsGrid variant="outline" searchQuery={searchQuery} />
        </div>
        <div>
          <Typography variant="heading" level={4} className="mb-2">
            Regular Variant
          </Typography>
          <Typography variant="body" className="text-gray-600 dark:text-gray-400 mb-4">
            Icons with a fixed stroke width that maintains consistent proportions when scaled, ensuring visual consistency across different sizes.
          </Typography>
          <IconsGrid variant="regular" searchQuery={searchQuery} />
        </div>
        <div>
          <Typography variant="heading" level={4} className="mb-2">
            Solid Variant
          </Typography>
          <Typography variant="body" className="text-gray-600 dark:text-gray-400 mb-4">
            Filled icons with no stroke, providing a bold, solid appearance ideal for emphasis and high-contrast designs.
          </Typography>
          <IconsGrid variant="solid" searchQuery={searchQuery} />
        </div>
      </div>
    </div>
  );
}

