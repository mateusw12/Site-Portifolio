import React from "react";
import { projects } from "../utils/constants";
import { ProjectCard } from "./index";

import "../styles/Project.css";

const Project = () => {
  return (
    <div>
      <div className="projects-title">
        <h1>Projetos</h1>
      </div>
      <div>
        {projects.map((item) => (
          <div className="project-content">
            <ProjectCard
              projectTitle={item.projectTitle}
              projectBody={item.projectBody}
              repositoryLink={item.repositoryLink}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
