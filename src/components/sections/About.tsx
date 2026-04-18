import { Code2, Brain, Rocket } from "lucide-react";
import { Reveal } from "../Reveal";
import portrait from "@/assets/anushka-portrait.jpg";

const highlights = [
  {
    icon: Code2,
    title: "Engineering Foundations",
    text: "Strong command of DSA, OOP and software design — 150+ LeetCode problems solved.",
  },
  {
    icon: Brain,
    title: "AI / ML Builder",
    text: "Hands-on with Python ML workflows, LLM applications and intelligent automation.",
  },
  {
    icon: Rocket,
    title: "Ships Real Products",
    text: "Full-stack apps used by real users — from job marketplaces to community platforms.",
  },
];

export const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left — portrait card */}
          <Reveal className="lg:col-span-2">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/30 to-secondary/30 blur-2xl" />
              <div className="glass-card relative aspect-[4/5] overflow-hidden p-1">
                <div className="relative h-full w-full overflow-hidden rounded-[calc(var(--radius)-4px)]">
                  <img
                    src={portrait}
                    alt="Bonam Maruthi Anushka — portrait"
                    className="h-full w-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right — content */}
          <div className="lg:col-span-3">
            <Reveal>
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                01 — about
              </div>
              <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
                Curious by nature.{" "}
                <span className="text-gradient">Engineer by craft.</span>
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                I'm a Computer Science undergraduate with a strong foundation in{" "}
                <span className="text-foreground">Data Structures, Algorithms</span> and{" "}
                <span className="text-foreground">Object-Oriented Programming</span>. I build
                AI-driven, full-stack applications using Python, Flask, React and modern web
                technologies — turning ideas into systems that ship and scale.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                I'm passionate about applying machine learning and LLMs to solve problems
                people actually face — whether it's matching workers to jobs, streamlining
                academic workflows, or building communities online.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {highlights.map((h, i) => (
                <Reveal key={h.title} delay={280 + i * 80}>
                  <div className="glass-card h-full p-5">
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary">
                      <h.icon className="h-5 w-5" />
                    </div>
                    <div className="font-display font-semibold">{h.title}</div>
                    <p className="mt-1 text-sm text-muted-foreground">{h.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
