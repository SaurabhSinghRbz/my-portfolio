import React from "react";
import { Modal } from "react-bootstrap";

const Callme = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          closeButton
          className="Home-Call-Img"
          style={{ fontSize: "5em" }}
        >
          <Modal.Title
            id="contained-modal-title-vcenter"
            style={{ fontSize: ".7em", color: "#FFFFFF" }}
          >
            <span style={{ opacity: "0" }}>---------</span>
            {" Call me at "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="Home-Call-Img">
          <p style={{ fontSize: "2.5em", color: "#FFFFFF" }}>
            <span style={{ opacity: "0" }}>------------</span>
            {" 6 3 0 6 5 1 8 4 6 6 "}
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Callme;
