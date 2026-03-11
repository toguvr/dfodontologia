import { CheckCircle2 } from "lucide-react";

import { Container } from "@/components/layout/container";
import { about } from "@/data/content";
import { SectionHeading } from "@/components/sections/section-heading";

export function AboutSection() {
  return (
    <section className="py-20">
      <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <SectionHeading
          eyebrow="Sobre a clínica"
          title={about.title}
          description={about.lead}
        />
        <div className="space-y-6">
          {about.body.map((paragraph) => (
            <p key={paragraph} className="text-lg leading-8 text-[var(--muted-foreground)]">
              {paragraph}
            </p>
          ))}
          <div className="rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 h-5 w-5 text-[var(--primary)]" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">
                  Propósito
                </p>
                <p className="mt-3 text-base leading-7 text-[var(--muted-foreground)]">
                  {about.mission}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
