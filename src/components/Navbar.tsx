import { useEffect, useState } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#research", label: "Research" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
          scrolled ? "glass shadow-card" : ""
        }`}
        style={scrolled ? undefined : { background: "transparent" }}
      >
        <a href="#home" className="font-display text-lg font-bold tracking-tight">
          <span className="text-gradient">BMA</span>
          <span className="text-foreground/60">.dev</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-all hover:bg-muted hover:text-primary"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-all hover:bg-muted hover:text-primary"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <Button asChild variant="hero" size="sm">
            <a href="#contact">Let's Talk</a>
          </Button>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-full md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="mx-auto mt-2 max-w-6xl px-4 md:hidden">
          <div className="glass-card animate-fade-in p-4">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex gap-2 border-t border-border pt-3">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="flex-1 rounded-lg bg-muted px-3 py-2 text-center text-sm">
                GitHub
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="flex-1 rounded-lg bg-muted px-3 py-2 text-center text-sm">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
