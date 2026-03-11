import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { DifferentialsSection } from "@/components/sections/differentials-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { HeroSection } from "@/components/sections/hero-section";
import { JourneySection } from "@/components/sections/journey-section";
import { ResultsSection } from "@/components/sections/results-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TeamSection } from "@/components/sections/team-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { VideosSection } from "@/components/sections/videos-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <DifferentialsSection />
      <ServicesSection compact />
      <TeamSection />
      <GallerySection />
      <VideosSection />
      <ResultsSection />
      <JourneySection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCtaSection />
      <ContactSection />
    </>
  );
}
