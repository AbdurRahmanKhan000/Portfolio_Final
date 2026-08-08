import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/portfolio/PageHeader";
import { Certifications } from "@/components/portfolio/Certifications";
import { useReveal } from "@/hooks/use-reveal";

const title = "Certifications — Abdur Rahman Khan";
const description =
  "Cloud, DevOps, machine learning, security and software engineering credentials from IBM, Microsoft, Google, AWS and Cisco.";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/certifications" }],
  }),
  component: CertificationsPage,
});

function CertificationsPage() {
  useReveal();
  return (
    <>
      <PageHeader eyebrow="Certifications" title="Verified learning"
        description={"A continuous record of structured training across DevOps, cloud, AI and security."} />
      <Certifications />
    </>
  );
}
