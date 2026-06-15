import "./BackgroundShapes.css";

function BackgroundShapes({ variant = "dark" }) {
  return (
    <div className={`background-shapes background-shapes--${variant}`} aria-hidden="true">
      <span className="background-shapes__shape background-shapes__shape--one"></span>
      <span className="background-shapes__shape background-shapes__shape--two"></span>
      <span className="background-shapes__shape background-shapes__shape--three"></span>
      <span className="background-shapes__shape background-shapes__shape--four"></span>
      <span className="background-shapes__shape background-shapes__shape--five"></span>
    </div>
  );
}

export default BackgroundShapes;