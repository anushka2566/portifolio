import { Briefcase, Trophy, Code2, Award, ExternalLink } from "lucide-react";
import { Reveal } from "../Reveal";

const certifications = [
  { title: "Data Processing & Visualization", org: "Accenture" },
  { title: "Data Processing & Visualization (Gold)", org: "NASSCOM" },
  { title: "Google Cloud Generative AI", org: "Google Cloud" },
  { title: "Foundations in Generative AI", org: "IBM" },
  { title: "Azure Fundamentals", org: "Microsoft / Skillsoft" },
];

export const Experience = () => {
  return (
    <section id="experience" className="section-padding relative">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            04 — experience & wins
          </div>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            A track record of <span className="text-gradient">building & winning.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Experience */}
          <Reveal>
            <div className="glass-card h-full p-7">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary">
                  <Briefcase className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-semibold">Experience</h3>
              </div>

              <div className="mt-6 border-l-2 border-primary/30 pl-5">
                <div className="font-mono text-xs text-muted-foreground">
                  Jan 2026 — Apr 2026
                </div>
                <h4 className="mt-1 font-display text-lg font-semibold">
                  Python with AI & ML Intern
                </h4>
                <div className="text-sm text-primary">
                  Next Chapter · in collaboration with Wipro
                </div>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                    Applied AI/ML concepts to build and experiment with ML models in Python.
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                    Implemented practical solutions for real-world problems, following industry workflows.
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Achievement + Coding */}
          <Reveal delay={100}>
            <div className="grid h-full gap-6">
              <div className="glass-card p-7">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20 text-secondary">
                    <Trophy className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">Achievement</h3>
                </div>
                <div className="mt-4 rounded-xl border border-secondary/20 bg-secondary/5 p-4">
                  <div className="font-display text-lg font-semibold">
                    🥈 2nd Place — Gen AI Hackathon
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Conducted by Next Chapter
                  </div>
                </div>
              </div>

              <div className="glass-card p-7">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">Coding Profile</h3>
                </div>
                <a
                  href="https://leetcode.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 flex items-center justify-between rounded-xl border border-border bg-muted/40 p-4 transition-colors hover:border-primary/50"
                >
                  <div>
                    <div className="font-display text-lg font-semibold">LeetCode</div>
                    <div className="text-sm text-muted-foreground">150+ problems solved</div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Certifications */}
        <Reveal>
          <div className="mt-8 glass-card p-7">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 text-accent">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl font-semibold">Certifications</h3>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {certifications.map((c) => (
                <div
                  key={c.title}
                  className="rounded-xl border border-border bg-muted/30 p-4 transition-all hover:border-primary/40 hover:bg-muted/60"
                >
                  <div className="font-medium text-foreground">{c.title}</div>
                  <div className="mt-0.5 text-xs text-muted-foreground">{c.org}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
