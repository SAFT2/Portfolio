import { Reveal, SectionHeader } from "./Section";
import { Monitor, Server, Database, Check } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Frontend Development",
    desc: "Pixel-perfect, responsive web interfaces built with React and modern CSS. Fast, accessible, and built to last.",
    features: [
      "Responsive Design",
      "Component Architecture",
      "Performance Optimization",
      "Accessibility",
      "Cross-browser Compatibility",
    ],
  },
  {
    icon: Server,
    title: "Backend Development",
    desc: "Robust server-side systems, REST APIs, and business logic built with Node.js and Express. Scalable architecture, clean code.",
    features: [
      "API Design",
      "Authentication & Authorization",
      "Data Modeling",
      "Error Handling",
      "Documentation",
    ],
  },
  {
    icon: Database,
    title: "Database Engineering",
    desc: "Thoughtful database design and management using PostgreSQL and MongoDB. Optimized queries, clean schemas, reliable data layers.",
    features: [
      "Schema Design",
      "Query Optimization",
      "Migrations",
      "Data Integrity",
      "ORM Integration",
    ],
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative mx-auto max-w-6xl px-6 py-24 md:py-32"
    >
      <SectionHeader
        eyebrow="Services"
        title="What I Can Build For You"
        subtitle="End-to-end web development — from idea to deployment."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.1}>
            <div className="card-elevated relative h-full p-6 pt-7 transition-transform duration-300 hover:scale-[1.01]">
              <span className="absolute inset-x-0 top-0 h-[3px] rounded-t-xl bg-gradient-to-r from-accent via-accent/70 to-transparent" />
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-accent">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
              <ul className="mt-5 space-y-2">
                {s.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
