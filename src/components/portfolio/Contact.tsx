import { Reveal, SectionHeader } from "./Section";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto max-w-6xl px-6 py-24 md:py-32"
    >
      <SectionHeader
        eyebrow="Contact"
        title="Let's Build Something Together"
        subtitle="Have a project in mind, or just want to connect? I'm always open."
        align="center"
      />

      <div className="mt-14 mx-auto max-w-xl text-center">
        <Reveal>
          <p className="text-[1.05rem] leading-relaxed text-muted-foreground">
            I'm currently available for freelance projects and open to new
            opportunities. Whether it's a new build, a collaboration, or just a
            conversation — reach out.
          </p>

          <ul className="mt-8 space-y-4 text-left">
            <li>
              <a
                href="mailto:tebarek@example.com"
                className="group flex items-center gap-3 text-sm text-foreground transition-colors hover:text-accent"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-accent">
                  <Mail className="h-4 w-4" />
                </span>
                Tebareksolomon6@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://github.com/SAFT2"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-foreground transition-colors hover:text-accent"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-accent">
                  <Github className="h-4 w-4" />
                </span>
                Github.com/SAFT2
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/tebarek-solomon-953278368/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-foreground transition-colors hover:text-accent"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-accent">
                  <Linkedin className="h-4 w-4" />
                </span>
                Linkedin.com/in/tebarek-solomon
              </a>
            </li>
          </ul>

          <div className="mt-8 flex items-center justify-center gap-3">
            {[
              {
                Icon: Github,
                href: "https://github.com/SAFT2",
                label: "GitHub",
              },
              {
                Icon: Linkedin,
                href: "https://www.linkedin.com/in/tebarek-solomon-953278368/",
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
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all duration-200 hover:border-accent hover:bg-accent hover:text-accent-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
