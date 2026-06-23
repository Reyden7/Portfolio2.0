"use client";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import TransitionLink from "../../components/TransitionLink/TransitionLink";
import BackgroundShapes from "../../components/BackgroundShapes/BackgroundShapes";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

const pillars = [
  {
    number: "01",
    title: "Structure comprehensible",
    text: "Une page doit repondre clairement a une intention : titre explicite, sections logiques, maillage interne, schema de donnees et contenu utile.",
  },
  {
    number: "02",
    title: "Technique propre",
    text: "Performance, rendu serveur, accessibilite, sitemap, robots, metadata et URLs stables donnent a Google une base saine pour explorer le site.",
  },
  {
    number: "03",
    title: "Preuves et contexte",
    text: "Les realisations, zones d'intervention, offres, FAQ et explications de methode aident le moteur a comprendre qui vous aidez et pourquoi.",
  },
  {
    number: "04",
    title: "Pret pour l'agentic search",
    text: "Les experiences IA de recherche comparent, synthetisent et croisent les sources. Le site doit donc etre citeable, precis et decoupe en reponses fiables.",
  },
];

const workflow = [
  "Audit des intentions de recherche utiles pour votre activite.",
  "Architecture des pages : services, villes, realisations, FAQ et preuves.",
  "Redaction orientee utilisateur avec titres clairs et reponses directes.",
  "Ajout de donnees structurees JSON-LD adaptees au contenu.",
  "Optimisation technique : vitesse, rendu serveur, indexation et sitemap.",
  "Suivi des pages strategiques et ameliorations progressives.",
];

const agenticItems = [
  "Des pages qui repondent a des questions completes, pas seulement a un mot-cle.",
  "Des blocs courts et fiables que les moteurs IA peuvent comprendre et citer.",
  "Une coherence entre les offres, les realisations, la zone locale et les appels a l'action.",
  "Des donnees structurees pour expliciter les services, la FAQ, l'entreprise et les zones desservies.",
];

const faq = [
  {
    question: "Pourquoi parler de recherche agentique maintenant ?",
    answer:
      "Parce que Google evolue vers des experiences capables de decomposer une demande complexe, comparer plusieurs sources et proposer des etapes suivantes. Un site clair et structure sera plus facile a comprendre dans ce contexte.",
  },
  {
    question: "Est-ce que le SEO local compte encore ?",
    answer:
      "Oui. Pour une entreprise de service autour de Dijon, Google doit comprendre la zone, les villes couvertes, les prestations et les preuves locales. C'est un signal essentiel pour les recherches geographiques.",
  },
  {
    question: "Combien de temps faut-il pour voir des resultats ?",
    answer:
      "Le referencement naturel se construit dans la duree. La base technique peut etre posee rapidement, puis le contenu, les realisations et les pages locales renforcent la visibilite mois apres mois.",
  },
];

export default function Seo() {
  useRevealOnScroll();

  return (
    <main className="seo-page">
      <Header />
      <BackgroundShapes variant="dark" />

      <section className="seo-hero">
        <p className="seo-eyebrow">Referencement naturel</p>
        <h1>Un site lisible par vos clients, Google et les recherches IA.</h1>
        <p>
          Le referencement ne se limite pas a placer des mots-cles. Je structure
          votre site pour qu'il soit rapide, clair, credible, localement visible
          et pret pour les nouveaux parcours de recherche assistes par l'IA.
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
            Parler de mon referencement
            <span>↗</span>
          </button>

          <TransitionLink to="/zone-intervention" className="seo-secondary">
            Voir la zone d'intervention
          </TransitionLink>
        </div>
      </section>

      <section className="seo-band reveal">
        <article>
          <span>Objectif</span>
          <strong>Etre compris avant d'etre classe</strong>
          <p>
            Une page bien referencee est d'abord une page bien comprise : par un
            humain presse, par Googlebot, par les extraits enrichis et par les
            futures interfaces conversationnelles.
          </p>
        </article>

        <article>
          <span>Zone locale</span>
          <strong>Dijon + 100 km</strong>
          <p>
            Les contenus sont relies aux vraies zones de service : Dijon,
            Beaune, Dole, Chalon-sur-Saone, Langres et les communes proches.
          </p>
        </article>

        <article>
          <span>Socle</span>
          <strong>Next.js, SSR et donnees structurees</strong>
          <p>
            Les pages importantes disposent d'un rendu serveur, de metadata, de
            JSON-LD, d'un sitemap et d'une structure claire.
          </p>
        </article>
      </section>

      <section className="seo-section">
        <div className="seo-section__heading reveal" data-reveal-direction="left">
          <p className="seo-eyebrow">Methode SEO</p>
          <h2>Ce que je mets en place pour renforcer votre visibilite.</h2>
        </div>

        <div className="seo-grid">
          {pillars.map((pillar, index) => (
            <article
              key={pillar.number}
              className="seo-card reveal"
              data-reveal-delay={index * 90}
            >
              <span>{pillar.number}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="seo-agentic">
        <div className="seo-agentic__content reveal" data-reveal-direction="left">
          <p className="seo-eyebrow">Agentic search</p>
          <h2>Preparer le site a la recherche agentique de Google.</h2>
          <p>
            Google fait evoluer la recherche avec des experiences IA capables de
            traiter des demandes plus longues, de poser des questions de suivi
            et de reunir plusieurs angles de reponse. Pour rester visible, un
            site doit devenir une source claire, fiable et facile a exploiter.
          </p>
        </div>

        <div className="seo-agentic__list reveal">
          {agenticItems.map((item) => (
            <div key={item}>
              <span>✓</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="seo-process">
        <div className="seo-section__heading reveal" data-reveal-direction="left">
          <p className="seo-eyebrow">Plan d'action</p>
          <h2>Un referencement structure, mesurable et evolutif.</h2>
        </div>

        <ol className="seo-timeline">
          {workflow.map((step, index) => (
            <li key={step} className="reveal" data-reveal-delay={index * 80}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="seo-faq">
        <div className="seo-section__heading reveal" data-reveal-direction="left">
          <p className="seo-eyebrow">FAQ SEO</p>
          <h2>Les questions importantes avant de travailler le referencement.</h2>
        </div>

        <div className="seo-faq__list">
          {faq.map((item) => (
            <details key={item.question} className="reveal">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
