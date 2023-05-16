import React from "react";
const importAll = (require) =>
  require.keys().reduce((acc, next) => {
    acc[next.replace("./", "")] = require(next);
    return acc;
  }, {});

const images = importAll(
  require.context("../../assets/images", false, /\.(png|jpe?g|svg)$/)
);

const ClientProjects = () => {
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
export default ClientProjects
