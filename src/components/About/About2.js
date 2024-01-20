import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={12} className="home-about-description">
                        <h1 style={{ fontSize: "3em" }}>
                            <span className="purple">“About  me” </span>
                        </h1>
                        <p className="home-about-body">
                            <span className="myabout first-about">
                                Hello, I am Saurabh Singh, Full Stack Web Developer. I'm from Sonbhadra, Uttar Pradesh, India. As an experienced web developer, I possess a strong foundation in a wide range of technologies and frameworks. I am well-versed in both front-end and back-end development, with expertise in creating dynamic and engaging web applications.
                            </span>
                            <br />
                            <br />
                            <span className="myabout second-about">
                                My skill set includes extensive knowledge of JavaScript, which allows me to utilize frameworks such as React, Vue, and Node.js to build robust and scalable web solutions. I am proficient in working with databases like MongoDB to efficiently store and retrieve data for applications. Additionally, I have experience in implementing microservices architecture to develop modular and scalable systems.
                            </span>
                            <br />
                            <br />
                            <span className="myabout third-about">
                                In summary, I am a dedicated web developer with a strong passion for problem-solving and a constant drive to learn. My expertise in JavaScript, React, Vue, Node.js, MongoDB, and microservices, coupled with my ability to adapt and stay updated with industry advancements, positions me to deliver high-quality web applications that meet and exceed client expectations.
                            </span>
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default About2;
