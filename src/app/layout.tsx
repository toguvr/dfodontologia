import type { Metadata } from "next";
import localFont from "next/font/local";

import "@/app/globals.css";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";
import { faq } from "@/data/content";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const manrope = localFont({
  src: [
    { path: "../../public/fonts/manrope-400.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/manrope-500.ttf", weight: "500", style: "normal" },
    { path: "../../public/fonts/manrope-600.ttf", weight: "600", style: "normal" },
    { path: "../../public/fonts/manrope-700.ttf", weight: "700", style: "normal" },
    { path: "../../public/fonts/manrope-800.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-manrope",
  display: "swap",
});

const marcellus = localFont({
  src: [{ path: "../../public/fonts/marcellus-400.ttf", weight: "400", style: "normal" }],
  variable: "--font-marcellus",
  display: "swap",
});

export const metadata: Metadata = createMetadata({
  title: "DF Odontologia | Clínica odontológica em Barra Mansa",
  description:
    "Clínica odontológica em Barra Mansa com atendimento humanizado, odontologia multidisciplinar e foco em saúde, autoestima e bem-estar.",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["Dentist", "LocalBusiness"],
    name: siteConfig.name,
    image: `${siteConfig.url}/images/clinic/consultorio-df-odontologia-01.jpg`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    url: siteConfig.url,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      addressCountry: "BR",
    },
    openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-14:00"],
    sameAs: [siteConfig.instagram],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <html lang="pt-BR">
      <body className={`${manrope.variable} ${marcellus.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
