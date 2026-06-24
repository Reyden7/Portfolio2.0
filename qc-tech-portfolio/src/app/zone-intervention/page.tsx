import ZoneIntervention from "../../views/Seo/ZoneIntervention";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://digitalloom.fr";

export const metadata = {
  title: "Zone d'intervention",
  description:
    "DigitalLoom accompagne les entreprises, artisans et indépendants selon leur zone locale et leurs objectifs web.",
  alternates: {
    canonical: "/zone-intervention",
    languages: {
      "fr-FR": "/zone-intervention",
    },
  },
  openGraph: {
    title: "Zone d'intervention DigitalLoom",
    description:
      "Création de sites, applications et référencement selon la zone locale de chaque client.",
    url: `${siteUrl}/zone-intervention`,
    type: "website",
  },
};

const zoneJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/zone-intervention#business`,
  name: "DigitalLoom",
  url: siteUrl,
  areaServed: [
    "Dijon",
    "Beaune",
    "Dole",
    "Chalon-sur-Saône",
    "Langres",
    "Auxonne",
    "Nuits-Saint-Georges",
    "Is-sur-Tille",
    "Seurre",
    "Gray",
  ],
  serviceType: [
    "Création de sites internet",
    "Développement d'applications métier",
    "Référencement naturel",
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(zoneJsonLd) }}
      />
      <ZoneIntervention />
    </>
  );
}
