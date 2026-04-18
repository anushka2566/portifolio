import {
  Code,
  Globe,
  Wrench,
  Database,
  Cpu,
  Bot,
  MonitorCog,
} from "lucide-react";
import { Reveal } from "../Reveal";

const groups = [
  { icon: Code, title: "Languages", items: ["Python", "Java", "C", "JavaScript"] },
  { icon: Globe, title: "Web", items: ["HTML", "CSS", "React", "Next.js"] },
  { icon: Wrench, title: "Frameworks & Tools", items: ["Flask", "Git", "VS Code"] },
  { icon: Database, title: "Databases", items: ["MongoDB", "SQL"] },
  { icon: Cpu, title: "Core Concepts", items: ["DSA", "OOP", "System Design"] },
  { icon: Bot, title: "AI Tools", items: ["n8n", "Lovable", "LLM APIs"] },
  { icon: MonitorCog, title: "Operating Systems", items: ["Windows", "Linux"] },
];

export const Skills = () => {
  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute inset-0 -z-10">
        <div className="blob h-[400px] w-[400px] left-1/4 top-1/3 bg-primary/20" />
      </div>

      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="text-center">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
              02 — skills
            </div>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              The <span className="text-gradient">tech stack</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              A mix of fundamentals, full-stack tooling and modern AI — picked for shipping,
              not for show.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 70}>
              <div className="glass-card group h-full p-6">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <g.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">{g.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-foreground/90 transition-colors hover:border-primary/50 hover:text-primary"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
