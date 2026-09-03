import { ArrowUpRight, Github, Lock } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { arkProjects, selectedProjects, type Project } from "@/content/portfolio";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article
      className="reveal group flex flex-col rounded-2xl border border-border bg-surface/50 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40 hover:bg-surface hover:shadow-elevate"
      style={{ transitionDelay: `${(index % 3) * 80}ms` }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
            {project.category === "ark" ? "ark ecosystem" : "selected work"}
          </p>
          <h3 className="font-display text-xl font-semibold">{project.name}</h3>
        </div>
        <span className="font-mono text-xs text-muted-foreground">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
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
      <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 border-t border-border/70 pt-5">
        {project.href ? (
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-foreground"
          >
            <Github className="size-4" />
            Repository
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Lock className="size-3.5" />
            Private / unpublished
          </span>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary"
          >
            Live demo
            <ArrowUpRight className="size-4" />
          </a>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Built for the real world"
          description="A growing body of work across privacy engineering, developer security, offline AI and resilient desktop software."
        />
        <div className="mt-14 rounded-3xl border border-primary/25 bg-primary/[0.04] p-6 sm:p-9">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                01 / product suite
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
                ark Ecosystem
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              A connected family of privacy-first tools: browse, search, capture, transfer and
              practice with less noise.
            </p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {arkProjects.map((project, i) => (
              <ProjectCard key={project.name} project={project} index={i} />
            ))}
          </div>
        </div>
        <div className="mt-20">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            02 / selected work
          </p>
          <div className="mt-3 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {selectedProjects.map((project, i) => (
              <ProjectCard key={project.name} project={project} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
