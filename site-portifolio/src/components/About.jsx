import React, { useContext, useEffect } from "react";
import { SidebarContext } from "../context/SidebarContext";
import "../styles/About.css";

const About = () => {
  const { collapsed } = useContext(SidebarContext);

  useEffect(() => {
    const divElement = document.getElementById("about");

    if (!divElement) return;
    collapsed
      ? containerAddCssClass(divElement)
      : containerRemoveCssClass(divElement);
  }, [collapsed]);

  function containerAddCssClass(divElement) {
    divElement.classList.add("container-collapsado");
    divElement.classList.add("container-about-collapsado");
    divElement.classList.remove("about-container");
  }

  function containerRemoveCssClass(divElement) {
    divElement.classList.remove("container-collapsado");
    divElement.classList.remove("container-about-collapsado");
    divElement.classList.add("about-container");
  }

  return (
    <div id="about" className="about-container">
      <div className="header-title">
        <b>Um pouco sobre mim:</b>
      </div>
      <hr />
      <div className="about-content">
        <p>
          Meu nome é Mateus Walz, tenho 23 anos, sou formado em Bacharelado em
          Engenharia de Software. Tenho 2(dois) anos de experiência na área de
          TI(Tecnologia da Informação). Atualmente trabalho como desenvolvedor
          full stack, utilizando de ferramentas no front-end como React e
          Angular, já no back-end possuo conhecimentos em Java Spring Boot, .NET
          e Phyton.
        </p>
        <p>
          Já trabalhei em equipes para o desenvolvimento de softwares desde seu
          inicio, ja realizei melhorias, correção de bugs em aplicações ja
          existentes.
        </p>
        <p>
          Possuo alguns projetos no meu Github utilizando dessas linguagens e
          frameworks mencionados.
        </p>
        <p>
          Sou uma pessoa relativamente tímida, mas fácil de se adaptar a
          qualquer ambiente de trabalho.Gosto de trabalhar em equipe, só
          proativo, dedicado e organizado. Tenho como hobbys jogar video game,
          estudar sobre tecnologia e praticar esportes, principalmente futebol.
        </p>
      </div>
    </div>
  );
};

export default About;
