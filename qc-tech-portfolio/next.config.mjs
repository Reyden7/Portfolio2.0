import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  turbopack: {
    root: projectRoot,
  },
  async rewrites() {
    return [
      {
        source: "/.netlify/functions/projects/restore",
        destination: "/api/projects/restore",
      },
      {
        source: "/.netlify/functions/projects",
        destination: "/api/projects",
      },
      {
        source: "/.netlify/functions/upload-media",
        destination: "/api/upload-media",
      },
      {
        source: "/.netlify/functions/media",
        destination: "/api/media",
      },
    ];
  },
};

export default nextConfig;
