"use client";

import { useEffect, useState } from "react";
import { projects as defaultProjects } from "../data/projects";
import { fetchProjectsFromApi } from "../services/projectsApi";

export default function useProjects(initialProjects) {
  const [projects, setProjects] = useState(initialProjects || defaultProjects);
  const [loading, setLoading] = useState(!initialProjects);

  useEffect(() => {
    if (initialProjects) return;

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
  }, [initialProjects]);

  return { projects, loading };
}
