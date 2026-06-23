import Providers from "./providers";
import "../index.css";
import "../components/BackgroundShapes/BackgroundShapes.css";
import "../components/CategoryCard/CategoryCard.css";
import "../components/CustomCursor/CustomCursor.css";
import "../components/Fireworks/Fireworks.css";
import "../components/Footer/Footer.css";
import "../components/Header/Header.css";
import "../components/Loader/Loader.css";
import "../components/ModelProjectCard/ModelProjectCard.css";
import "../components/ModelViewer/ModelViewer.css";
import "../components/PageTransition/PageTransition.css";
import "../components/ProjectCard/ProjectCard.css";
import "../components/ProjectPageLayout/ProjectPageLayout.css";
import "../components/ScrollProgress/ScrollProgress.css";
import "../views/AdminProject/AdminProjects.css";
import "../views/Apps/Apps.css";
import "../views/Home/Home.css";
import "../views/Modeling3D/Modeling3D.css";
import "../views/NotFound/NotFound.css";
import "../views/ProjectDetail/ProjectDetail.css";
import "../views/Services/Services.css";
import "../views/Websites/Websites.css";
import { profile } from "../data/profile";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://digitalloom.fr";
const defaultDescription =
  "Portfolio DigitalLoom : développement de sites internet, applications sur mesure et expériences 3D interactives.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.companyName} — ${profile.jobTitle}`,
    template: `%s — ${profile.companyName}`,
  },
  description: defaultDescription,
  openGraph: {
    title: `${profile.companyName} â€” ${profile.jobTitle}`,
    description: defaultDescription,
    url: siteUrl,
    siteName: profile.companyName,
    images: ["/og_image.png"],
    locale: "fr_FR",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
    ],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: profile.companyName,
  url: siteUrl,
  email: profile.email,
  areaServed: ["Dijon", "Bourgogne-Franche-Comté", "Côte-d'Or"],
  description: profile.heroSubtitle,
  sameAs: [profile.github, profile.linkedin].filter(Boolean),
  serviceType: [
    "Création de sites internet",
    "Applications métier",
    "Modélisation 3D",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
