import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/portfolio/PageHeader";
import { Projects } from "@/components/portfolio/Projects";
import { useReveal } from "@/hooks/use-reveal";

const title = "Projects — Abdur Rahman Khan";
const description =
  "Selected engineering work across offline AI retrieval, strategic simulation, security, desktop apps and embedded systems.";

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
      <PageHeader eyebrow="Projects" title="Selected work"
        description={"Applications spanning offline AI retrieval, strategic simulation, health tracking, secure storage and embedded systems."} />
      <Projects />
    </>
  );
}
