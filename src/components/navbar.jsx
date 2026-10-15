import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import "../../src/App.css";
import icon from "../assets/icon.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="portfolio-navbar container-fluid px-4">
      <div className="navbar-inner d-flex justify-content-between align-items-center">

        {/* Logo and Brand */}
        <a href="#home" className="navbar-brand-custom">
          <img
            src={icon}
            alt="Vandana logo"
            className="navbar-logo"
          />
          <h4 className="vandana-name">Vandana</h4>
        </a>

        {/* Desktop Navigation */}
        <div className="nav-links desktop-nav">
          <a href="#work">Projects</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact Me</a>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
        >
          <Menu size={28} strokeWidth={1.8} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMenu}>
          <div
            className="mobile-menu"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="menu-close"
              onClick={closeMenu}
              aria-label="Close navigation menu"
            >
              <X size={28} strokeWidth={1.8} />
            </button>

            <div className="mobile-nav-links">
              <a href="#work" onClick={closeMenu}>
                Projects
              </a>
              <a href="#education" onClick={closeMenu}>
                Education
              </a>
              <a href="#experience" onClick={closeMenu}>
                Experience
              </a>
              <a href="#contact" onClick={closeMenu}>
                Contact Me
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}