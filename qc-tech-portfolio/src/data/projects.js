export const projects = [
  {
    id: "website-01",
    slug: "site-vitrine-professionnel",
    category: "websites",
    categoryLabel: "Sites internet",
    backPath: "/sites-internet",

    type: "Site-vitrine",
    title: "SkyVision",
    description:
      "Création d’un site vitrine moderne pour présenter l'activité du client.",
    technologies: ["React JS", "JavaScript", "CSS", "Responsive Design"],
    image: "/images/projects/websites/SkyvISION.png",
    detailImage: "/images/projects/websites/SkyvISION.png",
    detailVideo: "/videos/projects/websites/skyvision.mp4",
    link: "#",
    status: "Projet vitrine",

    context:
      "L'entreprise SkyVision dans le domaine de la prise de photo et video aérienne nous a fais confiance ! Ils avaient besoin d’un site vitrine impactant pour présenter son activité et rassurer ses futurs clients. Ils leur fallait un site dynamique et moderne pour présenter leur activité",

    goal:
      "Créer une présence en ligne claire, moderne et professionnelle. Les clients devaient tout de suite conaître les tarifs et ce qu'ils impliquaient",
  },
  {
    id: "website-02",
    slug: "site-vitrine-association",
    category: "websites",
    categoryLabel: "Sites internet",
    backPath: "/sites-internet",

    type: "Site-vitrine",
    title: "Master Revi",
    description: "Site internet pour présenter la juniore agence du master REVI",
    technologies: ["HTML", "CSS", "UX/UI", "Tailwind CSS"],
    image: "/images/projects/websites/revi2.png",
    detailImage: "/images/projects/websites/revi2.png",
    detailVideo: "/videos/projects/websites/revinetwork.mp4",
    link: "#",
    status: "Presentation",

    context:
      "En 2022 l'association 'La juniore agence' du Master Revi de Dijon m'a contacté afin de leur créer un site web.",

    goal:
      "La juniore agence souhaitait un site web dans le but de présenter leur école ainsi que leur activité.",
  },
  {
    id: "website-03",
    slug: "website-03",
    category: "websites",
    categoryLabel: "Sites internet",
    backPath: "/sites-internet",

    type: "Site internet",
    title: "Mon portfolio",
    description: "Portfolio de l'entreprise QCTech",
    technologies: [
      "HTML",
      "CSS",
      "React JS",
      "Vite",
      "AnimeJS",
      "EmailJS",
    ],
    image: "/images/projects/websites/Portfolio.png",
    detailImage: "/images/projects/websites/Portfolio.png",
    detailVideo: "/videos/projects/websites/qctech.mp4",
    link: "#",
    status: "Presentation",

    context:
      "J'ai créé mon entreprise de développeur freelance en 2026, mon objectif est de présenter mon travail. Je crée des sites internet et des applications métier.",

    goal: "Présenter le travail de l'entreprise QCtech.",
  },
  {
    id: "app-01",
    slug: "app-01",
    category: "apps",
    categoryLabel: "Applications / Logiciels",
    backPath: "/applications-logiciels",

    type: "Application métier web",
    title: "TicketMaster",
    description:
      "Développement d’un outil de ticketing avec messagerie instantanée simplifiant la création et la gestion de ticket en entreprise.",
    technologies: ["React JS", "HTML", "CSS", "TailwindCSS", "Firebase"],
    image: "/images/projects/apps/ticketmaster.png",
    detailImage: "/images/projects/apps/ticketmaster.png.jpg",
    detailVideo: "/videos/projects/apps/TicketMaster.mp4",
    link: "#",
    status: "Outil sur mesure",

    context:
      "Lorsque j'étais développeur en CDI dans une entreprise de chimie, cette dernière utilisait un système de ticketing vraiment archaïque basé sur Google Sheet. Le nombre de tickets et la rapidité du réseau ralentissaient grandement son utilisation. J'ai donc eu l'idée de créer un système de ticketing en m'inspirant de GLPI.",

    goal: "Avoir un outil de ticketing rapide et efficace.",
  },
  {
    id: "app-02",
    slug: "app-02",
    category: "apps",
    categoryLabel: "Applications / Logiciels",
    backPath: "/applications-logiciels",

    type: "Application compagnon",
    title: "APP compagnon Maussritter",

    detailMediaFit: "contain",
    detailMediaMaxWidth: "390px",
    description: "Application compagnon pour le jeu de rôle Maussritter",
    technologies: ["Flutter", "SupaBase", "Architecture", "UI", "CrossPlatform"],
    image: "/images/projects/apps/MausseRitterLogo.png",
    detailImage: "/images/projects/websites/MausseRitterLogo.png",
    detailVideo: "/videos/projects/apps/MaussRitter.mp4",
    link: "#",
    status: "Gestion",

    context:
      "Un ami qui fait du JDR papier avec l'aventure MaussRitter s'est retrouvé avec énormément de feuilles et de petits morceaux de papier. C'est rapidement devenu compliqué à gérer, j'ai alors eu l'idée de faire une application.",

    goal:
      "L'application devait avoir un système de gestion de compte pour stocker toutes les souris de chaque joueur. Le MJ a sa propre page lui permettant de créer des items avec plusieurs catégories. À la création de son compte, chaque MJ reçoit un code MJ qu'il peut partager avec ses joueurs. Lorsqu'un joueur crée un compte, il n'a plus qu'à renseigner le code de son MJ afin de voir uniquement les items qui lui sont propres.",
  },
];

export function getProjectsByCategory(category) {
  return projects.filter((project) => project.category === category);
}

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
