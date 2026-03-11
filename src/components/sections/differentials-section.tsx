import { HeartHandshake, Sparkles, Stethoscope } from "lucide-react";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/sections/section-heading";
import { highlights } from "@/data/content";

const icons = [HeartHandshake, Stethoscope, Sparkles];

export function DifferentialsSection() {
  return (
    <section className="py-20">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Diferenciais"
          title="Uma experiência pensada para gerar confiança desde o primeiro contato"
          description="A proposta da clínica combina acolhimento real, organização e visão multidisciplinar para tornar o tratamento mais fluido."
          align="center"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = icons[index];
            return (
              <article
                key={item.title}
                className="rounded-[2rem] border border-[var(--border)] bg-white p-8 shadow-sm transition-transform hover:-translate-y-1"
              >
                <div className="inline-flex rounded-2xl bg-[var(--secondary)] p-3 text-[var(--primary)]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-[var(--foreground)]">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[var(--muted-foreground)]">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
