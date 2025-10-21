export type NotificationType = "success" | "warning" | "error";
export type ImpactStyle = "light" | "medium" | "heavy";
export type Direction = "ltr" | "rtl";

interface HapticFeedbackParams {
  hapticsType: "impact" | "notification" | "selectionChanged";
  style?: ImpactStyle | NotificationType;
}

export interface MiniKit {
  deviceProperties: {
    safeAreaInsets: {
      top: number;
      right: number;
      bottom: number;
      left: number;
    };
    deviceOS: string;
    worldAppVersion: number;
  };
  user: {
    optedIntoOptionalAnalytics: boolean;
  };
  commands?: {
    sendHapticFeedback?: (params: HapticFeedbackParams) => void;
  };
}

declare global {
  interface Window {
    MiniKit?: MiniKit;
  }
}
