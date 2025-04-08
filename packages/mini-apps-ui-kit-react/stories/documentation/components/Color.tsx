interface ColorProps {
  name: string;
  code: string;
  color: string;
}

export const Color = ({ name, color }: ColorProps) => {
  const nameWithoutPrefix =
    (name.split("-").pop() || "").charAt(0).toUpperCase() +
    (name.split("-").pop() || "").slice(1);
  return (
    <div
      className="flex flex-col rounded-2xl overflow-hidden"
      style={{ border: "1px solid #00000019" }}
    >
      <div className="w-32 h-20" style={{ backgroundColor: `rgb(${color})` }} />
      <div className="flex flex-col justify-start h-12 p-2">
        <strong>{nameWithoutPrefix}</strong>
      </div>
    </div>
  );
};
