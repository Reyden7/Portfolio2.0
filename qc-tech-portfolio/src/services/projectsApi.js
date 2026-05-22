export async function fetchProjectsFromApi() {
  const response = await fetch("/.netlify/functions/projects");

  if (!response.ok) {
    throw new Error("Impossible de charger les projets depuis l'API");
  }

  return response.json();
}

export async function createProjectFromApi(project, adminPassword) {
  const response = await fetch("/.netlify/functions/projects", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-admin-password": adminPassword,
    },
    body: JSON.stringify(project),
  });

  if (!response.ok) {
    throw new Error("Impossible d'ajouter le projet");
  }

  return response.json();
}

export async function updateProjectFromApi(project, adminPassword) {
  const response = await fetch("/.netlify/functions/projects", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "x-admin-password": adminPassword,
    },
    body: JSON.stringify(project),
  });

  if (!response.ok) {
    throw new Error("Impossible de modifier le projet");
  }

  return response.json();
}

export async function deleteProjectFromApi(projectId, adminPassword) {
  const response = await fetch("/.netlify/functions/projects", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "x-admin-password": adminPassword,
    },
    body: JSON.stringify({ id: projectId }),
  });

  if (!response.ok) {
    throw new Error("Impossible de supprimer le projet");
  }

  return response.json();
}


export async function restoreProjectsToApi(projects, adminPassword) {
  const response = await fetch("/.netlify/functions/projects/restore", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-admin-password": adminPassword,
    },
    body: JSON.stringify({ projects }),
  });

  if (!response.ok) {
    throw new Error("Impossible de restaurer les projets");
  }

  return response.json();
}


export async function uploadProjectMedia(file, adminPassword, options = {}) {
  const formData = new FormData();

  formData.append("file", file);
  formData.append("mediaType", options.mediaType || "media");
  formData.append("category", options.category || "general");

  const response = await fetch("/.netlify/functions/upload-media", {
    method: "POST",
    headers: {
      "x-admin-password": adminPassword,
    },
    body: formData,
  });

  const responseText = await response.text();

  let data;

  try {
    data = JSON.parse(responseText);
  } catch {
    data = { message: responseText };
  }

  if (!response.ok) {
    throw new Error(data.message || "Impossible d'uploader le fichier");
  }

  return data;
}
