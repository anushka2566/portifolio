import { useState } from "react";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Globe, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Reveal } from "../Reveal";

const contactItems = [
  { icon: Mail, label: "Email", value: "maruthianushkabonam@gmail.com", href: "mailto:maruthianushkabonam@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 8106012566", href: "tel:+918106012566" },
  { icon: MapPin, label: "Based in", value: "Visakhapatnam, India", href: undefined },
];

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/" },
  { icon: Github, label: "GitHub", href: "https://github.com/" },
  { icon: Code2, label: "LeetCode", href: "https://leetcode.com/" },
  { icon: Globe, label: "Portfolio", href: "#home" },
];

export const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Message sent ✨",
        description: "Thanks for reaching out — I'll get back to you shortly.",
      });
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 -z-10">
        <div className="blob h-[500px] w-[500px] left-1/3 top-0 bg-secondary/30" />
        <div className="blob h-[400px] w-[400px] right-1/4 bottom-0 bg-primary/30" />
      </div>

      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="text-center">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
              06 — contact
            </div>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              Let's build something <span className="text-gradient">brilliant.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Open to internships, collaborations and research opportunities. Drop a
              message — I usually reply within a day.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Info side */}
          <Reveal className="lg:col-span-2">
            <div className="glass-card flex h-full flex-col p-8">
              <h3 className="font-display text-xl font-semibold">Reach me directly</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Prefer DMs or email? Pick your poison.
              </p>

              <div className="mt-8 space-y-4">
                {contactItems.map((c) => {
                  const inner = (
                    <div className="flex items-start gap-3 rounded-xl border border-border/60 bg-muted/30 p-3 transition-all hover:border-primary/40 hover:bg-muted/60">
                      <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 text-primary">
                        <c.icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs text-muted-foreground">{c.label}</div>
                        <div className="truncate text-sm font-medium text-foreground">
                          {c.value}
                        </div>
                      </div>
                    </div>
                  );
                  return c.href ? (
                    <a key={c.label} href={c.href}>{inner}</a>
                  ) : (
                    <div key={c.label}>{inner}</div>
                  );
                })}
              </div>

              <div className="mt-auto pt-8">
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Find me on
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.href.startsWith("#") ? undefined : "_blank"}
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-3 py-1.5 text-xs font-medium transition-all hover:border-primary/50 hover:text-primary"
                    >
                      <s.icon className="h-3.5 w-3.5" />
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card space-y-5 p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" required placeholder="Your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required placeholder="you@domain.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" name="subject" required placeholder="What's this about?" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me a little about the project, role, or idea…"
                />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={submitting}>
                {submitting ? "Sending..." : (
                  <>
                    Send message
                    <Send className="ml-1 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </Reveal>
        </div>

        <Reveal>
          <footer className="mt-20 flex flex-col items-center justify-between gap-3 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
            <div>© {new Date().getFullYear()} Bonam Maruthi Anushka. Crafted with care.</div>
            <div className="font-mono text-xs">
              {"<"} built with React + Tailwind {"/>"}
            </div>
          </footer>
        </Reveal>
      </div>
    </section>
  );
};
