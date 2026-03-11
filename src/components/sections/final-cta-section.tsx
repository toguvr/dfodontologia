import { ArrowRight, PhoneCall } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function FinalCtaSection() {
  return (
    <section className="py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[linear-gradient(135deg,#0f4948,#113b45_55%,#1a2d3a)] px-6 py-12 text-white shadow-[0_40px_90px_rgba(12,33,40,0.24)] sm:px-10 lg:px-14 lg:py-16">
          <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/65">
                Agendamento
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
                Pronta para cuidar do seu sorriso com mais tranquilidade?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
                Fale com a DF Odontologia no WhatsApp, tire suas dúvidas e encontre
                o melhor horário para sua avaliação em Barra Mansa.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-white text-[var(--foreground)] hover:bg-white/90">
                <a href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">
                  <span className="text-[var(--foreground)]">Agendar pelo WhatsApp</span>
                  <ArrowRight className="h-4 w-4 text-[var(--foreground)]" />
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary" className="border-white/15 bg-white/10 text-white hover:bg-white/15">
                <a href={siteConfig.phoneHref}>
                  <PhoneCall className="h-4 w-4" />
                  {siteConfig.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
