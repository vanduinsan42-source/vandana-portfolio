import react from "react";
import Home from "./home";
import Navbar from "./navbar";
import Education from "./Education";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";

export default function Components() {
    return (
        <div className="components">
            <Navbar />
            <Home />
            <Experience />
            <Projects />
            <Education />
            <Contact />
            
        </div>
    );
}