interface ColorProps {
  name: string;
  code: string;
  color: string;
}

export const Color = ({ name, color }: ColorProps) => {
  const nameWithoutPrefix = name.split("-").pop() || "";
  return (
    <div
      className="flex flex-col rounded-2xl overflow-hidden"
      style={{ border: "1px solid #00000019" }}
    >
      <div className="w-32 h-16" style={{ backgroundColor: color }} />
      <div className="flex flex-col h-16 p-2">
        <span className="font-display">{nameWithoutPrefix}</span>
        <span className="text-gray-500 font-mono">{color.toUpperCase()}</span>
      </div>
    </div>
  );
};
