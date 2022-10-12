import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import Particle2 from "../Particle2";
import Footer from "../Footer";

import coSchedule from "../../Assets/Projects/coSchedule.png";
import indiaToday from "../../Assets/Projects/indiaToday.png";
import meanBuy from "../../Assets/Projects/meanBuy.png";
import countryDetails from "../../Assets/Projects/countryDetails.png";

function Projects() {
  return (
    <div className="project-background ">
      {/* <Particle2 /> */}
      <Container fluid className="project-section">
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Projects </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

            <Col md={6} className="project-card">
              <ProjectCard
                imgPath={coSchedule}
                isBlog={false}
                title="Co-Schedule"
                tool="  JavaScript, HTNL, CSS, React, Redux, Nodejs, MongoDB, Express, ChakraUi, Local Storage"
                description="This is a clone of a task management website called CoSchedule. Co-schedule is an app used by marketing teams. Graphic designer, and social media strategist. Co schedule is a family of Agile Marketing products that will help you organize your content, social, work, and assets in one place."
                link="https://github.com/SaurabhSinghRbz/coSchedule_Clone"
                demoLink="https://coschedule-clone-new.vercel.app/"
              />
            </Col>
            <Col md={6} className="project-card">
              <ProjectCard
                imgPath={indiaToday}
                isBlog={false}
                title="India Today"
                tool="  JavaScript, HTML, CSS, JSON, DOM-Manipulation, Local Storage"
                description="This project is clone of IndiaToday news website. India Today is a 24-hour English language television network based in Noida, Uttar Pradesh that carries news, current affairs and business programming in India. The channel is owned by TV Today Network Ltd, which is a part of Living Media."
                link="https://github.com/SaurabhSinghRbz/indiaTodayClone2.0"
                demoLink="https://india-today-news.vercel.app/"
              />
            </Col>


            <Col md={6} className="project-card second-blog">
              <ProjectCard
                imgPath={meanBuy}
                isBlog={false}
                title="MeanBUy"
                tool="JavaScript, HTML, CSS, DOM-Manipulation, Localstorage "
                description="This website is a clone of MeanBuy.com .MeanBuy is the future of online shopping. we let our customers Pay What They Want to Pay on a variety of retail products, ranging from women’s accessories to consumer electronics on MeanBuy.com."
                link="https://github.com/SaurabhSinghRbz/project_MeanBuy"
                demoLink="https://saurabhsinghrbz.github.io/project_MeanBuy/"
              />
            </Col>

            <Col md={6} className="project-card second-blog">
              <ProjectCard
                imgPath={countryDetails}
                isBlog={false}
                title="All Country Details"
                tool="JavaScript, HTML, CSS, DOM-Manipulation "
                description="This is my first webpage, which i made after my first two class of HTML and CSS. This webpage contains all sorts of useful information about every country packaged as convenient little country objects. It includes data from ISO 3166 (countries and states/subdivisions ), ISO 4217 (currency), and E.164 (phone numbers)."
                link="https://github.com/SaurabhSinghRbz/All_Country_Details"
                demoLink="https://allcountry-details.netlify.app/"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </div>
  );
}

export default Projects;
