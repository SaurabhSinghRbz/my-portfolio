import React from "react";
import { Container } from "react-bootstrap";
import Particle2 from "../Particle2";
import Github from "./Github";
import BackEnd from "./BackEnd";
import Languages from "./Languages";
import FrontEnd from "./FrontEnd";
import Toolstack from "./Toolstack";
import Footer from "../Footer";

function Skill() {
  return (
    <>
      <Particle2 />
      <div className="Skill-background">
        <Container fluid className="about-section">
          <Container className="icon-fade">
            <h1 style={{ fontSize: "2.6em", marginBottom: "50px" }}>
              <u>My <span className="purple"> <u>Skills</u> </span></u>
            </h1>

            <h1 className="project-heading">
              <strong className="purple">FrontEnd </strong> Tools
            </h1>

            <FrontEnd />

            <h1 className="project-heading">
              Programming <strong className="purple"> Languages </strong>
            </h1>

            <Languages />

            <h1 className="project-heading">
              <strong className="purple">BackEnd </strong>Tools
            </h1>

            <BackEnd />

            <h1 className="project-heading">
              <strong className="purple">Tools</strong>
            </h1>
            <Toolstack />

            <Github />
          </Container>
        </Container>
        <Footer />
      </div>
    </>
  );
}

export default Skill;
