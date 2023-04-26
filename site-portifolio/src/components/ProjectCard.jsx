import React from "react";
import { Button } from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../styles/Project.css";

const ProjectCard = ({ cardImage, cardTitle, repositoryLink, cardContent }) => {
  function onNavigateClick() {
    window.open(repositoryLink, "_blank");
  }

  return (
    <Card className="project-card">
      <Card.Img
        className="image-card"
        variant="top"
        src={cardImage}
        title={cardTitle}
      />
      <Card.Body>
        <Card.Title>{cardTitle}</Card.Title>
        <hr />
        <Card.Text className="card-text">{cardContent}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary" onClick={onNavigateClick}>
          Visitar Reposiório
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default ProjectCard;
