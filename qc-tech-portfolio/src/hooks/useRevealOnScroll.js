import { useEffect } from "react";
import anime from "animejs";

function useRevealOnScroll(selector = ".reveal") {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target;

          if (entry.isIntersecting && !element.classList.contains("is-visible")) {
            element.classList.add("is-visible");

            anime({
              targets: element,
              opacity: [0, 1],
              translateY: [42, 0],
              duration: 900,
              easing: "easeOutExpo",
            });

            observer.unobserve(element);
          }
        });
      },
      {
        threshold: 0.18,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [selector]);
}

export default useRevealOnScroll;