import React from "react";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import MyModal from "./Modal";
import Callme from "./Callme";
import { IoCall } from "react-icons/io5";

const ContectLogo = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [callme, setCallme] = React.useState(false);
  return (
    <>
      <span>
        <ul className="home-about-social-linksTwo">
          <li className="social-iconsTwo">
            <a
              href="https://github.com/shivam-singh-au17"
              target="_blank"
              rel="noreferrer"
              className="icon-colourTwo  home-social-iconsTwo"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className="social-iconsTwo">
            <a
              href="https://www.linkedin.com/in/shivamsingh4458/"
              target="_blank"
              rel="noreferrer"
              className="icon-colourTwo  home-social-iconsTwo"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className="social-iconsTwo">
            <MyModal show={modalShow} onHide={() => setModalShow(false)} />
            <span
              onClick={() => setModalShow(true)}
              className="icon-colourTwo home-social-iconsTwo"
            >
              <CgMail />
            </span>
          </li>
          <li className="social-iconsTwo">
            <Callme show={callme} onHide={() => setCallme(false)} />
            <span
              onClick={() => setCallme(true)}
              className="icon-colourTwo home-social-iconsTwo"
            >
              <IoCall />
            </span>
          </li>
          <li className="social-iconsTwo">
            <a
              href="https://www.instagram.com/shivamsingh9350/"
              target="_blank"
              rel="noreferrer"
              className="icon-colourTwo home-social-iconsTwo"
            >
              <AiFillInstagram />
            </a>
          </li>
        </ul>
      </span>
    </>
  );
};

export default ContectLogo;
