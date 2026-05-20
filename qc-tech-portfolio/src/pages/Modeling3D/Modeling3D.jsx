import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ModelProjectCard from "../../components/ModelProjectCard/ModelProjectCard";
import { modelingProjects } from "../../data/projects";
import "./Modeling3D.css";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

function Modeling3D() {
    useRevealOnScroll();
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
            <div className="reveal" key={project.id}>
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