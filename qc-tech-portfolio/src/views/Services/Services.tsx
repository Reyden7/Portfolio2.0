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

const customSiteOptionGroups = [
  {
    title: "Confiance",
    options: [
      {
        id: "google-reviews",
        label: "Bandeau avis Google",
        price: 250,
      },
      {
        id: "partners-logos",
        label: "Logo partenaires / certifications",
        price: 180,
      },
    ],
  },
  {
    title: "Conversion",
    options: [
      {
        id: "announcement",
        label: "Pop-up ou bandeau d’annonce",
        price: 180,
      },
      {
        id: "advanced-form",
        label: "Formulaire avancé",
        price: 220,
      },
      {
        id: "booking",
        label: "Prise de rendez-vous",
        price: 300,
      },
      {
        id: "brochure-download",
        label: "Téléchargement de brochure / PDF",
        price: 180,
      },
    ],
  },
  {
    title: "Local et SEO",
    options: [
      {
        id: "google-map",
        label: "Localisation Google Map",
        price: 150,
      },
      {
        id: "faq",
        label: "FAQ optimisée SEO",
        price: 180,
      },
    ],
  },
  {
    title: "Contenus",
    options: [
      {
        id: "photo-gallery",
        label: "Galerie photos",
        price: 260,
      },
      {
        id: "video-embed",
        label: "Vidéo intégrée",
        price: 160,
      },
      {
        id: "filterable-portfolio",
        label: "Portfolio / réalisations filtrables",
        price: 380,
      },
      {
        id: "team-page",
        label: "Page équipe",
        price: 220,
      },
      {
        id: "pricing-page",
        label: "Page tarifs",
        price: 220,
      },
      {
        id: "blog",
        label: "Actualités / blog",
        price: 350,
      },
    ],
  },
  {
    title: "Fonctions avancées",
    options: [
      {
        id: "client-area",
        label: "Espace client simple",
        price: 650,
      },
      {
        id: "product-catalog",
        label: "Catalogue produits",
        price: 550,
      },
      {
        id: "multilingual",
        label: "Multilingue",
        price: 480,
      },
      {
        id: "external-tool",
        label: "Connexion à un outil externe",
        price: 700,
      },
    ],
  },
];

const customSiteOptions = customSiteOptionGroups.flatMap((group) => group.options);

const customAppTypes = [
  {
    id: "outil-interne",
    label: "Outil interne simple",
    basePrice: 2990,
    includedScreens: 3,
  },
  {
    id: "dashboard",
    label: "Dashboard métier",
    basePrice: 4200,
    includedScreens: 5,
  },
  {
    id: "app-mobile",
    label: "Application mobile",
    basePrice: 5990,
    includedScreens: 6,
  },
];

const customAppComplexityLevels = [
  {
    id: "simple",
    label: "Processus simple",
    price: 0,
  },
  {
    id: "roles",
    label: "Gestion des rôles",
    price: 650,
  },
  {
    id: "automation",
    label: "Automatisations avancées",
    price: 1200,
  },
];

const customAppOptionGroups = [
  {
    title: "Utilisateurs",
    options: [
      {
        id: "auth",
        label: "Authentification",
        price: 450,
      },
      {
        id: "roles",
        label: "Gestion des rôles",
        price: 650,
      },
      {
        id: "admin-space",
        label: "Espace administrateur",
        price: 800,
      },
    ],
  },
  {
    title: "Données",
    options: [
      {
        id: "advanced-database",
        label: "Base de données avancée",
        price: 900,
      },
      {
        id: "exports",
        label: "Exports PDF / Excel",
        price: 450,
      },
      {
        id: "imports",
        label: "Import CSV / Excel",
        price: 380,
      },
    ],
  },
  {
    title: "Automatisations",
    options: [
      {
        id: "email-notifications",
        label: "Notifications email",
        price: 350,
      },
      {
        id: "api-connection",
        label: "Connexion API",
        price: 700,
      },
      {
        id: "business-automation",
        label: "Automatisations métier",
        price: 950,
      },
    ],
  },
  {
    title: "Interface",
    options: [
      {
        id: "dashboard-view",
        label: "Tableau de bord",
        price: 750,
      },
      {
        id: "search-filters",
        label: "Recherche et filtres",
        price: 350,
      },
      {
        id: "pwa-mobile",
        label: "Mode mobile / PWA",
        price: 500,
      },
    ],
  },
  {
    title: "Sécurité",
    options: [
      {
        id: "activity-log",
        label: "Journal d’activité",
        price: 400,
      },
      {
        id: "simple-backup",
        label: "Sauvegarde simple",
        price: 350,
      },
    ],
  },
];

