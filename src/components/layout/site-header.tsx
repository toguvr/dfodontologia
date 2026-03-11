"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, PhoneCall } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/lib/site";

const navItems = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
  { href: "/equipe", label: "Equipe" },
  { href: "/contato", label: "Contato" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/70 bg-white/75 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" aria-label="DF Odontologia">
          <Image
            src="/logo/df-odontologia-logo.png"
            alt="Logo da clínica DF Odontologia"
            width={180}
            height={70}
            priority
            className="h-auto w-[148px] sm:w-[170px]"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--foreground)] transition-colors hover:text-[var(--primary)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={siteConfig.phoneHref}
            className="text-sm font-medium text-[var(--foreground)]"
          >
            {siteConfig.phone}
          </a>
          <Button asChild size="sm">
            <a href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">
              Agendar no WhatsApp
            </a>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <button
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-white text-[var(--foreground)] lg:hidden"
              aria-label="Abrir menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent>
            <div className="mt-10 flex flex-col gap-8">
              <Image
                src="/logo/df-odontologia-logo.png"
                alt="Logo da clínica DF Odontologia"
                width={180}
                height={70}
                className="h-auto w-[160px]"
              />
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link href={item.href} className="text-lg font-medium">
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--secondary)] p-4">
                <a href={siteConfig.phoneHref} className="flex items-center gap-2 text-sm font-medium">
                  <PhoneCall className="h-4 w-4" />
                  {siteConfig.phone}
                </a>
                <Button asChild className="mt-4 w-full">
                  <a href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">
                    Agendar avaliação
                  </a>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
}
