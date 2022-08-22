import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle2 from "../Particle2";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/Shivam_Singh_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import Footer from "../Footer";

function Resume() {



  return (
    <div className="resume-background">
      <Particle2 />
      <Container fluid className="resume-section">
        <Container>
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button variant="primary" href={pdf} target="_blank">
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Row>
          <Row className="resume">
            <Col md={6} className="resume-left">
              <h3 className="resume-title">Experience</h3>
              <Resumecontent
                title="Techpile Technology, Intern [Flash Tech]"
                date="June 2019 - August 2019"
                content={[
                  "Hands-on training by industry experts on the 'Samachar India' project.",
                  "Learnt how system deployment is organized into small major parts.",
                  "Learned how to periodically test our code and complete it within the given time frame.",
                ]}
              />

              <h3 className="resume-title">Education</h3>
              <Resumecontent
                title="Tathagat Gautam Buddha Government Polytechnic, Shravasti "
                date="2017 - 2020"
                content={[`Diploma in Computer Science and Engineering`]}
              />
            </Col>
            <Col md={6} className="resume-right">
              <h3 className="resume-title">Trainee</h3>
              <Resumecontent
                title="Full Stack Web Developer [Masai School]"
                date="2021 – Present"
                content={[
                  "1200 hours of hands - on coding.", "100 hours for DSA.", "100 hours for soft skills development.", "5 collaborative projects and 50 mini-projects.", "2 hackathons and 1 capstone project",
                ]}
              />

              <h3 className="resume-title">ACHIEVEMENTS</h3>
              <Resumecontent
                title=""
                content={[
                  "Getting started with python LinkedIn Skill Assessment badge.", "LinkedIn Skill Assessment badge in CSS, JavaScript, Git, Bash, Node.js, and MongoDB.",
                ]}
              />
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button variant="primary" href={pdf} target="_blank">
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Row>
        </Container>
      </Container>
      <Footer />
    </div>
  );
}

export default Resume;
