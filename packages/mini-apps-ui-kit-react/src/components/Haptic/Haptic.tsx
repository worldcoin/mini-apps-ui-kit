"use client";

import { Slot } from "@radix-ui/react-slot";

import haptics, { ImpactStyle, NotificationType } from "../../lib/haptics";

type HapticPropsBase = {
  children: React.ReactNode;
  asChild?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

type ImpactHapticProps = HapticPropsBase & {
  type: "impact";
  level: ImpactStyle;
};

type NotificationHapticProps = HapticPropsBase & {
  type: "notification";
  level: NotificationType;
};

type SelectionHapticProps = HapticPropsBase & {
  type: "selectionChanged";
  level?: never;
};

type HapticProps = ImpactHapticProps | NotificationHapticProps | SelectionHapticProps;

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
        if (level) haptics.impact(level as ImpactStyle);
        break;
      case "notification":
        if (level) haptics.notification(level as NotificationType);
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
