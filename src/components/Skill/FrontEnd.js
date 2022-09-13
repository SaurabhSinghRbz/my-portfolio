import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiRedux, SiTypescript, SiSass, SiStyledComponents } from "react-icons/si";
import { SiMaterialUi } from "react-icons/si";
import chakraUi from "./chakraui.svg"


import {
    DiHtml5,
    DiCss3,
    DiReact,
    DiNpm,
    DiBootstrap,
    DiJavascript1,

} from "react-icons/di";


import { GiChakram } from "react-icons/gi"

function FrontEnd() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1 /><span>Javascript</span>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiHtml5 /><span>HTML</span>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiCss3 /><span><br />CSS</span>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiReact /><span>React</span>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiRedux /><span>Redux</span>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiNpm /><span><br />NPM</span>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiBootstrap /><span>Bootstrap</span>
            </Col>


            {/* <Col xs={4} md={2} className="tech-icons">
                <SiTypescript /><span>Typescript</span>
            </Col> */}
            {/* <Col xs={4} md={2} className="tech-icons">
                <SiSass /><span>Sass</span>
            </Col> */}


            <Col xs={4} md={2} className="tech-icons">
                {/* <img src={chakraUi} style={{ fontSize: "5em !important" }} /><span>Sass</span> */}
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiMaterialUi /><span>Material Ui</span>
            </Col>
            <Col xs={4} md={1} className="tech-icons">
                <SiStyledComponents /><span>StyledComponents</span>
            </Col>
        </Row>
    );
}

export default FrontEnd;
