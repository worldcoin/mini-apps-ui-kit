import { TokenVariant } from "./types";

export const getBackgroundClass = ({
  disabled,
  variant,
}: {
  disabled?: boolean;
  variant?: TokenVariant;
}) => (disabled ? "fill-gray-350" : variant === "color" ? "fill-current" : "fill-gray-100");

export const getIconFillClass = ({
  disabled,
  variant,
}: {
  disabled?: boolean;
  variant?: TokenVariant;
}) => (disabled || variant === "color" ? "fill-gray-0" : "fill-gray-900");
