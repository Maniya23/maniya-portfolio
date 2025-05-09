import React, { useState } from "react";
import Modal from "./Modal"; // 👈 import the modal
import projects from "../data/projects.json";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl shadow-lg p-6
                      hover:scale-105 hover:shadow-2xl hover:bg-gray-700
                      transition-all duration-200 ease-in-out"
          >
            {/* Project Type Badge */}
            <div className="mb-3">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  project.type === "personal" ? "bg-blue-600" : "bg-purple-600"
                }`}
              >
                {project.type === "personal"
                  ? "Own Project"
                  : "Collaborated Project"}
              </span>
            </div>

            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>

            <button
              onClick={() => openModal(project)}
              className="text-blue-400 text-sm hover:underline mb-4"
            >
              See More Details
            </button>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-gray-700 text-sm px-2 py-1 rounded-full text-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-400 hover:underline"
                >
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-green-400 hover:underline"
                >
                  Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal isOpen={selectedProject !== null} onClose={closeModal}>
        {selectedProject && (
          <>
            <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
            <p className="text-gray-300 whitespace-pre-line">
              {selectedProject.longDescription}
            </p>
          </>
        )}
      </Modal>
    </section>
  );
};

export default ProjectsSection;
