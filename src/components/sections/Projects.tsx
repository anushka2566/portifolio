import { ArrowUpRight, Sparkles, GraduationCap, Users2 } from "lucide-react";
import { Reveal } from "../Reveal";

const projects = [
  {
    title: "Kaamsetu",
    subtitle: "AI-Powered Service Marketplace",
    icon: Sparkles,
    accent: "from-primary/30 to-secondary/30",
    description:
      "A real-world job-matching platform connecting service providers with customers using intelligent matching, in-app chat, and role-based dashboards.",
    features: [
      "AI-driven worker–customer matching",
      "Real-time chat & notifications",
      "Role-based dashboards (worker / customer / admin)",
      "Secure authentication & session management",
    ],
    impact: "Used by 10+ pilot users (7 workers, 3 customers) for live job matching.",
    stack: ["React", "Next.js", "Supabase", "AI"],
  },
  {
    title: "Assignment Hub",
    subtitle: "AI-Assisted Academic Workflow",
    icon: GraduationCap,
    accent: "from-secondary/30 to-accent/30",
    description:
      "A full-stack assignment management system with structured grading workflows and AI-assisted feedback to make evaluation faster and fairer.",
    features: [
      "End-to-end auth & submission flow",
      "Structured grading workflow",
      "AI-assisted feedback generation",
      "Faculty & student dashboards",
    ],
    impact: "Cuts grading time and improves the quality of feedback at scale.",
    stack: ["Python", "Flask", "MongoDB"],
  },
  {
    title: "GDG Community Website",
    subtitle: "Events · Posts · Discussions",
    icon: Users2,
    accent: "from-accent/30 to-primary/30",
    description:
      "A community platform built for the Google Developer Group to manage events, member posts and dynamic discussions in one place.",
    features: [
      "Event management & RSVPs",
      "Member posts & content sharing",
      "Dynamic discussion threads",
      "Admin moderation tools",
    ],
    impact: "Centralised the community experience for active GDG members.",
    stack: ["Flask", "MongoDB", "JavaScript"],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="section-padding relative">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                03 — selected work
              </div>
              <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
                Projects that <span className="text-gradient">shipped.</span>
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Three products combining AI, full-stack engineering and real users. Built end-to-end.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 space-y-8">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <article className="glass-card group relative overflow-hidden p-6 md:p-10">
                {/* Hover glow */}
                <div
                  className={`pointer-events-none absolute -inset-1 -z-0 bg-gradient-to-br ${p.accent} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-60`}
                />

                <div className="relative grid gap-8 lg:grid-cols-12">
                  {/* Left meta */}
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-3">
                      <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-secondary/30 text-primary">
                        <p.icon className="h-5 w-5" />
                      </div>
                      <div className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                        Project 0{i + 1}
                      </div>
                    </div>

                    <h3 className="mt-5 font-display text-3xl font-bold leading-tight">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm text-primary/90">{p.subtitle}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 font-mono text-[11px] text-primary"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <a
                      href="#contact"
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
                    >
                      Request case study
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>

                  {/* Right details */}
                  <div className="lg:col-span-8">
                    <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                      {p.description}
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {p.features.map((f) => (
                        <div
                          key={f}
                          className="flex items-start gap-2 rounded-xl border border-border/60 bg-muted/30 p-3 text-sm"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                          <span className="text-foreground/90">{f}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-4">
                      <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                        Impact
                      </div>
                      <p className="mt-1 text-sm text-foreground/90">{p.impact}</p>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
