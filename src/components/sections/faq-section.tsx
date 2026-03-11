import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/sections/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/data/content";

export function FaqSection() {
  return (
    <section className="py-20">
      <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <SectionHeading
          eyebrow="Perguntas frequentes"
          title="Informações importantes antes do seu agendamento"
          description="Reunimos respostas objetivas para facilitar sua decisão e o primeiro contato com a clínica."
        />
        <Accordion type="single" collapsible className="space-y-4">
          {faq.map((item, index) => (
            <AccordionItem key={item.question} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
