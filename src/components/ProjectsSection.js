import React, { useState } from "react";
import "../assets/css/projects-section.css";
import { designProjects, softwareProjects } from "../MockData";

const ProjectsSection = () => {
    const [activeTab, setActiveTab] = useState("software"); // default tab

    return (
        <section id="projects" className="py-5 mt-5">
            <div className="light-full-container">
                <div className="light-content-container">
                    {/* Header */}
                    <div className="text-center mb-5">
                        <h1 className="title">Our Projects</h1>
                        <p className="fs-5 text-secondary mx-auto" style={{ maxWidth: "768px" }}>
                            A showcase of the websites, apps, and digital solutions we’ve delivered for clients across industries.
                        </p>
                    </div>

                    {/* Tabs */}
                    <div className="text-center mb-5 d-flex justify-content-center gap-4">
                        <button
                            className={`category-btn ${activeTab === "software" ? "active" : ""}`}
                            onClick={() => setActiveTab("software")}
                        >
                            Software Projects
                        </button>
                        <button
                            className={`category-btn ${activeTab === "design" ? "active" : ""}`}
                            onClick={() => setActiveTab("design")}
                        >
                            Graphic Design Projects
                        </button>
                    </div>


                    {/* Projects Grid */}
                    <div className="row g-4">
                        {(activeTab === "design" ? designProjects : softwareProjects).map((project) => (
                            <div key={project.id} className="col-sm-12 col-lg-6">
                            <div className="project-card position-relative overflow-hidden rounded shadow-sm">
                                    <img src={project.image} alt={project.title} className="img-fluid project-img" />
                                    <div className="project-overlay d-flex flex-column justify-content-center align-items-center text-center p-3">
                                        <h5 className="fw-bold mb-2">{project.title}</h5>
                                        <p className="small mb-3 mx-5">{project.description}</p>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-success btn-sm">
                                            View Project
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
