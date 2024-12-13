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
}

const Token: React.FC<TokenProps> = ({ value, size = 40 }) => {
  const Icon = tokens[value];
  return <Icon width={size} height={size} />;
};

export default Token;
