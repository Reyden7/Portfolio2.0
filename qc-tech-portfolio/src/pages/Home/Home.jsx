import TransitionLink from "../../components/TransitionLink/TransitionLink";
import Header from "../../components/Header/Header";
import "./Home.css";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import { profile } from "../../data/profile";
import Footer from "../../components/Footer/Footer";

function Home() {
      useRevealOnScroll();
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
            <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
              Voir les projets
            </button>

            <button
              className="home-hero__actions-secondary"
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

          <div className="home-story__grid reveal">
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

      <section className="home-projects" id="projects">
        <div className="home-projects__inner">
          <p className="section-kicker">Expertises</p>

          <div className="home-projects__heading reveal">
            <h2>Choisissez votre besoin.</h2>
            <p>
              Chaque catégorie mène vers une sélection de réalisations adaptées :
              sites web, applications métier ou contenus 3D interactifs.
            </p>
          </div>

          <div className="home-category-list reveal">
            <TransitionLink
                to="/sites-internet"
                className="home-category-card home-category-card--web"
                >
              <span>01</span>
              <h3>Site internet</h3>
              <p>Vitrine, landing page, refonte, présence professionnelle.</p>
            </TransitionLink>

            <TransitionLink to="/applications-logiciels" className="home-category-card home-category-card--app">
              <span>02</span>
              <h3>Application / Logiciels</h3>
              <p>Outils métier, interfaces web, automatisation, dashboards.</p>
            </TransitionLink>

            <TransitionLink to="/modelisation-3d" className="home-category-card home-category-card--model">
              <span>03</span>
              <h3>Modélisation 3D</h3>
              <p>Objets 3D, visualisation interactive, intégration web.</p>
            </TransitionLink>
          </div>
        </div>
      </section>
        <section className="home-start" id="start-project">
        <div className="home-start__inner">
            <p className="section-kicker">Démarrer un projet</p>

            <div className="home-start__heading reveal">
                <h2>Vous avez une idée ? Je vous aide à la rendre concrète.</h2>

                <p>
                Pas besoin d’arriver avec un cahier des charges parfait. On clarifie
                ensemble votre besoin, vos priorités, votre budget et la meilleure
                solution à développer.
                </p>
            </div>

            <div className="home-start__cards reveal">
                <article className="home-start__card">
                <span>01</span>
                <h3>Site internet</h3>
                <p>
                    Pour présenter votre activité, gagner en crédibilité et générer
                    plus facilement des demandes de contact.
                </p>
                </article>

                <article className="home-start__card">
                <span>02</span>
                <h3>Application / Logiciel</h3>
                <p>
                    Pour automatiser un processus, créer un outil métier ou simplifier
                    votre organisation au quotidien.
                </p>
                </article>

                <article className="home-start__card">
                <span>03</span>
                <h3>Expérience 3D</h3>
                <p>
                    Pour valoriser un objet, un produit ou une idée avec une
                    visualisation interactive directement intégrée au web.
                </p>
                </article>
            </div>

            <div className="home-start__cta reveal">
                <a href={`mailto:${profile.email}`}>
                Parler de mon projet
                <span>↗</span>
                </a>

                <p>
                Réponse rapide, échange clair, objectif concret : savoir si le projet
                est faisable et comment le lancer proprement.
                </p>
            </div>
            </div>
        </section>
      <Footer />
    </main>
  );
}

export default Home;