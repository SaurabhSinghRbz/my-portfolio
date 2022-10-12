import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogsCard from "./BlogsCard";
// import Particle2 from "../Particle2";
import Footer from "../Footer";

import noBroker from "../../Assets/Blogs/noBroker.png";

function Blogs() {
  return (
    <div className="blog-background">
      {/* <Particle2 /> */}
      <Container fluid className="project-section">
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Blogs </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are some of the blogs that I have written recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={12} className="project-card first-blog">
              <BlogsCard
                imgPath={noBroker}
                isBlog={false}
                date="Sep 11, 2022"
                time="3 min read"
                title="Clone of landing page of NoBroker website using Reactjs."
                description="This is my first single page application which I have created using ReactJs and other frontend technologies. This is the clone of NoBroker. NoBroker is a disruptive real-estate platform that makes it possible to buy/sell/rent a house without paying any brokerage"
                link="https://saurabhblog.hashnode.dev/clone-of-homepage-of-no-broker"
              />
            </Col>

            {/* <Col md={12} className="project-card second-blog">
              <BlogsCard
                imgPath={project02}
                isBlog={false}
                date="Oct 4, 2021"
                time="5 min read"
                title="My first React website and my first experience of cloning a website using React Framework."
                description="This website is a clone of Medium.com, it is a platform where a person can write and host a professional blog and any user comes to my clone website then he can log in by his email and after logging in he can write a blog and he also gets facility that he can read blogs written by others and he can also host his blog, his blog is visible to all users."
                link="https://medium.com/@shivamsingh4458/my-first-react-website-and-my-first-experience-of-cloning-a-website-using-react-framework-9cd5d6db44e6"
              />
            </Col> */}

            {/* <Col md={12} className="project-card third-blog">
              <BlogsCard
                imgPath={blog03}
                isBlog={false}
                date="Dec 1, 2021"
                time="10 min read"
                title="Know how to connect MongoDB Atlas to Express NodeJS Server (Backend)"
                description="Choosing the right database for an application is really important. If the backend is built with Node.js or Express, then the most suitable database is MongoDB. Storing the entire DB in our local server is most risky. It’s better to use a cloud database. Here in this article, we will discuss the steps to connect an Express backend with the MongoDB Atlas database."
                link="https://medium.com/@shivamsingh4458/know-how-to-connect-mongodb-atlas-to-express-nodejs-server-backend-d734adfe361"
              />
            </Col> */}
          </Row>
        </Container>
      </Container>
      <Footer />
    </div>
  );
}

export default Blogs;
