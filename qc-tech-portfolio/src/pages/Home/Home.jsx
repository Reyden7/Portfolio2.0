import TransitionLink from "../../components/TransitionLink/TransitionLink";
import Header from "../../components/Header/Header";
import "./Home.css";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import { profile } from "../../data/profile";
import Footer from "../../components/Footer/Footer";
import useMagneticElements from "../../hooks/useMagneticElements";
import usePageMeta from "../../hooks/usePageMeta";

import {
  methodSteps,
  trustCards,
  categoryCards,
  faqItems,
  offers,
} from "../../data/homeContent";

function Home() {
      useRevealOnScroll();
      usePageMeta({
        title: "Accueil",
        description:
          "QC-Tech accompagne les entreprises dans la création de sites internet, applications métier et modélisation 3D",
      });
      //useMagneticElements();

      const handleOfferContact = (projectType) => {
        window.dispatchEvent(
          new CustomEvent("qc-contact-project-type", {
            detail: { projectType },
          })
        );

        document.getElementById("contact")?.scrollIntoView({
          behavior: "smooth",
        });
      };
  return (
    <main className="home">
      <Header />

      <section className="home-hero">
        <div className="home-hero__decor home-hero__decor--left"></div>
        <div className="home-hero__decor home-hero__decor--right"></div>

        <div className="home-hero__noise"></div>

        <div className="home-hero__content">
          <p className="home-hero__eyebrow">Freelance développeur</p>

          <h1>
            <span className="home-hero__bracket">&lt;</span>
            {profile.heroTitle}
            <span className="home-hero__bracket">/&gt;</span>
          </h1>

          <p className="home-hero__subtitle">
            {profile.heroSubtitle}
          </p>

          <div className="home-hero__actions">
            <button
              className="magnetic"
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Voir les projets
            </button>

            <button
              className="home-hero__actions-secondary magnetic"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Me contacter
            </button>
          </div>
        </div>

        <button
          className="home-hero__scroll"
          onClick={() => document.getElementById("story")?.scrollIntoView({ behavior: "smooth" })}
          aria-label="Scroller vers la présentation"
        >
          <span>Scroll</span>
          <strong>↓</strong>
        </button>
      </section>

      <section className="home-story" id="story">
        <div className="home-story__inner">
          <p className="section-kicker">Présentation</p>

          <div className="home-story__grid reveal" data-reveal-direction="left">
            <div>
              <h2>Je conçois des solutions digitales solides, utiles et élégantes.</h2>
            </div>

            <div className="home-story__content">
                <p>
                    {profile.shortPresentation} Mon objectif est simple : transformer une
                    idée en produit clair, performant et agréable à utiliser.
                </p>

                <p>{profile.longPresentation}</p>

                <div className="home-story__skills">
                {profile.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                ))}
                </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-method" id="method">
        <div className="home-method__inner">
          <p className="section-kicker">Méthode</p>

          <div className="home-method__heading reveal" data-reveal-direction="left">
            <h2>Une méthode claire pour éviter les projets flous.</h2>

            <p>
              Un bon projet ne commence pas par du code. Il commence par une
              compréhension précise du besoin, des priorités et du résultat
              attendu.
            </p>
          </div>

          <div className="home-method__steps">
          {methodSteps.map((step, index) => (
            <article
              key={step.number}
              className="home-method__step reveal"
              data-reveal-delay={index * 110}
            >
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
        </div>
      </section>    
      <section className="home-trust">
        <div className="home-trust__inner">
          <p className="section-kicker">Pourquoi DigitalLoom</p>

          <div className="home-trust__heading reveal" data-reveal-direction="right">
            <h2>Un site beau, c’est bien. Un site utile, c’est mieux.</h2>

            <p>
              Mon objectif n’est pas seulement de livrer quelque chose de joli.
              Je veux créer une solution claire, rapide, maintenable et pensée
              pour servir votre activité.
            </p>
          </div>

          <div className="home-trust__grid">
            {trustCards.map((card, index) => (
              <article
                key={card.number}
                className="home-trust__card reveal"
                data-reveal-delay={index * 120}
              >
                <span>{card.number}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>     
      <section className="home-projects" id="projects">
        <div className="home-projects__inner">
          <p className="section-kicker">Expertises</p>

          <div className="home-projects__heading reveal" data-reveal-direction="right">
            <h2>Choisissez votre besoin.</h2>
            <p>
              Chaque catégorie mène vers une sélection de réalisations adaptées :
              sites web, applications métier ou contenus 3D interactifs.
            </p>
          </div>

          <div className="home-category-list reveal">
            {categoryCards.map((card) => (
              <TransitionLink
                key={card.number}
                to={card.path}
                className={`home-category-card ${card.className} magnetic`}
              >
                <span className="home-category-card__number">{card.number}</span>
                <span className="home-category-card__badge">{card.badge}</span>

                <div className="home-category-card__visual">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>

                <div className="home-category-card__content">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>

                <strong className="home-category-card__arrow">↗</strong>
              </TransitionLink>
            ))}
          </div>
        </div>
      </section>
      <section className="home-faq" id="faq">
        <div className="home-faq__inner">
          <p className="section-kicker">FAQ</p>

          <div className="home-faq__heading reveal" data-reveal-direction="left">
            <h2>Les questions qui reviennent souvent.</h2>

            <p>
              Avant de démarrer, voici les réponses aux questions les plus
              fréquentes. Le but est simple : avancer clairement, sans mauvaise
              surprise.
            </p>
          </div>

          <div className="home-faq__list">
            {faqItems.map((item, index) => (
              <details
                key={item.number}
                className="home-faq__item reveal"
                data-reveal-delay={index * 100}
              >
                <summary>
                  <span>{item.number}</span>
                  {item.question}
                </summary>

                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="home-offers" id="offers">
        <div className="home-offers__inner">
          <p className="section-kicker">Offres</p>

          <div className="home-offers__heading reveal" data-reveal-direction="right">
            <h2>Pret pour commencer ?</h2>

            <p>
              Chaque projet est différent. L’objectif est de choisir une solution
              cohérente : assez solide pour durer, sans ajouter de complexité
              inutile.
            </p>
          </div>

          <div className="home-offers__grid">
            {offers.map((offer, index) => (
              <article
                key={offer.number}
                className={`home-offers__card ${
                  offer.featured ? "home-offers__card--featured" : ""
                } reveal`}
                data-reveal-delay={index * 120}
              >
                <div className="home-offers__top">
                  <span>{offer.number}</span>
                  <strong>{offer.label}</strong>
                </div>

                <h3>{offer.title}</h3>
                <strong className="home-offers__price">{offer.price}</strong>
                <p>{offer.text}</p>

                <ul>
                  {offer.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <button
                  type="button"
                  className="magnetic"
                  onClick={() => handleOfferContact(offer.projectType)}
                >
                  {offer.cta}
                  <span>↗</span>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
        
      <Footer />
    </main>
  );
}

export default Home;