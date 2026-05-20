export const websiteProjects = [
  {
    id: "website-01",
    slug: "site-vitrine-professionnel",
    type: "Site internet",
    title: "Site vitrine ",
    description:
      "Création d’un site vitrine moderne pour présenter une activité, rassurer les visiteurs et faciliter la prise de contact.",
    technologies: ["React", "JavaScript", "CSS", "Responsive Design"],
    image: "/images/projects/websites/site-vitrine.jpg",
    link: "#",
    status: "Projet vitrine",
  },
  {
    id: "website-02",
    slug: "Landing page",
    type: "Landing page",
    title: "Landing page conversion",
    description:
      "Page optimisée pour présenter une offre claire, guider l’utilisateur et convertir les visiteurs en prospects.",
    technologies: ["React", "UX/UI", "SEO", "Animation"],
    image: "/images/projects/websites/landing-page.jpg",
    link: "#",
    status: "Conversion",
  },
  {
    id: "website-03",
    slug: "website-03",
    type: "Refonte",
    title: "Refonte graphique",
    description:
      "Modernisation complète d’une interface existante afin de renforcer l’image de marque et améliorer l’expérience utilisateur.",
    technologies: ["Design System", "CSS", "Accessibilité", "Performance"],
    image: "/images/projects/websites/refonte.jpg",
    link: "#",
    status: "Modernisation",
  },
];

export const appProjects = [
  {
    id: "app-01",
    slug: "app-01",
    type: "Application métier",
    title: "Application métier",
    description:
      "Développement d’un outil interne sur mesure pour simplifier les tâches répétitives et centraliser les informations importantes.",
    technologies: ["React", "Node.js", "API", "Dashboard"],
    image: "/images/projects/apps/app-metier.jpg",
    link: "#",
    status: "Outil sur mesure",
  },
  {
    id: "app-02",
    slug: "app-02",
    type: "Logiciel",
    title: "Logiciel de gestion",
    description:
      "Interface claire pour gérer des données, suivre une activité et automatiser certains processus métier.",
    technologies: ["C#", "SQL", "Architecture", "UI"],
    image: "/images/projects/apps/logiciel-gestion.jpg",
    link: "#",
    status: "Gestion",
  },
  {
    id: "app-03",
    slug: "app-03",
    type: "Mobile",
    title: "Application mobile",
    description:
      "Prototype mobile pensé pour une navigation rapide, lisible et adaptée aux usages quotidiens.",
    technologies: ["Flutter", "Supabase", "Auth", "Mobile UX"],
    image: "/images/projects/apps/mobile-app.jpg",
    link: "#",
    status: "Mobile",
  },
];

export const modelingProjects = [
  {
    id: "model-01",
    slug: "objet-3d-interactif",
    type: "Objet 3D",
    title: "Objet 3D interactif",
    description:
      "Visualisation 3D intégrée directement dans une page web, avec rotation libre et inspection du modèle.",
    technologies: ["Three.js", "React Three Fiber", "FBX", "WebGL"],
    model: "",
    link: "#",
    status: "WebGL",
  },
];

export const allProjects = [
  ...websiteProjects.map((project) => ({
    ...project,
    category: "websites",
    categoryLabel: "Sites internet",
    backPath: "/sites-internet",
  })),
  ...appProjects.map((project) => ({
    ...project,
    category: "apps",
    categoryLabel: "Applications / Logiciels",
    backPath: "/applications-logiciels",
  })),
  ...modelingProjects.map((project) => ({
    ...project,
    category: "modeling",
    categoryLabel: "Modélisation 3D",
    backPath: "/modelisation-3d",
  })),
];

export function getProjectBySlug(slug) {
  return allProjects.find((project) => project.slug === slug);
}