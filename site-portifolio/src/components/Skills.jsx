import React from "react";
import { hardSkills, softSkills } from "../utils/constants";

import "../styles/Skills.css";

const Skills = () => {
  return (
    <div>
      <div className="skill-title">
        <h1>Habilidades</h1>{" "}
      </div>
      <div className="skills-container">
        <div className="skills-title">
          <h1>Soft Skills</h1>
        </div>
        <div>
          <ul>
            {softSkills.map((item) => (
              <li className="pointer-item">{item.skill}</li>
            ))}
          </ul>
        </div>
      </div>
      <hr />
      <div className="skills-container">
        <div className="skills-title">
          <h1>Hard Skills</h1>
        </div>
        <div>
          <ul>
            {hardSkills.map((item) => (
              <li className="pointer-item">{item.skill}</li>
            ))}
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Skills;
