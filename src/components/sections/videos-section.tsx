import { PlayCircle } from "lucide-react";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/sections/section-heading";
import { videos } from "@/data/content";

export function VideosSection() {
  return (
    <section className="py-20">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Vídeos"
          title="Conheça mais sobre a clínica"
          description="Assista aos vídeos e conheça um pouco mais sobre a clínica."
          align="center"
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {videos.map((video) => (
            <article
              key={video.src}
              className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-white shadow-sm"
            >
              <div className="aspect-video overflow-hidden bg-[var(--foreground)]">
                <video
                  className="h-full w-full"
                  controls
                  preload="metadata"
                  playsInline
                >
                  <source src={video.src} type="video/mp4" />
                  Seu navegador nao suporta reproducao de video.
                </video>
              </div>
              <div className="p-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-[var(--secondary)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                  <PlayCircle className="h-3.5 w-3.5" />
                  Vídeo institucional
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-[var(--foreground)]">
                  {video.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-[var(--muted-foreground)]">
                  {video.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
