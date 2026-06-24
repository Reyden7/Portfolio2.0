"use client";

import { useEffect, useState } from "react";
import { projects as defaultProjects } from "../data/projects";
import { fetchProjectsFromApi } from "../services/projectsApi";

const REMOVED_PROJECT_CATEGORY = ["model", "ing"].join("");

function getVisibleProjects(projects) {
  return projects.filter((project) => project.category !== REMOVED_PROJECT_CATEGORY);
}

export default function useProjects(initialProjects) {
  const [projects, setProjects] = useState(
    getVisibleProjects(initialProjects || defaultProjects)
  );
  const [loading, setLoading] = useState(!initialProjects);

  useEffect(() => {
    if (initialProjects) return;

    fetchProjectsFromApi()
      .then((apiProjects) => {
        if (Array.isArray(apiProjects) && apiProjects.length > 0) {
          setProjects(getVisibleProjects(apiProjects));
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
