"use client";

import { createContext, useContext } from "react";
import { usePathname, useRouter } from "next/navigation";

const PageTransitionContext = createContext(null);

export function PageTransitionProvider({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  const navigateWithTransition = (to, options = {}) => {
    const { scrollTarget } = options;

    if (to !== pathname) {
      router.push(to);
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (scrollTarget) {
          document.getElementById(scrollTarget)?.scrollIntoView({
            behavior: "smooth",
          });
        } else if (to !== pathname) {
          window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        }
      });
    });
  };

  return (
    <PageTransitionContext.Provider value={{ navigateWithTransition }}>
      {children}
    </PageTransitionContext.Provider>
  );
}

export function usePageTransition() {
  const context = useContext(PageTransitionContext);

  if (!context) {
    throw new Error(
      "usePageTransition doit etre utilise dans PageTransitionProvider"
    );
  }

  return context;
}
