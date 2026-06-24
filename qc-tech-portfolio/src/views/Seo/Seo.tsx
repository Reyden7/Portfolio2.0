"use client";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BackgroundShapes from "../../components/BackgroundShapes/BackgroundShapes";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

const seoSteps = [
  {
    number: "01",
    title: "Comprendre l'activité et les recherches du client",
    details: [
      "Audit des services, des cibles, des mots utilisés par les clients et des zones à couvrir.",
      "Analyse des intentions : information, comparaison, demande de devis, recherche locale ou prestation spécifique.",
      "Définition des pages vraiment utiles avant d'écrire ou de modifier le site.",
    ],
    files: ["brief SEO", "arborescence", "contenus existants"],
  },
  {
    number: "02",
    title: "Structurer les pages autour des bonnes intentions",
    details: [
      "Création ou modification des routes importantes dans l'App Router Next.js.",
      "Organisation claire entre pages de services, pages locales, réalisations, FAQ et contact.",
      "URLs simples, lisibles et stables pour faciliter l'indexation.",
    ],
    files: ["src/app/**/page.tsx", "src/views/**", "URLs"],
  },
  {
    number: "03",
    title: "Travailler les titres, metadata et contenus",
    details: [
      "Ajout de metadata Next.js : title, description, canonical et Open Graph selon les pages.",
      "Structure H1/H2/H3 plus claire pour aider Google à comprendre le sujet principal.",
      "Contenus orientés réponses concrètes plutôt que textes vagues ou répétitifs.",
    ],
    files: ["metadata", "canonical", "Open Graph", "Hn"],
  },
  {
    number: "04",
    title: "Optimiser le maillage interne",
    details: [
      "Ajout de liens entre les pages qui ont un lien logique : prestations, réalisations, zone, FAQ, contact.",
      "Navigation et footer renforcés pour rendre les pages importantes accessibles rapidement.",
      "Ancres et libellés de liens explicites pour les visiteurs et les moteurs.",
    ],
    files: ["Header", "Footer", "TransitionLink", "liens internes"],
  },
  {
    number: "05",
    title: "Ajouter des données structurées",
    details: [
      "Ajout de JSON-LD pour décrire l'entreprise, les services, les FAQ et les zones couvertes.",
      "Utilisation de schema.org pour rendre les informations importantes lisibles par les moteurs.",
      "Vérification que les données structurées correspondent au contenu visible de la page.",
    ],
    files: ["JSON-LD", "schema.org", "FAQPage", "Service"],
  },
  {
    number: "06",
    title: "Adapter le SEO local à la zone du client",
    details: [
      "Travail de la zone du client uniquement si son activité dépend d'un territoire précis.",
      "Création de contenus locaux utiles : villes couvertes, prestations, preuves et contexte terrain.",
      "Éviter les pages locales artificielles qui répètent le même texte avec juste un nom de ville.",
    ],
    files: ["page locale", "zone d'intervention", "contenu local"],
  },
  {
    number: "07",
    title: "Soigner les performances techniques",
    details: [
      "Contrôle du rendu serveur, du poids des pages, des images, du responsive et de l'accessibilité.",
      "Vérification du sitemap, du robots, des pages indexables et des routes dynamiques.",
      "Correction des erreurs bloquantes : build, TypeScript, lint, liens cassés ou contenus non rendus.",
    ],
    files: ["src/app/sitemap.ts", "src/app/robots.ts", "next build", "lint"],
  },
  {
    number: "08",
    title: "Mesurer et améliorer dans le temps",
    details: [
      "Suivi de l'indexation et des pages importantes après la mise en ligne.",
      "Analyse des requêtes, des pages qui progressent et des contenus à renforcer.",
      "Ajout progressif de nouvelles pages ou sections selon les vrais besoins du client.",
    ],
    files: ["Search Console", "indexation", "analytics", "améliorations"],
  },
];

const agenticItems = [
  "Des réponses claires à des questions complètes, pas seulement des mots-clés isolés",
  "Des sections courtes et bien nommées que Google peut comprendre, comparer et résumer",
  "Des preuves visibles : réalisations, méthode, zone d'intervention, services et FAQ cohérents",
  "Des données structurées pour rendre les informations importantes lisibles par les moteurs",
  "Un contenu fiable, utile et suffisamment précis pour être cité dans des parcours de recherche assistés par l'IA",
];

const faq = [
  {
    question: "Pourquoi travailler le référencement dès la création du site ?",
    answer:
      "Parce que la structure, les URLs, les titres, les contenus et les performances se préparent mieux au début. Un site pensé pour le SEO est plus simple à faire évoluer ensuite.",
  },
  {
    question: "Est-ce que le SEO local compte encore ?",
    answer:
      "Oui, quand l'activité du client dépend d'une zone précise. Google doit comprendre les villes couvertes, les prestations et les preuves locales. Cette zone peut être n'importe où en France selon le client.",
  },
  {
    question: "Combien de temps faut-il pour voir des résultats ?",
    answer:
      "Le référencement naturel se construit dans la durée. La base technique peut être posée rapidement, puis le contenu, les réalisations et les pages locales renforcent la visibilité mois après mois.",
  },
  {
    question: "Le référencement remplace-t-il la publicité ?",
    answer:
      "Non. La publicité peut aider à obtenir des contacts rapidement. Le SEO sert plutôt à ce que votre site ressorte le plus possible en première ligne.",
  },
];

export default function Seo() {
  useRevealOnScroll();

  return (
    <main className="seo-page">
      <Header />
      <BackgroundShapes variant="dark" />

      <section className="seo-hero seo-hero--simple">
        <p className="seo-eyebrow">Référencement naturel</p>
        <h1>Comment travailler sur le référencement d'un site ?</h1>
        <p>
          Le référencement repose sur un ensemble d'actions cohérentes :
          comprendre le client, structurer les pages, écrire des contenus
          utiles, optimiser la technique et faire évoluer le site dans le temps.
        </p>
      </section>

      <section className="seo-section seo-section--first">
        <div className="seo-grid seo-grid--steps">
          {seoSteps.map((step, index) => (
            <details
              key={step.number}
              className="seo-card seo-step-details reveal"
              data-reveal-delay={index * 70}
            >
              <summary>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
              </summary>

              <div className="seo-card__content">
                <ul>
                  {step.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>

                <div
                  className="seo-card__files"
                  aria-label="Éléments techniques concernés"
                >
                  {step.files.map((file) => (
                    <small key={file}>{file}</small>
                  ))}
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="seo-agentic">
        <div className="seo-agentic__content reveal" data-reveal-direction="left">
          <p className="seo-eyebrow">Futur du SEO</p>
          <h2>Préparer le référencement au futur Google Agentic.</h2>
          <p>
            Google fait évoluer la recherche vers des expériences capables de
            comprendre des demandes plus longues, de comparer plusieurs sources
            et de proposer des réponses plus complètes. Pour s'y préparer, le
            site doit devenir une source claire, fiable, structurée et facile à
            exploiter par un moteur comme par un assistant IA.
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

      <section className="seo-faq">
        <div className="seo-section__heading reveal" data-reveal-direction="left">
          <p className="seo-eyebrow">FAQ SEO</p>
          <h2>Les questions importantes</h2>
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
