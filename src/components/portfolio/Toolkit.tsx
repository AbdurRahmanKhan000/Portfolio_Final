import { SectionHeading } from "./SectionHeading";
import { toolGroups } from "@/content/portfolio";

export function Toolkit() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Tools"
          title="Everything I work with"
          description="From my long-standing development toolchain to the Linux, Shodan, OSINT search engines and cloud platforms I use across security and DevOps work."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {toolGroups.map((group, i) => (
            <div
              key={group.title}
              className="reveal rounded-2xl border border-border bg-surface/50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-surface"
              style={{ transitionDelay: `${(i % 2) * 80}ms` }}
            >
              <h3 className="font-display text-lg font-semibold">{group.title}</h3>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
                {group.note}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border/70 bg-background/40 px-2.5 py-1.5 text-[13px] text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
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
