import { ContactSection } from "@/components/sections/contact-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { ServicesSection } from "@/components/sections/services-section";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Serviços odontológicos em Barra Mansa | DF Odontologia",
  description:
    "Veja os tratamentos oferecidos pela DF Odontologia, da prevenção à reabilitação oral e harmonização orofacial.",
  path: "/servicos",
});

export default function ServicosPage() {
  return (
    <>
      <ServicesSection />
      <FinalCtaSection />
      <ContactSection />
    </>
  );
}
