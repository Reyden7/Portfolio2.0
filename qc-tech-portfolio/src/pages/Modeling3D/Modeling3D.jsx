import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ModelProjectCard from "../../components/ModelProjectCard/ModelProjectCard";
import { modelingProjects } from "../../data/projects";
import "./Modeling3D.css";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import useMagneticElements from "../../hooks/useMagneticElements";
import usePageMeta from "../../hooks/usePageMeta";

function Modeling3D() {
    useRevealOnScroll();
    usePageMeta({
      title: "Modélisation 3D",
      description:
        "Projets de modélisation 3D et visualisation interactive intégrés dans des expériences web modernes.",
    });
    //useMagneticElements();
  return (
    <main className="modeling-page">
      <Header />

      <section className="modeling-page__hero">
        <div className="modeling-page__hero-inner">
          <p>Modélisation 3D</p>
          <h1>Objets 3D</h1>
          <span>
            Des modèles 3D intégrés directement dans une expérience web
            interactive, pensés pour être manipulés, observés et valorisés.
          </span>
        </div>
      </section>

      <section className="modeling-page__list">
        <div className="modeling-page__inner">
          {modelingProjects.map((project, index) => (
            <div
              className="reveal"
              key={project.id}
              data-reveal-direction={index % 2 === 0 ? "left" : "right"}
              data-reveal-delay={index * 90}
            >
              <ModelProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Modeling3D;