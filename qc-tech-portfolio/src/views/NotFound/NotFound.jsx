"use client";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import TransitionLink from "../../components/TransitionLink/TransitionLink";
import usePageMeta from "../../hooks/usePageMeta";

function NotFound() {
     usePageMeta({
    title: "Page introuvable",
    description:
      "Cette page n’existe pas ou a été déplacée. Retournez sur le portfolio DigitalLoom.",
  });
  return (
    <main className="not-found">
      <Header />

      <section className="not-found__hero">
        <div className="not-found__decor not-found__decor--left"></div>
        <div className="not-found__decor not-found__decor--right"></div>

        <div className="not-found__inner">
          <p>Erreur 404</p>

          <h1>Cette page s’est perdue dans le code.</h1>

          <span>
            L’adresse demandée n’existe pas ou a été déplacée. Rien de grave :
            vous pouvez revenir à l’accueil et reprendre la navigation.
          </span>

          <div className="not-found__actions">
            <TransitionLink to="/" className="not-found__button magnetic">
              Retour à l’accueil
              <strong>↗</strong>
            </TransitionLink>

            <TransitionLink
              to="/sites-internet"
              className="not-found__button not-found__button--ghost magnetic"
            >
              Voir les projets
            </TransitionLink>
          </div>
        </div>

        <div className="not-found__code">404</div>
      </section>

      <Footer />
    </main>
  );
}

export default NotFound;