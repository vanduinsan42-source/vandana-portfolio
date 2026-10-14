import React, { useState } from "react";
import "./Projects.css";

const projects = [
  {
    number: "01",
    title: "AI Recipe App",
    description: "Discover delicious recipes using ingredients available at home.",
    image: "/images/recipe.jpg",
  },
  {
    number: "02",
    title: "Personal Portfolio",
    description: "A creative portfolio showcasing my skills and projects.",
    image: "/images/portfolio.jpg",
  },
  {
    number: "03",
    title: "Student Management",
    description: "Manage student records with a simple, user-friendly interface.",
    image: "/images/students.jpg",
  },
  {
    number: "04",
    title: "Weather App",
    description: "Check weather conditions and temperature for different cities.",
    image: "/images/weather.jpg",
  },
  {
    number: "05",
    title: "E-commerce Website",
    description: "Explore a clean and responsive online shopping experience.",
    image: "/images/ecommerce.jpg",
  },
  {
    number: "06",
    title: "Task Manager",
    description: "Organize daily tasks and keep track of your productivity.",
    image: "/images/tasks.jpg",
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
