import { useEffect } from "react";
import anime from "animejs";

function useMagneticElements(selector = ".magnetic") {
  useEffect(() => {
    const isTouchDevice =
      window.matchMedia("(hover: none)").matches ||
      window.matchMedia("(pointer: coarse)").matches;

    if (isTouchDevice) return;

    const elements = document.querySelectorAll(selector);

    if (!elements.length) return;

    const handleMouseMove = (event) => {
      const element = event.currentTarget;
      const rect = element.getBoundingClientRect();

      const relX = event.clientX - rect.left;
      const relY = event.clientY - rect.top;

      const moveX = (relX - rect.width / 2) * 0.16;
      const moveY = (relY - rect.height / 2) * 0.16;

      anime.remove(element);

      anime({
        targets: element,
        translateX: moveX,
        translateY: moveY,
        duration: 420,
        easing: "easeOutExpo",
      });
    };

    const handleMouseLeave = (event) => {
      const element = event.currentTarget;

      anime.remove(element);

      anime({
        targets: element,
        translateX: 0,
        translateY: 0,
        duration: 620,
        easing: "easeOutElastic(1, .55)",
      });
    };

    elements.forEach((element) => {
      element.addEventListener("mousemove", handleMouseMove);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      elements.forEach((element) => {
        element.removeEventListener("mousemove", handleMouseMove);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [selector]);
}

export default useMagneticElements;