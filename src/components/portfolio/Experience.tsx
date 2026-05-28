import { Reveal, SectionHeader } from "./Section";

const items = [
  {
    date: "2024 — Present",
    title: "Freelance Web Developer",
    body: "Building full-stack web applications for clients. Focused on clean, maintainable code and delivery excellence.",
  },
  {
    date: "2023",
    title: "Self-Directed Learning — Advanced Stack",
    body: "Deepened expertise in TypeScript, PostgreSQL, REST API design, and modern React patterns. Built multiple personal projects.",
  },
  {
    date: "2022",
    title: "Started Web Development Journey",
    body: "First lines of HTML/CSS. Immediately hooked. Built first projects, learned JavaScript, fell in love with the craft.",
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="relative mx-auto max-w-6xl px-6 py-24 md:py-32"
    >
      <SectionHeader
        eyebrow="Experience"
        title="My Journey So Far"
        subtitle="Every step forward has been intentional."
      />

      <div className="relative mt-16">
        <div className="absolute bottom-0 left-4 top-0 w-px bg-linear-to-b from-accent/40 via-accent/20 to-transparent md:left-1/2 md:-translate-x-1/2" />

        <ol className="space-y-12">
          {items.map((it, i) => {
            const right = i % 2 === 1;
            return (
              <li key={it.title} className="relative">
                <span className="absolute left-4 top-4 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-accent ring-4 ring-background md:left-1/2" />
                <div className="pl-12 md:grid md:grid-cols-2 md:gap-12 md:pl-0">
                  <Reveal
                    className={
                      right ? "md:col-start-2" : "md:col-start-1 md:text-right"
                    }
                  >
                    <div
                      className={`card-elevated inline-block w-full p-6 text-left ${
                        right ? "" : "md:text-right"
                      }`}
                    >
                      <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-accent">
                        {it.date}
                      </span>
                      <h3 className="mt-3 font-display text-lg font-semibold">
                        {it.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {it.body}
                      </p>
                    </div>
                  </Reveal>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
