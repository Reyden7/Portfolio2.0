import Home from "../views/Home/Home";

export const metadata = {
  title: "Création site internet Dijon",
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
