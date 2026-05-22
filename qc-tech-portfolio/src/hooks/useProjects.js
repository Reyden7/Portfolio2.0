import { useEffect, useState } from "react";
import { projects as defaultProjects } from "../data/projects";
import { fetchProjectsFromApi } from "../services/projectsApi";

export default function useProjects() {
  const [projects, setProjects] = useState(defaultProjects);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjectsFromApi()
      .then((apiProjects) => {
        if (Array.isArray(apiProjects) && apiProjects.length > 0) {
          setProjects(apiProjects);
        }
      })
      .catch((error) => {
        console.warn("Fallback projects.js utilisé :", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { projects, loading };
}