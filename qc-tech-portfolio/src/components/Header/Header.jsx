import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TransitionLink from "../TransitionLink/TransitionLink";
import { usePageTransition } from "../../context/PageTransitionContext";
import { profile } from "../../data/profile";
import "./Header.css";


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

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

  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sectionIds = ["story", "projects", "method", "faq", "offers", "contact"];

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries[0]) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        threshold: [0.18, 0.32, 0.5],
        rootMargin: "-18% 0px -58% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [location.pathname]);

  const getNavButtonClass = (sectionId) =>
  activeSection === sectionId ? "header__nav-button is-active" : "header__nav-button";

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
        <button
          className={getNavButtonClass("story")}
          onClick={() => scrollToSection("story")}
        >
          À propos
        </button>

        <button
          className={getNavButtonClass("method")}
          onClick={() => scrollToSection("method")}
        >
          Méthode
        </button>

        <div className="header__dropdown">
          <button
            className={`header__dropdown-trigger ${getNavButtonClass("projects")}`}
            onClick={() => scrollToSection("projects")}
          >
            Réalisations
          </button>

          <div className="header__dropdown-menu">
            <TransitionLink to="/sites-internet" className="header__dropdown-link">
              <span>01</span>
              Sites vitrines
            </TransitionLink>

            <TransitionLink to="/applications-logiciels" className="header__dropdown-link">
              <span>02</span>
              Applications 
            </TransitionLink>

            <TransitionLink to="/modelisation-3d" className="header__dropdown-link">
              <span>03</span>
              Modélisation 3D
            </TransitionLink>
          </div>
        </div>

        <button
          className={getNavButtonClass("faq")}
          onClick={() => scrollToSection("faq")}
        >
          FAQ
        </button>

        <button
          className={getNavButtonClass("offers")}
          onClick={() => scrollToSection("offers")}
        >
          Services
        </button>

        <button
          className={`${getNavButtonClass("contact")} header__cta`}
          onClick={() => scrollToSection("contact")}
        >
          Discutons
        </button>
      </nav>
    </header>
  );
}

export default Header;