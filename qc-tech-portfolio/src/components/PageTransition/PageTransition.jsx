"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import anime from "animejs";

function PageTransition() {
  const transitionRef = useRef(null);
  const labelRef = useRef(null);
  const pathname = usePathname();

  const previousPathRef = useRef(pathname);
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
      previousPathRef.current = pathname;
      return;
    }

    if (previousPathRef.current === pathname) {
      return;
    }

    previousPathRef.current = pathname;

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
  }, [pathname]);

  return (
    <div className="page-transition" ref={transitionRef}>
      <div className="page-transition__content" ref={labelRef}>
        <strong>DigitalLoom</strong>
      </div>
    </div>
  );
}

export default PageTransition;
