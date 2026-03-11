import { AboutSection } from "@/components/sections/about-section";
import { DifferentialsSection } from "@/components/sections/differentials-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { JourneySection } from "@/components/sections/journey-section";
import { TeamSection } from "@/components/sections/team-section";
import { VideosSection } from "@/components/sections/videos-section";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Sobre a DF Odontologia | Clínica odontológica em Barra Mansa",
  description:
    "Conheça a história, a proposta de cuidado e a equipe da DF Odontologia em Barra Mansa.",
  path: "/sobre",
});

export default function SobrePage() {
  return (
    <>
      <AboutSection />
      <DifferentialsSection />
      <JourneySection />
      <TeamSection />
      <VideosSection />
      <FinalCtaSection />
    </>
  );
}
