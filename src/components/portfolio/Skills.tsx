import { SectionHeading } from "./SectionHeading";
import { skillGroups } from "@/content/portfolio";

export function Skills() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Technical toolkit"
          description="Built through shipped projects and structured certification programmes."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <div
              key={group.title}
              className="reveal rounded-2xl border border-border bg-surface/50 p-6 transition-all duration-300 hover:border-primary/40 hover:bg-surface"
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                {group.title}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border/70 bg-background/40 px-2.5 py-1.5 text-[13px] text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
