import { Star } from "./icons/Icon";
import { Shield } from "./icons/Shield";

export const iconControl = {
  control: "select",
  options: ["None", "Star", "Shield"],
  mapping: {
    None: null,
    Star: <Star />,
    Shield: <Shield />,
  },
} as const;
