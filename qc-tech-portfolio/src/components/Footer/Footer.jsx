import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__inner">
        <div>
          <p className="footer__kicker">QC-Tech</p>
          <h2>Un projet en tête ?</h2>
        </div>

        <div className="footer__content">
          <a href="mailto:contact@qc-tech.fr" className="footer__button">
            Me contacter
          </a>

          <div className="footer__links">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="mailto:contact@qc-tech.fr">contact@qc-tech.fr</a>
            <span>Dijon / Bourgogne-Franche-Comté</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;