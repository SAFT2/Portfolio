import { Reveal, SectionHeader } from "./Section";
import profilePhoto from "@/assets/PXL_20260315_160133025.jpg";

const values = ["Clean Code", "Performance", "Precision", "Growth Mindset"];
const stats = [
  { value: "3+", label: "Years Coding" },
  { value: "10+", label: "Projects Built" },
  { value: "∞", label: "Always Learning" },
];

export function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-6xl px-6 py-24 md:py-32"
    >
      <div className="grid items-start gap-16 lg:grid-cols-2">
        <div>
          <SectionHeader
            eyebrow="About Me"
            title="A Developer Who Cares About the Details"
          />
          <Reveal
            delay={0.1}
            className="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-muted-foreground"
          >
            <p>
              I found web development the way most good things start —
              accidentally, then obsessively. What began as curiosity quickly
              became a craft I take seriously every single day.
            </p>
            <p>
              What drives me is the problem itself: untangling complexity,
              shaping clean abstractions, and building products that genuinely
              work. I get a quiet satisfaction from code that reads as clearly
              as it runs.
            </p>
            <p>
              My approach values simplicity, performance, and maintainability.
              Great software is invisible — you don't notice it, you just feel
              the result. That's the bar I build to.
            </p>
            <p>
              I'm always learning, always sharpening, always building toward
              mastery — because the best version of this work is still ahead.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mt-8 flex flex-wrap gap-2">
            {values.map((v) => (
              <span
                key={v}
                className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground"
              >
                {v}
              </span>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="card-elevated relative overflow-hidden p-6">
            <div
              className="absolute inset-0 opacity-40"
              style={{
                background:
                  "radial-gradient(circle at 80% 0%, oklch(0.66 0.18 285 / 0.25), transparent 60%)",
              }}
              aria-hidden
            />
            <div className="relative">
              <div className="flex aspect-square w-full items-center justify-center rounded-lg border border-border bg-background overflow-hidden">
                <img
                  src={profilePhoto}
                  alt="Tebarek Solomon — Web Developer"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  width={1024}
                  height={1024}
                />
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-lg border border-border bg-background p-4 text-center"
                  >
                    <div className="font-display text-2xl font-bold text-accent">
                      {s.value}
                    </div>
                    <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
