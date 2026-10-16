import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <footer className="contact-section" id="contact">
      <div className="contact-main">
        {/* Left content */}
        <div className="contact-intro">
          <span className="contact-eyebrow">
            LET'S CONNECT
          </span>

          <h2>
            Let's create
            <br />
            something <span>meaningful.</span>
          </h2>

          <p>
            Have a project in mind or just want to say hello?
            I'd love to hear from you. Let's connect and
            create something amazing together.
          </p>
        </div>

        {/* Right social links */}
        <div className="contact-socials">
          <span className="contact-social-heading">
            FIND ME ONLINE
          </span>

          <a
            href="mailto:vanduinsan42@gmail.com"
            className="social-link"
          >
            <span className="social-icon">
              <i className="bi bi-envelope"></i>
            </span>

            <span className="social-info">
              <strong>Email</strong>
              <small>Let's talk about your ideas</small>
            </span>

            <i className="bi bi-arrow-up-right social-arrow"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/vandana-kamboj/"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <span className="social-icon">
              <i className="bi bi-linkedin"></i>
            </span>

            <span className="social-info">
              <strong>LinkedIn</strong>
              <small>Connect professionally</small>
            </span>

            <i className="bi bi-arrow-up-right social-arrow"></i>
          </a>

          <a
            href="https://github.com/vanduinsan42-source"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <span className="social-icon">
              <i className="bi bi-github"></i>
            </span>

            <span className="social-info">
              <strong>GitHub</strong>
              <small>Explore my projects and code</small>
            </span>

            <i className="bi bi-arrow-up-right social-arrow"></i>
          </a>
        </div>
      </div>

      {/* Black footer bar */}
      <div className="contact-footer-bar">
        <div className="contact-footer-inner">
          <a href="#home" className="contact-brand">
            <span className="brand-dot"></span>
            My Portfolio
          </a>

          <p>Designed &amp; built with care.</p>

          <span className="contact-copyright">
            © {new Date().getFullYear()} All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}