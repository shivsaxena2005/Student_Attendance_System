import { IconPhone, IconMail, IconMapPin } from "./Icons";

const ADDRESS = "Leela Vihar Colony, Behind Midway Hotel, Dholpur, Rajasthan 328001";
const MAP_QUERY = encodeURIComponent(ADDRESS);

export default function ContactSection() {
  return (
    <section id="contact" className="section alt-bg">
      <div className="container">
        <h2><IconMapPin className="section-icon" /> Visit or Contact Us</h2>
        <p className="section-sub">Reach out or drop by — home sample collection also available</p>

        <div className="contact-wrap">
          <div className="contact-info">
            <a href="tel:+919461002425" className="contact-item">
              <IconPhone className="contact-icon" />
              <span>+91 94610 02425</span>
            </a>
            <a href="mailto:shivsaxena2878@gmail.com" className="contact-item">
              <IconMail className="contact-icon" />
              <span>shivsaxena2878@gmail.com</span>
            </a>
            <div className="contact-item">
              <IconMapPin className="contact-icon" />
              <span>{ADDRESS}</span>
            </div>
          </div>

          <div className="map-embed">
            <iframe
              title="HealthCheckLab Location"
              src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
