import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ceiy from "../../Assets/Projects/ceiy.png";
import flok22 from "../../Assets/Projects/flok-22.png";
import studioThink from "../../Assets/Projects/Studio-think.png";
import patriotNation from "../../Assets/Projects/patriot-nation.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard imgPath={ceiy} isBlog={false} title="Ceiy"
              description="It is an interactive education app aimed at improving
               decision-making and closing the information gap. 
              This admin panel enables admin to manage its
              conﬁgurations, settings, content of App. This admin panel
              consists various kind of functionalists like manage data from API,
              various kind of form validation, Search with diﬀerent kind of ﬁlters
              using React JS and nodejs concepts.  "
              websiteLink="https://www.ceiyapp.com/"
              demoLink="https://dev.admin.ceiyapp.com/#/login"
              // ghLink=" "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard imgPath={studioThink} isBlog={false} title="Studio Think"
              description="It is an app which helps people get better at life and work
              in less than 15 minutes a day, by changing their mindset. In this
              project i worked as front-end as well as back-end developer.  "
              websiteLink="https://studiothinkapp.com/"
              demoLink="https://www.studiothinkpartnerships.com/#/login"
              // ghLink=" "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard imgPath={flok22} isBlog={false} title="Flok 22"
              description="It was a social app. It is an app that connects people who want to
              meet up in real time, in real life. In this project i worked on admin
              panel as front-end as well as backend developer. "
              websiteLink="https://flok22app.com/"
              demoLink="https://flok22app.com/"
              // ghLink=" "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard imgPath={patriotNation} isBlog={false} title="Patriot nation"
              description="It's a social media platform developed using Reactjs and Nodejs which helps
              open the door to new ideas, innovation and ways to solve a problem.
              Patriot Nation allows you to consider all angles through a highly
              interactive, social platform.  "
              websiteLink="https://squashthebeef.com/login"
              demoLink="https://squashthebeef.com/login"
              // ghLink=" "
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
