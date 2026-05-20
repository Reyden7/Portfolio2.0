import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./Home.css";

function Home() {
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
            QC TECH
            <span className="home-hero__bracket">/&gt;</span>
          </h1>

          <p className="home-hero__subtitle">
            Sites internet, applications métier et expériences digitales propres,
            rapides et pensées pour convertir vos visiteurs en clients.
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

          <div className="home-story__grid">
            <div>
              <h2>Je conçois des solutions digitales solides, utiles et élégantes.</h2>
            </div>

            <div className="home-story__content">
              <p>
                Je suis développeur informatique freelance, spécialisé dans la
                création de sites internet, d’applications et d’outils sur mesure.
                Mon objectif est simple : transformer une idée en produit clair,
                performant et agréable à utiliser.
              </p>

              <p>
                Avec une double vision technique et projet, je peux accompagner
                un client depuis la réflexion jusqu’à la mise en ligne. Je cherche
                toujours à construire proprement : une interface soignée, un code
                maintenable, une expérience fluide et un résultat qui sert vraiment
                le besoin.
              </p>

              <div className="home-story__skills">
                <span>React.js</span>
                <span>JavaScript</span>
                <span>PHP</span>
                <span>C#</span>
                <span>Flutter</span>
                <span>UX/UI</span>
                <span>Modélisation 3D</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-projects" id="projects">
        <div className="home-projects__inner">
          <p className="section-kicker">Expertises</p>

          <div className="home-projects__heading">
            <h2>Choisissez votre besoin.</h2>
            <p>
              Chaque catégorie mène vers une sélection de réalisations adaptées :
              sites web, applications métier ou contenus 3D interactifs.
            </p>
          </div>

          <div className="home-category-list">
            <Link to="/sites-internet" className="home-category-card home-category-card--web">
              <span>01</span>
              <h3>Site internet</h3>
              <p>Vitrine, landing page, refonte, présence professionnelle.</p>
            </Link>

            <Link to="/applications-logiciels" className="home-category-card home-category-card--app">
              <span>02</span>
              <h3>Application / Logiciels</h3>
              <p>Outils métier, interfaces web, automatisation, dashboards.</p>
            </Link>

            <Link to="/modelisation-3d" className="home-category-card home-category-card--model">
              <span>03</span>
              <h3>Modélisation 3D</h3>
              <p>Objets 3D, visualisation interactive, intégration web.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="home-contact" id="contact">
        <div className="home-contact__inner">
          <p className="section-kicker">Contact</p>
          <h2>On construit quelque chose de sérieux ?</h2>
          <p>
            Un site internet, une application ou une idée à transformer en projet concret :
            envoyez-moi un message et on pose les bases.
          </p>

          <a href="mailto:contact@qc-tech.fr" className="home-contact__button">
            Me contacter
          </a>
        </div>
      </section>
    </main>
  );
}

export default Home;