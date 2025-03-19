import { createContext, useContext } from "react";

import { DrawerProps } from "./types";

interface DrawerContextValue {
  dismissible?: DrawerProps["dismissible"];
  height?: DrawerProps["height"];
}

const DrawerContext = createContext<DrawerContextValue | undefined>(undefined);

const useDrawer = () => {
  const context = useContext(DrawerContext);
  if (context === undefined) {
    throw new Error("useDrawer must be used within a Drawer");
  }
  return context;
};

export { DrawerContext, useDrawer };
