import React from "react";

export default function Projects() {
  const projects = [
    {
      projectName: "Projekti 1",
      projectDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam distinctio blanditiis quia provident omnis id, eius quis ipsa dolor debitis eligendi voluptates suscipit eaque sint aliquid, perspiciatis exercitationem, commodi incidunt.",
    },
    {
      projectName: "Projekti 2",
      projectDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nemo natus assumenda ad magnam ipsum molestiae optio corporis rerum? Ullam id tenetur recusandae ipsa inventore sed ducimus in, rerum unde.",
    },
    {
      projectName: "Projekti 3",
      projectDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam architecto at possimus harum, explicabo exercitationem delectus! Voluptatibus eligendi exercitationem pariatur, animi minima dolorem iusto dicta sunt fugiat, perferendis deleniti repudiandae.",
    },
    {
      projectName: "Projekti 4",
      projectDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam architecto at possimus harum, explicabo exercitationem delectus! Voluptatibus eligendi exercitationem pariatur, animi minima dolorem iusto dicta sunt fugiat, perferendis deleniti repudiandae.",
    },
  ];
  return (
    <div className="projects">
      <h1>My projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => {
          return (
            <div className="project-card" key={index}>
              <h3>{project.projectName}</h3>
              <p>{project.projectDescription}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
