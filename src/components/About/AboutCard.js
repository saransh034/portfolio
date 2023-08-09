import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, My name is <span className="purple">Saransh Singh. </span>
            I'm a  <span className="purple"> Software Developer</span> having one and half years of experience working with <span className="purple">Agicent technologies.</span><br/>
            I have developed wide range of application using various technology like Node.js, React.js and MySQL.
            I have strong knowledge of JavaScript and database( MySQL ). I have completed my master's degree (MCA) in 2022.<br/>
            I have worked on various project related to web development.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Ceiy Admin Panel
            </li>
            <li className="about-activity">
              <ImPointRight /> Studio Think Admin Panel
            </li>
            <li className="about-activity">
              <ImPointRight /> Flok 22 Admin Panel
            </li>
            <li className="about-activity">
              <ImPointRight /> Patriot Nation
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Saransh Singh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
