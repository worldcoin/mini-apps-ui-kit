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
    <div className="py-12 grid gap-12 md:grid-cols-[1fr_2fr] ">
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <div>
        <img src={image} alt={title} className="w-full" />
      </div>
    </div>
  );
}

export default Section;
