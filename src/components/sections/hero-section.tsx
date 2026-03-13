import Image from "next/image";
import { ArrowRight, CalendarDays, MapPin, ShieldCheck } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { heroStats, socialProof } from "@/data/content";
import { siteConfig } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20">
      <div className="absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(circle_at_top_left,_rgba(201,230,228,0.9),_transparent_42%),radial-gradient(circle_at_top_right,_rgba(245,224,215,0.9),_transparent_38%)]" />
      <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/80 px-4 py-2 text-sm text-[var(--foreground)] shadow-sm">
            <ShieldCheck className="h-4 w-4 text-[var(--primary)]" />
            Odontologia moderna com atendimento humanizado
          </div>
          <div className="space-y-6">
            <h1 className="max-w-3xl font-display text-5xl leading-[0.95] text-[var(--foreground)] sm:text-6xl lg:text-7xl">
              Seu sorriso cuidado com elegância, clareza e confiança.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[var(--muted-foreground)] sm:text-xl">
              A DF Odontologia reúne atendimento acolhedor, estrutura moderna e
              odontologia multidisciplinar para acompanhar sua saúde bucal em
              Barra Mansa com mais conforto em cada etapa.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">
                Agendar avaliação
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href="/servicos">Conhecer tratamentos</a>
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {heroStats.map((item) => (
              <div key={item.label} className="rounded-[1.75rem] border border-white/70 bg-white/75 p-5 shadow-sm backdrop-blur">
                <p className="font-display text-2xl text-[var(--foreground)]">{item.value}</p>
                <p className="mt-1 text-sm leading-6 text-[var(--muted-foreground)]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-[var(--muted-foreground)]">
            {socialProof.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[var(--border)] bg-white/80 px-4 py-2"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-8 -top-8 hidden h-36 w-36 rounded-full bg-[var(--accent)]/50 blur-3xl lg:block" />
          <div className="absolute -left-8 bottom-6 hidden h-36 w-36 rounded-full bg-[var(--secondary-strong)]/55 blur-3xl lg:block" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white p-3 shadow-[0_40px_80px_rgba(15,23,42,0.12)]">
            <div className="grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
              <div className="relative min-h-[420px] overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/images/team/dra-leticia-duque.jpg"
                  alt="Consultório clínico da DF Odontologia"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 540px"
                />
              </div>
              <div className="grid gap-3">
                <div className="relative min-h-[205px] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src="/images/team/dra-sarah-figorelle.jpg"
                    alt="Dra. Leticia Duque e Dra. Sarah Figorelle na DF Odontologia"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 50vw, 260px"
                  />
                </div>
                <div className="rounded-[1.5rem] bg-[var(--foreground)] p-6 text-white">
                  <p className="text-sm uppercase tracking-[0.2em] text-white/65">
                    Atendimento
                  </p>
                  <p className="mt-3 text-lg leading-7 text-white/90">
                    Hora marcada, escuta cuidadosa e planejamento claro para uma
                    experiência mais tranquila.
                  </p>
                  <div className="mt-6 space-y-3 text-sm text-white/80">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {siteConfig.address.city}
                    </div>
                    <div className="flex items-center gap-2">
                      <CalendarDays className="h-4 w-4" />
                      Segunda a sábado
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
