import { Shield } from "./icons/Shield";
import { SparkIcon } from "./icons/SparkIcon";
import { Star } from "./icons/Star";

export const iconControl = {
  control: "select",
  options: ["None", "Star", "Shield", "Spark"],
  mapping: {
    None: null,
    Star: <Star />,
    Shield: <Shield />,
    Spark: <SparkIcon />,
  },
} as const;
