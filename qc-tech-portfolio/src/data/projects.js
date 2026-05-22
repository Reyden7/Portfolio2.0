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
      "TreeJS",
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
      "J'ai créé mon entreprise de développeur freelance en 2026, mon objectif est de présenter mon travail. Je crée des sites internet, des applications mobiles et je fais de la modélisation 3D.",

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
  {
    id: "model-01",
    slug: "paleactica-character",
    category: "modeling",
    categoryLabel: "Modélisation 3D",
    backPath: "/modelisation-3d",

    type: "Personnage",
    title: "Personnage du jeu Paleactica",
    description:
      "Modélisation 3D du personnage joueur du jeu vidéo Paleactica.",
    technologies: ["Blender"],

    model: "/models/Perso.fbx",
    image: "/images/projects/modeling/Perso.png",
    modelScale: 0.025,
    modelPosition: [1, 0, 3.4],
    modelRotation: [0, 0.7, 0],
    autoRotate: false,

    link: "#",
    status: "WebGL",
    context:
      "Modèle 3D conçu pour un projet de jeu vidéo avec une intégration temps réel.",
    goal: "Création d'un personnage en 3D dans Blender.",
  },
  {
    id: "model-02",
    slug: "paleactica-robotBOB",
    category: "modeling",
    categoryLabel: "Modélisation 3D",
    backPath: "/modelisation-3d",

    type: "Robot",
    title: "Robot du jeu Paleactica",
    description:
      "Modélisation 3D du robot compagnon du jeu vidéo Paleactica.",
    technologies: ["Blender"],

    model: "/models/BOB.fbx",
    image: "/images/projects/modeling/BOB.png",
    modelScale: 0.005,
    modelPosition: [-6, -1, 0],
    modelRotation: [-1.7, -0.1, 1.1],
    autoRotate: false,

    link: "#",
    status: "WebGL",
    context:
      "Modèle 3D conçu pour un projet de jeu vidéo avec une intégration temps réel.",
    goal: "Création d'un robot en 3D dans Blender.",
  },
  {
    id: "model-03",
    slug: "paleactica-tools",
    category: "modeling",
    categoryLabel: "Modélisation 3D",
    backPath: "/modelisation-3d",

    type: "Outils",
    title: "Une pelle",
    description: "Modélisation 3D d'une pelle.",
    technologies: ["Blender"],

    model: "/models/Pelle.fbx",
    image: "/images/projects/modeling/Pelle.png",
    modelScale: 0.05,
    modelPosition: [2, -4, 5],
    modelRotation: [-1.7, -0.1, 1.1],
    autoRotate: false,

    link: "#",
    status: "WebGL",
    context:
      "Modèle 3D conçu pour un projet de jeu vidéo avec une intégration temps réel.",
    goal: "Création d'une pelle en 3D dans Blender.",
  },
  {
    id: "model-04",
    slug: "paleactica-flore",
    category: "modeling",
    categoryLabel: "Modélisation 3D",
    backPath: "/modelisation-3d",

    type: "Nature",
    title: "Un champignon géant",
    description: "Modélisation 3D d'un champignon géant.",
    technologies: ["Blender"],

    model: "/models/MushroomBigCavefbx.fbx",
    image: "/images/projects/modeling/ChampiGeant.png",
    modelScale: 0.01,
    modelPosition: [2.4, 0, 5],
    modelRotation: [-1.7, -0.1, 0],
    autoRotate: false,

    link: "#",
    status: "WebGL",
    context:
      "Modèle 3D conçu pour un projet de jeu vidéo avec une intégration temps réel.",
    goal: "Création d'un gros champignon en 3D dans Blender.",
  },
  {
    id: "model-05",
    slug: "paleactica-bot",
    category: "modeling",
    categoryLabel: "Modélisation 3D",
    backPath: "/modelisation-3d",

    type: "Robot",
    title: "BOB version cube",
    description: "Modélisation 3D de la version cube du robot BOB.",
    technologies: ["Blender"],

    model: "/models/BOBCube.fbx",
    image: "/images/projects/modeling/BOBCube.png",
    modelScale: 0.01,
    modelPosition: [2.4, 0, 5],
    modelRotation: [-1.7, -0.1, 0],
    autoRotate: false,

    link: "#",
    status: "WebGL",
    context:
      "Modèle 3D conçu pour un projet de jeu vidéo avec une intégration temps réel.",
    goal: "Création d'un petit cube robot en 3D dans Blender.",
  },
];

export function getProjectsByCategory(category) {
  return projects.filter((project) => project.category === category);
}

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}