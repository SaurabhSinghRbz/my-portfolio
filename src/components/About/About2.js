import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CURRENT_PROFILE, NEW_PORTFOLIO } from "../../config/portfolioVersions";

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
                                Hello, I am Saurabh Singh — a {CURRENT_PROFILE.role} at {CURRENT_PROFILE.company} in {CURRENT_PROFILE.location}, originally from Sonbhadra, Uttar Pradesh. For the last four years I've built the infrastructure behind gift cards and payments: a queue platform that processes millions of messages a day at 500+ TPS, the notification service behind every email, SMS and WhatsApp message, and the Go service that owns the full gift-card lifecycle.
                            </span>
                            <br />
                            <br />
                            <span className="myabout second-about">
                                Outside Pine Labs I own SmoothPay — a multi-tenant QR-ordering, payments and membership platform for restaurants in the UAE — end to end, from the data model to the checkout flow. Day to day I work in Go, Node.js and TypeScript, with PostgreSQL, MySQL, MongoDB and Redis underneath.
                            </span>
                            <br />
                            <br />
                            <span className="myabout third-about">
                                This site is the portfolio I built in 2021–22 while retraining into software, and it's kept online as a record of where I started. For my current work, case studies and résumé, visit{" "}
                                <a className="purple" href={NEW_PORTFOLIO.url} target="_blank" rel="noopener noreferrer">
                                    {NEW_PORTFOLIO.label}
                                </a>
                                .
                            </span>
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default About2;
