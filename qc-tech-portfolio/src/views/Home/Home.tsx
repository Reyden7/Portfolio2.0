"use client";

import TransitionLink from "../../components/TransitionLink/TransitionLink";
import Header from "../../components/Header/Header";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import { profile } from "../../data/profile";
import Footer from "../../components/Footer/Footer";
import usePageMeta from "../../hooks/usePageMeta";
import BackgroundShapes from "../../components/BackgroundShapes/BackgroundShapes";

import {
  methodSteps,
  categoryCards,
  faqItems,
} from "../../data/homeContent";

function Home() {
  useRevealOnScroll();

  usePageMeta({
    title:
      "Création de sites internet à Dijon et en Bourgogne-Franche-Comté",
    description:
      "DigitalLoom accompagne les indépendants, artisans et entreprises dans la création de sites internet sécurisés, SEO et ergonomiques, ainsi que d'applications métier pertinentes.",
  });

  return (
    <main className="home">
      <Header />
      <BackgroundShapes variant="dark" />
      
      
      <section className="home-hero">
        

        <div className="home-hero__decor home-hero__decor--left"></div>
        <div className="home-hero__decor home-hero__decor--right"></div>

        <div className="home-hero__noise"></div>

        <div className="home-hero__content">
          <p className="home-hero__eyebrow">
            Sites web Et Applications métier
          </p>

          <h1>DigitalLoom</h1>

          <p className="home-hero__subtitle">
            Création de sites internet à Dijon pour indépendants et petites entreprises.
          </p>

          <div className="home-hero__actions">
            <button
              className="magnetic"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Discuter de mon projet
              <span>↗</span>
            </button>

            <button
              className="home-hero__actions-secondary magnetic"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Voir nos réalisations
            </button>
          </div>

          <div className="home-hero__proofs">
            <span>Design impactant</span>
            <span>Développement sur mesure</span>
            
          </div>
        </div>

        <button
          className="home-hero__scroll"
          onClick={() =>
            document.getElementById("story")?.scrollIntoView({
              behavior: "smooth",
            })
          }
          aria-label="Scroller vers la présentation"
        >
          <span>Scroll</span>
          <strong>↓</strong>
        </button>
      </section>

      <section className="home-story" id="story">
        

        <div className="home-story__inner">
          <p className="section-kicker">À propos</p>

          <div className="home-story__grid reveal" data-reveal-direction="left">
            <div className="home-story__heading">
              <h2>
                Création de sites internet à Dijon pour indépendants et petites entreprises
              </h2>

              <div className="home-story__stats">
                <div>
                  <strong>6+</strong>
                  <span>années d’expérience</span>
                </div>

                <div>
                  <strong>100%</strong>
                  <span>sur mesure</span>
                </div>
              </div>
            </div>

            <div className="home-story__content">
              <p>Webmaster basé à Dijon, spécialisé dans la création de sites internet et d’applications métier pour les indépendants, artisans</p>
              

              <p>
                Nous vous accompagnons de la réflexion à la mise
                en ligne pour vous construire une présence sur le web cohérente,
                Moderne et adaptée à vos objectifs réels.
              </p>

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
              Nous vous accompagnons étape par étape : clarification du besoin,
              direction artistique, développement, mise en ligne et
              Optimisation. Le but est d’avancer vite, proprement, sans zone
              Floue.
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

      <section className="home-faq" id="faq">
        

        <div className="home-faq__inner">
          <p className="section-kicker">FAQ</p>

          <div className="home-faq__heading reveal" data-reveal-direction="left">
            <h2>Les questions qui reviennent souvent.</h2>

            <p>
              Avant de démarrer, voici les réponses aux questions les plus fréquentes. Le but est simple : avancer clairement, sans mauvaise surprise.
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

      <section className="home-projects" id="projects">
        

        <div className="home-projects__inner">
          <p className="section-kicker">Expertises</p>

          <div className="home-projects__heading reveal" data-reveal-direction="right">
            <h2>Nos Réalisations.</h2>
            <p>
              Deux familles de projets, un objectif : montrer des interfaces
              utiles, lisibles et pensées pour convertir.
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

      

      <Footer />
    </main>
  );
}

export default Home;
