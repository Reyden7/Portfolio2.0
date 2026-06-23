"use client";

import { createContext, useContext, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import anime from "animejs";
import { shouldReduceMotion } from "../utils/motion";

const PageTransitionContext = createContext(null);

export function PageTransitionProvider({ children }) {
  const transitionRef = useRef(null);
  const labelRef = useRef(null);
  const isAnimatingRef = useRef(false);

  const router = useRouter();
  const pathname = usePathname();

  const navigateWithTransition = (to, options = {}) => {
    const { scrollTarget } = options;

    if (shouldReduceMotion()) {
      router.push(to);

      requestAnimationFrame(() => {
        if (scrollTarget) {
          document.getElementById(scrollTarget)?.scrollIntoView({ behavior: "auto" });
        } else {
          window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        }
      });

      return;
    }

    if (isAnimatingRef.current) return;

    if (to === pathname && !scrollTarget) return;

    const transition = transitionRef.current;
    const label = labelRef.current;

    if (!transition || !label) {
      router.push(to);
      return;
    }

    isAnimatingRef.current = true;

    anime.set(transition, {
      translateY: "100%",
      opacity: 1,
    });

    anime.set(label, {
      opacity: 0,
      translateY: 20,
    });

    const timeline = anime.timeline({
      easing: "easeInOutExpo",
      complete: () => {
        isAnimatingRef.current = false;
      },
    });

    timeline
      .add({
        targets: transition,
        translateY: ["100%", "0%"],
        duration: 520,
      })
      .add(
        {
          targets: label,
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 360,
        },
        "-=320"
      )
      .add({
        duration: 80,
        complete: () => {
          router.push(to);

          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              if (scrollTarget) {
                document
                  .getElementById(scrollTarget)
                  ?.scrollIntoView({ behavior: "instant" });
              } else {
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "instant",
                });
              }
            });
          });
        },
      })
      .add({
        targets: label,
        opacity: [1, 0],
        translateY: [0, -20],
        duration: 280,
        delay: 120,
      })
      .add(
        {
          targets: transition,
          translateY: ["0%", "-100%"],
          duration: 620,
        },
        "-=120"
      );
  };

  return (
    <PageTransitionContext.Provider value={{ navigateWithTransition }}>
      {children}

      <div className="page-transition" ref={transitionRef}>
        <div className="page-transition__content" ref={labelRef}>
          
          <strong>DigitalLoom</strong>
          
        </div>
      </div>
    </PageTransitionContext.Provider>
  );
}

export function usePageTransition() {
  const context = useContext(PageTransitionContext);

  if (!context) {
    throw new Error(
      "usePageTransition doit être utilisé dans PageTransitionProvider"
    );
  }

  return context;
}
