import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/sections/section-heading";
import { journey } from "@/data/content";

export function JourneySection() {
  return (
    <section className="py-20">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Como funciona"
          title="Uma jornada simples, clara e pensada para reduzir ansiedade"
          description="Do primeiro contato ao acompanhamento, o atendimento foi desenhado para ser mais fluido e acolhedor."
          align="center"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {journey.map((item) => (
            <article
              key={item.step}
              className="rounded-[2rem] border border-[var(--border)] bg-[var(--secondary)] p-8"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">
                {item.step}
              </p>
              <p className="mt-5 text-lg leading-8 text-[var(--foreground)]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
