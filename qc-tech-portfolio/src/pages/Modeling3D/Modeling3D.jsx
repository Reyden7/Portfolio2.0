import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ModelProjectCard from "../../components/ModelProjectCard/ModelProjectCard";
import useProjects from "../../hooks/useProjects";
import "./Modeling3D.css";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import usePageMeta from "../../hooks/usePageMeta";

function Modeling3D() {
  useRevealOnScroll();

  usePageMeta({
    title: "Modélisation 3D",
    description:
      "Création et intégration de modèles 3D interactifs pour enrichir une expérience web, présenter un produit ou créer un effet mémorable.",
  });

  const { projects, loading } = useProjects();

  const modelingProjects = projects.filter(
    (project) => project.category === "modeling"
  );

  if (loading) {
    return null;
  }

  return (
    <main className="modeling-page">
      <Header />

      <section className="modeling-page__hero">
        <div className="modeling-page__noise"></div>

        <div className="modeling-page__hero-inner">
          <p className="modeling-page__eyebrow">Expériences 3D</p>

          <h1>Des objets 3D qui rendent votre projet plus mémorable.</h1>

          <span>
            Nous réalisons des modélisations 3D d'objet pour impression, animations, décors, pièce mecaniques, intégration dans un site internet ou une application pour presenter un produit.
          </span>

          <div className="modeling-page__hero-proof">
            <strong>{modelingProjects.length}</strong>
            <small>
              {modelingProjects.length > 1
                ? "projets 3D disponibles"
                : "projet 3D disponible"}
            </small>
          </div>
        </div>
      </section>

      <section className="modeling-page__list">
        <div className="modeling-page__inner">
          <div className="modeling-page__list-heading reveal">
            <p className="section-kicker">Réalisations 3D</p>
           
          </div>

          {modelingProjects.length > 0 ? (
            <div className="modeling-page__grid">
              {modelingProjects.map((project, index) => (
                <div key={project.id}>
                  <ModelProjectCard project={project} index={index} />
                </div>
              ))}
            </div>
          ) : (
            <div className="modeling-page__empty reveal">
              <p>
                Les projets 3D seront bientôt disponibles. En attendant, vous
                pouvez Nous contacter pour discuter d’une expérience interactive
                ou d’une intégration 3D sur votre site.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Modeling3D;