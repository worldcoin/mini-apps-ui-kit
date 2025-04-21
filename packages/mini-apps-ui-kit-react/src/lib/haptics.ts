type NotificationType = "success" | "warning" | "error";
type ImpactStyle = "light" | "medium" | "heavy" | "soft" | "rigid";

interface HapticFeedbackParams {
  hapticsType: "impact" | "notification" | "selectionChanged";
  style?: ImpactStyle | NotificationType;
}

// Type declaration for the global MiniKit object
declare global {
  interface Window {
    MiniKit?: {
      commands?: {
        sendHapticFeedback?: (params: HapticFeedbackParams) => void;
      };
    };
  }
}

const sendHapticFeedback = (params: HapticFeedbackParams) => {
  try {
    window.MiniKit?.commands?.sendHapticFeedback?.(params);
  } catch (error) {
    console.warn("Haptic feedback not supported:", error);
  }
};

const haptics = {
  notification: (type: NotificationType) => {
    sendHapticFeedback({
      hapticsType: "notification",
      style: type,
    });
  },

  selection: () => {
    sendHapticFeedback({
      hapticsType: "selectionChanged",
    });
  },

  impact: (type: ImpactStyle) => {
    sendHapticFeedback({
      hapticsType: "impact",
      style: type,
    });
  },
};

/**
 * Wraps a function with haptic feedback
 * @param fn The function to wrap (can be undefined)
 * @param hapticFn The haptic feedback function to call (defaults to selection)
 * @returns A new function that triggers haptic feedback and calls the original function if provided
 */
export function withHaptics<T extends (...args: any[]) => any>(
  fn: T | undefined,
  hapticFn: () => void = haptics.selection,
): T {
  return ((...args: Parameters<T>) => {
    try {
      hapticFn();
    } catch (error) {
      console.warn('Haptic feedback failed:', error);
    }
    
    if (!fn) {
      return undefined as ReturnType<T>;
    }

    const result = fn(...args);

    // Handle async functions
    if (result instanceof Promise) {
      return result.catch((error) => {
        console.error('Function failed:', error);
        throw error;
      }) as ReturnType<T>;
    }

    return result as ReturnType<T>;
  }) as T;
}

export default haptics;
export type { NotificationType, ImpactStyle, HapticFeedbackParams };
