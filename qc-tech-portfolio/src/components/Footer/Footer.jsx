"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "../../data/profile";
import { contactIntro, projectTypeOptions } from "../../data/contactContent";
import Fireworks from "../Fireworks/Fireworks";
import TransitionLink from "../TransitionLink/TransitionLink";

const footerNavigation = [
  { label: "Accueil", path: "/" },
  { label: "Prestations", path: "/services" },
  { label: "Referencement", path: "/referencement" },
  { label: "Zone d'intervention", path: "/zone-intervention" },
];

const footerProjects = [
  { label: "Sites internet", path: "/sites-internet" },
  { label: "Applications metier", path: "/applications-logiciels" },
  { label: "Modelisation 3D", path: "/modelisation-3d" },
];

const footerCities = [
  "Dijon",
  "Beaune",
  "Dole",
  "Chalon-sur-Saone",
  "Langres",
  "Auxonne",
  "Nuits-Saint-Georges",
  "Is-sur-Tille",
  "Seurre",
  "Gray",
];

function Footer() {
  const fireworksTimeoutRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: projectTypeOptions[0],
    message: "",
    website: "",
  });

  const [feedback, setFeedback] = useState({
    type: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);

  useEffect(() => {
    const handleProjectTypeSelection = (event) => {
      const projectType = event.detail?.projectType;

      if (!projectType) return;

      setFormData((current) => ({
        ...current,
        projectType,
      }));
    };

    window.addEventListener(
      "digitalloom-project-type",
      handleProjectTypeSelection
    );

    return () => {
      window.removeEventListener(
        "digitalloom-project-type",
        handleProjectTypeSelection
      );

      if (fireworksTimeoutRef.current) {
        clearTimeout(fireworksTimeoutRef.current);
      }
    };
  }, []);

  const triggerFireworks = () => {
    if (fireworksTimeoutRef.current) {
      clearTimeout(fireworksTimeoutRef.current);
    }

    setShowFireworks(false);

    requestAnimationFrame(() => {
      setShowFireworks(true);

      fireworksTimeoutRef.current = setTimeout(() => {
        setShowFireworks(false);
      }, 2400);
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    if (feedback.message) {
      setFeedback({
        type: "",
        message: "",
      });
    }
  };

  const validateForm = () => {
    if (formData.name.trim().length < 2) {
      return "Merci d’indiquer votre nom.";
    }

    if (!formData.email.includes("@")) {
      return "Merci d’indiquer une adresse email valide.";
    }

    if (formData.message.trim().length < 10) {
      return "Merci de décrire votre besoin en quelques mots.";
    }

    return "";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.website.trim() !== "") {
      return;
    }

    const errorMessage = validateForm();

    if (errorMessage) {
      setFeedback({
        type: "error",
        message: errorMessage,
      });

      return;
    }

    setIsSubmitting(true);

    try {
      const formBody = new URLSearchParams({
        "form-name": "contact",
        name: formData.name.trim(),
        email: formData.email.trim(),
        projectType: formData.projectType,
        message: formData.message.trim(),
        website: formData.website,
      });

      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody.toString(),
      });

      if (!response.ok) {
        throw new Error("L’envoi a échoué.");
      }

      setFeedback({
        type: "success",
        message: "Message envoyé. Je vous répondrai rapidement.",
      });

      triggerFireworks();

      setFormData({
        name: "",
        email: "",
        projectType: projectTypeOptions[0],
        message: "",
        website: "",
      });
    } catch (error) {
      console.error("Netlify Forms error:", error);

      setFeedback({
        type: "error",
        message: `L’envoi a échoué. Vous pouvez réessayer ou m’écrire directement à ${profile.email}.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <footer className="footer" id="contact">
        <div className="footer__inner">
          <div className="footer__hero">
            <p className="footer__kicker">{contactIntro.kicker}</p>

            <h2>{contactIntro.title}</h2>

            <p className="footer__text">{contactIntro.text}</p>
          </div>

          <div className="footer__content">
            <form
              className="footer__form"
              name="contact"
              method="POST"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />

              <div className="footer__form-top">
                <p>{contactIntro.formTitle}</p>
                <span>{contactIntro.formBadge}</span>
              </div>

              <label className="footer__honeypot">
                Site web
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  tabIndex="-1"
                  autoComplete="off"
                />
              </label>

              <label>
                Votre nom
                <input
                  type="text"
                  name="name"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Votre email
                <input
                  type="email"
                  name="email"
                  placeholder="vous@email.fr"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Type de projet
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                >
                  {projectTypeOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>

              <label>
                Message
                <textarea
                  name="message"
                  placeholder="Décrivez rapidement votre besoin..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </label>

              {feedback.message && (
                <p
                  className={`footer__feedback footer__feedback--${feedback.type}`}
                >
                  {feedback.message}
                </p>
              )}

              <button
                type="submit"
                className="footer__submit magnetic"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                <span>↗</span>
              </button>
            </form>

            <aside className="footer__side">
              <div className="footer__contact-card">
                <span>Email</span>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>

              <div className="footer__contact-card">
                <span>Localisation</span>
                <p>{profile.location}</p>
              </div>
            </aside>
          </div>
        </div>

        <div className="footer__seo-band">
          <div className="footer__seo-brand">
            <h3>{profile.companyName}</h3>
            <p>
              Création de sites internet, applications métier, expériences 3D
              Et référencement naturel pour les entreprises autour de Dijon.
            </p>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>

          <nav className="footer__seo-column" aria-label="Navigation footer">
            <span>Navigation</span>
            {footerNavigation.map((item) => (
              <TransitionLink key={item.path} to={item.path}>
                {item.label}
              </TransitionLink>
            ))}
          </nav>

          <nav className="footer__seo-column" aria-label="Realisations">
            <span>Nos realisations</span>
            {footerProjects.map((item) => (
              <TransitionLink key={item.path} to={item.path}>
                {item.label}
              </TransitionLink>
            ))}
          </nav>

          <div className="footer__seo-zone">
            <span>Zone d'intervention</span>
            <p>
              Intervention dans un rayon d'environ 100 km autour de Dijon, en
              Côte-d'Or et Bourgogne-Franche-Comté.
            </p>
            <div>
              {footerCities.map((city) => (
                <span key={city}>{city}</span>
              ))}
            </div>
          </div>
        </div>

        <p className="footer__seo-line">
          Création de site internet à Dijon, référencement naturel local,
          applications métier et modélisation 3D : des pages structurées pour
          les visiteurs, Google et les recherches IA.
        </p>

        <div className="footer__bottom">
          <p>
            © {new Date().getFullYear()} {profile.companyName}. Tous droits
            réservés.
          </p>
          <p>Sites web, applications et modélisation d'objet 3D</p>
        </div>
      </footer>

      <Fireworks active={showFireworks} />
    </>
  );
}

export default Footer;
