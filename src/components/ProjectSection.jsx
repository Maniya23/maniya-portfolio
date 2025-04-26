import React from "react";
import projects from "../data/projects.json";

const ProjectsSection = () => {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Projects done / contributed by Manishka
      </h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl shadow-lg p-6 hover:scale-[1.02] transition-transform"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
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
            <div className="mb-3">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  project.type === "personal" ? "bg-blue-600" : "bg-purple-600"
                }`}
              >
                {project.type === "personal"
                  ? "Solo Project"
                  : "Collaborated Project"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
