import { Mail, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/sections/section-heading";
import { siteConfig } from "@/lib/site";

export function ContactSection() {
  return (
    <section className="py-20" id="contato">
      <Container className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-8 rounded-[2rem] border border-[var(--border)] bg-white p-8 shadow-sm">
          <SectionHeading
            eyebrow="Contato"
            title="Fale com a clínica e veja como chegar"
            description="A DF Odontologia está em localização central de Barra Mansa, com canais diretos para agendamento."
          />
          <div className="space-y-5 text-[var(--muted-foreground)]">
            <a href={siteConfig.phoneHref} className="flex items-start gap-3">
              <Phone className="mt-1 h-5 w-5 text-[var(--primary)]" />
              <span>{siteConfig.phone}</span>
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-start gap-3">
              <Mail className="mt-1 h-5 w-5 text-[var(--primary)]" />
              <span>{siteConfig.email}</span>
            </a>
            <p className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 text-[var(--primary)]" />
              <span>{siteConfig.address.full}</span>
            </p>
            <div className="rounded-[1.5rem] bg-[var(--secondary)] p-5">
              {siteConfig.hours.map((hour) => (
                <p key={hour} className="text-sm leading-7">{hour}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-white shadow-sm">
          <iframe
            title="Mapa da DF Odontologia em Barra Mansa"
            src={siteConfig.mapEmbed}
            className="h-[520px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Container>
    </section>
  );
}
