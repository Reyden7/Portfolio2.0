"use client";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BackgroundShapes from "../../components/BackgroundShapes/BackgroundShapes";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

const seoSteps = [
  {
    number: "01",
    title: "Comprendre l'activite et les recherches du client",
    text: "Identifier les prestations importantes, les zones desservies, les clients vises et les questions que les visiteurs se posent avant de contacter l'entreprise.",
  },
  {
    number: "02",
    title: "Structurer les pages autour des bonnes intentions",
    text: "Creer une architecture claire avec une page par sujet important : service, realisation, zone locale, methode, FAQ ou preuve client.",
  },
  {
    number: "03",
    title: "Travailler les titres, metadata et contenus",
    text: "Ecrire des titres lisibles, des descriptions utiles, des textes naturels et des sections qui repondent directement aux recherches des futurs clients.",
  },
  {
    number: "04",
    title: "Optimiser le maillage interne",
    text: "Relier les pages entre elles de facon logique pour aider Google et les visiteurs a comprendre les services, les realisations et la zone d'intervention.",
  },
  {
    number: "05",
    title: "Ajouter des donnees structurees",
    text: "Mettre en place du JSON-LD pour expliciter l'entreprise, les services, les questions frequentes, les projets et les zones desservies.",
  },
  {
    number: "06",
    title: "Renforcer le SEO local",
    text: "Travailler Dijon, la Cote-d'Or et les villes dans le rayon d'intervention avec des contenus utiles, pas des pages remplies artificiellement.",
  },
  {
    number: "07",
    title: "Soigner les performances techniques",
    text: "Verifier la vitesse, le rendu serveur, le sitemap, le fichier robots, l'accessibilite, les images, les URLs et la proprete du code.",
  },
  {
    number: "08",
    title: "Mesurer et ameliorer dans le temps",
    text: "Suivre les pages importantes, ajuster les contenus, enrichir les realisations et faire evoluer la strategie selon les resultats observes.",
  },
];

const agenticItems = [
  "Des reponses claires a des questions completes, pas seulement des mots-cles isoles.",
  "Des sections courtes et bien nommees que Google peut comprendre, comparer et resumer.",
  "Des preuves visibles : realisations, methode, zone d'intervention, services et FAQ coherents.",
  "Des donnees structurees pour rendre les informations importantes lisibles par les moteurs.",
  "Un contenu fiable, utile et suffisamment precis pour etre cite dans des parcours de recherche assistes par l'IA.",
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
      "Oui. Pour une entreprise de service autour de Dijon, Google doit comprendre la zone, les villes couvertes, les prestations et les preuves locales. C'est un signal essentiel pour les recherches geographiques.",
  },
  {
    question: "Combien de temps faut-il pour voir des resultats ?",
    answer:
      "Le referencement naturel se construit dans la duree. La base technique peut etre posee rapidement, puis le contenu, les realisations et les pages locales renforcent la visibilite mois apres mois.",
  },
  {
    question: "Le referencement remplace-t-il la publicite ?",
    answer:
      "Non. La publicite peut aider a obtenir des contacts rapidement. Le SEO sert plutot a construire une visibilite durable et une presence plus credible dans le temps.",
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
        <div className="seo-section__heading reveal" data-reveal-direction="left">
          <p className="seo-eyebrow">Etapes et astuces</p>
          <h2>Les points que je travaille pour le client.</h2>
        </div>

        <div className="seo-grid seo-grid--steps">
          {seoSteps.map((step, index) => (
            <article
              key={step.number}
              className="seo-card reveal"
              data-reveal-delay={index * 70}
            >
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
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
