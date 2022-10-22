import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const { pathname } = useLocation();


  const scrollToFunction = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    updateExpanded(false);
  };

  // console.log("scrollintoview", window);
  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => scrollToFunction("scrollHome")} >
                <span style={pathname === "/" ? { color: "#0095ff", fontWeight: "bold" } : {}}>Home</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => scrollToFunction("scrollAbout")}
              >
                <span style={pathname === "/about" ? { color: "#0095ff", fontWeight: "bold" } : {}}>About</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/skill"
                onClick={() => scrollToFunction("scrollSkills")}
              >
                <span style={pathname === "/skill" ? { color: "#0095ff", fontWeight: "bold" } : {}}>Skills</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => scrollToFunction("scrollProjects")}
              >
                <span style={pathname === "/project" ? { color: "#0095ff", fontWeight: "bold" } : {}}>Projects</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => scrollToFunction("scrollResume")}
              >
                <span style={pathname === "/resume" ? { color: "#0095ff", fontWeight: "bold" } : {}}>Resume</span>
              </Nav.Link>
            </Nav.Item>

            {/* <Nav.Item>
              <Nav.Link
                as={Link}
                to="/blog"
                onClick={() => updateExpanded(false)}
              >
                <span style={pathname === "/blog" ? { color: "#0095ff", fontWeight: "bold" } : {}}>Blogs</span>
              </Nav.Link>
            </Nav.Item> */}

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => scrollToFunction("scrollContact")}
              >
                <span style={pathname === "/contact" ? { color: "#0095ff", fontWeight: "bold" } : {}}>Contact</span>
              </Nav.Link>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
}

export default NavBar;
