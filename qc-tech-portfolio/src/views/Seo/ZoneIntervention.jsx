"use client";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import TransitionLink from "../../components/TransitionLink/TransitionLink";
import BackgroundShapes from "../../components/BackgroundShapes/BackgroundShapes";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

const cities = [
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
  "Talant",
  "Chenove",
  "Quetigny",
  "Chevigny-Saint-Sauveur",
  "Marsannay-la-Cote",
  "Genlis",
  "Gevrey-Chambertin",
  "Longvic",
];

const localServices = [
  "Creation de sites vitrines pour artisans et independants",
  "Applications metier pour simplifier les processus internes",
  "Referencement local pour gagner en visibilite autour de Dijon",
  "Modelisation 3D et experiences interactives pour presenter un produit",
];

export default function ZoneIntervention() {
  useRevealOnScroll();

  return (
    <main className="seo-page zone-page">
      <Header />
      <BackgroundShapes variant="dark" />

      <section className="seo-hero">
        <p className="seo-eyebrow">Zone d'intervention</p>
        <h1>Creation digitale dans un rayon de 100 km autour de Dijon.</h1>
        <p>
          DigitalLoom accompagne les entreprises, artisans, independants et
          associations de Bourgogne-Franche-Comte avec des sites internet,
          applications, contenus 3D et pages SEO adaptees au territoire.
        </p>

        <div className="seo-hero__actions">
          <button
            type="button"
            className="seo-primary magnetic"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Demander un projet local
            <span>↗</span>
          </button>

          <TransitionLink to="/referencement" className="seo-secondary">
            Voir la methode SEO
          </TransitionLink>
        </div>
      </section>

      <section className="zone-layout">
        <article className="zone-map-card reveal" data-reveal-direction="left">
          <span>Dijon</span>
          <strong>Rayon d'environ 100 km</strong>
          <p>
            L'objectif est simple : rendre votre activite visible la ou vos
            clients recherchent vraiment, avec des pages claires, locales et
            reliees a vos prestations.
          </p>
        </article>

        <div className="zone-city-panel reveal">
          <p className="seo-eyebrow">Villes couvertes</p>
          <div className="zone-pills">
            {cities.map((city) => (
              <span key={city}>{city}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="seo-section">
        <div className="seo-section__heading reveal" data-reveal-direction="left">
          <p className="seo-eyebrow">Services locaux</p>
          <h2>Une presence en ligne construite pour le terrain.</h2>
        </div>

        <div className="seo-grid zone-service-grid">
          {localServices.map((service, index) => (
            <article
              key={service}
              className="seo-card reveal"
              data-reveal-delay={index * 90}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{service}</h3>
              <p>
                Chaque page doit connecter votre offre, votre zone et les
                intentions de recherche concretes de vos futurs clients.
              </p>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
