import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return;
    }

    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header">
      <div className="header__brand">
        <Link to="/">QC-Tech</Link>
      </div>

      <nav className="header__nav">
        <button onClick={() => scrollToSection("projects")}>Projets</button>
        <button onClick={() => scrollToSection("story")}>Histoire</button>
        <button onClick={() => scrollToSection("contact")}>Contacter</button>
        <button
          className="header__cta"
          onClick={() => scrollToSection("contact")}
        >
          Démarrer un projet
        </button>
      </nav>
    </header>
  );
}

export default Header;