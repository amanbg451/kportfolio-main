import React from "react";
import { ProjectList } from "../../../data/ProjectData";
import "./projectcard.css"
import {
  Card,
  CardLeft,
  CardRight,
  BtnGroup,
} from "./ProjectCardElements";
import ScrollAnimation from "react-animate-on-scroll";
function ProjectCard() {
  return (
    <div className="project-container">
      {ProjectList.map((list, index) => (
        <ScrollAnimation animateIn="fadeInLeft" key={index}>
          <Card className="card">
            <CardLeft>
              <img className="image" src={list.img} alt={list.name} />
            </CardLeft>
            <CardRight>
              <h4 className="title">{list.title}</h4>
              <p>{list.description}</p>
              <BtnGroup>
                {list.demo_url && (
                  <a
                    className="btn PrimaryBtn btn-shadow"
                    href={list.demo_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo ➜
                  </a>
                )}
              </BtnGroup>
            </CardRight>
          </Card>
        </ScrollAnimation>
      ))}
    </div>
  );
}

export default ProjectCard;
