import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={12} className="home-about-description">
                        <h1 style={{ fontSize: "3em" }}>
                            “About <span className="purple"> me” </span>
                        </h1>
                        <p className="home-about-body">
                            <span className="myabout first-about">
                                Hi Everyone, I am <b className="purple">Shivam Singh </b> Full Stack Web Developer based in <b className="purple">Mirzapur, India. </b> I have a passion for coding and get most enjoyment from <b className="purple"> solving problems </b> by writing elegant/maintainable code and sharing knowledge. I love learning so I'm always keeping up to date by <b className="purple"> watching conference talks, listening to podcasts and reading blog posts. </b>
                            </span>
                            <br />
                            <br />
                            <span className="myabout second-about">
                                I am fluent in classics like <i> <b className="purple"> Javascript, Python and MERN stack </b> </i> and I love learning about new technologies, what problems are they solving and How can I use them to <b className="purple"> build better and scalable products. </b>
                            </span>
                            <br />
                            <br />
                            <span className="myabout third-about">
                                I enjoy creating things that live on the internet, Whenever possible, I also apply my passion for developing products with <i> <b className="purple"> Modern Javascript Frameworks </b> </i>  like <i> <b className="purple"> Node.js and React.js. </b> </i> My goal is to always build products that provide <b className="purple"> pixel-perfect, performant experiences.</b>
                            </span>
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default About2;
