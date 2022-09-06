import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import Particle2 from "../Particle2";
import Footer from "../Footer";

import project01 from "../../Assets/Projects/project01.png";
import project02 from "../../Assets/Projects/project02.png";
import project03 from "../../Assets/Projects/project03.png";
import project05 from "../../Assets/Projects/project05.png";
import project06 from "../../Assets/Projects/project06.png";
import project07 from "../../Assets/Projects/project07.png";
import project08 from "../../Assets/Projects/project08.png";

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
            {/* <Col md={6} className="project-card first-blog">
              <ProjectCard
                imgPath={project02}
                isBlog={false}
                title="Medium"
                tool=" HTML, CSS, JavaScript, React, Express.JS, MongoDB, NodeJS, EJS, MaterialUI, Bootstrap "
                description="This website is a clone of Medium.com, it is a platform where a person can write and host a professional blog and any user comes to my clone website then he can log in by his email and after logging in he can write a blog and he also gets facility that he can read blogs written by others and he can also host his blog, his blog is visible to all users."
                link="https://github.com/shivam-singh-au17/ProjectMediumClone"
                demoLink="https://mediumapp.vercel.app/"
              />
            </Col> */}

            <Col md={6} className="project-card">
              <ProjectCard
                imgPath={project01}
                isBlog={false}
                title="India Today"
                tool="  JavaScript, HTML, CSS, JSON ,DOM-Manipulation"
                description="This project is clone of IndiaToday news websote. India Today is a 24-hour English language television network based in Noida, Uttar Pradesh that carries news, current affairs and business programming in India. The channel is owned by TV Today Network Ltd, which is a part of Living Media."
                link="https://github.com/SaurabhSinghRbz/india-today-clone"
                demoLink="https://india-today-clone.netlify.app/"
              />
            </Col>

            {/* <Col md={6} className="project-card">
              <ProjectCard
                imgPath={project01}
                isBlog={false}
                title="ONN Bikes"
                tool=" HTML, CSS, JavaScript "
                description="This website is a clone of Onnbikes.com, It is a platform where bikes or scooters can rent bikes at the cheapest price with the most flexible daily, weekly, and monthly bike rental plans and all these facilities are available on our website too, the user can log in by email and mobile and after that, he can book the bike according to his location and he also gets to see different types of bikes and their prices here."
                link="https://github.com/shivam-singh-au17/project_oonbikes"
                demoLink="https://onnbikes.vercel.app/"
              />
            </Col> */}

            <Col md={6} className="project-card second-blog">
              <ProjectCard
                imgPath={project03}
                isBlog={false}
                title="MeanBUy"
                tool="JavaScript, HTML, CSS, DOM-Manipulation, Localstorage "
                description="This website is a clone of MeanBuy.com .MeanBuy is the future of online shopping. we let our customers Pay What They Want to Pay on a variety of retail products, ranging from women’s accessories to consumer electronics on MeanBuy.com."
                link="https://github.com/SaurabhSinghRbz/project_MeanBuy"
                demoLink="https://saurabhsinghrbz.github.io/project_MeanBuy/"
              />
            </Col>

            {/* <Col md={6} className="project-card second-blog">
              <ProjectCard
                imgPath={project05}
                isBlog={false}
                title="Shravasti Blog"
                tool=" HTML, CSS "
                description="This is a website created by me, in this website I have told about the Shravasti district of Uttar Pradesh, I completed my diploma from here and I like this place very much, so I tried to make a small website on it. I have told about some of the famous temples there and how to go to Shravasti and what is available in Shravasti and how is Shravasti I have talked about in this website and this was my first website which was just HTML was created by CSS and I learned a lot from it."
                link="https://github.com/shivam-singh-au17/shravasti-by-shivam-singh"
                demoLink="https://shravasti-by-shivam-singh.vercel.app/"
              />
            </Col> */}

            {/* <Col md={6} className="project-card second-blog">
              <ProjectCard
                imgPath={project06}
                isBlog={false}
                title="Hackathon"
                tool=" HTML, CSS, JavaScript, React, Express.JS, MongoDB, NodeJS, Bootstrap, MaterialUI "
                description="The goal of a hackathon is to create functioning software or hardware by the end of the event and this is my first hackathon. We created such functionality in this hackathon where people can see the value of courier delivery by different types of courier companies at one place and any user can send their courier at their convenience with the company in which they benefit."
                link="https://github.com/shivam-singh-au17/hackathon_App"
                demoLink="https://hackathonapp.vercel.app/"
              />
            </Col> */}

            {/* <Col md={6} className="project-card second-blog">
              <ProjectCard
                imgPath={project07}
                isBlog={false}
                title="Color Generator"
                tool=" HTML, CSS, JavaScript "
                description="This is a random color generator website where you can choose the color of your choice by refreshing the page again and again as per your convenience. You get to see more than 200 colors at a time here. You can use this website to choose colors for your project and your website."
                link="https://github.com/shivam-singh-au17/Color_Generator"
                demoLink="https://shivam-singh-au17.github.io/Color_Generator/"
              />
            </Col> */}

            <Col md={6} className="project-card second-blog">
              <ProjectCard
                imgPath={project08}
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
