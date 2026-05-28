import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      let current = "about";
      for (const link of links) {
        const el = document.getElementById(link.id);
        if (el && el.getBoundingClientRect().top < 120) current = link.id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/70 bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
        aria-label="Primary"
      >
        <button
          onClick={() => go("hero")}
          className="font-display text-lg font-bold tracking-tight text-accent"
          aria-label="Home"
        >
          TS<span className="text-foreground">.</span>
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className={`group relative rounded-md px-3 py-2 text-sm transition-colors ${
                  active === l.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-px origin-left bg-accent transition-transform duration-300 ${
                    active === l.id
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-foreground md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden border-t border-border/70 bg-background/95 backdrop-blur-xl md:hidden ${
          open ? "max-h-96" : "max-h-0"
        } transition-[max-height] duration-300 ease-out`}
      >
        <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className="w-full rounded-md px-3 py-3 text-left text-sm text-muted-foreground transition-colors hover:bg-card hover:text-foreground"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
