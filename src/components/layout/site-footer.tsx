import Link from "next/link";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/layout/container";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--foreground)] py-14 text-white">
      <Container className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="space-y-4">
          <h2 className="font-display text-3xl">DF Odontologia</h2>
          <p className="max-w-xl text-sm text-white/75">
            Atendimento odontológico em Barra Mansa com cuidado individualizado,
            ambiente acolhedor e foco em bem-estar, saúde e autoestima.
          </p>
        </div>
        <div className="space-y-4 text-sm text-white/75">
          <p className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0" />{siteConfig.address.full}</p>
          <p className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0" />{siteConfig.phone}</p>
          <p className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0" />{siteConfig.email}</p>
          <p>Segunda a sexta: 08:00 às 18:00</p>
          <p>Sábado: 09:00 às 14:00</p>
        </div>
        <div className="space-y-4 text-sm">
          <nav className="flex flex-col gap-3">
            <Link href="/" className="text-white/75 transition hover:text-white">Início</Link>
            <Link href="/sobre" className="text-white/75 transition hover:text-white">Sobre</Link>
            <Link href="/servicos" className="text-white/75 transition hover:text-white">Serviços</Link>
            <Link href="/equipe" className="text-white/75 transition hover:text-white">Equipe</Link>
            <Link href="/contato" className="text-white/75 transition hover:text-white">Contato</Link>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-white/75 transition hover:text-white"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
