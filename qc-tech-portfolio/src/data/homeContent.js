export const methodSteps = [
  {
    number: "01",
    title: "Comprendre",
    text: "Échange sur votre activité, vos objectifs, vos contraintes et les problèmes que le projet doit résoudre.",
  },
  {
    number: "02",
    title: "Structurer",
    text: "Transformation de l'idée en plan concret : fonctionnalités, arborescence, parcours utilisateur, priorités et choix techniques.",
  },
  {
    number: "03",
    title: "Concevoir",
    text: "Conception d'une interface propre, lisible et cohérente avec votre image pour éviter un rendu générique.",
  },
  {
    number: "04",
    title: "Développer",
    text: "Construction d'une solution performante, maintenable et adaptée à l’évolution future de votre projet.",
  },
];

export const trustCards = [
  {
    number: "01",
    title: "Vision projet",
    text: "Je ne fonce pas tête baissée dans le développement. On clarifie d’abord le besoin, les priorités et le résultat attendu.",
  },
  {
    number: "02",
    title: "Interface soignée",
    text: "Le rendu visuel compte. Votre site doit donner confiance dès les premières secondes, surtout si vous vendez un service.",
  },
  {
    number: "03",
    title: "Code maintenable",
    text: "Je structure le projet proprement pour éviter un site fragile, difficile à modifier ou impossible à faire évoluer.",
  },
  {
    number: "04",
    title: "Accompagnement",
    text: "Je vous explique les choix importants, les limites, les options possibles et les prochaines étapes. Pas de flou inutile.",
  },
];

export const categoryCards = [
  {
    number: "01",
    badge: "Web",
    title: "Sites internet",
    text: "Sites vitrines, landing pages et interfaces modernes.",
    path: "/sites-internet",
    className: "home-category-card--web",
  },
  {
    number: "02",
    badge: "Logiciels",
    title: "Applications",
    text: "Outils métier, dashboards et logiciels web conçus pour simplifier votre quotidien.",
    path: "/applications-logiciels",
    className: "home-category-card--app",
  },
];

export const faqItems = [
  {
    number: "01",
    question: "Est-ce que je dois déjà avoir un cahier des charges complet ?",
    answer:
      "Non. C’est même rarement le cas. Nous pouvons partir d’une simple idée, puis clarifier ensemble les objectifs, les fonctionnalités, les priorités et le périmètre du projet.",
  },
  {
    number: "02",
    question: "Combien de temps prend la création d’un site ?",
    answer:
      "Ça dépend du périmètre. Une landing page ou un site vitrine simple peut aller assez vite. Un projet plus complet demande forcément plus de cadrage, de design et de développement. Le plus important : définir un périmètre réaliste dès le départ.",
  },
  {
    number: "03",
    question: "Est-ce que le site sera responsive ?",
    answer:
      "Oui. Un site moderne doit être propre sur ordinateur, tablette et mobile. Le responsive n’est pas une option, c’est une base.",
  },
  {
    number: "04",
    question: "Est-ce que vous pouvez faire évoluer le projet après livraison ?",
    answer:
      "Oui. Le projet est structuré pour rester maintenable. Nous pouvons prévoir des évolutions, ajouter des sections, améliorer des fonctionnalités ou faire évoluer l’interface plus tard. Cela dépend du plan de maintenance choisi",
  },
  {
    number: "05",
    question: "Est-ce que vous pouvez m’aider à choisir la bonne solution ?",
    answer:
      "Oui. Notre rôle n’est pas seulement d’exécuter. Nous pouvons vous aider à choisir entre un site vitrine, une landing page, une application métier, une solution simple ou une approche plus évolutive.",
  },
  {
    number: "06",
    question: "Est-ce que vous utilisez l'IA ?",
    answer:
      "Oui. Nous utilisons l'IA en tant que support, cela nous permet de produire un travail plus efficace, rapide et de vous proposer des tarifs vraiment intéréssants",
  },
];

export const offers = [
  {
    number: "01",
    label: "Présence pro",
    title: "Site vitrine",
    price: "À partir de 1 200 €",
    text: "Pour présenter votre activité, vos services, vos réalisations et donner confiance à vos futurs clients.",
    items: [
      "Design responsive",
      "Pages essentielles",
      "Formulaire ou lien de contact",
      "Base SEO propre",
    ],
    cta: "Demander un site",
    featured: false,
    projectType: "Site internet",
  },
  {
    number: "02",
    label: "Conversion",
    title: "Landing page",
    price: "À partir de 800 €",
    text: "Pour mettre en avant une offre précise et guider le visiteur vers une action claire : contact, demande de devis, inscription.",
    items: [
      "Message commercial clair",
      "Structure orientée conversion",
      "Animations fluides",
      "Appel à l’action fort",
    ],
    cta: "Landing page",
    featured: true,
    projectType: "Landing page",
  },
  {
    number: "03",
    label: "Sur mesure",
    title: "Application métier",
    price: "À partir de 3000 €",
    text: "Pour créer un outil adapté à votre organisation : gestion, automatisation, tableau de bord ou interface interne.",
    items: [
      "Analyse du besoin",
      "Interface personnalisée",
      "Gestion de données",
      "Évolutivité du projet",
    ],
    cta: "Application",
    featured: false,
    projectType: "Application métier",
  },
];
