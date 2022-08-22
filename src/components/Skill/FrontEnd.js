import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiRedux,
    SiTypescript,
    SiSass,
    // SiStyledComponents,
    // SiMaterialui,
} from "react-icons/si";
import {
    DiHtml5,
    DiCss3,
    DiReact,
    DiNpm,
    DiBootstrap,
} from "react-icons/di";

function FrontEnd() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <DiHtml5 /><span>Html</span>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiCss3 /><span><br />Css</span>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiReact /><span>React</span>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiRedux /><span>Redux</span>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiNpm /><span><br />Npm</span>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiBootstrap /><span>Bootstrap</span>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiTypescript /><span>Typescript</span>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiSass /><span>Sass</span>
            </Col>
            {/* <Col xs={4} md={2} className="tech-icons">
                <SiStyledComponents /><span>StyledComponents</span>
            </Col> */}
        </Row>
    );
}

export default FrontEnd;
