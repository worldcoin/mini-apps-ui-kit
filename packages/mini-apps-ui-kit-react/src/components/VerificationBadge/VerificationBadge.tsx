import { cn } from "@/lib/utils";

export interface VerificationBadgeProps {
  verified: boolean;
  className?: string;
}

function VerificationBadge({ verified, className }: VerificationBadgeProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-5", className)}
    >
      <circle cx="10" cy="10" r="10" className={verified ? "fill-info-600" : "fill-gray-200"} />
      <path
        d="M15.3711 8.92871L11 10.6768V16H9V10.6768L4.62891 8.92871L5.37109 7.07129L10 8.92285L14.6289 7.07129L15.3711 8.92871Z"
        className={verified ? "fill-gray-0" : "fill-gray-350"}
      />
      <path
        d="M10.0392 7.31641C10.7297 7.31641 11.2894 6.75676 11.2894 6.0664C11.2894 5.37605 10.7297 4.81641 10.0392 4.81641C9.34878 4.81641 8.78906 5.37605 8.78906 6.0664C8.78906 6.75676 9.34878 7.31641 10.0392 7.31641Z"
        className={verified ? "fill-gray-0" : "fill-gray-350"}
      />
    </svg>
  );
}

export { VerificationBadge };
