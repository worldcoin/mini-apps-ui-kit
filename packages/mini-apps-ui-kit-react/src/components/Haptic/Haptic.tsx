"use client";

import { Slot } from "@radix-ui/react-slot";

import haptics, { HapticFeedbackParams } from "../../lib/haptics";

interface HapticProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  type?: HapticFeedbackParams["hapticsType"];
  level?: HapticFeedbackParams["style"];
  asChild?: boolean;
}

function Haptic({
  children,
  type = "selectionChanged",
  level,
  asChild,
  onClick,
  ...props
}: HapticProps) {
  const Component = asChild ? Slot : "div";
  const handleInteraction = (event: React.MouseEvent<HTMLDivElement>) => {
    onClick?.(event);
    switch (type) {
      case "impact":
        haptics.impact(level as any);
        break;
      case "notification":
        haptics.notification(level as any);
        break;
      case "selectionChanged":
        haptics.selection();
        break;
    }
  };

  return (
    <Component onClick={handleInteraction} {...props}>
      {children}
    </Component>
  );
}

Haptic.displayName = "Haptic";
export { Haptic };
