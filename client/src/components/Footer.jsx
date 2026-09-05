import { IconPhone, IconMail, IconMapPin } from "./Icons";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-contact">
          <a href="tel:+919461002425" className="footer-link">
            <IconPhone className="footer-icon" /> +91 94610 02425
          </a>
          <a href="mailto:healthchecklab3@gmail.com" className="footer-link">
            <IconMail className="footer-icon" /> healthchecklab3@gmail.com
          </a>
          <span className="footer-link">
            <IconMapPin className="footer-icon" /> Leela Vihar Colony, Behind Midway Hotel, Dholpur (328001)
          </span>
        </div>
        <p>&copy; {new Date().getFullYear()} HealthCheckLab. All rights reserved.</p>
      </div>
    </footer>
  );
}
