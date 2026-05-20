import { useEffect, useRef, useState } from "react";
import anime from "animejs";
import "./CustomCursor.css";
import { shouldReduceMotion } from "../../utils/motion";

function CustomCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice =
      window.matchMedia("(hover: none)").matches ||
      window.matchMedia("(pointer: coarse)").matches;

    if (isTouchDevice) return;
    if (shouldReduceMotion()) return;
    
    const cursor = cursorRef.current;
    const dot = dotRef.current;

    if (!cursor || !dot) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let animationFrame;

    const moveCursor = () => {
      cursorX += (mouseX - cursorX) * 0.16;
      cursorY += (mouseY - cursorY) * 0.16;

      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;

      animationFrame = requestAnimationFrame(moveCursor);
    };

    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handlePointerEnter = () => {
      document.body.classList.add("cursor-hover");

      anime({
        targets: cursor,
        scale: 1.8,
        duration: 420,
        easing: "easeOutExpo",
      });
    };

    const handlePointerLeave = () => {
      document.body.classList.remove("cursor-hover");

      anime({
        targets: cursor,
        scale: 1,
        duration: 420,
        easing: "easeOutExpo",
      });
    };

    const interactiveElements = () =>
      document.querySelectorAll(
        "a, button, .home-category-card, .project-card__media, .model-project-card__viewer"
      );

    const bindInteractiveElements = () => {
      interactiveElements().forEach((element) => {
        element.addEventListener("mouseenter", handlePointerEnter);
        element.addEventListener("mouseleave", handlePointerLeave);
      });
    };

    const unbindInteractiveElements = () => {
      interactiveElements().forEach((element) => {
        element.removeEventListener("mouseenter", handlePointerEnter);
        element.removeEventListener("mouseleave", handlePointerLeave);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    bindInteractiveElements();
    moveCursor();

    const observer = new MutationObserver(() => {
      unbindInteractiveElements();
      bindInteractiveElements();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);

      unbindInteractiveElements();
      observer.disconnect();
      document.body.classList.remove("cursor-hover");
    };
  }, []);

  return (
    <>
      <div
        className={`custom-cursor ${isVisible ? "custom-cursor--visible" : ""}`}
        ref={cursorRef}
      ></div>

      <div
        className={`custom-cursor-dot ${
          isVisible ? "custom-cursor-dot--visible" : ""
        }`}
        ref={dotRef}
      ></div>
    </>
  );
}

export default CustomCursor;