import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/portfolio/PageHeader";
import { Contact } from "@/components/portfolio/Contact";
import { useReveal } from "@/hooks/use-reveal";

const title = "Contact — Abdur Rahman Khan";
const description =
  "Send Abdur Rahman Khan a message directly, or reach out via email, LinkedIn or GitHub.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  useReveal();
  return (
    <>
      <PageHeader eyebrow="Contact" title="Start a conversation"
        description={"Open to internships and graduate roles in DevOps, cloud engineering, cybersecurity and software development."} />
      <Contact />
    </>
  );
}
