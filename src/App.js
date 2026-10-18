import React, { useState, useEffect } from "react";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import Skill from "./components/Skill/Skill";
import V2Banner from "./components/NewPortfolio/V2Banner";
import V2Notice from "./components/NewPortfolio/V2Notice";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <V2Banner />
        <Navbar />
        <Home />
        <V2Notice />
        <About />
        <Skill />
        <Projects />
        <Resume />
        <Contact />
      </div>
    </>
  );
}

export default App;
