import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { TeamSection } from "@/components/sections/team-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { VideosSection } from "@/components/sections/videos-section";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Equipe da DF Odontologia | Dentistas em Barra Mansa",
  description:
    "Conheça as sócias da DF Odontologia e a proposta de atendimento humanizado da clínica em Barra Mansa.",
  path: "/equipe",
});

export default function EquipePage() {
  return (
    <>
      <TeamSection />
      
      <VideosSection />
      <TestimonialsSection />
      <FinalCtaSection />
    </>
  );
}
