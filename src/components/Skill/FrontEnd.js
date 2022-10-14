import React from "react";
import { SiRedux, SiStyledComponents, SiJson } from "react-icons/si";
import { SiMaterialUi } from "react-icons/si";
import { DiHtml5, DiCss3, DiReact, DiNpm, DiBootstrap, DiJavascript1, DiMongodb, DiNodejs } from "react-icons/di";
function FrontEnd() {
    return (
        <div className="skillContainer">
            <div className="tech-icons">
                <DiMongodb /><p>Mongodb</p>
            </div>
            <div className="tech-icons">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"></path></svg>
                <p>Express</p>
            </div>
            <div className="tech-icons">
                <DiReact /><p>React</p>
            </div>
            <div className="tech-icons">
                <DiNodejs /><p>Nodejs</p>
            </div>
            <div className="tech-icons">
                <SiRedux /><p>Redux</p>
            </div>
            <div className="tech-icons">
                <DiJavascript1 />
                <p>Javascript</p>
            </div>
            <div className="tech-icons">
                <SiMaterialUi /><p>MaterialUi</p>
            </div>
            <div className="tech-icons">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M12 0C5.352 0 0 5.352 0 12s5.352 12 12 12 12-5.352 12-12S18.648 0 12 0zm2.8 4.333c.13-.004.248.136.171.278l-3.044 5.58a.187.187 0 00.164.276h5.26c.17 0 .252.207.128.323l-9.22 8.605c-.165.154-.41-.063-.278-.246l4.364-6.021a.187.187 0 00-.151-.296H6.627a.187.187 0 01-.131-.32l8.18-8.123a.182.182 0 01.125-.056z"></path></svg>
                <p>ChakraUi</p>
            </div>
            <div className="tech-icons">
                <DiBootstrap /><p>Bootstrap</p>
            </div>
            <div className="tech-icons">
                <SiStyledComponents /><p style={{ fontSize: "18px" }}>Styled Components</p>
            </div>
            <div className="tech-icons">
                <DiHtml5 /><p>HTML</p>
            </div>
            <div className="tech-icons">
                <DiCss3 /><p>CSS</p>
            </div>
            <div className="tech-icons">
                <SiJson /><p>JSON</p>
            </div>
            <div className="tech-icons">
                <DiNpm /><p>NPM</p>
            </div>
        </div >
    );
}

export default FrontEnd;
