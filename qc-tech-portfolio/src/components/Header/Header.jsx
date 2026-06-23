"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import TransitionLink from "../TransitionLink/TransitionLink";
import { usePageTransition } from "../../context/PageTransitionContext";
import { profile } from "../../data/profile";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const pathname = usePathname();
  const { navigateWithTransition } = usePageTransition();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    closeMenu();

    if (pathname !== "/") {
      navigateWithTransition("/", { scrollTarget: sectionId });
      return;
    }

    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const goToServices = () => {
    closeMenu();
    navigateWithTransition("/services");
  };

  const goToSeo = () => {
    closeMenu();
    navigateWithTransition("/referencement");
  };

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sectionIds = ["story", "projects", "method", "faq", "contact"];

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
  }, [pathname]);

  const getNavButtonClass = (sectionId) =>
    activeSection === sectionId
      ? "header__nav-button is-active"
      : "header__nav-button";

  const getServicesButtonClass = () =>
    pathname === "/services"
      ? "header__nav-button is-active"
      : "header__nav-button";

  const getSeoButtonClass = () =>
    pathname === "/referencement"
      ? "header__nav-button is-active"
      : "header__nav-button";

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
          A propos
        </button>

        <button
          className={getNavButtonClass("method")}
          onClick={() => scrollToSection("method")}
        >
          Methode
        </button>

        <button
          className={getNavButtonClass("faq")}
          onClick={() => scrollToSection("faq")}
        >
          FAQ
        </button>

        <div className="header__dropdown">
          <button
            className={`header__dropdown-trigger ${getNavButtonClass("projects")}`}
            onClick={() => scrollToSection("projects")}
          >
            Realisations
          </button>

          <div className="header__dropdown-menu">
            <TransitionLink to="/sites-internet" className="header__dropdown-link">
              <span>01</span>
              Sites vitrines
            </TransitionLink>

            <TransitionLink
              to="/applications-logiciels"
              className="header__dropdown-link"
            >
              <span>02</span>
              Applications
            </TransitionLink>

            <TransitionLink to="/modelisation-3d" className="header__dropdown-link">
              <span>03</span>
              Modelisation 3D
            </TransitionLink>
          </div>
        </div>

        <button className={getSeoButtonClass()} onClick={goToSeo}>
          Le référencement (SEO)
        </button>

        <button
          className={`${getServicesButtonClass()} header__services-button`}
          onClick={goToServices}
        >
          Nos Prestations
        </button>

        

        <button
          className={`${getNavButtonClass("contact")} header__cta`}
          onClick={() => scrollToSection("contact")}
        >
          Nous contacter
        </button>
      </nav>
    </header>
  );
}

export default Header;
