import { useEffect } from "react";
import anime from "animejs";
import { shouldReduceMotion } from "../utils/motion";



function useRevealOnScroll(selector = ".reveal") {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    if (!elements.length) return;

   if (shouldReduceMotion()) {
      elements.forEach((element) => {
        element.classList.add("is-visible");
        element.style.opacity = 1;
        element.style.transform = "none";
      });

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target;

          if (
            entry.isIntersecting &&
            !element.classList.contains("is-visible")
          ) {
            element.classList.add("is-visible");

            const delay = Number(element.dataset.revealDelay || 0);
            const direction = element.dataset.revealDirection || "up";

            const translateX =
              direction === "left" ? [-42, 0] : direction === "right" ? [42, 0] : [0, 0];

            const translateY =
              direction === "up" ? [42, 0] : direction === "down" ? [-42, 0] : [0, 0];

            anime({
              targets: element,
              opacity: [0, 1],
              translateX,
              translateY,
              duration: 900,
              delay,
              easing: "easeOutExpo",
            });

            observer.unobserve(element);
          }
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [selector]);
}

export default useRevealOnScroll;