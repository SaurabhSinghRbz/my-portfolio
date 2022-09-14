import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
// import Particle2 from "../Particle2";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/Saurabh_Singh_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import Footer from "../Footer";


function Resume() {
  return (
    <div className="resume-background">
      {/* <Particle2 /> */}
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
              <h3 className="resume-title">Trainee</h3>
              <Resumecontent
                title="Full Stack Web Developer [Masai School]"
                // date="2022 – Present"
                content={["Date - (2022) - Present",
                  "1200 hours of hands - on coding.",
                  "100 hours for DSA.",
                  "50 hours for soft skills development.",
                  "3 collaborative projects and 30+ mini-projects.",
                ]}
              />

              <h3 className="resume-title">Certifications</h3>
              <Resumecontent
                // title="Techpile Technology, Intern [Flash Tech]"
                // date="June 2019 - August 2019"
                content={[
                  <a rel="noreferrer" className="certificate_Links" href="https://www.hackerrank.com/certificates/7a90535d94b1" target="_blank">Problem Solving (Intermediate) Certificate (HackerRank)</a>,
                  <a rel="noreferrer" className="certificate_Links" href="https://www.hackerrank.com/certificates/47be779d564d" target="_blank">Problem Solving (Basic) Certificate (HackerRank)</a>,
                  <a rel="noreferrer" className="certificate_Links" href="https://www.hackerrank.com/certificates/0c3fd917ca64" target="_blank">Rest API (Intermediate) Certificate (HackerRank)</a>,
                  <a rel="noreferrer" className="certificate_Links" href="https://www.hackerrank.com/certificates/1385df6df40e" target="_blank">JavaScript (Basic) Certificate (HackerRank).</a>,
                  <a rel="noreferrer" className="certificate_Links" href="https://www.hackerrank.com/certificates/908cf3f3a1f3" target="_blank">React (Basic) Certificate (HackerRank)</a>,
                  <a rel="noreferrer" className="certificate_Links" href="https://drive.google.com/file/d/1xQxnB_AbswpZEUuw3VOk21mO1l5BCw2_/view?usp=sharing" target="_blank">Course on Computer Concept (NIELIT)</a>,
                  <a rel="noreferrer" className="certificate_Links" href="https://drive.google.com/file/d/193l22Tut4JgDHKVSpLbukTCRq__hL3Fk/view?usp=sharing" target="_blank">Internship on AutoCAD (Softpro India Pvt Ltd).</a>,
                  // <a href="" target="_blank"></a>,

                ]}
              />
            </Col>
            <Col md={6} className="resume-right">
              <h3 className="resume-title">Education</h3>
              <Resumecontent
                title="Government Polytechnic Lucknow, Lucknow (U.P.)"
                // date="2019 - 2022"
                content={["Date - (2019) - (2022)", `Diploma in Mechanical Engineering`]}
              />
              <Resumecontent
                title="Vimala Inter Mediate College, Robertsganj, Sonbhadra (U.P.)"
                // date="2019 - 2022"
                content={["Date - (2013) - (2018)", `Intermediate & High School`]}
              />

              {/* <h3 className="resume-title">ACHIEVEMENTS</h3>
              <Resumecontent
                title=""
                content={[
                  "Getting started with python LinkedIn Skill Assessment badge.",
                  "LinkedIn Skill Assessment badge in CSS, JavaScript, Git, Bash, Node.js, and MongoDB.",
                ]}
              /> */}
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
