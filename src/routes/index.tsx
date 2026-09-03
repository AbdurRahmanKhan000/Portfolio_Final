import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/portfolio/Hero";
import { CoreDomains } from "@/components/portfolio/CoreDomains";
import { useReveal } from "@/hooks/use-reveal";
import { profile } from "@/content/portfolio";

const title = "Abdur Rahman Khan — DevOps, Cloud & Ethical Hacking";
const description =
  "Portfolio of Abdur Rahman Khan: DevOps cloud engineer, ethical hacker and programming expert across 8+ languages.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          email: profile.email,
          jobTitle: "DevOps & Cloud Engineer, Ethical Hacker",
          sameAs: [profile.github, profile.linkedin],
        }),
      },
    ],
  }),
  component: HomePage,
});

const quickLinks = [
  { to: "/projects", label: "Projects", note: "15 shipped systems · ark Ecosystem" },
  { to: "/skills", label: "Skills", note: "8+ languages, DevOps, security" },
  { to: "/tools", label: "Tools & AI Agents", note: "Linux, Shodan, 25+ AI agents" },
  { to: "/certifications", label: "Certifications", note: "25 completed programmes" },
];

function HomePage() {
  useReveal();

  return (
    <>
      <Hero />
      <CoreDomains />
      <section className="border-t border-border/60 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-4 px-6 sm:grid-cols-2">
          {quickLinks.map((link, i) => (
            <Link
              key={link.to}
              to={link.to}
              className="reveal group flex items-center justify-between gap-4 rounded-2xl border border-border bg-surface/50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-surface"
              style={{ transitionDelay: `${(i % 2) * 80}ms` }}
            >
              <span>
                <span className="block font-display text-lg font-semibold">{link.label}</span>
                <span className="mt-1 block text-sm text-muted-foreground">{link.note}</span>
              </span>
              <ArrowUpRight className="size-5 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
