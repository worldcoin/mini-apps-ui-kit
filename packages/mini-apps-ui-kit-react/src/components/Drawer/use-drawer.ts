import { createContext, useContext } from "react";

interface DrawerContextValue {
  dismissible?: boolean;
  fullPage?: boolean;
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
