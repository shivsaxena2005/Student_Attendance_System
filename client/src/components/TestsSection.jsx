import TestCard from "./TestCard";

export default function TestsSection({ id, title, subtitle, tests, isSelected, onToggle, altBg, icon: Icon }) {
  return (
    <section id={id} className={"section" + (altBg ? " alt-bg" : "")}>
      <div className="container">
        <h2>{Icon && <Icon className="section-icon" />} {title}</h2>
        <p className="section-sub">{subtitle}</p>
        <div className="cards-grid">
          {!tests || tests.length === 0 ? (
            <p style={{ color: "var(--text-light)" }}>No tests available yet.</p>
          ) : (
            tests.map((test) => (
              <TestCard
                key={test.id}
                test={test}
                checked={isSelected(test.id)}
                onToggle={onToggle}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
