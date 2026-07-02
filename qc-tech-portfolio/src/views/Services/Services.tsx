"use client";

import { useRef, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BackgroundShapes from "../../components/BackgroundShapes/BackgroundShapes";

const serviceTabs = [
  {
    id: "sites",
    label: "Site internet",
  },
  {
    id: "apps",
    label: "Application métier",
  },
];

const customSiteTypes = [
  {
    id: "site-vitrine",
    label: "Site vitrine",
    basePrice: 850,
    includedPages: 3,
  },
  {
    id: "landing-page",
    label: "Landing page",
    basePrice: 650,
    includedPages: 1,
  },
  {
    id: "site-ecommerce",
    label: "Site e-commerce",
    basePrice: 1800,
    includedPages: 5,
  },
];

const customSeoLevels = [
  {
    id: "base",
    label: "SEO de base",
    price: 0,
  },
  {
    id: "renforce",
    label: "SEO renforcé",
    price: 450,
  },
  {
    id: "local",
    label: "SEO local complet",
    price: 650,
  },
];

const customSiteOptions = [
  {
    id: "google-reviews",
    label: "Bandeau avis Google",
    price: 250,
  },
  {
    id: "google-map",
    label: "Localisation Google Map",
    price: 150,
  },
  {
    id: "advanced-form",
    label: "Formulaire avancé",
    price: 220,
  },
  {
    id: "faq",
    label: "FAQ optimisée SEO",
    price: 180,
  },
  {
    id: "booking",
    label: "Prise de rendez-vous",
    price: 300,
  },
  {
    id: "blog",
    label: "Actualités / blog",
    price: 350,
  },
];

const formatPrice = (value) =>
  new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);

const offers = {
  sites: [
    {
      index: "01",
      tag: "Essentielle",
      title: "Essentielle",
      projectType: "Site internet",
      oldPrice: "1200 €",
      price: "850 €",
      promoLabel: "Promo de lancement",
      description:
        "Pour les artisans, indépendants, associations et petites entreprises souhaitant une présence professionnelle sur internet.",
      features: [
        "Design moderne personnalisé",
        "Site responsive",
        "Jusqu'à 3 pages",
        "Formulaire de contact",
        "SEO de base",
        "Mise en ligne incluse",
      ],
      button: "Demander un site",
    },
    {
      index: "02",
      tag: "Professionnel",
      title: "Professionnelle",
      projectType: "Site internet",
      price: "À partir de 1 990 €",
      description:
        "Pour les entreprises qui souhaitent un site plus complet, plus crédible et davantage orienté conversion.",
      features: [
        "Design premium personnalisé",
        "Jusqu'à 8 pages",
        "Formulaire avancé",
        "Avis clients",
        "FAQ",
        "SEO renforcé",
      ],
      button: "Demander un site pro",
    },
    {
      index: "03",
      tag: "Sur mesure",
      title: "Sur-mesure",
      projectType: "Site internet",
      price: "À partir de 850 €",
      description:
        "Composez votre site selon vos besoins : une base claire, puis les options utiles à votre activité.",
      configurator: "site",
      button: "Discuter de cette configuration",
    },
  ],

  apps: [
    {
      index: "01",
      tag: "Essentiel",
      title: "Essentielle",
      projectType: "Application métier",
      price: "À partir de 2 990 €",
      description:
        "Pour digitaliser une tâche métier simple et gagner du temps au quotidien.",
      features: [
        "Interface mobile moderne",
        "Jusqu'à 3 écrans",
        "Authentification",
        "Base de données",
        "Formulaires de saisie",
        "Android",
      ],
      button: "Demander une app",
    },
    {
      index: "02",
      tag: "Professionnelle",
      title: "Professionnelle",
      projectType: "Application métier",
      price: "À partir de 5 990 €",
      description:
        "Pour les entreprises qui souhaitent digitaliser et automatiser une partie importante de leur activité.",
      features: [
        "Jusqu'à 10 écrans",
        "Gestion des rôles",
        "Tableau de bord avancé",
        "Historique des actions",
        "Notifications",
        "Export PDF",
      ],
      button: "Demander une app pro",
    },
    {
      index: "03",
      tag: "Sur mesure",
      title: "Sur-Mesure",
      projectType: "Application métier",
      price: "À partir de 9 990 €",
      description:
        "Pour créer une application mobile complète, stratégique et adaptée aux processus internes.",
      features: [
        "Interface premium",
        "Nombre d'écrans selon projet",
        "Permissions avancées",
        "Exports PDF / Excel",
        "Connexions API",
        "Automatisations métier",
      ],
      button: "Demander un devis",
    },
  ],

};

