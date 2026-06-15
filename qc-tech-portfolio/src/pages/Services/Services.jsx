import { useRef, useState } from "react";
import "./Services.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const serviceTabs = [
  {
    id: "sites",
    label: "Site internet",
  },
  {
    id: "apps",
    label: "Application métier",
  },
  {
    id: "3d",
    label: "Modélisation 3D",
  },
];

const offers = {
  sites: [
    {
      index: "01",
      tag: "Essentielle",
      title: "Essentielle",
      projectType: "Site internet",
      oldPrice: "990 €",
      price: "650 €",
      promoLabel: "Promo de lancement",
      description:
        "Pour les artisans, indépendants, associations et petites entreprises souhaitant une présence professionnelle sur internet.",
      features: [
        "Design moderne personnalisé",
        "Site responsive",
        "Jusqu'à 5 pages",
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
      title: "Sur-Mesure",
      projectType: "Site internet",
      price: "À partir de 3 490 €",
      description:
        "Pour les entreprises qui souhaitent un site haut de gamme, différenciant et doté de fonctionnalités avancées.",
      features: [
        "Design premium sur mesure",
        "Jusqu'à 12 pages",
        "Animations modernes",
        "Réservation simple possible",
        "Automatisation légère",
        "Intégration vidéo",
      ],
      button: "Demander un devis",
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
        "Android et iOS",
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

  "3d": [
    {
      index: "01",
      tag: "Essentiel",
      title: "Essentielle",
      projectType: "Modélisation 3D",
      price: "À partir de 50 €",
      description: "Pour la création d'un modèle 3D simple.",
      features: [
        "Objet simple",
        "Export FBX, OBJ, STL ou GLB",
        "1 aller-retour de correction",
        "Références visuelles",
        "Usage web ou présentation",
      ],
      button: "Demander un modèle",
    },
    {
      index: "02",
      tag: "Professionnelle",
      title: "Professionnelle",
      projectType: "Modélisation 3D",
      price: "À partir de 250 €",
      description:
        "Pour créer un modèle 3D propre, optimisé et exploitable pour un site, une application ou un jeu.",
      features: [
        "Objet détaillé",
        "Optimisation du modèle",
        "UV propres",
        "Textures simples",
        "2 allers-retours de correction",
        "Export complet",
      ],
      button: "Demander une 3D pro",
    },
    {
      index: "03",
      tag: "Sur mesure",
      title: "Sur-Mesure",
      projectType: "Modélisation 3D",
      price: "À partir de 790 €",
      description:
        "Pour les projets 3D complexes nécessitant un niveau de détail élevé ou une contrainte technique spécifique.",
      features: [
        "Objet complexe",
        "Personnage ou créature",
        "Textures personnalisées",
        "Optimisation selon usage",
        "3 allers-retours de correction",
        "Modèle jeu, web ou impression 3D",
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
  return (
    <article className="service-card">
      

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

      <ul>
        {offer.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      <button
        type="button"
        className="service-card__button"
        onClick={() => onRequest(offer.projectType)}
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
      <Header />
      <section className="services-hero">
        <span className="services-hero__eyebrow">DigitalLoom</span>
        <h1>Nos prestations</h1>
        <p>
          Des offres claires pour créer un site moderne, une application métier
          utile ou un modèle 3D adapté à votre projet.
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
      <div ref={contactRef}>
        <Footer />
      </div>
    </main>
  );
}