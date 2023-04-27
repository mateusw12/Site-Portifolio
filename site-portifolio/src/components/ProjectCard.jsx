import React, { useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { SidebarContext } from "../context/SidebarContext";
import "../styles/Project.css";

const ProjectCard = ({
  cardImage,
  cardTitle,
  repositoryLink,
  cardContent,
  id,
}) => {
  function onNavigateClick() {
    window.open(repositoryLink, "_blank");
  }

  const { collapsed } = useContext(SidebarContext);

  useEffect(() => {
    const divElement = document.getElementById("card-"+id);
    if (!divElement) return;
    collapsed
      ? containerAddCssClass(divElement)
      : containerRemoveCssClass(divElement);
  }, [collapsed]);

  function containerAddCssClass(divElement) {
    divElement.classList.remove("project-card");
    divElement.classList.add("project-card-collapsado");
  }

  function containerRemoveCssClass(divElement) {
    divElement.classList.remove("project-card-collapsado");
    divElement.classList.add("project-card");
  }

  return (
    <Card id={"card-" + id} className="project-card">
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
