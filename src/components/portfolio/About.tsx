import { Download } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { profile } from "@/content/portfolio";
import resume from "@/assets/resume.pdf.asset.json";


const focus = [
  {
    title: "Software Engineering",
    body: "Full applications end to end — data modelling, backend services, desktop and web interfaces, clean OOP and MVC structure.",
  },
  {
    title: "AI & Machine Learning",
    body: "Local-first RAG systems, embeddings and semantic search, neural network fundamentals and MLOps workflows.",
  },
  {
    title: "DevOps Engineering",
    body: "CI/CD pipelines, infrastructure as code, configuration management, observability and cloud-native delivery.",
  },
];

export function About() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="About" title="I build systems, not just study them." />

        <div className="mt-12 grid gap-14 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-6">
            {profile.bio.map((paragraph, i) => (
              <p
                key={i}
                className="reveal text-base leading-relaxed text-muted-foreground"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                {paragraph}
              </p>
            ))}

            <a
              href={resume.url}
              download="Abdur-Rahman-Khan-Resume.pdf"
              className="reveal group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-glow"
            >
              <Download className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              Download resume (PDF)
            </a>
          </div>


          <div className="space-y-4">
            {focus.map((item, i) => (
              <div
                key={item.title}
                className="reveal rounded-xl border border-border bg-surface/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-surface"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
