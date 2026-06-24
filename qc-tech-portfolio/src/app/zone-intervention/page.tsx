import ZoneIntervention from "../../views/Seo/ZoneIntervention";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://digitalloom.fr";

export const metadata = {
  title: "Zone d'intervention autour de Dijon | DigitalLoom",
  description:
    "DigitalLoom accompagne les entreprises, artisans et independants dans un rayon d'environ 100 km autour de Dijon pour sites internet, applications et referencement.",
  alternates: {
    canonical: "/zone-intervention",
  },
  openGraph: {
    title: "Creation de site internet dans un rayon de 100 km autour de Dijon",
    description:
      "Dijon, Beaune, Dole, Chalon-sur-Saone, Langres, Auxonne, Nuits-Saint-Georges et communes voisines.",
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
    "Chalon-sur-Saone",
    "Langres",
    "Auxonne",
    "Nuits-Saint-Georges",
    "Is-sur-Tille",
    "Seurre",
    "Gray",
  ],
  serviceType: [
    "Creation de sites internet",
    "Developpement d'applications metier",
    "Referencement naturel",
    "Modelisation 3D",
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
