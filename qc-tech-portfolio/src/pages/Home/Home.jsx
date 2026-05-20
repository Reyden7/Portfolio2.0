import TransitionLink from "../../components/TransitionLink/TransitionLink";
import Header from "../../components/Header/Header";
import "./Home.css";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import { profile } from "../../data/profile";
import Footer from "../../components/Footer/Footer";
import useMagneticElements from "../../hooks/useMagneticElements";

function Home() {
      useRevealOnScroll();
      //useMagneticElements();
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
      <section className="home-method">
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
            <article className="home-method__step reveal" data-reveal-delay="0">
              <span>01</span>
              <h3>Comprendre</h3>
              <p>
                On échange sur votre activité, votre objectif, vos contraintes
                et les problèmes que le projet doit résoudre.
              </p>
            </article>

            <article className="home-method__step reveal" data-reveal-delay="110">
              <span>02</span>
              <h3>Structurer</h3>
              <p>
                Je transforme l’idée en plan concret : fonctionnalités,
                arborescence, parcours utilisateur, priorités et choix
                techniques.
              </p>
            </article>

            <article className="home-method__step reveal" data-reveal-delay="220">
              <span>03</span>
              <h3>Concevoir</h3>
              <p>
                On pose une interface propre, lisible et cohérente avec votre
                image pour éviter un rendu générique.
              </p>
            </article>

            <article className="home-method__step reveal" data-reveal-delay="330">
              <span>04</span>
              <h3>Développer</h3>
              <p>
                Je construis une solution performante, maintenable et adaptée à
                l’évolution future de votre projet.
              </p>
            </article>
          </div>
        </div>
      </section>    
      <section className="home-trust">
        <div className="home-trust__inner">
          <p className="section-kicker">Pourquoi QC-Tech</p>

          <div className="home-trust__heading reveal" data-reveal-direction="right">
            <h2>Un site beau, c’est bien. Un site utile, c’est mieux.</h2>

            <p>
              Mon objectif n’est pas seulement de livrer quelque chose de joli.
              Je veux créer une solution claire, rapide, maintenable et pensée
              pour servir votre activité.
            </p>
          </div>

          <div className="home-trust__grid">
            <article className="home-trust__card reveal" data-reveal-delay="0">
              <span>01</span>
              <h3>Vision projet</h3>
              <p>
                Je ne fonce pas tête baissée dans le développement. On clarifie
                d’abord le besoin, les priorités et le résultat attendu.
              </p>
            </article>

            <article className="home-trust__card reveal" data-reveal-delay="120">
              <span>02</span>
              <h3>Interface soignée</h3>
              <p>
                Le rendu visuel compte. Votre site doit donner confiance dès les
                premières secondes, surtout si vous vendez un service.
              </p>
            </article>

            <article className="home-trust__card reveal" data-reveal-delay="240">
              <span>03</span>
              <h3>Code maintenable</h3>
              <p>
                Je structure le projet proprement pour éviter un site fragile,
                difficile à modifier ou impossible à faire évoluer.
              </p>
            </article>

            <article className="home-trust__card reveal" data-reveal-delay="360">
              <span>04</span>
              <h3>Accompagnement</h3>
              <p>
                Je vous explique les choix importants, les limites, les options
                possibles et les prochaines étapes. Pas de flou inutile.
              </p>
            </article>
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
            <TransitionLink
              to="/sites-internet"
              className="home-category-card home-category-card--web magnetic"
            >
              <span className="home-category-card__number">01</span>
              <span className="home-category-card__badge">Web</span>

              <div className="home-category-card__visual">
                <i></i>
                <i></i>
                <i></i>
              </div>

              <div className="home-category-card__content">
                <h3>Sites internet</h3>
                <p>Vitrine, landing page, refonte, présence professionnelle.</p>
              </div>

              <strong className="home-category-card__arrow">↗</strong>
            </TransitionLink>

            <TransitionLink
              to="/applications-logiciels"
              className="home-category-card home-category-card--app magnetic"
            >
              <span className="home-category-card__number">02</span>
              <span className="home-category-card__badge">Logiciels</span>

              <div className="home-category-card__visual">
                <i></i>
                <i></i>
                <i></i>
              </div>

              <div className="home-category-card__content">
                <h3>Applications</h3>
                <p>Outils métier, interfaces web, automatisation, dashboards.</p>
              </div>

              <strong className="home-category-card__arrow">↗</strong>
            </TransitionLink>

            <TransitionLink
              to="/modelisation-3d"
              className="home-category-card home-category-card--model magnetic"
            >
              <span className="home-category-card__number">03</span>
              <span className="home-category-card__badge">3D</span>

              <div className="home-category-card__visual">
                <i></i>
                <i></i>
                <i></i>
              </div>

              <div className="home-category-card__content">
                <h3>Modélisation 3D</h3>
                <p>Objets 3D, visualisation interactive, intégration web.</p>
              </div>

              <strong className="home-category-card__arrow">↗</strong>
            </TransitionLink>
          </div>
        </div>
      </section>
      <section className="home-faq">
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
            <details className="home-faq__item reveal" data-reveal-delay="0">
              <summary>
                <span>01</span>
                Est-ce que je dois déjà avoir un cahier des charges complet ?
              </summary>
              <p>
                Non. C’est même rarement le cas. On peut partir d’une idée simple,
                puis clarifier ensemble les objectifs, les fonctionnalités, les
                priorités et le périmètre du projet.
              </p>
            </details>

            <details className="home-faq__item reveal" data-reveal-delay="100">
              <summary>
                <span>02</span>
                Combien de temps prend la création d’un site ?
              </summary>
              <p>
                Ça dépend du périmètre. Une landing page ou un site vitrine simple
                peut aller assez vite. Un projet plus complet demande forcément
                plus de cadrage, de design et de développement. Le plus important :
                définir un périmètre réaliste dès le départ.
              </p>
            </details>

            <details className="home-faq__item reveal" data-reveal-delay="200">
              <summary>
                <span>03</span>
                Est-ce que le site sera responsive ?
              </summary>
              <p>
                Oui. Un site moderne doit être propre sur ordinateur, tablette et
                mobile. Le responsive n’est pas une option, c’est une base.
              </p>
            </details>

            <details className="home-faq__item reveal" data-reveal-delay="300">
              <summary>
                <span>04</span>
                Est-ce que tu peux faire évoluer le projet après livraison ?
              </summary>
              <p>
                Oui. Le projet est structuré pour rester maintenable. On peut
                prévoir des évolutions, ajouter des sections, améliorer des
                fonctionnalités ou faire évoluer l’interface plus tard.
              </p>
            </details>

            <details className="home-faq__item reveal" data-reveal-delay="400">
              <summary>
                <span>05</span>
                Est-ce que tu peux m’aider à choisir la bonne solution ?
              </summary>
              <p>
                Oui. Mon rôle n’est pas seulement d’exécuter. Je peux t’aider à
                choisir entre un site vitrine, une landing page, une application
                métier, une solution simple ou une approche plus évolutive.
              </p>
            </details>
          </div>
        </div>
      </section>
      <section className="home-offers" id="start-project">
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
            <article className="home-offers__card reveal" data-reveal-delay="0">
              <div className="home-offers__top">
                <span>01</span>
                <strong>Présence pro</strong>
              </div>

              <h3>Site vitrine</h3>

              <p>
                Pour présenter votre activité, vos services, vos réalisations et
                donner confiance à vos futurs clients.
              </p>

              <ul>
                <li>Design responsive</li>
                <li>Pages essentielles</li>
                <li>Formulaire ou lien de contact</li>
                <li>Base SEO propre</li>
              </ul>

              <a href={`mailto:${profile.email}`} className="magnetic">
                Demander un site
                <span>↗</span>
              </a>
            </article>

            <article
              className="home-offers__card home-offers__card--featured reveal"
              data-reveal-delay="120"
            >
              <div className="home-offers__top">
                <span>02</span>
                <strong>Conversion</strong>
              </div>

              <h3>Landing page</h3>

              <p>
                Pour mettre en avant une offre précise et guider le visiteur vers
                une action claire : contact, demande de devis, inscription.
              </p>

              <ul>
                <li>Message commercial clair</li>
                <li>Structure orientée conversion</li>
                <li>Animations fluides</li>
                <li>Appel à l’action fort</li>
              </ul>

              <a href={`mailto:${profile.email}`} className="magnetic">
                Demander une landing page
                <span>↗</span>
              </a>
            </article>

            <article className="home-offers__card reveal" data-reveal-delay="240">
              <div className="home-offers__top">
                <span>03</span>
                <strong>Sur mesure</strong>
              </div>

              <h3>Application métier</h3>

              <p>
                Pour créer un outil adapté à votre organisation : gestion,
                automatisation, tableau de bord ou interface interne.
              </p>

              <ul>
                <li>Analyse du besoin</li>
                <li>Interface personnalisée</li>
                <li>Gestion de données</li>
                <li>Évolutivité du projet</li>
              </ul>

              <a href={`mailto:${profile.email}`} className="magnetic">
                Demander une app
                <span>↗</span>
              </a>
            </article>
            <article className="home-offers__card reveal" data-reveal-delay="360">
              <div className="home-offers__top">
                <span>04</span>
                <strong>3D interactive</strong>
              </div>

              <h3>Modélisation 3D</h3>

              <p>
                Pour présenter un objet, un produit ou un concept avec une visualisation
                3D interactive directement intégrée à votre site.
              </p>

              <ul>
                <li>Modèle 3D optimisé web et jeux video avec retopology</li>
                <li>Shader avec Ucupaint</li>
              </ul>

              <a href={`mailto:${profile.email}`} className="magnetic">
                Demander un modèle 3D
                <span>↗</span>
              </a>
            </article>
            
          </div>
        </div>
      </section>
        
      <Footer />
    </main>
  );
}

export default Home;