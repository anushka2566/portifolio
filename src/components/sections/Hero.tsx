import { ArrowRight, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Typewriter } from "./Typewriter";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24"
    >
      {/* Background blobs */}
      <div className="blob h-[500px] w-[500px] -left-40 top-20 bg-primary/40" />
      <div className="blob h-[600px] w-[600px] -right-40 bottom-0 bg-secondary/40" />
      <div className="absolute inset-0 grid-pattern opacity-40" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <div
          className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-md animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Available for opportunities · 2026
        </div>

        <h1
          className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Bonam Maruthi
          <br />
          <span className="text-gradient">Anushka</span>
        </h1>

        <p
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl animate-fade-up"
          style={{ animationDelay: "0.35s" }}
        >
          Building intelligent systems that solve{" "}
          <span className="text-foreground">real-world problems.</span>
        </p>

        <div
          className="mt-8 flex items-center justify-center gap-2 font-mono text-sm text-primary animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          <Sparkles className="h-4 w-4" />
          <span className="text-muted-foreground">{">"}</span>
          <Typewriter
            words={["AI Developer", "Full-Stack Engineer", "Problem Solver", "ML Researcher"]}
          />
        </div>

        <div
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row animate-fade-up"
          style={{ animationDelay: "0.65s" }}
        >
          <Button asChild variant="hero" size="lg" className="group">
            <a href="#projects">
              View Projects
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button asChild variant="glass" size="lg">
            <a href="#contact">Contact Me</a>
          </Button>
          <Button asChild variant="ghost" size="lg" className="text-muted-foreground">
            <a href="#about">
              <Download className="mr-1 h-4 w-4" />
              Resume
            </a>
          </Button>
        </div>

        {/* Stats */}
        <div
          className="mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4 animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          {[
            { v: "150+", l: "LeetCode Problems" },
            { v: "6+", l: "Certifications" },
            { v: "3+", l: "Live Projects" },
            { v: "2nd", l: "Gen AI Hackathon" },
          ].map((s) => (
            <div key={s.l} className="glass-card p-5 text-center">
              <div className="font-display text-2xl font-bold text-gradient sm:text-3xl">
                {s.v}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-float">
        <div className="flex h-9 w-6 items-start justify-center rounded-full border border-border p-1.5">
          <div className="h-2 w-1 rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
};
