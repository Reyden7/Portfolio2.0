"use client";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BackgroundShapes from "../../components/BackgroundShapes/BackgroundShapes";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

const seoSteps = [
  {
    number: "01",
    title: "Comprendre l'activité et les recherches du client",
  },
  {
    number: "02",
    title: "Structurer les pages autour des bonnes intentions",
  },
  {
    number: "03",
    title: "Travailler les titres, metadata et contenus",
  },
  {
    number: "04",
    title: "Optimiser le maillage interne",
  },
  {
    number: "05",
    title: "Ajouter des données structurées",
  },
  {
    number: "06",
    title: "Adapter le SEO local à la zone du client",
  },
  {
    number: "07",
    title: "Soigner les performances techniques",
  },
  {
    number: "08",
    title: "Mesurer et améliorer dans le temps",
  },
];

const agenticItems = [
  "Des réponses claires à des questions complètes, pas seulement des mots-clés isolés",
  "Des sections courtes et bien nommées que Google peut comprendre, comparer et résumer",
  "Des preuves visibles : réalisations, méthode, zone d'intervention, services et FAQ cohérents",
  "Des données structures pour rendre les informations importantes lisibles par les moteurs.",
  "Un contenu fiable, utile et suffisamment précis pour être cité dans des parcours de recherche assistés par l'IA.",
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
      "Non. La publicité peut aider à obtenir des contacts rapidement. Le SEO sert plutôt à ce que votre site ressorte le plus possible en première ligne",
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
        <h1>Comment travailler sur le référencement d'un site ?</h1>
        <p>
          Le référencement repose sur un ensemble d'actions cohérentes :
          comprendre le client, structurer les pages, écrire des contenus
          Utiles, optimiser la technique et faire évoluer le site dans le temps.
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
              <h3>{step.title}</h3>
            </article>
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
            Et de proposer des réponses plus complètes. Pour s'y préparer, le
            site doit devenir une source claire, fiable, structure et facile à
            Exploiter par un moteur comme par un assistant IA.
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
          <h2>Les questions importantes avant de travailler le référencement.</h2>
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
