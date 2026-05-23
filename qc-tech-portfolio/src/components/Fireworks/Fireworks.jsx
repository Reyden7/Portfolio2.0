import "./Fireworks.css";

function Fireworks({ active }) {
  if (!active) return null;

  const particles = Array.from({ length: 42 });

  return (
    <div className="fireworks" aria-hidden="true">
      <div className="fireworks__burst fireworks__burst--one">
        {particles.map((_, index) => (
          <span key={`one-${index}`} style={{ "--i": index }}></span>
        ))}
      </div>

      <div className="fireworks__burst fireworks__burst--two">
        {particles.map((_, index) => (
          <span key={`two-${index}`} style={{ "--i": index }}></span>
        ))}
      </div>

      <div className="fireworks__burst fireworks__burst--three">
        {particles.map((_, index) => (
          <span key={`three-${index}`} style={{ "--i": index }}></span>
        ))}
      </div>

      <div className="fireworks__success">
        <strong>Message envoyé</strong>
        <span>Je vous réponds rapidement 🚀</span>
      </div>
    </div>
  );
}

export default Fireworks;