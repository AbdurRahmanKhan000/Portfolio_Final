import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/portfolio/PageHeader";
import { Toolkit } from "@/components/portfolio/Toolkit";
import { AiAgents } from "@/components/portfolio/AiAgents";
import { useReveal } from "@/hooks/use-reveal";

const title = "Tools & AI Agents — Abdur Rahman Khan";
const description =
  "Linux, Shodan, OSINT search engines, cloud and DevOps platforms, plus the 25+ AI agents I work with.";

export const Route = createFileRoute("/tools")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/tools" }],
  }),
  component: ToolsAndAIAgentsPage,
});

function ToolsAndAIAgentsPage() {
  useReveal();
  return (
    <>
      <PageHeader eyebrow="Tools & AI" title="The stack behind the work"
        description={"Every tool I use day to day — plus the 25+ AI agents that power my coding, research and automation workflow."} />
      <Toolkit />
      <AiAgents />
    </>
  );
}
