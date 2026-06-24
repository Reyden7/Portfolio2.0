import Seo from "../../views/Seo/Seo";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://digitalloom.fr";

export const metadata = {
  title: "Référencement naturel SEO",
  description:
    "SEO technique, contenus, sitemap, robots, données structurées et indexation pour rendre votre site plus visible.",
  alternates: {
    canonical: "/referencement",
    languages: {
      "fr-FR": "/referencement",
    },
  },
  openGraph: {
    title: "Référencement naturel SEO",
    description:
      "Une méthode claire pour rendre votre site compréhensible, rapide, structuré et exploitable par Google.",
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
      name: "Référencement naturel et optimisation SEO",
      provider: {
        "@type": "ProfessionalService",
        name: "DigitalLoom",
        url: siteUrl,
      },
      areaServed: "France",
      serviceType: [
        "SEO technique",
        "SEO local",
        "Stratégie de contenu",
        "Données structurées",
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
            text: "C'est un site clair, rapide et structuré pour être compris par les moteurs classiques, les expériences IA de Google et les assistants capables de comparer plusieurs sources.",
          },
        },
        {
          "@type": "Question",
          name: "Le référencement remplace-t-il la publicité ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Non. Le SEO construit une visibilité durable. La publicité peut accélérer une campagne, mais un site bien structuré reste utile à long terme.",
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
