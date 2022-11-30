import React from "react";
import { Divider } from "../Divider/divider.component";
import { BsGithub } from 'react-icons/bs'
import "./projects.styles.scss";

const backendProjects = [
  {
    name: "A* Algorithm",
    description:
      "A* algorith made in ruby for a interview. The algorith searchs for the shortest path between two points in a matrix.",
    source: "https://github.com/brunocordeiro180/Astar-algorithm-in-Ruby",
    languages: ["Ruby"],
  },
  {
    name: "Spring Kafka Shop",
    description:
      "This project aims to apply the knowledge acquired in the Apache Kafka and Spring Boot book from  'Casa do Código'.",
    source: "https://github.com/brunocordeiro180/spring-kafka-shop",
    languages: ["Java", "Spring Boot", "Kafka"],
  },
  {
    name: "Product MS",
    description:
      "Implementation of a product catalog with Java and Spring Boot.",
    source: "https://github.com/brunocordeiro180/product-ms",
    languages: ["Java", "Spring Boot", "Postgresql"],
  },
  {
    name: "Spring JWT",
    description: "JWT authentication service using Spring Boot and MongoDb",
    source: "https://github.com/brunocordeiro180/auth-spring-mongodb-jwt",
    languages: ["Java", "Spring Boot", "Mongo"],
  },
];

export const Projects = () => {
  return (
    <div id="projects" className="projectsSection">
      <div className="projectsSection__title">
        <h1 className="font-bold text-lg">Projects</h1>
        <Divider isCentered={true} />
      </div>
      <div className="backendProjects">
        <div className="mb-5 backendProjects__title">
          <h1 className="max-w-sm font-bold text-lg">Backend Projects</h1>
          <Divider isCentered={false} />
        </div>
        <div className="backendProjects__cards">
          {backendProjects.map((project, index) => (
            <div
              key={project.name}
              className="max-w-xl relative rounded shadow-lg backendProjects__card"
            >
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{project.name}</div>
                <p className="text-gray-700 text-base">{project.description}</p>
                <div className="pt-3">
                {project.languages.map((language) => (
                  <span
                    key={index + language}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >
                    {language}
                  </span>
                ))}
              </div>
              </div>
              <div className="px-6 mt-6">
                <a
                  type="button"
                  href={project.source}
                  className="text-white bg-[#24292F] hover:bg-[#24292F]/90 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/30 mr-2 mb-2"
                >
                  <BsGithub className="text-center" />
                  <span className="px-2">Source</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
