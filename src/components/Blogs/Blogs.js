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
          </Row>
        </Container>
      </Container>
      <Footer />
    </div>
  );
}

export default Blogs;
