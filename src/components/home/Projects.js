import React from "react";

export default function Projects() {
  const projects = [
    {
      projectName: "eino-it-www",
      projectLanguage: "ReactJS, CSS",
      projectDescription:
        "Website for my business. Made with ReactJS and CSS. Static website, no backend.",
      projectLink: "https://eino-it.fi",
      projectSource: "https://github.com/EinoPitkala/eino-it-www",
    },
    {
      projectName: "eino-react-portfolio",
      projectLanguage: "ReactJS, SCSS",
      projectLink: "https://eino.pitkala.net",
      projectSource: "https://github.com/EinoPitkala/eino.pitkala.net",
      projectDescription:
        "My personal website. Made with ReactJS and SCSS. Static website, no backend.",
    },
  ];
  return (
    <div className="projects">
      <h1>My projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => {
          return (
            <div className="project-card" key={index}>
              <h5>{project.projectLanguage}</h5>
              <h3>{project.projectName}</h3>
              <p>{project.projectDescription}</p>
              <a className="project-link" href={project.projectLink}>{project.projectLink}</a>
              <a className="project-link" href={project.projectSource}>Source</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
