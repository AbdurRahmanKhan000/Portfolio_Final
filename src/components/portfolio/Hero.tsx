import { useEffect, useState } from "react";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "@tanstack/react-router";
import portrait from "@/assets/portrait.asset.json";
import { profile } from "@/content/portfolio";

function RoleRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % profile.roles.length),
      2600,
    );
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className="relative block h-[1.3em] overflow-hidden">
      {profile.roles.map((role, i) => (
        <span
          key={role}
          className="absolute inset-x-0 top-0 transition-all duration-500 ease-out"
          style={{
            opacity: i === index ? 1 : 0,
            transform: `translateY(${(i - index) * 100}%)`,
          }}
        >
          {role}
        </span>
      ))}
    </span>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="hero-gradient pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="grid-lines pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="reveal">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            <span className="size-1.5 animate-pulse rounded-full bg-primary" />
            {profile.location}
          </p>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>

          <p className="mt-5 font-display text-xl font-semibold text-primary sm:text-2xl">
            <RoleRotator />
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-glow"
            >
              <Mail className="size-4" />
              Get in touch
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors duration-300 hover:border-primary/50 hover:text-primary"
            >
              Explore projects
            </Link>
            <div className="flex items-center gap-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
                className="rounded-full border border-border p-3 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Github className="size-4" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                className="rounded-full border border-border p-3 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Linkedin className="size-4" />
              </a>
            </div>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4">
            {profile.stats.map((stat) => (
              <div key={stat.v}>
                <dt className="font-display text-2xl font-semibold text-foreground">{stat.k}</dt>
                <dd className="mt-1 text-xs leading-snug text-muted-foreground">{stat.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="reveal flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-6 rounded-full bg-primary/10 blur-2xl" aria-hidden />
            <div className="relative size-60 overflow-hidden rounded-full border border-border shadow-elevate ring-1 ring-primary/25 sm:size-72 lg:size-80">
              <img
                src={portrait.url}
                alt={`Portrait of ${profile.name}`}
                width={620}
                height={778}
                loading="eager"
                decoding="async"
                // @ts-expect-error fetchpriority is valid HTML
                fetchpriority="high"
                className="size-full scale-[1.06] object-cover object-[50%_18%]"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