const maintenancePlans = {
  sites: [
    {
      title: "Maintenance Essentielle",
      price: "20 €/mois",
      features: [
        "Mises à jour techniques",
        "Assistance par email",
        "30 minutes de modifications simples par mois",
        "Sans engagement",
      ],
    },
    {
      title: "Maintenance Confort",
      price: "39 €/mois",
      features: [
        "Tout l'Essentiel",
        "1h30 de modifications simples par mois",
        "Priorité sur les demandes",
        "Vérification mensuelle du site",
      ],
    },
    {
      title: "Maintenance Sérénité",
      price: "79 €/mois",
      features: [
        "Tout le Confort",
        "3h de modifications simples par mois",
        "Suivi mensuel des performances",
        "Rapport simple par email",
      ],
    },
  ],

  apps: [
    {
      title: "Maintenance App Essentielle",
      price: "39 €/mois",
      features: [
        "Mises à jour techniques",
        "Assistance par email",
        "30 minutes de modifications simples par mois",
        "Sans engagement",
      ],
    },
    {
      title: "Maintenance App Confort",
      price: "79 €/mois",
      features: [
        "Tout l'Essentiel",
        "1h30 de modifications simples par mois",
        "Priorité sur les demandes",
        "Vérification mensuelle de l'application",
      ],
    },
    {
      title: "Maintenance App Sérénité",
      price: "149 €/mois",
      features: [
        "Tout le Confort",
        "3h de modifications simples par mois",
        "Suivi mensuel de l'application",
        "Rapport simple par email",
      ],
    },
  ],
};

