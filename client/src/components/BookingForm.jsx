import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_BOOKING_TEMPLATE_ID,
  EMAILJS_CONFIRMATION_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
  BUSINESS_EMAIL,
  GOOGLE_SHEET_WEBHOOK_URL,
} from "../emailConfig";

export default function BookingForm({ items, total, onBooked }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    preferredDate: "",
    notes: "",
  });
  const [status, setStatus] = useState({ text: "", type: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ text: "", type: "" });

    if (items.length === 0) {
      setStatus({
        text: "Please select at least one test or package before booking.",
        type: "error",
      });
      return;
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_BOOKING_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus({
        text: "Email sending isn't configured yet. Add your EmailJS keys to client/.env (see .env.example).",
        type: "error",
      });
      return;
    }

    const testsList = items.map((i) => `${i.name} — ₹${i.price}`).join("\n");

    const templateParams = {
      name: form.name,
      phone: form.phone,
      email: form.email || "-",
      address: form.address,
      preferred_date: form.preferredDate || "-",
      notes: form.notes || "-",
      tests_list: testsList,
      total: `₹${total}`,
      to_email: BUSINESS_EMAIL,
    };

    setSending(true);
    try {
      // 1) Notify the business owner — to_email always points at BUSINESS_EMAIL,
      //    so make sure the EmailJS booking template's "To Email" field is set
      //    to {{to_email}}.
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_BOOKING_TEMPLATE_ID,
        templateParams,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      // 2) Optional confirmation email to the customer, only if they gave one
      //    and a confirmation template has been configured.
      if (form.email && EMAILJS_CONFIRMATION_TEMPLATE_ID) {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_CONFIRMATION_TEMPLATE_ID,
          templateParams,
          { publicKey: EMAILJS_PUBLIC_KEY }
        );
      }

      // 3) Optional: also log this booking as a row in a Google Sheet.
      //    Fire-and-forget — a failure here should never block the booking,
      //    since the email above already went through.
      if (GOOGLE_SHEET_WEBHOOK_URL) {
        try {
          await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "text/plain" },
            body: JSON.stringify({
              timestamp: new Date().toISOString(),
              name: form.name,
              phone: form.phone,
              email: form.email || "-",
              address: form.address,
              preferred_date: form.preferredDate || "-",
              notes: form.notes || "-",
              tests_list: testsList,
              total: total,
            }),
          });
        } catch (sheetErr) {
          console.warn("Google Sheet logging failed (booking still went through):", sheetErr);
        }
      }

      setStatus({
        text: "Booking confirmed! We've emailed the details. Our team will contact you shortly.",
        type: "success",
      });
      setForm({
        name: "",
        phone: "",
        email: "",
        address: "",
        preferredDate: "",
        notes: "",
      });
      onBooked();
    } catch (err) {
      setStatus({
        text: "Could not send booking (" + (err?.text || err?.message || "unknown error") + "). Please try again or call us directly.",
        type: "error",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label>
        Full Name *
        <input
          type="text"
          name="name"
          required
          placeholder="Enter your full name"
          value={form.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Phone Number *
        <input
          type="tel"
          name="phone"
          required
          pattern="[0-9]{10}"
          placeholder="10-digit mobile number"
          value={form.phone}
          onChange={handleChange}
        />
      </label>
      <label>
        Email (for your confirmation, optional)
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Address *
        <textarea
          name="address"
          required
          placeholder="Full address for sample collection"
          value={form.address}
          onChange={handleChange}
        />
      </label>
      <label>
        Preferred Date
        <input
          type="date"
          name="preferredDate"
          value={form.preferredDate}
          onChange={handleChange}
        />
      </label>
      <label>
        Notes
        <textarea
          name="notes"
          placeholder="Any additional notes (optional)"
          value={form.notes}
          onChange={handleChange}
        />
      </label>

      <button type="submit" className="btn btn-primary" disabled={sending}>
        {sending ? "Sending..." : "Confirm Booking & Send"}
      </button>
      {status.text && (
        <p className={"form-status" + (status.type ? " " + status.type : "")}>
          {status.text}
        </p>
      )}
    </form>
  );
}
