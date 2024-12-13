import { cva } from "class-variance-authority";
import { type VariantProps } from "class-variance-authority";
import { type FC } from "react";

const listItemStyles = cva("h-16 p-4 rounded-[14px] flex items-center text-gray-900 w-full", {
  variants: {
    variant: {
      duotone: "bg-gray-50",
      outline: "border border-gray-200",
      ghost: "",
    },
  },
  defaultVariants: {
    variant: "duotone",
  },
});

interface ListItemProps
  extends VariantProps<typeof listItemStyles>,
    Omit<React.HTMLAttributes<HTMLDivElement>, "className" | "style"> {
  children?: React.ReactNode;
}

const ListItem: FC<ListItemProps> = ({ children, variant, ...props }) => {
  return (
    <div className={listItemStyles({ variant })} {...props}>
      {children}
    </div>
  );
};

export default ListItem;
