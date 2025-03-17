import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";

import { CountryCode, Flag } from "../Flag";
import { ArrowDown } from "../Icons/ArrowDown";
import { Typography } from "../Typography";

const triggerVariants = cva(
  "flex items-center bg-transparent focus:outline-none cursor-pointer border-r border-gray-300 pr-3 text-gray-900",
  {
    variants: {
      disabled: {
        true: "cursor-not-allowed opacity-20",
        false: "",
      },
      error: {
        true: "border-error-500",
      },
    },
    defaultVariants: {
      disabled: false,
    },
  },
);

interface CountrySelectorButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  disabled: boolean;
  value: CountryCode;
  dialCode: string;
  error?: boolean;
}

const CountrySelectorButton = forwardRef<HTMLDivElement, CountrySelectorButtonProps>(
  ({ disabled, className, value, dialCode, error, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(triggerVariants({ disabled, className, error }))}
        data-testid="country-selector-button"
      >
        <div className="mr-2">
          <Flag countryCode={value} size={24} />
        </div>
        <Typography variant="subtitle" level={3} className="mr-2">
          {dialCode}
        </Typography>
        <ArrowDown />
      </div>
    );
  },
);

CountrySelectorButton.displayName = "CountrySelectorButton";

export default CountrySelectorButton;
