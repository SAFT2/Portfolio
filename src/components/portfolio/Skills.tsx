import { Reveal, SectionHeader } from "./Section";
import { Layout, Server, Database, Wrench } from "lucide-react";

const groups = [
  {
    icon: Layout,
    title: "Frontend",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Design",
    ],
  },
  {
    icon: Server,
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "JWT / OAuth",
      "WebSockets",
      "API Design",
    ],
  },
  {
    icon: Database,
    title: "Databases",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Prisma ORM",
      "Database Design",
      "Query Optimization",
    ],
  },
  {
    icon: Wrench,
    title: "Tools & DevOps",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Docker",
      "Vercel",
      "Netlify",
      "Linux",
      "Figma",
      "Postman",
      "CI/CD",
    ],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="relative mx-auto max-w-6xl px-6 py-24 md:py-32"
    >
      <SectionHeader
        eyebrow="Skills"
        title="The Tools I Use to Build"
        subtitle="A curated stack — chosen for reliability, performance, and craft."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.08}>
            <div className="card-elevated h-full p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-accent">
                  <g.icon className="h-4 w-4" />
                </div>
                <h3 className="font-display text-base font-semibold">
                  {g.title}
                </h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-background px-2.5 py-1 text-[11px] text-muted-foreground transition-all duration-200 hover:scale-[1.05] hover:border-accent/50 hover:bg-accent/10 hover:text-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
