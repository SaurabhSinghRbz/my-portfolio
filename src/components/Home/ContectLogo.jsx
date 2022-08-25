import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import MyModal from "./Modal";
import Callme from "./Callme";
import { IoCall, IoLogoTwitter } from "react-icons/io5";

const ContectLogo = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [callme, setCallme] = React.useState(false);
  return (
    <>
      <span>
        <ul className="home-about-social-linksTwo">
          <li className="social-iconsTwo">
            <a
              href="https://github.com/SaurabhSinghRbz"
              target="_blank"
              rel="noreferrer"
              className="icon-colourTwo  home-social-iconsTwo"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className="social-iconsTwo">
            <a
              href="https://www.linkedin.com/in/saurabh-singh-8a715b220/"
              target="_blank"
              rel="noreferrer"
              className="icon-colourTwo  home-social-iconsTwo"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className="social-iconsTwo">
            <a
              href="https://twitter.com/Saurabh162000"
              target="_blank"
              rel="noreferrer"
              className="icon-colourTwo home-social-iconsTwo"
            >
              <IoLogoTwitter />
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
        </ul>
      </span>
    </>
  );
};

export default ContectLogo;
