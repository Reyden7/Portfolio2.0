import { useState } from "react";
import { profile } from "../../data/profile";
import "./Footer.css";

function Footer() {
  const [copied, setCopied] = useState(false);

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

  return (
    <footer className="footer" id="contact">
      <div className="footer__inner">
        <div className="footer__main">
          <p className="footer__kicker">{profile.companyName}</p>

          <h2>Prêt à transformer une idée en vrai projet ?</h2>

          <p className="footer__text">
            Envoyez-moi quelques lignes sur votre besoin. Pas besoin d’avoir un
            cahier des charges parfait : on peut clarifier les choses ensemble.
          </p>

          <div className="footer__actions">
            <a href={`mailto:${profile.email}`} className="footer__button magnetic">
              Me contacter
              <span>↗</span>
            </a>

            <button onClick={copyEmail} className="footer__copy magnetic">
              {copied ? "Email copié" : "Copier l’email"}
            </button>
          </div>
        </div>

        <div className="footer__side">
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
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} {profile.companyName}. Tous droits réservés.</p>
        <p>Développement web, applications et expériences 3D.</p>
      </div>
    </footer>
  );
}

export default Footer;