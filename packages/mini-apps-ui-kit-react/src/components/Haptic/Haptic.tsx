"use client";

import { Slot } from "@radix-ui/react-slot";

import haptics, { ImpactStyle, NotificationType } from "../../lib/haptics";

type HapticPropsBase = {
  children: React.ReactNode;
  asChild?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

type ImpactHapticProps = HapticPropsBase & {
  variant: "impact";
  type: ImpactStyle;
};

type NotificationHapticProps = HapticPropsBase & {
  variant: "notification";
  type: NotificationType;
};

type SelectionHapticProps = HapticPropsBase & {
  variant: "selection";
  type?: never;
};

type HapticProps = ImpactHapticProps | NotificationHapticProps | SelectionHapticProps;

function Haptic({
  children,
  variant = "selection",
  type,
  asChild,
  onClick,
  ...props
}: HapticProps) {
  const Component = asChild ? Slot : "div";
  const handleInteraction = (event: React.MouseEvent<HTMLDivElement>) => {
    onClick?.(event);
    switch (variant) {
      case "impact":
        haptics.impact(type as ImpactStyle);
        break;
      case "notification":
        haptics.notification(type as NotificationType);
        break;
      case "selection":
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
