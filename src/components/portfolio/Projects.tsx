import { Reveal, SectionHeader } from "./Section";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "DevConnect",
    description:
      "A full-stack platform for developers to connect, share work, and collaborate in real time with chat and project feeds.",
    stack: ["React", "Node.js", "PostgreSQL", "WebSockets"],
    gradient: "from-violet-500/30 via-indigo-500/20 to-transparent",
    live: "#",
    code: "#",
  },
  {
    title: "TaskFlow",
    description:
      "Minimalist project management app focused on clarity and speed. Drag, drop, ship — without ceremony.",
    stack: ["React", "TypeScript", "Express", "MongoDB"],
    gradient: "from-emerald-500/25 via-teal-500/15 to-transparent",
    live: "#",
    code: "#",
  },
  {
    title: "ShopAPI",
    description:
      "A production-grade REST API for e-commerce: auth, products, carts, orders — clean architecture from the ground up.",
    stack: ["Node.js", "Express", "PostgreSQL", "JWT Auth"],
    gradient: "from-fuchsia-500/25 via-rose-500/15 to-transparent",
    live: "#",
    code: "#",
  },
  {
    title: "Portfolio v1",
    description:
      "My first personal site. Hand-built with vanilla web fundamentals — the starting point of this whole journey.",
    stack: ["HTML", "CSS", "JavaScript", "Responsive"],
    gradient: "from-amber-500/25 via-orange-500/15 to-transparent",
    live: "#",
    code: "#",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="relative mx-auto max-w-6xl px-6 py-24 md:py-32"
    >
      <SectionHeader
        eyebrow="Projects"
        title="Things I've Built"
        subtitle="A selection of projects that reflect my approach to development."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1}>
            <article className="card-elevated group h-full overflow-hidden transition-transform duration-300 hover:-translate-y-1">
              <div
                className={`relative aspect-video w-full overflow-hidden bg-linear-to-br ${p.gradient}`}
              >
                <div
                  className="absolute inset-0 grid-bg opacity-40"
                  aria-hidden
                />
                <div className="absolute inset-0 flex items-end justify-start p-6">
                  <span className="font-mono text-xs uppercase tracking-widest text-foreground/60">
                    /{p.title.toLowerCase()}
                  </span>
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/20 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[11px] font-medium text-accent"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-2">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    Live Demo <ExternalLink className="h-3 w-3" />
                  </a>
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    <Github className="h-3 w-3" /> GitHub
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
