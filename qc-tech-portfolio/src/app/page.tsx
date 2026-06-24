import Home from "../views/Home/Home";

export const metadata = {
  title: "Création de sites internet, apps et 3D sur mesure",
  description:
    "Sites internet, apps métier et 3D pour indépendants, artisans et entreprises. Design moderne, SEO propre et mise en ligne.",
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
