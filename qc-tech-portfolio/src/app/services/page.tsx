import Services from "../../views/Services/Services";

export const metadata = {
  title: "Nos prestations",
  description:
    "Offres claires pour créer un site moderne ou une application métier utile, adaptée à votre projet.",
  alternates: {
    canonical: "/services",
    languages: {
      "fr-FR": "/services",
    },
  },
};

export default function Page() {
  return <Services />;
}
