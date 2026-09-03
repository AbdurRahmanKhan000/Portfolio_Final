import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/portfolio/PageHeader";
import { Projects } from "@/components/portfolio/Projects";
import { useReveal } from "@/hooks/use-reveal";

const title = "Projects — Abdur Rahman Khan";
const description =
  "A growing portfolio of privacy-first products, developer security tools, offline AI systems and resilient desktop applications.";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  useReveal();
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Selected work"
        description={
          "A growing portfolio of privacy-first products, developer security tools, offline AI systems and resilient desktop applications."
        }
      />
      <Projects />
    </>
  );
}
