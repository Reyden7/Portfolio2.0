import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { profile } from "../../data/profile";
import { contactIntro, projectTypeOptions } from "../../data/contactContent";
import "./Footer.css";
import Fireworks from "../Fireworks/Fireworks";

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
      "qc-contact-project-type",
      handleProjectTypeSelection
    );

    return () => {
      window.removeEventListener(
        "qc-contact-project-type",
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

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setFeedback({
        type: "error",
        message:
          "La configuration EmailJS est manquante. Vérifiez votre fichier .env.",
      });

      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name.trim(),
          from_email: formData.email.trim(),
          reply_to: formData.email.trim(),
          project_type: formData.projectType,
          message: formData.message.trim(),
        },
        {
          publicKey,
        }
      );

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
      console.error("EmailJS error:", error);

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
            <form className="footer__form" onSubmit={handleSubmit}>
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

        <div className="footer__bottom">
          <p>
            © {new Date().getFullYear()} {profile.companyName}. Tous droits
            réservés.
          </p>
          <p>
            Sites web, applications et expériences digitales pensées pour convertir
            un visiteur en client.
          </p>
        </div>
      </footer>

      <Fireworks active={showFireworks} />
    </>
  );
}

export default Footer;