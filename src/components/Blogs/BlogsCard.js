import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal, BiTime } from "react-icons/bi";
import { MdDateRange } from "react-icons/md";
function BlogsCard(props) {
    return (
        <Card className="project-card-view" id="project-flex">
            <Card.Img id="project-flex-img" variant="top" src={props.imgPath} alt="card-img" />
            <Card.Body>
                <a href={props.link} target="_blank" rel="noreferrer" style={{ color: "white" }}>
                    <Card.Title>{props.title}</Card.Title>
                </a>
                <Card.Text style={{ textAlign: "justify" }}>
                    {props.description}
                </Card.Text>
                <Card.Text style={{ float: "left" }}><MdDateRange /> {props.date} - <BiTime /> {props.time} </Card.Text>
                <Button variant="primary" href={props.link} target="_blank">
                    <BiLinkExternal /> &nbsp;
                    {props.isBlog ? "View Blog" : "View Blog"}
                </Button>
            </Card.Body>
        </Card>
    );
}
export default BlogsCard;
