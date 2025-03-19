export type TokenVariant = "color" | "monochrome";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  /** Variant of the token icon (default: "default") */
  variant?: TokenVariant;
  /** Whether the token is disabled */
  disabled?: boolean;
}
