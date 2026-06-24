"use client";

import { createContext, useContext, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";

type NavigateOptions = {
  scrollTarget?: string;
};

type PageTransitionContextValue = {
  navigateWithTransition: (to: string, options?: NavigateOptions) => void;
};

const PageTransitionContext = createContext<PageTransitionContextValue | null>(
  null
);

export function PageTransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const navigateWithTransition = (to: string, options: NavigateOptions = {}) => {
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
