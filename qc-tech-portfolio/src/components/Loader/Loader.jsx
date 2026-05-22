import { useEffect, useRef } from "react";
import anime from "animejs";
import "./Loader.css";
import { shouldReduceMotion } from "../../utils/motion";

function Loader({ onComplete }) {
  const loaderRef = useRef(null);
  const logoRef = useRef(null);
  const barRef = useRef(null);
  const percentRef = useRef(null);

  useEffect(() => {

    if (shouldReduceMotion()) {
      onComplete();
      return;
    }
    const counter = { value: 0 };
    
    const timeline = anime.timeline({
      easing: "easeInOutExpo",
    });
    

    timeline
      .add({
        targets: logoRef.current,
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 900,
      })
      .add(
        {
          targets: barRef.current,
          width: ["0%", "100%"],
          duration: 1800,
          easing: "easeInOutQuart",
        },
        "-=350"
      )
      .add(
        {
          targets: counter,
          value: [0, 100],
          duration: 1800,
          easing: "linear",
          update: () => {
            if (percentRef.current) {
              percentRef.current.textContent = `${Math.round(counter.value)}%`;
            }
          },
        },
        "-=1800"
      )
      .add({
        targets: logoRef.current,
        opacity: [1, 0],
        translateY: [0, -25],
        duration: 600,
        delay: 200,
      })
      .add(
        {
          targets: loaderRef.current,
          opacity: [1, 0],
          duration: 700,
          complete: () => {
            onComplete();
          },
        },
        "-=250"
      );

    return () => {
      timeline.pause();
    };
  }, [onComplete]);

  return (
    <div className="loader" ref={loaderRef}>
      <div className="loader__background">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="loader__content">
        <div className="loader__logo" ref={logoRef}>
          <div className="loader__brand">
            <span className="loader__bracket">&lt;</span>
            <strong>DigitalLoom</strong>
            <span className="loader__bracket">/&gt;</span>
          </div>

          <p>Freelance développeur</p>
        </div>

        <div className="loader__progress">
          <div className="loader__progress-line">
            <div className="loader__progress-fill" ref={barRef}></div>
          </div>

          <span className="loader__percent" ref={percentRef}>
            0%
          </span>
        </div>
      </div>
    </div>
  );
}

export default Loader;