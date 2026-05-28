import { motion, type Variants } from "motion/react";
import { ArrowDown, ArrowRight } from "lucide-react";

export function Hero() {
  const item: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
        delay: 0.2 + i * 0.15,
      },
    }),
  };

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden hero-radial"
      aria-label="Introduction"
    >
      <div
        className="pointer-events-none absolute inset-0 grid-bg opacity-60"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-105 w-105 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.66 0.18 285 / 0.25), transparent 70%)",
        }}
        aria-hidden
      />

      <div className="mx-auto w-full max-w-6xl px-6 pt-32 pb-24 md:pt-40">
        <div className="max-w-3xl">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-medium tracking-wide text-muted-foreground">
              Available for Work
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={item}
            className="mt-6 font-display font-bold leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2.6rem, 6vw, 5rem)" }}
          >
            Tebarek{" "}
            <span className="bg-linear-to-r from-accent to-foreground bg-clip-text text-transparent">
              Solomon
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={item}
            className="mt-5 font-display text-lg font-medium text-accent md:text-xl"
          >
            Web Developer
          </motion.p>

          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={item}
            className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-[1.1rem]"
          >
            I craft clean, performant web applications with a relentless focus
            on quality, precision, and developer craft. From pixel-perfect
            frontends to robust backend systems — I build things that work
            beautifully.
          </motion.p>

          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() => scrollTo("projects")}
              className="group inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-all duration-200 hover:scale-[1.02] hover:brightness-110"
            >
              View My Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 rounded-lg border border-accent/60 px-5 py-3 text-sm font-medium text-accent transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
            >
              Contact Me
            </button>
          </motion.div>
        </div>
      </div>

      <button
        onClick={() => scrollTo("about")}
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground/60 transition-colors hover:text-accent"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </button>
    </section>
  );
}
