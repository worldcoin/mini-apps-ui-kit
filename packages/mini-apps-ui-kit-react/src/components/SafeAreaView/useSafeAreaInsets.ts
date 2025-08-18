"use client";

import { useEffect, useState } from "react";

const defaultSafeAreaInsets = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};

function useSafeAreaInsets() {
  const [safeAreaInsets, setSafeAreaInsets] = useState(() => {
    if (typeof window !== "undefined") {
      return window?.MiniKit?.deviceProperties?.safeAreaInsets ?? defaultSafeAreaInsets;
    }

    return defaultSafeAreaInsets;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const insets = window?.MiniKit?.deviceProperties?.safeAreaInsets;
      if (insets && JSON.stringify(insets) !== JSON.stringify(safeAreaInsets)) {
        setSafeAreaInsets(insets);
      }
    }
  }, [safeAreaInsets]);

  return safeAreaInsets;
}

export { useSafeAreaInsets };
