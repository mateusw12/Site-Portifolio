import React from "react";
import Button from "react-bootstrap/Button";
import "../styles/Project.css";

const ProjectCard = ({ projectTitle, projectBody, repositoryLink }) => {
  function onNavigateClick() {
    window.open(repositoryLink, "_blank");
  }

  return (
    <div>
      <div className="project-container">
        <div className="project-title">
          <h1>{projectTitle}</h1>
        </div>
        <div className="project-body">
          <p>{projectBody}</p>
        </div>
        <div className="project-footer">
          <div>
            <Button variant="primary" onClick={onNavigateClick}>
              Visitar Repositório
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
