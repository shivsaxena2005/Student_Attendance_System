import { IconMicroscope } from "./Icons";

export default function TeamSection() {
  return (
    <section id="team" className="section">
      <div className="container">
        <h2><IconMicroscope className="section-icon" /> Our Lab Technician</h2>
        <p className="section-sub">Experienced hands behind every accurate result</p>

        <div className="expert-card">
          <img src="/expert1.png" alt="Jugesh Saxena - Lab Technician" className="expert-photo" />
          <div className="expert-info">
            <h3>Jugesh Saxena</h3>
            <span className="expert-role">Lab Technician</span>
            <span className="expert-badge">
              <IconMicroscope className="expert-badge-icon" />
              15+ Years Experience
            </span>
            <p className="expert-desc">
              Jugesh has spent over 15 years handling sample collection and lab testing,
              ensuring every report is accurate, timely, and handled with care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
