"use client";

import { useEffect, useRef, useState } from "react";
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
  const [uploadingFields, setUploadingFields] = useState<Record<string, boolean>>({});
  const fileInputRefs = useRef<Record<string, HTMLInputElement | null>>({});
  const formVersionRef = useRef(0);
  const isUploadingMedia = Object.values(uploadingFields).some(Boolean);

  function clearFileInputs() {
    Object.values(fileInputRefs.current).forEach((input) => {
      if (input) {
        input.value = "";
      }
    });
  }

  function resetProjectForm() {
    formVersionRef.current += 1;
    setEditingProjectId(null);
    setProject(getEmptyProject());
    clearFileInputs();
  }

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

  async function handleMediaUpload(
    fieldName: string,
    file: File | undefined,
    mediaType: string
  ) {
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
    const uploadFormVersion = formVersionRef.current;

    setUploadingFields((currentFields) => ({
      ...currentFields,
      [fieldName]: true,
    }));

    const result = await uploadProjectMedia(file, adminPassword, {
      mediaType,
      category: project.category,
    });

    if (formVersionRef.current === uploadFormVersion) {
      setProject((currentProject) => ({
        ...currentProject,
        [fieldName]: result.url,
      }));
    }
  } catch (error) {
    console.error(error);
    alert("Erreur pendant l'import du fichier.");
  } finally {
    if (fileInputRefs.current[fieldName]) {
      fileInputRefs.current[fieldName].value = "";
    }

    setUploadingFields((currentFields) => {
      const nextFields = { ...currentFields };
      delete nextFields[fieldName];
      return nextFields;
    });
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
    formVersionRef.current += 1;
    clearFileInputs();

    setProject({
      ...getEmptyProject(),
      ...selectedProject,
      technologies: Array.isArray(selectedProject.technologies)
        ? selectedProject.technologies.join(", ")
        : selectedProject.technologies || "",
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
        resetProjectForm();
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

    if (isUploadingMedia) {
      alert("Attends la fin de l'import des fichiers avant de sauvegarder.");
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

    delete finalProject.model;
    delete finalProject.modelScale;
    delete finalProject.modelPosition;
    delete finalProject.modelRotation;
    delete finalProject.autoRotate;

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

      resetProjectForm();
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
              ref={(input) => {
                fileInputRefs.current.image = input;
              }}
              disabled={isSaving || isUploadingMedia}
              onChange={(event) =>
                handleMediaUpload("image", event.target.files?.[0], "image")
              }
            />

            {uploadingFields.image && <small>Import de l’image...</small>}

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
              ref={(input) => {
                fileInputRefs.current.detailImage = input;
              }}
              disabled={isSaving || isUploadingMedia}
              onChange={(event) =>
                handleMediaUpload("detailImage", event.target.files?.[0], "detail-image")
              }
            />

            {uploadingFields.detailImage && <small>Import de l’image détail...</small>}

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
              ref={(input) => {
                fileInputRefs.current.detailVideo = input;
              }}
              disabled={isSaving || isUploadingMedia}
              onChange={(event) =>
                handleMediaUpload("detailVideo", event.target.files?.[0], "video")
              }
            />

            {uploadingFields.detailVideo && <small>Import de la vidéo...</small>}

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
              placeholder="Projet vitrine, Outil sur mesure..."
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

          <button type="submit" disabled={isSaving || isUploadingMedia}>
            {isUploadingMedia
              ? "Import des fichiers..."
              : isSaving
              ? "Sauvegarde..."
              : editingProjectId
              ? "Modifier le projet"
              : "Ajouter le projet"}
          </button>

          {editingProjectId && (
            <button
              type="button"
              onClick={() => {
                resetProjectForm();
              }}
              disabled={isSaving || isUploadingMedia}
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
