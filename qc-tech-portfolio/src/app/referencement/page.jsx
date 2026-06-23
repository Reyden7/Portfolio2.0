import Seo from "../../views/Seo/Seo";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://digitalloom.fr";

export const metadata = {
  title: "Referencement naturel a Dijon et SEO pret pour la recherche agentique",
  description:
    "DigitalLoom structure votre site pour le referencement naturel, le SEO local autour de Dijon et les nouveaux usages de recherche assistes par l'IA.",
  alternates: {
    canonical: "/referencement",
  },
  openGraph: {
    title: "Referencement naturel et SEO agentic-ready a Dijon",
    description:
      "Une methode claire pour rendre votre site comprehensible, rapide, structure et exploitable par Google, les moteurs IA et les assistants de recherche.",
    url: `${siteUrl}/referencement`,
    type: "website",
  },
};

const seoJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${siteUrl}/referencement#service`,
      name: "Referencement naturel et optimisation SEO agentic-ready",
      provider: {
        "@type": "ProfessionalService",
        name: "DigitalLoom",
        url: siteUrl,
      },
      areaServed: "France",
      serviceType: [
        "SEO technique",
        "SEO local",
        "Strategie de contenu",
        "Donnees structurees",
        "Optimisation pour la recherche IA",
      ],
      url: `${siteUrl}/referencement`,
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/referencement#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Qu'est-ce qu'un site agentic-ready ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "C'est un site clair, rapide et structure pour etre compris par les moteurs classiques, les experiences IA de Google et les assistants capables de comparer plusieurs sources avant de proposer une reponse.",
          },
        },
        {
          "@type": "Question",
          name: "Le referencement remplace-t-il la publicite ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Non. Le SEO construit une visibilite durable. La publicite peut accelerer une campagne, mais un site bien structure reste utile a long terme.",
          },
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoJsonLd) }}
      />
      <Seo />
    </>
  );
}
