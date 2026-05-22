import { getStore } from "@netlify/blobs";

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function checkAdminPassword(request) {
  const adminPassword = request.headers.get("x-admin-password");
  return adminPassword === process.env.ADMIN_PASSWORD;
}

function slugifyFileName(fileName) {
  return fileName
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9.]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export default async function handler(request) {
  try {
    if (request.method !== "POST") {
      return jsonResponse({ message: "Méthode non autorisée" }, 405);
    }

    if (!checkAdminPassword(request)) {
      return jsonResponse({ message: "Accès refusé" }, 401);
    }

    const formData = await request.formData();

    const file = formData.get("file");
    const mediaType = formData.get("mediaType") || "media";
    const category = formData.get("category") || "general";

    if (!file) {
      return jsonResponse({ message: "Aucun fichier envoyé" }, 400);
    }

    const maxSizeInMb = 4;
    const maxSizeInBytes = maxSizeInMb * 1024 * 1024;

    if (file.size > maxSizeInBytes) {
      return jsonResponse(
        {
          message: `Fichier trop lourd. Maximum autorisé : ${maxSizeInMb} MB.`,
          size: file.size,
        },
        413
      );
    }

    const isImage = file.type.startsWith("image/");
    const isVideo = file.type.startsWith("video/");

    if (!isImage && !isVideo) {
      return jsonResponse(
        { message: "Seules les images et vidéos sont autorisées" },
        400
      );
    }

    const store = getStore({
      name: "portfolio-media",
      consistency: "strong",
    });

    const safeFileName = slugifyFileName(file.name);
    const key = `${category}/${mediaType}/${Date.now()}-${safeFileName}`;

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    await store.set(key, buffer);

    await store.setJSON(`${key}.meta`, {
      originalName: file.name,
      contentType: file.type,
      size: file.size,
    });

    return jsonResponse({
      success: true,
      key,
      url: `/.netlify/functions/media?key=${encodeURIComponent(key)}`,
    });
  } catch (error) {
    console.error("Erreur upload-media :", error);

    return jsonResponse(
      {
        message: "Erreur serveur pendant l'upload du fichier",
        error: error.message,
      },
      500
    );
  }
}