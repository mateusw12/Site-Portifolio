import React, { useContext, useEffect } from "react";
import { SidebarContext } from "../context/SidebarContext";
import "../styles/Home.css";

const Home = () => {
  const { collapsed } = useContext(SidebarContext);

  useEffect(() => {
    // Aqui você pode usar o estado collapsed conforme necessário
    const divElement = document.getElementById("home");

    if (!divElement) return;
    collapsed
      ? containerAddCssClass(divElement)
      : containerRemoveCssClass(divElement);
  }, [collapsed]);

  function containerAddCssClass(divElement) {
    divElement.classList.add("container");
    divElement.classList.remove("home-container");
  }

  function containerRemoveCssClass(divElement) {
    divElement.classList.remove("container");
    divElement.classList.add("home-container");
  }

  return (
    <div id="home" className="home-container">
      <div className="home-content-title">
        <h1>SEJA BEM VINDO AO MEU PORTIFÓLIO!!</h1>
      </div>
      <div className="home-content">
        <h3>
          FIQUE A VONTADE PARA EXPLORAR, ACESSE AS MÍDIAS SOCIAS PARA ENTRAR EM
          CONTATO!!
        </h3>
      </div>
    </div>
  );
};

export default Home;
