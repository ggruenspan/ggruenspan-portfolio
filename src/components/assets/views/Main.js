import Navbar from "../views/Navbar";
import Home from "./Home";
// import About from "./About";
// import Skills from "./Skills";
// import Projects from "./Projects"
// import Experience from "./Experience";
// import Contact from "./Contact";
// import Menu from "./Menu";
// import ScrollStopper from '../js/ScrollStopper';

export default function Main() {
  return (
    <>
      <Navbar />
      <div style={{background: "#e9e7e9"}}>
        <Home />
        {/* <About /> */}
        {/* <Skills /> */}
        {/* <Experience /> */}
        {/* <Projects /> */}
        {/* <Contact />  */}
      </div>
    </>
  );
}