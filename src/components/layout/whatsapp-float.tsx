import { MessageCircleMore } from "lucide-react";

import { siteConfig } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={siteConfig.whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar no WhatsApp com a DF Odontologia"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_32px_rgba(37,211,102,0.35)] transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
    >
      <MessageCircleMore className="h-7 w-7" />
    </a>
  );
}
