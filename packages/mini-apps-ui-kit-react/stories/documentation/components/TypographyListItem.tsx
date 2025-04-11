interface TypographyListItemProps {
  children: React.ReactNode;
}

export const TypographyListItem = ({ children }: TypographyListItemProps) => {
  return (
    <div
      className="min-h-14"
      style={{
        paddingTop: 10,
        paddingBottom: 10,
      }}
    >
      {children}
    </div>
  );
};
