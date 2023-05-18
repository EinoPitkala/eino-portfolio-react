import React from "react";
const importAll = (require) =>
  require.keys().reduce((acc, next) => {
    acc[next.replace("./", "")] = require(next);
    return acc;
  }, {});

const images = importAll(
  require.context("../../assets/images", false, /\.(png|jpe?g|svg)$/)
);

export const Projects = () => {
  const ownProjects = [
    {
      projectName: "eino-it-www",
      projectLanguage: "ReactJS, CSS",
      projectDescription:
        "Website for my business. Made with ReactJS and CSS. Static website, no backend.",
      projectLink: "https://eino-it.fi",
      projectSource: "https://github.com/EinoPitkala/eino-it-www",
      projectImage: "eino-it.png",
    },
    {
      projectName: "eino-react-portfolio",
      projectLanguage: "ReactJS, SCSS",
      projectLink: "https://eino.pitkala.net",
      projectSource: "https://github.com/EinoPitkala/eino.pitkala.net",
      projectDescription:
        "My personal website. Made with ReactJS and SCSS. Static website, no backend.",
      projectImage: "eino-portfolio.png",
    },
  ];
  const clientProjects = [
    {
      projectName: "Suomen Ensihoitoalan Liitto ry",
      projectLanguage: "Wordpress",
      projectDescription:
        "I'm administrating SEHL's website. Website is not made by me.",
      projectLink: "https://sehl.fi",
      projectImage: "sehl.png",
    },
    {
      projectName: "Hanesbakery",
      projectLanguage: "Wordpress",
      projectDescription: "Website for local bakery. Website is WIP.",
      projectLink: "https://hanesbakery.fi",
      projectImage: "wip.png",
    },
  ];
  return (
    <div className="projects">
      <h2>My projects</h2>
      <div className="projects-grid">
        {ownProjects.map((project, index) => {
          return (
            <div className="project-card" key={index}>
              <h5>{project.projectLanguage}</h5>
              <h3>{project.projectName}</h3>
              <p>{project.projectDescription}</p>
              <img src={images[project.projectImage]} alt="" />
              <a className="project-link" href={project.projectLink}>
                {project.projectLink}
              </a>
              <a className="project-link" href={project.projectSource}>
                Source
              </a>
            </div>
          );
        })}
      </div>
      <h2>My clients</h2>
      <div className="projects-grid">
        {clientProjects.map((project, index) => {
          return (
            <div className="project-card" key={index}>
              <h5>{project.projectLanguage}</h5>
              <h3>{project.projectName}</h3>
              <p>{project.projectDescription}</p>
              <img src={images[project.projectImage]} alt="" />
              <a className="project-link" href={project.projectLink}>
                {project.projectLink}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Projects;
