import { IconTestTube } from "./Icons";

export default function TestCard({ test, checked, onToggle }) {
  const originalPrice = test.price + 50;

  return (
    <div className="card">
      <span className="category-tag"><IconTestTube className="tag-icon" /> {test.category}</span>
      <h3>{test.name}</h3>
      <p className="desc">{test.description}</p>
      <div className="price-row">
        <span className="price-block">
          <span className="price-original">₹{originalPrice}</span>
          <span className="price">₹{test.price}</span>
        </span>
        <button
          type="button"
          className={`select-btn${checked ? " selected" : ""}`}
          onClick={() => onToggle(test.id)}
          aria-pressed={checked}
        >
          {checked ? "Selected" : "Select"}
        </button>
      </div>
    </div>
  );
}
