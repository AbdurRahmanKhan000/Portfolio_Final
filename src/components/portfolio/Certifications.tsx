import { BadgeCheck } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { certifications } from "@/content/portfolio";

export function Certifications() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Certifications"
          title={`${certifications.length} completed programmes`}
          description="Cloud, DevOps, machine learning, security and software engineering credentials from IBM, Microsoft, Google, AWS, Cisco and more."
        />

        <ul className="mt-14 grid gap-4 md:grid-cols-2">
          {certifications.map((cert, i) => (
            <li
              key={cert.title}
              className="reveal group rounded-xl border border-border bg-surface/40 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-surface"
              style={{ transitionDelay: `${(i % 2) * 70}ms` }}
            >
              <div className="flex gap-3">
                <BadgeCheck className="mt-0.5 size-4 shrink-0 text-primary/70 transition-colors group-hover:text-primary" />
                <div>
                  <h3 className="text-sm font-semibold leading-snug">{cert.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{cert.issuer}</p>
                  {cert.detail && (
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground/80">
                      {cert.detail}
                    </p>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
