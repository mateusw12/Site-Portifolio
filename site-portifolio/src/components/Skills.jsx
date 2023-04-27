import React, { useContext, useEffect } from "react";
import { SidebarContext } from "../context/SidebarContext";

import "../styles/Skills.css";

const Skills = () => {
  const { collapsed } = useContext(SidebarContext);

  useEffect(() => {
    // Aqui você pode usar o estado collapsed conforme necessário
    const divElement = document.getElementById("wrapper");

    if (!divElement) return;
    collapsed
      ? containerAddCssClass(divElement)
      : containerRemoveCssClass(divElement);
  }, [collapsed]);

  function containerAddCssClass(divElement) {
    divElement.classList.add("wrapper-collapsado");
    divElement.classList.remove("wrapper");
  }

  function containerRemoveCssClass(divElement) {
    divElement.classList.remove("wrapper-collapsado");
    divElement.classList.add("wrapper");
  }

  return (
    <div id="wrapper" className="wrapper">
      <div className="skills-container">
        <div className="column">
          <div className="header-title">
            <b className="title">Soft Skills:</b>
          </div>
          <hr />
          <div className="skill-content">
            <ul>
              <li className="pointer-item">Proativo e organizado</li>
              <li className="pointer-item">Trabalhar em equipe</li>
              <li className="pointer-item">Capacidade analítica</li>
              <li className="pointer-item">Resolução de conflitos</li>
              <li className="pointer-item">Flexivel</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="column">
          <div className="header-title">
            <b className="title">Hard Skills:</b>
          </div>
          <hr />
          <div className="skill-content">
            <ul>
              <li className="pointer-item">Inglês técnico</li>
              <li className="pointer-item">
                Bacharelado em Engenharia de Software
              </li>
              <li className="pointer-item">Dominio Java Script, HTML e CSS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
