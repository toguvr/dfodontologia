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
          title="Os vídeos institucionais do site antigo agora fazem parte da experiência"
          description="Mantive os dois vídeos já publicados pela clínica, com embed mais limpo e melhor hierarquia visual."
          align="center"
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {videos.map((video) => (
            <article
              key={video.id}
              className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-white shadow-sm"
            >
              <div className="aspect-video overflow-hidden bg-[var(--foreground)]">
                <iframe
                  title={video.title}
                  src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                  className="h-full w-full"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
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
