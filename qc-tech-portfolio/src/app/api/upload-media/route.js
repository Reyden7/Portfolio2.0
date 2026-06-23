import { getStore } from "@netlify/blobs";

export const dynamic = "force-dynamic";

function checkAdminPassword(request) {
  const adminPassword = request.headers.get("x-admin-password");
  return Boolean(process.env.ADMIN_PASSWORD) && adminPassword === process.env.ADMIN_PASSWORD;
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

export async function POST(request) {
  try {
    if (!checkAdminPassword(request)) {
      return Response.json({ message: "AccÃ¨s refusÃ©" }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get("file");
    const mediaType = formData.get("mediaType") || "media";
    const category = formData.get("category") || "general";

    if (!file) {
      return Response.json({ message: "Aucun fichier envoyÃ©" }, { status: 400 });
    }

    const maxSizeInMb = 4;
    const maxSizeInBytes = maxSizeInMb * 1024 * 1024;

    if (file.size > maxSizeInBytes) {
      return Response.json(
        {
          message: `Fichier trop lourd. Maximum autorisÃ© : ${maxSizeInMb} MB.`,
          size: file.size,
        },
        { status: 413 }
      );
    }

    const isImage = file.type.startsWith("image/");
    const isVideo = file.type.startsWith("video/");

    if (!isImage && !isVideo) {
      return Response.json(
        { message: "Seules les images et vidÃ©os sont autorisÃ©es" },
        { status: 400 }
      );
    }

    const store = getStore({
      name: "portfolio-media",
      consistency: "strong",
    });

    const safeFileName = slugifyFileName(file.name);
    const key = `${category}/${mediaType}/${Date.now()}-${safeFileName}`;
    const arrayBuffer = await file.arrayBuffer();

    await store.set(key, Buffer.from(arrayBuffer));
    await store.setJSON(`${key}.meta`, {
      originalName: file.name,
      contentType: file.type,
      size: file.size,
    });

    return Response.json({
      success: true,
      key,
      url: `/api/media?key=${encodeURIComponent(key)}`,
    });
  } catch (error) {
    console.error("Erreur upload-media :", error);

    return Response.json(
      {
        message: "Erreur serveur pendant l'upload du fichier",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
