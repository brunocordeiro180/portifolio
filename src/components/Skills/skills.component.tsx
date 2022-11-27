import React from "react";
import { Divider } from "../Divider/divider.component";
import "./skills.styles.scss";

const skills = [
  "AWS",
  "Java",
  "Spring Boot",
  "Spring Cloud",
  "Javascript",
  "Microservices",
  "Javascript",
  "Node",
];

export const Skills = () => {
  return (
    <div id="skills" className="skillsContainer">
      <div className="skillsContainer__title">
        <h1 className="font-bold text-lg">SKILLS</h1>
        <Divider isCentered={true} />
      </div>
      <div className="skills">
        {skills.map((skill, index) => (
          <div key={index} className="skills__skill">{skill}</div>
        ))}
      </div>
    </div>
  );
};
