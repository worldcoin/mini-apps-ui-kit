"use client";

import React from "react";

import { cn } from "../../lib/utils";
import { useSafeAreaInsets } from "./useSafeAreaInsets";

export type Edge = "top" | "right" | "bottom" | "left";

export interface SafeAreaViewProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Edges to apply the safe area insets to. Defaults to all edges.
   */
  edges?: Edge[];
  /**
   * Additional class name for the container.
   */
  className?: string;
  /**
   * Children to render inside the SafeAreaView.
   */
  children?: React.ReactNode;
}

/**
 * A component that applies safe area insets as padding to its children.
 */
const SafeAreaView = React.forwardRef<HTMLDivElement, SafeAreaViewProps>(
  (
    { edges = ["top", "right", "bottom", "left"], className, style, children, ...rest },
    ref,
  ) => {
    const insets = useSafeAreaInsets();

    const paddingStyle: React.CSSProperties = {
      ...(edges.includes("top") && { paddingTop: insets.top }),
      ...(edges.includes("right") && { paddingRight: insets.right }),
      ...(edges.includes("bottom") && { paddingBottom: insets.bottom }),
      ...(edges.includes("left") && { paddingLeft: insets.left }),
      ...style,
    };

    return (
      <div ref={ref} className={cn(className)} style={paddingStyle} {...rest}>
        {children}
      </div>
    );
  },
);

SafeAreaView.displayName = "SafeAreaView";

export { SafeAreaView };
