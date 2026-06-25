import Home from "../views/Home/Home";

export const metadata = {
  title: "Création site internet Dijon",
  description:
    "Création de sites internet, sites vitrines, sites e-commerce et applications métier pour indépendants et petites entreprises en Bourgogne-Franche-Comté.",
  alternates: {
    canonical: "/",
    languages: {
      "fr-FR": "/",
    },
  },
};

export default function Page() {
  return <Home />;
}
