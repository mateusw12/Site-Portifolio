import React from "react";

import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="row">
        <div className="col-md-12">
          <div className="home-title">
            <h1>Seja Bem Vindo !!!</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="home-content">
            <h3>
              Fique a vontade para explorar meu portifólio, caso tenha gostado
              entre em contato através das mídias sociais!!
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
