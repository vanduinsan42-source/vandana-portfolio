import React from "react";
import "./Experience.css";

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-image">
        <img
          src="/images/experience.jpg"
          alt="My professional journey"
        />
        <div className="experience-image-text">
          <p>Growing through</p>
          <h3>Learning & Experience</h3>
        </div>
      </div>

      <div className="experience-content">
        <span className="experience-label">MY JOURNEY</span>

        <h2>Experience</h2>

        <p className="experience-intro">
          Every experience helps me learn something new,
          improve my skills, and grow as a developer.
        </p>

        <div className="experience-item">
          <span className="experience-dot"></span>

          <div>
            <h3>Frontend Developer</h3>
            <p className="experience-duration">
              React · JavaScript · HTML · CSS
            </p>
            <p className="experience-description">
              Building responsive web pages, reusable React
              components, and user-friendly interfaces.
            </p>
          </div>
        </div>

        <div className="experience-item">
          <span className="experience-dot"></span>

          <div>
            <h3>Computer Teacher</h3>
            <p className="experience-duration">
              Teaching & Communication
            </p>
            <p className="experience-description">
              Helping students understand computer concepts
              through practical learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}