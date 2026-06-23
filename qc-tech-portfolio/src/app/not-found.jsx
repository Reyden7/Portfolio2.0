import NotFound from "../views/NotFound/NotFound";

export const metadata = {
  title: "Page introuvable",
  description:
    "Cette page nâ€™existe pas ou a Ã©tÃ© dÃ©placÃ©e. Retournez sur le portfolio DigitalLoom.",
};

export default function NotFoundPage() {
  return <NotFound />;
}
