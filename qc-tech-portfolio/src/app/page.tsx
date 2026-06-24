import Home from "../views/Home/Home";

export const metadata = {
  title: "Création de sites internet et apps sur mesure",
  description:
    "Sites internet et apps métier pour indépendants, artisans et entreprises. Design moderne, SEO propre et mise en ligne.",
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
