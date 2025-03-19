import { createContext, useContext } from "react";

interface AlertDialogContextValue {
  dismissible?: boolean;
}

const AlertDialogContext = createContext<AlertDialogContextValue | undefined>(undefined);

const useAlertDialog = () => {
  const context = useContext(AlertDialogContext);
  if (context === undefined) {
    throw new Error("useAlertDialog must be used within an AlertDialog");
  }
  return context;
};

export { AlertDialogContext, useAlertDialog };
