import { getStore } from "@netlify/blobs";

export const dynamic = "force-dynamic";

export async function GET(request) {
  const url = new URL(request.url);
  const key = url.searchParams.get("key");

  if (!key) {
    return new Response("Fichier manquant", { status: 400 });
  }

  const store = getStore({
    name: "portfolio-media",
    consistency: "strong",
  });

  const file = await store.get(key, {
    type: "arrayBuffer",
    consistency: "strong",
  });

  if (!file) {
    return new Response("Fichier introuvable", { status: 404 });
  }

  const metadata = await store.get(`${key}.meta`, {
    type: "json",
    consistency: "strong",
  });

  return new Response(file, {
    status: 200,
    headers: {
      "Content-Type": metadata?.contentType || "application/octet-stream",
      "Cache-Control": "public, max-age=31536000",
    },
  });
}
