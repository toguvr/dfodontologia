import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/sections/section-heading";
import { Button } from "@/components/ui/button";
import { services } from "@/data/content";

type ServicesSectionProps = {
  compact?: boolean;
};

export function ServicesSection({ compact = false }: ServicesSectionProps) {
  const displayed = compact ? services.slice(0, 6) : services;

  return (
    <section className="py-20" id="servicos">
      <Container className="space-y-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Serviços"
            title="Tratamentos para diferentes fases do cuidado odontológico"
            description="A clínica atua com prevenção, estética, reabilitação oral e acompanhamento multidisciplinar."
          />
          {compact ? (
            <Button asChild variant="secondary">
              <Link href="/servicos">Ver todos os serviços</Link>
            </Button>
          ) : null}
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {displayed.map((service) => (
            <article
              key={service.slug}
              className="group rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-[var(--secondary)] p-3">
                  <Image
                    src={service.image}
                    alt={`Ilustração do serviço ${service.title}`}
                    fill
                    className="object-contain p-3"
                    sizes="64px"
                  />
                </div>
                <ArrowUpRight className="h-5 w-5 text-[var(--primary)] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-[var(--foreground)]">
                {service.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-[var(--muted-foreground)]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
