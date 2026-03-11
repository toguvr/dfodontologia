import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
};

export function createMetadata({
  title,
  description,
  path = "",
}: MetadataInput): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "pt_BR",
      type: "website",
      images: [
        {
          url: `${siteConfig.url}/images/clinic/consultorio-df-odontologia-01.jpg`,
          width: 1200,
          height: 630,
          alt: "Clínica DF Odontologia em Barra Mansa",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteConfig.url}/images/clinic/consultorio-df-odontologia-01.jpg`],
    },
  };
}
