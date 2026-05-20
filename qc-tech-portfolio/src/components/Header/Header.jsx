import { useState } from "react";
import { useLocation } from "react-router-dom";
import TransitionLink from "../TransitionLink/TransitionLink";
import { usePageTransition } from "../../context/PageTransitionContext";
import { profile } from "../../data/profile";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();
  const { navigateWithTransition } = usePageTransition();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    closeMenu();

    if (location.pathname !== "/") {
      navigateWithTransition("/", { scrollTarget: sectionId });
      return;
    }

    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`header ${isMenuOpen ? "header--open" : ""}`}>
      <div className="header__brand">
        <TransitionLink to="/">{profile.companyName}</TransitionLink>
      </div>

      <button
        className="header__mobile-toggle"
        onClick={() => setIsMenuOpen((current) => !current)}
        aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={isMenuOpen}
      >
        <span></span>
        <span></span>
      </button>

      <nav className="header__nav">
        <button onClick={() => scrollToSection("projects")}>Projets</button>
        <button onClick={() => scrollToSection("story")}>Histoire</button>
        <button onClick={() => scrollToSection("contact")}>Contacter</button>

        <button
          className="header__cta"
          onClick={() => scrollToSection("start-project")}
        >
          Démarrer un projet
        </button>
      </nav>
    </header>
  );
}

export default Header;