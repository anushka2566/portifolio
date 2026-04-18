import { BookOpen, FlaskConical } from "lucide-react";
import { Reveal } from "../Reveal";

export const Research = () => {
  return (
    <section id="research" className="section-padding relative">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="text-center">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
              05 — research
            </div>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              Research in <span className="text-gradient">progress</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <article className="glass-card mt-12 overflow-hidden p-8 md:p-12">
            <div className="flex flex-col items-start gap-6 md:flex-row">
              <div className="grid h-14 w-14 flex-shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary/30 to-secondary/30 text-primary">
                <FlaskConical className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Working paper · Computer Science · LLMs in Education
                </div>
                <h3 className="mt-3 font-display text-2xl font-bold leading-snug md:text-3xl">
                  Application of Large Language Models for Language Teaching and
                  Assessment Technology
                </h3>
                <p className="mt-4 text-muted-foreground">
                  Investigating how modern LLMs can power adaptive language learning,
                  automated assessment and personalised feedback systems — bridging NLP
                  research with practical classroom impact.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {["LLMs", "NLP", "EdTech", "Assessment", "Pedagogy"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-foreground/90"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-sm text-primary">
                  <BookOpen className="h-4 w-4" />
                  Status: in progress
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
};
