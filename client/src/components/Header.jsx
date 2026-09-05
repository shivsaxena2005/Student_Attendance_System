import { IconPhone, IconMail } from "./Icons";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container topbar">
        <span className="topbar-tagline">Trusted diagnostics lab in Dholpur • Home sample collection</span>
        <div className="topbar-contacts">
          <a href="tel:+919461002425" className="topbar-link">
            <IconPhone className="topbar-icon" />
            +91 94610 02425
          </a>
          <a href="mailto:healthchecklab3@gmail.com" className="topbar-link">
            <IconMail className="topbar-icon" />
              healthchecklab3@gmail.com
          </a>
        </div>
      </div>
      <div className="container header-inner">
        <div className="logo">
          <span className="logo-icon">🩺</span>
          HealthCheck<span>Lab</span>
        </div>
        <nav>
          <a href="#packages">Packages</a>
          <a href="#tests">Individual Tests</a>
          <a href="#custom">Custom Tests</a>
          <a href="#contact">Contact</a>
          <a href="#book" className="nav-cta">Book Now</a>
        </nav>
      </div>
    </header>
  );
}
