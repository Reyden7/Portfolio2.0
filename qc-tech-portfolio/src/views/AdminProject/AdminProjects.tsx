"use client";

import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {
  createProjectFromApi,
  deleteProjectFromApi,
  fetchProjectsFromApi,
  updateProjectFromApi,
  restoreProjectsToApi,
  uploadProjectMedia,
} from "../../services/projectsApi";

import { projects as defaultProjects } from "../../data/projects";

function getEmptyProject() {
  return {
    category: "websites",
    title: "",
    slug: "",
    type: "",
    description: "",
    technologies: "",
    image: "",
    detailImage: "",
    detailVideo: "",
    link: "#",
    status: "",
    context: "",
    goal: "",

    model: "",
    modelScale: "",
    modelPosition: "0,0,0",
    modelRotation: "0,0,0",
    autoRotate: false,
  };
}



function AdminProjects() {
  const [adminPassword, setAdminPassword] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isAdminUnlocked, setIsAdminUnlocked] = useState(false);

  const [isSaving, setIsSaving] = useState(false);
  const [adminProjects, setAdminProjects] = useState([]);
  const [editingProjectId, setEditingProjectId] = useState(null);
  const [project, setProject] = useState(getEmptyProject());
  const [uploadingField, setUploadingField] = useState(null);

  async function loadAdminProjects() {
    try {
      const projects = await fetchProjectsFromApi();
      setAdminProjects(Array.isArray(projects) ? projects : []);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleRestoreDefaultProjects() {
  if (!isAdminUnlocked) {
    alert("Déverrouille l’espace admin avant de continuer.");
    return;
  }

  const confirmRestore = window.confirm(
    "Restaurer les projets préparés ? Les doublons seront ignorés."
  );

  if (!confirmRestore) {
    return;
  }

  try {
    setIsSaving(true);

    const result = await restoreProjectsToApi(defaultProjects, adminPassword);

    await loadAdminProjects();

    alert(
      `${result.added} projet(s) restauré(s). Total : ${result.total} projet(s).`
    );
  } catch (error) {
    console.error(error);
    alert("Erreur pendant la restauration des projets.");
  } finally {
    setIsSaving(false);
  }
}

  useEffect(() => {
    loadAdminProjects();
  }, []);

  async function handleMediaUpload(fieldName, file, mediaType) {
  if (!file) {
    return;
  }

  if (!isAdminUnlocked) {
    alert("Déverrouille l’espace admin avant d’importer un fichier.");
    return;
  }

  if (!adminPassword) {
    alert("Mot de passe admin manquant.");
    return;
  }

  try {
    setUploadingField(fieldName);

    const result = await uploadProjectMedia(file, adminPassword, {
      mediaType,
      category: project.category,
    });

    setProject((currentProject) => ({
      ...currentProject,
      [fieldName]: result.url,
    }));
  } catch (error) {
    console.error(error);
    alert("Erreur pendant l'import du fichier.");
  } finally {
    setUploadingField(null);
  }
}

  async function handleUnlockAdmin(event) {
    event.preventDefault();

    if (!passwordInput.trim()) {
      setPasswordError("Entre le mot de passe admin.");
      return;
    }

    try {
      const response = await fetch("/api/admin/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password: passwordInput }),
      });

      if (!response.ok) {
        setPasswordError("Code admin invalide.");
        return;
      }

      setAdminPassword(passwordInput);
      setIsAdminUnlocked(true);
      setPasswordError("");
    } catch (error) {
      console.error(error);
      setPasswordError("Impossible de vÃ©rifier le code admin.");
    }
  }

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setProject((currentProject) => ({
      ...currentProject,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function getCategoryData(category) {
    if (category === "websites") {
      return {
        categoryLabel: "Sites internet",
        backPath: "/sites-internet",
      };
    }

    if (category === "apps") {
      return {
        categoryLabel: "Applications / Logiciels",
        backPath: "/applications-logiciels",
      };
    }

    if (category === "modeling") {
      return {
        categoryLabel: "Modélisation 3D",
        backPath: "/modelisation-3d",
      };
    }

    return {
      categoryLabel: "Projet",
      backPath: "/",
    };
  }

  function handleEditProject(selectedProject) {
    if (!isAdminUnlocked) {
      alert("Déverrouille l’espace admin avant de continuer.");
      return;
    }

    setEditingProjectId(selectedProject.id);

    setProject({
      ...getEmptyProject(),
      ...selectedProject,
      technologies: Array.isArray(selectedProject.technologies)
        ? selectedProject.technologies.join(", ")
        : selectedProject.technologies || "",
      modelPosition: Array.isArray(selectedProject.modelPosition)
        ? selectedProject.modelPosition.join(",")
        : selectedProject.modelPosition || "0,0,0",
      modelRotation: Array.isArray(selectedProject.modelRotation)
        ? selectedProject.modelRotation.join(",")
        : selectedProject.modelRotation || "0,0,0",
      modelScale:
        selectedProject.modelScale !== undefined
          ? String(selectedProject.modelScale)
          : "",
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  async function handleDeleteProject(projectId) {
    if (!isAdminUnlocked) {
      alert("Déverrouille l’espace admin avant de continuer.");
      return;
    }

    const confirmDelete = window.confirm(
      "Tu es sûr de vouloir supprimer ce projet ?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      setIsSaving(true);

      await deleteProjectFromApi(projectId, adminPassword);
      await loadAdminProjects();

      if (editingProjectId === projectId) {
        setEditingProjectId(null);
        setProject(getEmptyProject());
      }

      alert("Projet supprimé !");
    } catch (error) {
      console.error(error);
      alert("Erreur pendant la suppression du projet.");
    } finally {
      setIsSaving(false);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!isAdminUnlocked) {
      alert("Déverrouille l’espace admin avant de continuer.");
      return;
    }

    const finalProject: any = {
      ...project,
      ...getCategoryData(project.category),
      id: editingProjectId || `${project.category}-${Date.now()}`,
      technologies: project.technologies
        .split(",")
        .map((tech) => tech.trim())
        .filter(Boolean),
    };

    if (project.category === "modeling") {
      finalProject.modelScale = Number(project.modelScale || 1);
      finalProject.modelPosition = project.modelPosition
        .split(",")
        .map((value) => Number(value.trim()));

      finalProject.modelRotation = project.modelRotation
        .split(",")
        .map((value) => Number(value.trim()));
    } else {
      delete finalProject.model;
      delete finalProject.modelScale;
      delete finalProject.modelPosition;
      delete finalProject.modelRotation;
      delete finalProject.autoRotate;
    }

    try {
      setIsSaving(true);

      if (editingProjectId) {
        const savedProject = await updateProjectFromApi(
          finalProject,
          adminPassword
        );

        console.log("Projet modifié :", savedProject);
        alert("Projet modifié !");
      } else {
        const savedProject = await createProjectFromApi(
          finalProject,
          adminPassword
        );

        console.log("Projet ajouté :", savedProject);
        alert("Projet ajouté !");
      }

      setEditingProjectId(null);
      setProject(getEmptyProject());
      await loadAdminProjects();
    } catch (error) {
      console.error(error);
      alert("Erreur pendant la sauvegarde du projet.");
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <main className="admin-projects">
      <Header />

      {!isAdminUnlocked && (
        <div className="admin-projects__lock">
          <form
            className="admin-projects__lock-card"
            onSubmit={handleUnlockAdmin}
          >
            <p>Accès admin</p>
            <h2>Entre le code d’administration</h2>

            <input
              type="password"
              value={passwordInput}
              onChange={(event) => setPasswordInput(event.target.value)}
              placeholder="Code admin"
              autoFocus
            />

            {passwordError && (
              <span className="admin-projects__lock-error">
                {passwordError}
              </span>
            )}

            <button type="submit">Déverrouiller</button>
          </form>
        </div>
      )}

      <div
        className={`admin-projects__content ${
          !isAdminUnlocked ? "admin-projects__content--locked" : ""
        }`}
      >
        <section className="admin-projects__hero">
          <p>Administration</p>

          <h1>
            {editingProjectId ? "Modifier un projet" : "Ajouter un projet"}
          </h1>

          <span>
            Ajoute, modifie ou supprime les projets affichés sur ton portfolio.
          </span>
          <button
          type="button"
          className="admin-projects__restore-button"
          onClick={handleRestoreDefaultProjects}
          disabled={isSaving}
        >
          Restaurer les projets préparés
        </button>
        </section>

        <form className="admin-projects__form" onSubmit={handleSubmit}>
          <label>
            Catégorie
            <select
              name="category"
              value={project.category}
              onChange={handleChange}
            >
              <option value="websites">Site internet</option>
              <option value="apps">Application / logiciel</option>
              <option value="modeling">Modélisation 3D</option>
            </select>
          </label>

          <label>
            Titre
            <input name="title" value={project.title} onChange={handleChange} />
          </label>

          <label>
            Slug
            <input
              name="slug"
              value={project.slug}
              onChange={handleChange}
              placeholder="exemple : mon-super-projet"
            />
          </label>

          <label>
            Type
            <input
              name="type"
              value={project.type}
              onChange={handleChange}
              placeholder="Site-vitrine, Application métier, Robot..."
            />
          </label>

          <label>
            Description
            <textarea
              name="description"
              value={project.description}
              onChange={handleChange}
            />
          </label>

          <label>
            Technologies
            <input
              name="technologies"
              value={project.technologies}
              onChange={handleChange}
              placeholder="React JS, CSS, Firebase"
            />
          </label>

          <label>
            Image principale
            <input
              type="file"
              accept="image/*"
              onChange={(event) =>
                handleMediaUpload("image", event.target.files?.[0], "image")
              }
            />

            {uploadingField === "image" && <small>Import de l’image...</small>}

            {project.image && (
              <small className="admin-projects__file-path">
                Fichier actuel : {project.image}
              </small>
            )}
          </label>

          <label>
            Image détail
            <input
              type="file"
              accept="image/*"
              onChange={(event) =>
                handleMediaUpload("detailImage", event.target.files?.[0], "detail-image")
              }
            />

            {uploadingField === "detailImage" && <small>Import de l’image détail...</small>}

            {project.detailImage && (
              <small className="admin-projects__file-path">
                Fichier actuel : {project.detailImage}
              </small>
            )}
          </label>

          <label>
            Vidéo détail
            <input
              type="file"
              accept="video/*"
              onChange={(event) =>
                handleMediaUpload("detailVideo", event.target.files?.[0], "video")
              }
            />

            {uploadingField === "detailVideo" && <small>Import de la vidéo...</small>}

            {project.detailVideo && (
              <small className="admin-projects__file-path">
                Fichier actuel : {project.detailVideo}
              </small>
            )}
          </label>

          <label>
            Lien
            <input name="link" value={project.link} onChange={handleChange} />
          </label>

          <label>
            Statut
            <input
              name="status"
              value={project.status}
              onChange={handleChange}
              placeholder="Projet vitrine, WebGL, Outil sur mesure..."
            />
          </label>

          <label>
            Contexte
            <textarea
              name="context"
              value={project.context}
              onChange={handleChange}
            />
          </label>

          <label>
            Objectif
            <textarea
              name="goal"
              value={project.goal}
              onChange={handleChange}
            />
          </label>

          {project.category === "modeling" && (
            <div className="admin-projects__model-fields">
              <h2>Paramètres modèle 3D</h2>

              <label>
                Modèle FBX
                <input
                  name="model"
                  value={project.model}
                  onChange={handleChange}
                  placeholder="/models/MonModele.fbx"
                />
              </label>

              <label>
                Scale
                <input
                  name="modelScale"
                  value={project.modelScale}
                  onChange={handleChange}
                  placeholder="0.025"
                />
              </label>

              <label>
                Position
                <input
                  name="modelPosition"
                  value={project.modelPosition}
                  onChange={handleChange}
                  placeholder="1,0,3.4"
                />
              </label>

              <label>
                Rotation
                <input
                  name="modelRotation"
                  value={project.modelRotation}
                  onChange={handleChange}
                  placeholder="0,0.7,0"
                />
              </label>

              <label className="admin-projects__checkbox">
                <input
                  type="checkbox"
                  name="autoRotate"
                  checked={project.autoRotate}
                  onChange={handleChange}
                />
                Rotation automatique
              </label>
            </div>
          )}

          <button type="submit" disabled={isSaving}>
            {isSaving
              ? "Sauvegarde..."
              : editingProjectId
              ? "Modifier le projet"
              : "Ajouter le projet"}
          </button>

          {editingProjectId && (
            <button
              type="button"
              onClick={() => {
                setEditingProjectId(null);
                setProject(getEmptyProject());
              }}
            >
              Annuler la modification
            </button>
          )}
        </form>

        <section className="admin-projects__list">
          <h2>Projets existants</h2>

          {adminProjects.length === 0 ? (
            <p>Aucun projet sauvegardé pour le moment.</p>
          ) : (
            <div className="admin-projects__items">
              {adminProjects.map((adminProject) => (
                <article
                  className="admin-projects__item"
                  key={adminProject.id}
                >
                  <div>
                    <p>{adminProject.categoryLabel}</p>
                    <h3>{adminProject.title}</h3>
                    <span>{adminProject.slug}</span>
                  </div>

                  <div className="admin-projects__item-actions">
                    <button
                      type="button"
                      onClick={() => handleEditProject(adminProject)}
                    >
                      Modifier
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDeleteProject(adminProject.id)}
                    >
                      Supprimer
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        <Footer />
      </div>
    </main>
  );
}

export default AdminProjects;