function OfferCard({ offer, onRequest }) {
  const isSiteConfigurator = offer.configurator === "site";
  const [selectedSiteType, setSelectedSiteType] = useState(customSiteTypes[0].id);
  const [pageCount, setPageCount] = useState(customSiteTypes[0].includedPages);
  const [selectedSeoLevel, setSelectedSeoLevel] = useState(customSeoLevels[0].id);
  const [selectedOptions, setSelectedOptions] = useState(["google-reviews"]);

  const siteType =
    customSiteTypes.find((type) => type.id === selectedSiteType) ||
    customSiteTypes[0];
  const seoLevel =
    customSeoLevels.find((level) => level.id === selectedSeoLevel) ||
    customSeoLevels[0];
  const safePageCount = Math.max(1, Number(pageCount) || 1);
  const extraPages = Math.max(0, safePageCount - siteType.includedPages);
  const selectedOptionTotal = customSiteOptions
    .filter((option) => selectedOptions.includes(option.id))
    .reduce((total, option) => total + option.price, 0);
  const estimate =
    siteType.basePrice + extraPages * 150 + seoLevel.price + selectedOptionTotal;

  const handleSiteTypeChange = (event) => {
    const nextType = customSiteTypes.find((type) => type.id === event.target.value);

    setSelectedSiteType(event.target.value);
    setPageCount(nextType?.includedPages || 1);
  };

  const toggleOption = (optionId) => {
    setSelectedOptions((currentOptions) =>
      currentOptions.includes(optionId)
        ? currentOptions.filter((id) => id !== optionId)
        : [...currentOptions, optionId]
    );
  };

  return (
    <article
      className={`service-card${isSiteConfigurator ? " service-card--configurator" : ""}`}
    >
      

      <h2>{offer.title}</h2>

      <div className="service-card__price-wrap">
        {offer.promoLabel && (
          <span className="service-card__promo-label">{offer.promoLabel}</span>
        )}

        <div className="service-card__price-row">
          {offer.oldPrice && (
            <span className="service-card__old-price">{offer.oldPrice}</span>
          )}
          <span className="service-card__price">{offer.price}</span>
        </div>
      </div>
      <p>{offer.description}</p>

      {isSiteConfigurator ? (
        <div className="service-configurator">
          <div className="service-configurator__row">
            <label>
              <span>Type de projet</span>
              <select value={selectedSiteType} onChange={handleSiteTypeChange}>
                {customSiteTypes.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.label}
                  </option>
                ))}
              </select>
            </label>

            <label>
              <span>Nombre de pages</span>
              <input
                type="number"
                min="1"
                max="30"
                value={pageCount}
                onChange={(event) => setPageCount(Number(event.target.value))}
              />
            </label>
          </div>

          <label className="service-configurator__field">
            <span>Niveau de SEO</span>
            <select
              value={selectedSeoLevel}
              onChange={(event) => setSelectedSeoLevel(event.target.value)}
            >
              {customSeoLevels.map((level) => (
                <option key={level.id} value={level.id}>
                  {level.label}
                </option>
              ))}
            </select>
          </label>

          <fieldset className="service-configurator__options">
            <legend>Options possibles</legend>

            <div>
              {customSiteOptions.map((option) => (
                <label key={option.id}>
                  <input
                    type="checkbox"
                    checked={selectedOptions.includes(option.id)}
                    onChange={() => toggleOption(option.id)}
                  />
                  <span>
                    <strong>{option.label}</strong>
                    <small>+ {formatPrice(option.price)}</small>
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="service-configurator__estimate">
            <span>Estimation indicative</span>
            <strong>À partir de {formatPrice(estimate)}</strong>
            <small>
              Chaque projet reste ajusté après échange, selon le contenu, le
              design et les contraintes techniques.
            </small>
          </div>
        </div>
      ) : (
        <ul>
          {offer.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      )}

      <button
        type="button"
        className="service-card__button"
        onClick={() =>
          onRequest(isSiteConfigurator ? `${siteType.label} sur-mesure` : offer.projectType)
        }
      >
        {offer.button}
        <span>↗</span>
      </button>
    </article>
  );
}

function MaintenanceCard({ plan }) {
  return (
    <article className="maintenance-card">
      <h3>{plan.title}</h3>
      <span>{plan.price}</span>

      <ul>
        {plan.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </article>
  );
}

export default function Services() {
  const [activeTab, setActiveTab] = useState("sites");


  const contactRef = useRef(null);

  const currentOffers = offers[activeTab];
  const currentMaintenance = maintenancePlans[activeTab];

  const handleRequest = (projectType) => {
    window.dispatchEvent(
      new CustomEvent("digitalloom-project-type", {
        detail: {
          projectType,
        },
      })
    );

    setTimeout(() => {
      contactRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 80);
  };

  return (
    <main className="services-page">
      <BackgroundShapes variant="dark" />
      <Header />
      
      <section className="services-hero">
        <span className="services-hero__eyebrow">DigitalLoom</span>
        <h1>Nos prestations</h1>
        <p>
          Des offres claires pour créer un site moderne ou une application métier utile, adaptée à vos objectifs.
        </p>

        <div className="services-tabs">
          {serviceTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={activeTab === tab.id ? "is-active" : ""}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      <section className="services-grid">
        {currentOffers.map((offer) => (
        <OfferCard
          key={offer.title}
          offer={offer}
          onRequest={handleRequest}
        />
      ))}
      </section>

      {currentMaintenance && (
        <section className="maintenance-section">
          <div className="maintenance-section__header">
            <span>Maintenance</span>
            <h2>Plans de maintenance</h2>
            <p>
              Pour garder votre projet propre, sécurisé et évolutif après sa
              mise en ligne.
            </p>
          </div>

          <div className="maintenance-grid">
            {currentMaintenance.map((plan) => (
              <MaintenanceCard key={plan.title} plan={plan} />
            ))}
          </div>
        </section>
      )}
      <div ref={contactRef} className="services-contact">
        <Footer />
      </div>
    </main>
  );
}
