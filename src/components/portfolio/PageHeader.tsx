export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border/60 pt-32 pb-14 sm:pt-40 sm:pb-20">
      <div className="hero-gradient pointer-events-none absolute inset-0 opacity-70" aria-hidden />
      <div
        className="grid-lines pointer-events-none absolute inset-0 opacity-25 [mask-image:radial-gradient(70%_70%_at_50%_0%,black,transparent)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.08] sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
