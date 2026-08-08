export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="reveal max-w-2xl">
      <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
