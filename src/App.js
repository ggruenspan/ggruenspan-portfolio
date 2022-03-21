import React from "react";
import Navbar from "./components/assets/views/Navbar";
import Home from "./components/assets/views/Home";
import About from "./components/assets/views/About";
import Projects from "./components/assets/views/Projects"
import Skills from "./components/assets/views/Skills";
import Experience from "./components/assets/views/Experience";
// import Testimonials from "./components/Testimonials";
import Contact from "./components/assets/views/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <div style={{background: "#e9e7e9"}}>
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        {/* <Testimonials /> */}
        <Contact /> 
      </div>
    </>
  );
}

