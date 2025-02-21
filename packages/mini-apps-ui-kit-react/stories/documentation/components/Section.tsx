function Section({
  children,
  image,
  title,
}: {
  children: React.ReactNode;
  image: string;
  title: string;
}) {
  return (
    <div>
      <h2>{title}</h2>
      <div style={{ display: "flex", gap: "24px" }}>
        <div style={{ flex: 1 }}>{children}</div>
        <div style={{ flex: 1 }}>
          <img src={image} alt={title} />
        </div>
      </div>
    </div>
  );
}

export default Section;
