import React from "react";
import "./Education.css";

const educationDetails = [
  {
    title: "Bachelor's Degree",
    subtitle: "Bachelor's of Computer Application · Shah Satnam Ji Girls College, Sirsa (CDLU)",
    year: "2024 – Pursuing",
    accent: "brown",
  },
  {
    title: "Senior Secondary School",
    subtitle: "Class 12 · GSSS, Ahli Noorki",
    year: "2023 – 2024",
    accent: "terracotta",
  },
  {
    title: "Secondary School",
    subtitle: "Class 10 · GSSS, Ahli Noorki",
    year: "2021 – 2022",
    accent: "gold",
  },
];

export default function Education() {
  return (
    <section className="education-showcase" id="education">
      {/* Left side */}
      <div className="education-intro">
        <h2>
          Education &
          <br />
          Learning
        </h2>

        <p>
          Every step of my education has helped me grow,
          build my knowledge, and develop the skills I use
          in my journey as a frontend developer.
        </p>

        <a href="#education-list" className="education-link">
          Explore my education <span>↗</span>
        </a>
      </div>

      {/* Right side */}
      <div className="education-list" id="education-list">
        {educationDetails.map((item, index) => (
          <article
            className={`education-row accent-${item.accent}`}
            key={item.title}
          >
            <div className="education-row-main">
              <span className="education-number">
                0{index + 1}
              </span>

              <div className="education-info">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </div>

            <span className="education-year">{item.year}</span>
          </article>
        ))}

        <p className="education-footer">
          Always learning. Always growing.
        </p>
      </div>
    </section>
  );
}