import { GraduationCap } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { education } from "@/content/portfolio";

export function Education() {
  return (
    <section className="border-t border-border/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Education" title="Academic background" />

        <div className="mt-12">
          <ol className="relative space-y-6 border-l border-border/70 pl-6">
            {education.map((item, i) => (
              <li
                key={item.institution}
                className="reveal relative"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <span className="absolute -left-[31px] top-1.5 flex size-5 items-center justify-center rounded-full border border-primary/50 bg-background">
                  <GraduationCap className="size-3 text-primary" />
                </span>
                <div className="rounded-xl border border-border bg-surface/50 p-6 transition-colors hover:border-primary/40">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
                    {item.period}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold">{item.qualification}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.institution} · {item.location}
                  </p>
                  {item.detail && (
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground/85">
                      {item.detail}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>

      </div>
    </section>
  );
}
