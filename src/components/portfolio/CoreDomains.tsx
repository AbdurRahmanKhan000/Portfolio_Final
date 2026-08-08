import { SectionHeading } from "./SectionHeading";
import { coreDomains, profile } from "@/content/portfolio";

export function CoreDomains() {
  return (
    <section className="border-t border-border/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Core domains"
          title="Four disciplines I build in"
          description={profile.summary}
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {coreDomains.map((item, i) => (
            <div
              key={item.title}
              className="reveal group relative overflow-hidden rounded-2xl border border-border bg-surface/50 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40 hover:bg-surface hover:shadow-elevate"
              style={{ transitionDelay: `${(i % 2) * 90}ms` }}
            >
              <span className="font-mono text-xs text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
