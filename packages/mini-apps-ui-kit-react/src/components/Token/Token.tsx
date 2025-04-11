import React from "react";

import * as tokens from "./icons";

/**
 * Props for the Token component
 */
interface TokenProps {
  /** The token symbol to display (BTC, ETH, USDC, or WLD) */
  value: keyof typeof tokens;
  /** Width and height in pixels of the token icon (default: 40) */
  size?: number;
  /** Variant of the token icon (default: "default") */
  variant?: "color" | "monochrome";
  /** Whether the token is disabled */
  disabled?: boolean;
}

const Token: React.FC<TokenProps> = ({
  value,
  size = 40,
  variant = "color",
  disabled = false,
}) => {
  const Icon = tokens[value];
  return <Icon width={size} height={size} disabled={disabled} variant={variant} />;
};

Token.displayName = "Token";

export { Token };
export type { TokenProps };
