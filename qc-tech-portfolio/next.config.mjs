import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  turbopack: {
    root: projectRoot,
  },
  env: {
    NEXT_PUBLIC_EMAILJS_SERVICE_ID:
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || process.env.VITE_EMAILJS_SERVICE_ID,
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID:
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || process.env.VITE_EMAILJS_TEMPLATE_ID,
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY:
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || process.env.VITE_EMAILJS_PUBLIC_KEY,
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
