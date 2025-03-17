import { CountryCode, Flag } from "../Flag";
import { Typography } from "../Typography";

interface CountryListItemProps {
  countryCode: CountryCode;
  countryName: string;
  onClick?: (value: CountryCode) => void;
}

const CountryListItem = ({ countryCode, countryName, onClick }: CountryListItemProps) => {
  return (
    <button
      type="button"
      data-country={countryCode}
      className="h-[3.75rem] flex items-center w-full gap-2 cursor-pointer"
      onClick={() => onClick?.(countryCode)}
    >
      <Flag countryCode={countryCode} size={32} />
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
