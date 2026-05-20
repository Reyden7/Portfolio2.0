import { useState } from "react";
import { profile } from "../../data/profile";
import "./Footer.css";

function Footer() {
  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Site internet",
    message: "",
  });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Demande de projet - ${formData.projectType}`
    );

    const body = encodeURIComponent(
      `Bonjour,\n\nJe souhaite vous contacter pour un projet.\n\nNom : ${formData.name}\nEmail : ${formData.email}\nType de projet : ${formData.projectType}\n\nMessage :\n${formData.message}\n\nMerci.`
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
  <footer className="footer" id="contact">
    <div className="footer__inner">
      <div className="footer__hero">
        <p className="footer__kicker">{profile.companyName}</p>

        <h2>Prêt à transformer une idée en vrai projet ?</h2>

        <p className="footer__text">
          Envoyez-moi quelques lignes sur votre besoin. Pas besoin d’avoir un
          cahier des charges parfait : on peut clarifier les choses ensemble.
        </p>
      </div>

      <div className="footer__content">
        <form className="footer__form" onSubmit={handleSubmit}>
          <div className="footer__form-top">
            <p>Parlez-moi du projet</p>
            <span>Réponse rapide</span>
          </div>

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
              <option>Site internet</option>
              <option>Landing page</option>
              <option>Application métier</option>
              <option>Modélisation 3D</option>
              <option>Autre demande</option>
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

          <button type="submit" className="footer__submit magnetic">
            Envoyer l’email
            <span>↗</span>
          </button>
        </form>

        <aside className="footer__side">
          <div className="footer__contact-card">
            <span>Email professionnel</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>

          <div className="footer__contact-card">
            <span>Localisation</span>
            <p>{profile.location}</p>
          </div>

          <div className="footer__links">
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
              <span>↗</span>
            </a>

            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
              <span>↗</span>
            </a>
          </div>
        </aside>
      </div>
    </div>

    <div className="footer__bottom">
      <p>
        © {new Date().getFullYear()} {profile.companyName}. Tous droits réservés.
      </p>
      <p>Développement web, applications et expériences 3D.</p>
    </div>
  </footer>
);
}

export default Footer;