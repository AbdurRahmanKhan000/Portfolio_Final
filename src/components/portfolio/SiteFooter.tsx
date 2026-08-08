import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { navLinks, profile } from "@/content/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-surface/30 py-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-base font-semibold">
            {profile.name}
            <span className="text-primary">.</span>
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
            DevOps &amp; Cloud Engineer · Ethical Hacker · Multi-language programmer.
          </p>
        </div>

        <nav className="flex flex-col gap-2.5">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">Sections</p>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-2.5">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">Elsewhere</p>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="size-3.5" /> Email
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Linkedin className="size-3.5" /> LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="size-3.5" /> GitHub
          </a>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-border/50 px-6 pt-6 sm:flex-row">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowUp className="size-3.5" /> Back to top
        </button>
      </div>
    </footer>
  );
}
