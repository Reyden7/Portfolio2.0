import { profile } from "../../data/profile";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__inner">
        <div>
          <p className="footer__kicker">{profile.companyName}</p>
          <h2>Un projet en tête ?</h2>
        </div>

        <div className="footer__content">
          <a href={`mailto:${profile.email}`} className="footer__button">
            Me contacter
          </a>

          <div className="footer__links">
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>

            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>

            <a href={`mailto:${profile.email}`}>{profile.email}</a>

            <span>{profile.location}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;