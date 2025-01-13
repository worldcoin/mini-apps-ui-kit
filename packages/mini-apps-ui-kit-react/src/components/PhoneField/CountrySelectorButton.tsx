import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";

import { CountryCode, Flag } from "../Flag";
import { Typography } from "../Typography";
import { ArrowDown } from "./ArrowDown";

const triggerVariants = cva(
  "flex items-center bg-transparent border-none focus:outline-none cursor-pointer",
  {
    variants: {
      disabled: {
        true: "cursor-not-allowed opacity-20",
        false: "",
      },
    },
    defaultVariants: {
      disabled: false,
    },
  },
);

interface CountrySelectorButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  disabled: boolean;
  countryCode: CountryCode;
  hideDialCode: boolean;
  dialCode: string;
}

const CountrySelectorButton = forwardRef<HTMLDivElement, CountrySelectorButtonProps>(
  ({ disabled, className, countryCode, hideDialCode, dialCode, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(triggerVariants({ disabled, className }))}
        data-testid="country-selector-button"
      >
        <div className="w-6 h-6 mr-2">
          <Flag countryCode={countryCode} size={24} />
        </div>
        {!hideDialCode && (
          <Typography variant="subtitle" level={2} className="mr-2 text-gray-900">
            {dialCode}
          </Typography>
        )}
        <span className="w-2.5 h-1.5">
          <ArrowDown className="text-gray-400" />
        </span>
      </div>
    );
  },
);

CountrySelectorButton.displayName = "CountrySelectorButton";

export default CountrySelectorButton;
