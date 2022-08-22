import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiFigma,
} from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import {
  DiGit,
} from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit /><span><br />Git</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode /><span>VSCode</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman /><span>Postman</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku /><span>Heroku</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoVercel /><span>Vercel</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma /><span>Figma</span>
      </Col>
    </Row>
  );
}

export default Toolstack;
