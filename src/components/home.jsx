import React from "react";
import "./home.css";
import portrait from "../assets/img.png";

function Home() {
  return (
    <main className="home-page" id="home">
      <section className="hero-section">
        <div className="intro-content">
          <h1>
            Hello,
            <br />
            I'm Vandana!
          </h1>

          <p className="intro-description">
            I am a passionate frontend developer who enjoys
            creating beautiful, responsive, and user-friendly
            web experiences. I love turning ideas into reality
            through code and design.
          </p>

          <a href="#contact" className="contact-email-button">
            <i className="bi bi-envelope"></i>
            Get in touch
            <i className="bi bi-arrow-up-right"></i>
          </a>
        </div>

        <div className="portrait-section">
          <img
            src={portrait}
            alt="Vandana's portfolio portrait"
            className="portrait-image"
          />

          <div className="info-pill date-pill">
            Frontend Developer
          </div>

          <div className="info-pill language-pill">
            React • JavaScript
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;