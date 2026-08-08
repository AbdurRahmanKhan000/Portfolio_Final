import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/portfolio/PageHeader";
import { CoreDomains } from "@/components/portfolio/CoreDomains";
import { About } from "@/components/portfolio/About";
import { Education } from "@/components/portfolio/Education";
import { useReveal } from "@/hooks/use-reveal";

const title = "Abdur Rahman Khan — About";
const description =
  "DevOps engineer, ethical hacker and multi-language programmer: background, core domains and education.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  useReveal();
  return (
    <>
      <PageHeader eyebrow="About" title="I build systems, not just study them." />
      <CoreDomains />
      <About />
      <Education />
    </>
  );
}
