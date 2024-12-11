import { Shield } from "./icons/Shield";
import { Star } from "./icons/Star";

export const iconControl = {
  control: "select",
  options: ["None", "Star", "Shield"],
  mapping: {
    None: null,
    Star: <Star />,
    Shield: <Shield />,
  },
} as const;
