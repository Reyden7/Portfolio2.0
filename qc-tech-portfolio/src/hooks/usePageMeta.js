import { useEffect } from "react";
import { profile } from "../data/profile";

function updateMetaTag(name, content) {
  if (!content) return;

  let tag = document.querySelector(`meta[name="${name}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function updatePropertyTag(property, content) {
  if (!content) return;

  let tag = document.querySelector(`meta[property="${property}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function usePageMeta({ title, description }) {
  useEffect(() => {
    const finalTitle = title
      ? `${title} — ${profile.companyName}`
      : `${profile.companyName} — ${profile.jobTitle}`;

    const finalDescription =
      description ||
      "Portfolio DigitalLoom : développement de sites internet, applications sur mesure et expériences 3D interactives.";

    document.title = finalTitle;

    updateMetaTag("description", finalDescription);
    updatePropertyTag("og:title", finalTitle);
    updatePropertyTag("og:description", finalDescription);
    updatePropertyTag("og:type", "website");
  }, [title, description]);
}

export default usePageMeta;