import BookingForm from "./BookingForm";

export default function BookingSection({ items, total, resetSelection }) {
  return (
    <section id="book" className="section alt-bg">
      <div className="container booking-wrap">
        <div className="booking-info">
          <h2>Book Your Checkup</h2>
          <p>
            Fill in your details and selected tests below. Our team will contact you to
            confirm your appointment and home sample collection.
          </p>
          <div className="selected-summary">
            {items.length === 0 ? (
              <p>
                <em>No tests selected yet. Choose tests above — they'll appear here.</em>
              </p>
            ) : (
              <ul>
                {items.map((item, i) => (
                  <li key={i}>
                    {item.name} — ₹{item.price}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="total-box">
            <span>Total Amount:</span>
            <strong>₹{total}</strong>
          </div>
        </div>

        <BookingForm items={items} total={total} onBooked={resetSelection} />
      </div>
    </section>
  );
}
