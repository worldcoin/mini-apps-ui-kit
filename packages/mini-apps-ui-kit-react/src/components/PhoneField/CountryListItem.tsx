import { CountryCode, LazyFlag } from "../Flag";
import { Typography } from "../Typography";

interface CountryListItemProps {
  countryCode: CountryCode;
  countryName: string;
  isSelected?: boolean;
  onClick?: (value: CountryCode) => void;
}

// TODO: Implement selected state

const CountryListItem = ({
  countryCode,
  countryName,
  onClick,
  isSelected,
}: CountryListItemProps) => {
  return (
    <button
      type="button"
      data-country={countryCode}
      className="h-[3.75rem] flex items-center w-full gap-2 cursor-pointer"
      onClick={() => onClick?.(countryCode)}
      {...(isSelected && { "data-selected": true })}
    >
      <LazyFlag countryCode={countryCode} size={32} />
      <Typography
        variant="subtitle"
        level={2}
        className="mx-2 overflow-hidden text-ellipsis whitespace-nowrap"
      >
        {countryName}
      </Typography>
    </button>
  );
};

CountryListItem.displayName = "CountryListItem";

export default CountryListItem;
