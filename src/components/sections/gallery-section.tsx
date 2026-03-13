import Image from "next/image";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/sections/section-heading";
import { gallery } from "@/data/content";

export function GallerySection() {
  return (
    <section className="py-20">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Consultório"
          title="Um espaço pensado para acolher com leveza, organização e conforto"
          description="Conheça os ambientes da DF Odontologia e veja como cada detalhe da clínica foi pensado para receber com conforto, organização e tranquilidade."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((image, index) => (
            <div
              key={image.src}
              className={`relative overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-white ${
                index === 0 ? "sm:col-span-2" : ""
              }`}
            >
              <div className={`relative ${index === 0 ? "aspect-[16/9]" : "aspect-[4/5]"}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition duration-500 hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
