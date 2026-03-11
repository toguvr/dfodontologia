import Image from "next/image";
import { Quote } from "lucide-react";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/sections/section-heading";
import { testimonials } from "@/data/content";

export function TestimonialsSection() {
  return (
    <section className="py-20">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Depoimentos"
          title="Percepções de pacientes sobre acolhimento, confiança e experiência"
          description="Os relatos foram reescritos a partir do conteúdo institucional atual, preservando o sentido das experiências apresentadas no site anterior."
          align="center"
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.quote}
              className="rounded-[2rem] border border-[var(--border)] bg-white p-8 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-full border border-[var(--border)]">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.alt}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--foreground)]">
                    {testimonial.author}
                  </p>
                </div>
                <Quote className="ml-auto h-8 w-8 text-[var(--primary)]" />
              </div>
              <p className="mt-6 text-base leading-8 text-[var(--muted-foreground)]">
                {testimonial.quote}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
