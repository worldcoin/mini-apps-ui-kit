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
        <strong>{nameWithoutPrefix}</strong>
        <span className="text-gray-500 text-sm">{color.toUpperCase()}</span>
      </div>
    </div>
  );
};
