import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/portfolio/PageHeader";
import { Skills } from "@/components/portfolio/Skills";
import { useReveal } from "@/hooks/use-reveal";

const title = "Skills — Abdur Rahman Khan";
const description =
  "Technical toolkit across languages, DevOps, cloud, ethical hacking, AI/ML, backend and methodologies.";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/skills" }],
  }),
  component: SkillsPage,
});

function SkillsPage() {
  useReveal();
  return (
    <>
      <PageHeader eyebrow="Skills" title="Technical toolkit"
        description={"Built through shipped projects and structured certification programmes across four core domains."} />
      <Skills />
    </>
  );
}
