import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  const scrollToFunction = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    updateExpanded(false);
  };

  useEffect(() => {
    // Highlights the nav item matching the section currently in view, and
    // switches the navbar to its "sticky" style once the page is scrolled.
    //
    // Previously both listeners were registered during render, which attached a
    // brand new handler on every single re-render and never removed any of
    // them. One effect with a cleanup keeps exactly one of each.
    function onScroll() {
      updateNavbar(window.scrollY >= 20);

      const links = document.querySelectorAll(".nav-link");
      const sections = document.querySelectorAll(".activeNavlink");

      for (let i = 0; i < sections.length; i++) {
        if (!links[i]) break;

        const sectionTop = sections[i].offsetTop;
        const sectionHeight = sections[i].offsetHeight;
        const variableHeight = sectionHeight / 4;

        if (window.pageYOffset > sectionTop - sectionHeight / 3 + variableHeight) {
          links.forEach((link) => link.classList.remove("active"));
          links[i].classList.add("active");
        }
      }
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
              <Nav.Link onClick={() => scrollToFunction("scrollHome")}>
                <span>Home</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link onClick={() => scrollToFunction("scrollAbout")}>
                <span>About</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link onClick={() => scrollToFunction("scrollSkills")}>
                <span>Skills</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link onClick={() => scrollToFunction("scrollProjects")}>
                <span>Projects</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link onClick={() => scrollToFunction("scrollResume")}>
                <span>Resume</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link onClick={() => scrollToFunction("scrollContact")}>
                <span>Contact</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
