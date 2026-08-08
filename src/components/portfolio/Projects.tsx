import { ArrowUpRight, Github, Lock } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { projects } from "@/content/portfolio";

export function Projects() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="Applications spanning offline AI retrieval, strategic simulation, health tracking, secure storage and embedded systems."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <article
              key={project.name}
              className="reveal group flex flex-col rounded-2xl border border-border bg-surface/50 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40 hover:bg-surface hover:shadow-elevate"
              style={{ transitionDelay: `${(i % 2) * 80}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-xl font-semibold">{project.name}</h3>
                <span className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.summary}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-border/80 bg-background/40 px-3 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="mt-7 border-t border-border/70 pt-5">
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-foreground"
                  >
                    <Github className="size-4" />
                    View repository
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                    <Lock className="size-3.5" />
                    {/* PLACEHOLDER — add a repository link in src/content/portfolio.ts */}
                    Repository link coming soon
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
