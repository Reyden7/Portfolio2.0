import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import anime from "animejs";
import "./PageTransition.css";

function PageTransition() {
  const transitionRef = useRef(null);
  const labelRef = useRef(null);
  const location = useLocation();

  const previousPathRef = useRef(location.pathname);
  const hasMountedRef = useRef(false);

  useEffect(() => {
    const transition = transitionRef.current;
    const label = labelRef.current;

    if (!transition || !label) return;

    anime.set(transition, {
      translateY: "100%",
      opacity: 1,
    });

    anime.set(label, {
      opacity: 0,
      translateY: 20,
    });

    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      previousPathRef.current = location.pathname;
      return;
    }

    if (previousPathRef.current === location.pathname) {
      return;
    }

    previousPathRef.current = location.pathname;

    const timeline = anime.timeline({
      easing: "easeInOutExpo",
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
        "-=280"
      )
      .add({
        targets: label,
        opacity: [1, 0],
        translateY: [0, -20],
        duration: 280,
        delay: 80,
      })
      .add(
        {
          targets: transition,
          translateY: ["0%", "-100%"],
          duration: 620,
        },
        "-=120"
      );

    return () => {
      timeline.pause();
    };
  }, [location.pathname]);

  return (
    <div className="page-transition" ref={transitionRef}>
      <div className="page-transition__content" ref={labelRef}>
        <span>&lt;</span>
        <strong>QC-Tech</strong>
        <span>/&gt;</span>
      </div>
    </div>
  );
}

export default PageTransition;