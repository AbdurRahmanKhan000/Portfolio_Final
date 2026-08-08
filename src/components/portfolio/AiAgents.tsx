import { Bot } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { aiAgents } from "@/content/portfolio";

const total = aiAgents.reduce((sum, g) => sum + g.items.length, 0);

export function AiAgents() {
  return (
    <section className="border-t border-border/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="AI Agents"
          title={`${total}+ AI agents in my workflow`}
          description="Over 20 to 25 different AI agents and assistants used across coding, research, automation, media and local-first inference."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {aiAgents.map((group, i) => (
            <div
              key={group.title}
              className="reveal rounded-2xl border border-border bg-surface/50 p-7 transition-all duration-300 hover:border-primary/40 hover:bg-surface"
              style={{ transitionDelay: `${(i % 2) * 80}ms` }}
            >
              <div className="flex items-center gap-2.5">
                <Bot className="size-4 text-primary" />
                <h3 className="font-display text-lg font-semibold">{group.title}</h3>
                <span className="ml-auto font-mono text-xs text-muted-foreground">
                  {group.items.length}
                </span>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border/70 bg-background/40 px-3 py-1.5 text-[13px] text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