const customAppOptions = customAppOptionGroups.flatMap((group) => group.options);

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
      tag: "Sur mesure",
      title: "Sur-mesure",
      projectType: "Site internet",
      price: "À partir de 850 €",
      description:
        "Composez votre site selon vos besoins : une base claire, puis les options utiles à votre activité.",
      configurator: "site",
      button: "Discuter de cette configuration",
    },
    {
      index: "02",
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
      index: "03",
      tag: "Professionnel",
      title: "Professionnelle",
      projectType: "Site internet",
      price: "À partir de 2300 €",
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
    
  ],

  apps: [
    {
      index: "01",
      tag: "Sur mesure",
      title: "Sur-mesure",
      projectType: "Application métier",
      price: "À partir de 2 990 €",
      description:
        "Composez votre outil métier selon vos processus : écrans, rôles, données et automatisations utiles.",
      configurator: "app",
      button: "Discuter de cette application",
    },
    {
      index: "02",
      tag: "Essentiel",
      title: "Essentielle",
      projectType: "Application métier",
      price: "À partir de 2 990 €",
      description:
        "Pour digitaliser une tâche métier simple et gagner du temps au quotidien.",
      features: [
        "Interface mobile moderne",
        "Jusqu'à 3 écrans",
        "Android",
      ],
      button: "Demander une app",
    },
    {
      index: "03",
      tag: "Professionnelle",
      title: "Professionnelle",
      projectType: "Application métier",
      price: "À partir de 7 290 €",
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
  const isAppConfigurator = offer.configurator === "app";
  const isConfigurator = isSiteConfigurator || isAppConfigurator;
  const [selectedSiteType, setSelectedSiteType] = useState(customSiteTypes[0].id);
  const [pageCount, setPageCount] = useState(customSiteTypes[0].includedPages);
  const [selectedSeoLevel, setSelectedSeoLevel] = useState(customSeoLevels[0].id);
  const [selectedOptions, setSelectedOptions] = useState(
    isAppConfigurator ? ["auth"] : ["google-reviews"]
  );
  const [selectedAppType, setSelectedAppType] = useState(customAppTypes[0].id);
  const [screenCount, setScreenCount] = useState(customAppTypes[0].includedScreens);
  const [selectedAppComplexity, setSelectedAppComplexity] = useState(
    customAppComplexityLevels[0].id
  );
  const [openOptionGroups, setOpenOptionGroups] = useState([
    isAppConfigurator
      ? customAppOptionGroups[0].title
      : customSiteOptionGroups[0].title,
  ]);

  const optionGroups = isAppConfigurator
    ? customAppOptionGroups
    : customSiteOptionGroups;
  const options = isAppConfigurator ? customAppOptions : customSiteOptions;
  const siteType =
    customSiteTypes.find((type) => type.id === selectedSiteType) ||
    customSiteTypes[0];
  const seoLevel =
    customSeoLevels.find((level) => level.id === selectedSeoLevel) ||
    customSeoLevels[0];
  const appType =
    customAppTypes.find((type) => type.id === selectedAppType) ||
    customAppTypes[0];
  const appComplexity =
    customAppComplexityLevels.find((level) => level.id === selectedAppComplexity) ||
    customAppComplexityLevels[0];
  const safePageCount = Math.max(1, Number(pageCount) || 1);
  const extraPages = Math.max(0, safePageCount - siteType.includedPages);
  const safeScreenCount = Math.max(1, Number(screenCount) || 1);
  const extraScreens = Math.max(0, safeScreenCount - appType.includedScreens);
  const selectedOptionTotal = options
    .filter((option) => selectedOptions.includes(option.id))
    .reduce((total, option) => total + option.price, 0);
  const estimate = isAppConfigurator
    ? appType.basePrice +
      extraScreens * 350 +
      appComplexity.price +
      selectedOptionTotal
    : siteType.basePrice + extraPages * 150 + seoLevel.price + selectedOptionTotal;

  const handleSiteTypeChange = (event) => {
    const nextType = customSiteTypes.find((type) => type.id === event.target.value);

    setSelectedSiteType(event.target.value);
    setPageCount(nextType?.includedPages || 1);
  };

  const handleAppTypeChange = (event) => {
    const nextType = customAppTypes.find((type) => type.id === event.target.value);

    setSelectedAppType(event.target.value);
    setScreenCount(nextType?.includedScreens || 1);
  };

  const toggleOption = (optionId) => {
    setSelectedOptions((currentOptions) =>
      currentOptions.includes(optionId)
        ? currentOptions.filter((id) => id !== optionId)
        : [...currentOptions, optionId]
    );
  };

  const toggleOptionGroup = (groupTitle) => {
    setOpenOptionGroups((currentGroups) =>
      currentGroups.includes(groupTitle)
        ? currentGroups.filter((title) => title !== groupTitle)
        : [...currentGroups, groupTitle]
    );
  };

  const resetConfigurator = () => {
    if (isAppConfigurator) {
      setSelectedAppType(customAppTypes[0].id);
      setScreenCount(customAppTypes[0].includedScreens);
      setSelectedAppComplexity(customAppComplexityLevels[0].id);
      setSelectedOptions(["auth"]);
      setOpenOptionGroups([customAppOptionGroups[0].title]);
      return;
    }

    setSelectedSiteType(customSiteTypes[0].id);
    setPageCount(customSiteTypes[0].includedPages);
    setSelectedSeoLevel(customSeoLevels[0].id);
    setSelectedOptions(["google-reviews"]);
    setOpenOptionGroups([customSiteOptionGroups[0].title]);
  };

  return (
    <article
      className={`service-card${isConfigurator ? " service-card--configurator" : ""}`}
    >
      
      {isConfigurator && (
        <button
          type="button"
          className="service-card__reset"
          aria-label="Réinitialiser la configuration"
          onClick={resetConfigurator}
        >
          ↺
        </button>
      )}

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

      {isConfigurator ? (
        <div className="service-configurator">
          <div className="service-configurator__row">
            <label>
              <span>{isAppConfigurator ? "Type d’application" : "Type de projet"}</span>
              {isAppConfigurator ? (
                <select value={selectedAppType} onChange={handleAppTypeChange}>
                  {customAppTypes.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.label}
                    </option>
                  ))}
                </select>
              ) : (
                <select value={selectedSiteType} onChange={handleSiteTypeChange}>
                  {customSiteTypes.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.label}
                    </option>
                  ))}
                </select>
              )}
            </label>

            <label>
              <span>{isAppConfigurator ? "Nombre d’écrans" : "Nombre de pages"}</span>
              <input
                type="number"
                min="1"
                max="30"
                value={isAppConfigurator ? screenCount : pageCount}
                onChange={(event) =>
                  isAppConfigurator
                    ? setScreenCount(Number(event.target.value))
                    : setPageCount(Number(event.target.value))
                }
              />
            </label>
          </div>

          <label className="service-configurator__field">
            <span>{isAppConfigurator ? "Niveau de complexité" : "Niveau de SEO"}</span>
            {isAppConfigurator ? (
              <select
                value={selectedAppComplexity}
                onChange={(event) => setSelectedAppComplexity(event.target.value)}
              >
                {customAppComplexityLevels.map((level) => (
                  <option key={level.id} value={level.id}>
                    {level.label}
                  </option>
                ))}
              </select>
            ) : (
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
            )}
          </label>

          <fieldset className="service-configurator__options">
            <legend>Options possibles</legend>

            <div>
              {optionGroups.map((group) => {
                const isOpen = openOptionGroups.includes(group.title);
                const selectedCount = group.options.filter((option) =>
                  selectedOptions.includes(option.id)
                ).length;

                return (
                  <section
                    className={`service-configurator__option-group${
                      isOpen ? " is-open" : ""
                    }`}
                    key={group.title}
                  >
                    <button
                      type="button"
                      className="service-configurator__group-toggle"
                      aria-expanded={isOpen}
                      onClick={() => toggleOptionGroup(group.title)}
                    >
                      <span>{group.title}</span>
                      {selectedCount > 0 && <small>{selectedCount}</small>}
                      <strong>⌄</strong>
                    </button>

                    {isOpen && (
                      <div>
                    {group.options.map((option) => (
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
                    )}
                  </section>
                );
              })}
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
          onRequest(
            isConfigurator
              ? `${isAppConfigurator ? appType.label : siteType.label} sur-mesure`
              : offer.projectType
          )
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
