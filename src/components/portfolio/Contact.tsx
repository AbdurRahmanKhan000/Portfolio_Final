import { useState } from "react";
import { Check, Copy, Github, Linkedin, Mail, Send } from "lucide-react";
import { toast } from "sonner";
import { SectionHeading } from "./SectionHeading";
import { profile } from "@/content/portfolio";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      toast.error("Please fill in your name, email and message.");
      return;
    }

    const mailSubject = encodeURIComponent(subject || `Portfolio enquiry from ${name}`);
    const mailBody = encodeURIComponent(
      `${message}\n\n—\nName: ${name}\nEmail: ${email}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${mailSubject}&body=${mailBody}`;
    toast.success("Opening your email app with the message ready to send.");
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      toast.success("Email address copied.");
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Couldn't copy — please copy it manually.");
    }
  };

  const channels = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Linkedin, label: "LinkedIn", value: profile.linkedinLabel, href: profile.linkedin },
    { icon: Github, label: "GitHub", value: "github.com/AbdurRahmanKhan000", href: profile.github },
  ];

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk"
          description="Open to internships and graduate roles in DevOps, cloud engineering, cybersecurity and software development."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-3">
            {channels.map((channel, i) => (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer noopener"
                className="reveal flex items-center gap-4 rounded-xl border border-border bg-surface/50 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-surface"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <channel.icon className="size-4 shrink-0 text-primary" />
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-widest text-muted-foreground">
                    {channel.label}
                  </span>
                  <span className="block truncate text-sm text-foreground">{channel.value}</span>
                </span>
              </a>
            ))}

            <button
              type="button"
              onClick={copyEmail}
              className="reveal inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border px-5 py-3 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
              {copied ? "Copied" : "Copy email address"}
            </button>
          </div>

          <form
            onSubmit={handleSubmit}
            className="reveal rounded-2xl border border-border bg-surface/50 p-7"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Jane Doe" required />
              <Field label="Email" name="email" type="email" placeholder="jane@company.com" required />
            </div>
            <div className="mt-5">
              <Field label="Subject" name="subject" placeholder="Internship opportunity" />
            </div>
            <div className="mt-5">
              <label
                htmlFor="message"
                className="text-xs uppercase tracking-widest text-muted-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                maxLength={2000}
                placeholder="Tell me about the role or project…"
                className="mt-2 w-full resize-none rounded-lg border border-input bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary/60"
              />
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-glow"
            >
              <Send className="size-4" />
              Send message
            </button>
            <p className="mt-3 text-xs text-muted-foreground">
              This opens your email app with everything pre-filled and addressed to{" "}
              {profile.email}.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        maxLength={200}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-input bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary/60"
      />
    </div>
  );
}
