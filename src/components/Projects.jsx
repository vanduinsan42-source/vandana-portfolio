import React, { useState } from "react";
import "./Projects.css";
import weather from "../assets/weather.jpeg";
import recipe from "../assets/Recipe.jpeg"
import portfolio from "../assets/port.png"

const projects = [
  {
    number: "01",
    title: "AI Recipe App",
    description: "Discover delicious recipes using ingredients available at home.",
    image: recipe,
  },
  {
    number: "02",
    title: "Personal Portfolio",
    description: "A creative portfolio showcasing my skills and projects.",
    image: portfolio,
  },
  {
    number: "03",
    title: "Weather App",
    description: "Check weather conditions and temperature for different cities.",
    image: weather,
  },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="portfolio-projects" id="work">
      <div className="projects-heading">
        <span>MY WORK</span>
        <h2>Selected Projects</h2>
        <p>A few things I've been learning, building, and creating.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article
            className={`project-card ${
              activeIndex === index ? "active-project" : ""
            }`}
            key={project.number}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div className="project-image-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <span className="project-number">{project.number}</span>
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
