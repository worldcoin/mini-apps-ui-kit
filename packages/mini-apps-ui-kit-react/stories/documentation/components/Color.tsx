interface ColorProps {
  name: string;
  code: string;
  color: string;
}

export const Color = ({ name, color }: ColorProps) => {
  const nameWithoutPrefix = name.split("-").pop() || "";
  return (
    <div className="flex flex-col gap-2">
      <div
        className="w-32 h-16 rounded-lg"
        style={{ backgroundColor: color, border: "1px solid #FBFBFC" }}
      />
      <div className="flex flex-col">
        <span className="font-display">{nameWithoutPrefix}</span>
        <span className="text-gray-500 font-mono">{color.toUpperCase()}</span>
      </div>
    </div>
  );
};
