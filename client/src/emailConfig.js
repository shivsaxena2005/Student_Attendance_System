// ==========================================================
// EmailJS configuration
// ==========================================================
// EmailJS lets the browser send email directly — no backend server needed.
//
// Setup (one-time):
// 1. Create a free account at https://www.emailjs.com/
// 2. Add an Email Service (e.g. Gmail) -> copy its "Service ID"
// 3. Create an Email Template for the booking notification (sent to YOU).
//    Set its "To Email" field to {{to_email}} (this file fills that in automatically).
//    Suggested template variables: {{name}} {{phone}} {{email}} {{address}}
//    {{preferred_date}} {{notes}} {{tests_list}} {{total}} {{to_email}}
//    -> copy its "Template ID"
// 4. (Optional) Create a second template for the CUSTOMER confirmation.
//    Set its "To Email" field to {{email}} so it goes to whoever booked.
//    -> copy its "Template ID"
// 5. Go to Account -> copy your "Public Key"
// 6. Put all of these into client/.env (see .env.example)

export const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
export const EMAILJS_BOOKING_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_BOOKING_TEMPLATE_ID || "";
export const EMAILJS_CONFIRMATION_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CONFIRMATION_TEMPLATE_ID || "";
export const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

// The business inbox that should receive every booking notification.
// Passed into the EmailJS template as {{to_email}} so it always goes to the
// right place even if the template's own "To Email" setting gets changed.
export const BUSINESS_EMAIL = import.meta.env.VITE_BUSINESS_EMAIL || "healthchecklab3@gmail.com";

// ==========================================================
// Google Sheets logging (optional, via Google Apps Script webhook)
// ==========================================================
// Every booking is also POSTed to this URL (if set) so it's logged as a row
// in a Google Sheet — a free backup record alongside the email.
// See the Apps Script setup instructions provided separately.
export const GOOGLE_SHEET_WEBHOOK_URL = import.meta.env.VITE_GOOGLE_SHEET_WEBHOOK_URL || "";
