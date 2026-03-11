import { ContactSection } from "@/components/sections/contact-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contato DF Odontologia | Agende sua avaliação em Barra Mansa",
  description:
    "Entre em contato com a DF Odontologia pelo WhatsApp, telefone ou email e veja como chegar à clínica em Barra Mansa.",
  path: "/contato",
});

export default function ContatoPage() {
  return (
    <>
      <ContactSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
