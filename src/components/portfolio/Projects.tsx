import { Reveal, SectionHeader } from "./Section";
import { ExternalLink, Github } from "lucide-react";
import internshipReadinessImg from "@/assets/projects/internshipreadiness.png";
import nardisBeautyImg from "@/assets/projects/nardisbeauty.png";
import financeManagementImg from "@/assets/projects/financemanagement.png";
import pcicDashboardImg from "@/assets/projects/PCICdashboard.png";
import tebaMartImg from "@/assets/projects/tebamart.png";
import digitalClearanceImg from "@/assets/projects/digitalclearance.png";

const projects = [
  {
    title: "Internship Readiness Assessment and Recommendation Platform",
    description:
      "A platform that helps students prepare for internships with structured resources and guided practice.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    gradient: "from-violet-500/30 via-indigo-500/20 to-transparent",
    live: "https://internship-readiness-platform.vercel.app/",
    image: internshipReadinessImg,
  },
  {
    title: "TebaMart",
    description:
      "Full-featured e-commerce platform with catalog, cart, and checkout workflows.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    gradient: "from-emerald-500/25 via-teal-500/15 to-transparent",
    status: "Not deployed",
    image: tebaMartImg,
  },
  {
    title: "PCIC Management System",
    description:
      "Management system for PCIC operations and workflows with a production-ready deployment.",
    stack: ["React", "Node.js", "PostgreSQL", "Role-based Access"],
    gradient: "from-fuchsia-500/25 via-rose-500/15 to-transparent",
    live: "https://pcic.tech",
    image: pcicDashboardImg,
  },
  {
    title: "Digital Clearance System",
    description:
      "A Java-based digital clearance system that streamlines approval and clearance workflows.",
    stack: ["Java", "Spring", "MySQL", "REST API"],
    gradient: "from-amber-500/25 via-orange-500/15 to-transparent",
    status: "Not deployed",
    image: digitalClearanceImg,
  },
  {
    title: "Personal Finance Management",
    description:
      "Personal finance tracker for budgeting, income, and expenses with a clean UX.",
    stack: ["React", "TypeScript", "Netlify", "Charting"],
    gradient: "from-sky-500/25 via-cyan-500/15 to-transparent",
    live: "https://financemanaget.netlify.app/",
    image: financeManagementImg,
  },
  {
    title: "Nardis Beauty Shop",
    description:
      "Beauty shop storefront with product highlights and brand-focused presentation.",
    stack: ["React", "Tailwind CSS", "Netlify"],
    gradient: "from-rose-500/25 via-pink-500/15 to-transparent",
    live: "https://nardos-beauty.netlify.app/",
    image: nardisBeautyImg,
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
              {p.image ? (
                <div
                  className={`relative aspect-video w-full overflow-hidden bg-linear-to-br ${p.gradient}`}
                >
                  <img
                    src={p.image}
                    alt={`${p.title} preview`}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 grid-bg opacity-40"
                    aria-hidden
                  />
                  <div className="absolute inset-0 flex items-end justify-start p-6">
                    <span className="font-mono text-xs uppercase tracking-widest text-foreground/80">
                      /{p.title.toLowerCase()}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-linear-to-t from-card via-card/30 to-transparent" />
                </div>
              ) : null}
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
                  {p.live ? (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                    >
                      Live Demo <ExternalLink className="h-3 w-3" />
                    </a>
                  ) : null}
                  {p.code ? (
                    <a
                      href={p.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                    >
                      <Github className="h-3 w-3" /> GitHub
                    </a>
                  ) : null}
                  {!p.live && !p.code && p.status ? (
                    <span className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground">
                      {p.status}
                    </span>
                  ) : null}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
