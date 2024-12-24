import { cn } from "@/lib/utils";

import Flag, { CountryCode } from "../Flag";
import Typography from "../Typography";

interface CountryListItemProps {
  countryCode: CountryCode;
  countryName: string;
  dialCode: string;
  isSelected: boolean;
  onClick?: () => void;
}

const CountryListItem = ({
  countryCode,
  countryName,
  dialCode,
  isSelected,
  onClick,
}: CountryListItemProps) => {
  return (
    <div
      data-country={countryCode}
      className={cn(
        "flex items-center w-full cursor-pointer rounded-md p-2 hover:bg-gray-100",
        isSelected && "bg-gray-200",
      )}
      onClick={onClick}
    >
      <span className="w-6 h-6">
        <Flag countryCode={countryCode} size={24} />
      </span>
      <Typography
        variant="body"
        level={2}
        className="mx-2 overflow-hidden text-ellipsis whitespace-nowrap"
      >
        {countryName}
      </Typography>
      <Typography variant="body" level={2} className="ml-auto">
        {dialCode}
      </Typography>
    </div>
  );
};

CountryListItem.displayName = "CountryListItem";

export default CountryListItem;
