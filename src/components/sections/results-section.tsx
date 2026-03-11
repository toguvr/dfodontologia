import Image from "next/image";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/sections/section-heading";
import { results } from "@/data/content";

export function ResultsSection() {
  return (
    <section className="py-20">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Resultados"
          title="Casos visuais apresentados com mais contexto e no lugar certo"
          description="Os registros de antes e depois foram separados da galeria do consultório para não confundir ambiente da clínica com resultados clínicos e estéticos."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {results.map((item) => (
            <article
              key={item.src}
              className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-white shadow-sm"
            >
              <div className="relative aspect-square">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[var(--foreground)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)]">
                  Imagens do acervo atual da clínica, mantidas no novo site com
                  apresentação mais organizada e contextualizada.
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
