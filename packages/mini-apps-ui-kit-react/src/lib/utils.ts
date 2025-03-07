import { type ClassValue, clsx } from "clsx";
import { ChangeEvent } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const createChangeEvent = (target: HTMLInputElement) => {
  const event = new Event("change", { bubbles: true });
  Object.defineProperty(event, "target", { value: target });
  Object.defineProperty(event, "currentTarget", { value: target });
  return event as unknown as ChangeEvent<HTMLInputElement>;
};
