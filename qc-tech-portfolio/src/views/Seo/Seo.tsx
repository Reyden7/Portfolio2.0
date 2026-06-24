"use client";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BackgroundShapes from "../../components/BackgroundShapes/BackgroundShapes";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

const seoSteps = [
  {
    number: "01",
    title: "Comprendre l'activite et les recherches du client",
    details: [
      "Audit des services, des cibles, des mots utilises par les clients et des zones a couvrir.",
      "Analyse des intentions : information, comparaison, demande de devis, recherche locale ou prestation specifique.",
      "Definition des pages vraiment utiles avant d'ecrire ou de modifier le site.",
    ],
    files: ["brief SEO", "arborescence", "contenus existants"],
  },
  {
    number: "02",
    title: "Structurer les pages autour des bonnes intentions",
    details: [
      "Creation ou modification des routes importantes dans l'App Router Next.js.",
      "Organisation claire entre pages de services, pages locales, realisations, FAQ et contact.",
      "URLs simples, lisibles et stables pour faciliter l'indexation.",
    ],
    files: ["src/app/**/page.tsx", "src/views/**", "URLs"],
  },
  {
    number: "03",
    title: "Travailler les titres, metadata et contenus",
    details: [
      "Ajout de metadata Next.js : title, description, canonical et Open Graph selon les pages.",
      "Structure H1/H2/H3 plus claire pour aider Google a comprendre le sujet principal.",
      "Contenus orientes reponses concretes plutot que textes vagues ou repetitifs.",
    ],
    files: ["metadata", "canonical", "Open Graph", "Hn"],
  },
  {
    number: "04",
    title: "Optimiser le maillage interne",
    details: [
      "Ajout de liens entre les pages qui ont un lien logique : prestations, realisations, zone, FAQ, contact.",
      "Navigation et footer renforces pour rendre les pages importantes accessibles rapidement.",
      "Ancres et libelles de liens explicites pour les visiteurs et les moteurs.",
    ],
    files: ["Header", "Footer", "TransitionLink", "liens internes"],
  },
  {
    number: "05",
    title: "Ajouter des donnees structurees",
    details: [
      "Ajout de JSON-LD pour decrire l'entreprise, les services, les FAQ et les zones couvertes.",
      "Utilisation de schema.org pour rendre les informations importantes lisibles par les moteurs.",
      "Verification que les donnees structurees correspondent au contenu visible de la page.",
    ],
    files: ["JSON-LD", "schema.org", "FAQPage", "Service"],
  },
  {
    number: "06",
    title: "Adapter le SEO local a la zone du client",
    details: [
      "Travail de la zone du client uniquement si son activite depend d'un territoire precis.",
      "Creation de contenus locaux utiles : villes couvertes, prestations, preuves et contexte terrain.",
      "Eviter les pages locales artificielles qui repetent le meme texte avec juste un nom de ville.",
    ],
    files: ["page locale", "zone d'intervention", "contenu local"],
  },
  {
    number: "07",
    title: "Soigner les performances techniques",
    details: [
      "Controle du rendu serveur, du poids des pages, des images, du responsive et de l'accessibilite.",
      "Verification du sitemap, du robots, des pages indexables et des routes dynamiques.",
      "Correction des erreurs bloquantes : build, TypeScript, lint, liens casses ou contenus non rendus.",
    ],
    files: ["src/app/sitemap.ts", "src/app/robots.ts", "next build", "lint"],
  },
  {
    number: "08",
    title: "Mesurer et ameliorer dans le temps",
    details: [
      "Suivi de l'indexation et des pages importantes apres la mise en ligne.",
      "Analyse des requetes, des pages qui progressent et des contenus a renforcer.",
      "Ajout progressif de nouvelles pages ou sections selon les vrais besoins du client.",
    ],
    files: ["Search Console", "indexation", "analytics", "ameliorations"],
  },
];

const agenticItems = [
  "Des reponses claires a des questions completes, pas seulement des mots-cles isoles",
  "Des sections courtes et bien nommees que Google peut comprendre, comparer et resumer",
  "Des preuves visibles : realisations, methode, zone d'intervention, services et FAQ coherents",
  "Des donnees structurees pour rendre les informations importantes lisibles par les moteurs",
  "Un contenu fiable, utile et suffisamment precis pour etre cite dans des parcours de recherche assistes par l'IA",
];

const faq = [
  {
    question: "Pourquoi travailler le referencement des la creation du site ?",
    answer:
      "Parce que la structure, les URLs, les titres, les contenus et les performances se preparent mieux au debut. Un site pense pour le SEO est plus simple a faire evoluer ensuite.",
  },
  {
    question: "Est-ce que le SEO local compte encore ?",
    answer:
      "Oui, quand l'activite du client depend d'une zone precise. Google doit comprendre les villes couvertes, les prestations et les preuves locales. Cette zone peut etre n'importe ou en France selon le client.",
  },
  {
    question: "Combien de temps faut-il pour voir des resultats ?",
    answer:
      "Le referencement naturel se construit dans la duree. La base technique peut etre posee rapidement, puis le contenu, les realisations et les pages locales renforcent la visibilite mois apres mois.",
  },
  {
    question: "Le referencement remplace-t-il la publicite ?",
    answer:
      "Non. La publicite peut aider a obtenir des contacts rapidement. Le SEO sert plutot a ce que votre site ressorte le plus possible en premiere ligne.",
  },
];

export default function Seo() {
  useRevealOnScroll();

  return (
    <main className="seo-page">
      <Header />
      <BackgroundShapes variant="dark" />

      <section className="seo-hero seo-hero--simple">
        <p className="seo-eyebrow">Referencement naturel</p>
        <h1>Comment travailler sur le referencement d'un site ?</h1>
        <p>
          Le referencement repose sur un ensemble d'actions coherentes :
          comprendre le client, structurer les pages, ecrire des contenus
          utiles, optimiser la technique et faire evoluer le site dans le temps.
        </p>
      </section>

      <section className="seo-section seo-section--first">
        <div className="seo-grid seo-grid--steps">
          {seoSteps.map((step, index) => (
            <article
              key={step.number}
              className="seo-card reveal"
              data-reveal-delay={index * 70}
            >
              <span>{step.number}</span>

              <div className="seo-card__content">
                <h3>{step.title}</h3>

                <ul>
                  {step.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>

                <div
                  className="seo-card__files"
                  aria-label="Elements techniques concernes"
                >
                  {step.files.map((file) => (
                    <small key={file}>{file}</small>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="seo-agentic">
        <div className="seo-agentic__content reveal" data-reveal-direction="left">
          <p className="seo-eyebrow">Futur du SEO</p>
          <h2>Preparer le referencement au futur Google Agentic.</h2>
          <p>
            Google fait evoluer la recherche vers des experiences capables de
            comprendre des demandes plus longues, de comparer plusieurs sources
            et de proposer des reponses plus completes. Pour s'y preparer, le
            site doit devenir une source claire, fiable, structuree et facile a
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
