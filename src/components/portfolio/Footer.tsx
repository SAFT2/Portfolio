import { Github, Linkedin, Twitter } from "lucide-react";

const navLinks = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Footer() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <footer className="mx-auto max-w-6xl border-t border-border px-6 pb-10 pt-10">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <button
          onClick={() => go("hero")}
          className="font-display text-lg font-bold tracking-tight text-accent"
          aria-label="Back to top"
        >
          TS<span className="text-foreground">.</span>
        </button>
        <ul className="flex items-center gap-6">
          {navLinks.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className="text-sm text-muted-foreground transition-colors hover:text-accent"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          {[
            {
              Icon: Github,
              href: "https://github.com/tbarek",
              label: "GitHub",
            },
            {
              Icon: Linkedin,
              href: "https://linkedin.com/in/tbarek",
              label: "LinkedIn",
            },
            {
              Icon: Twitter,
              href: "https://twitter.com/tbarek",
              label: "Twitter",
            },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
      <div className="mt-6 flex flex-col items-center justify-between gap-2 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
        <p>© 2025 Tebarek Solomon. All rights reserved.</p>
        <p>Designed & Built by Tebarek Solomon</p>
      </div>
    </footer>
  );
}
