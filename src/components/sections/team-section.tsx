import Image from "next/image";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/sections/section-heading";
import { team } from "@/data/content";

export function TeamSection() {
  return (
    <section className="py-20" id="equipe">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Equipe"
          title="Sócias que conduzem o atendimento com proximidade e atenção aos detalhes"
          description="A clínica foi fundada por duas cirurgiãs-dentistas comprometidas com uma experiência mais acolhedora e segura."
          align="center"
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {team.map((member) => (
            <article
              key={member.name}
              className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-white shadow-sm"
            >
              <div className="grid gap-0 sm:grid-cols-[0.9fr_1.1fr]">
                <div className="relative min-h-[360px]">
                  <Image
                    src={member.image}
                    alt={member.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 420px"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 sm:p-10">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">
                    {member.role}
                  </p>
                  <h3 className="mt-3 font-display text-4xl text-[var(--foreground)]">
                    {member.name}
                  </h3>
                  <p className="mt-5 text-base leading-7 text-[var(--muted-foreground)]">
                    {member.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
