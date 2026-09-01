import { ALL_TESTS } from "../hooks/useBooking";
import { IconClipboard } from "./Icons";

export default function PackagesSection({ packages, isSelected, onTogglePackage }) {
  return (
    <section id="packages" className="section">
      <div className="container">
        <h2><IconClipboard className="section-icon" /> Health Checkup Packages</h2>
        <p className="section-sub">Bundled tests at a discounted price</p>
        <div className="cards-grid">
          {packages.map((pkg) => {
            const includedNames = pkg.includesText
              ? pkg.includesText
              : pkg.includes
                  .map((id) => ALL_TESTS.find((t) => t.id === id)?.name)
                  .filter(Boolean)
                  .join(", ");

            return (
              <div className="card" key={pkg.id}>
                <span className="category-tag">Package</span>
                <h3>{pkg.name}</h3>
                <p className="desc">{pkg.description}</p>
                {pkg.fasting && (
                  <p className="desc">
                    <em>{pkg.fasting}</em>
                  </p>
                )}
                <p className="includes-list">
                  <strong>Includes:</strong>
                  <br />
                  {pkg.includesText
                    ? pkg.includesText.map((line, i) => (
                        <span key={i}>
                          {line}
                          <br />
                        </span>
                      ))
                    : includedNames}
                </p>
                <div className="price-row">
                  <span className="price-block">
                    <span className="price-original">₹{pkg.price + 50}</span>
                    <span className="price">₹{pkg.price}</span>
                  </span>
                  <label className="select-wrap">
                    <input
                      type="checkbox"
                      checked={isSelected("package:" + pkg.id)}
                      onChange={() => onTogglePackage(pkg.id)}
                    />
                    Select
                  </label>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
