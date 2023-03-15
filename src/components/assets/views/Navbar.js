import React from 'react';
import Menu from "./Menu";
import '../css/navBarStyle.css';
import logo from '../images/Icon.png';
import { Link } from 'react-scroll'
import { FaHome, FaAddressBook, FaCogs, FaBriefcase, FaProjectDiagram, FaAddressCard, FaBackward} from "react-icons/fa";
import {useState} from 'react';

export default function Navbar() {
    function scrollToTop() { window.scrollTo({ top: 0, behavior: "smooth"}); }
    const [visible, setVisible] = React.useState(false);
    const [isActive, setIsActive] = useState(false);

    const rotate = () => {
      setIsActive(current => !current);
    };

    return (
        <>
            {!visible &&
                <div style={{height: '0px'}}>
                    <div class="sidenav">
                        <button onClick={scrollToTop}><img src={logo} alt="profile_picture"/></button>
                        <h2>Gerred Gruenspan</h2>
                        <nav>
                            <ul>
                                <Link to="home" smooth={true} className="home"><li id="homeNav"><FaHome style={{fontSize: '30px', textAlign: 'right'}}/><p>Home</p></li></Link>
                                <Link to="about" smooth={true} className="about"><li id="aboutNav"><FaAddressCard style={{fontSize: '30px', textAlign: 'right'}}/><p>About</p></li></Link>
                                <Link to="skills" smooth={true} className="skills"><li id="skillsNav"><FaCogs style={{fontSize: '30px', textAlign: 'right'}}/><p>Skills</p></li></Link>
                                <Link to="experience" smooth={true} className="experience"><li id="experienceNav"><FaBriefcase style={{fontSize: '30px', textAlign: 'right'}}/><p>Experience</p></li></Link>
                                <Link to="projects" smooth={true} className="projects"><li id="projectsNav"><FaProjectDiagram style={{fontSize: '30px', textAlign: 'right'}}/><p>Projects</p></li></Link>
                                <Link to="contact" smooth={true} className="contact"><li id="contactNav"><FaAddressBook style={{fontSize: '30px', textAlign: 'right'}}/><p>Contact</p></li></Link> 
                                <Link onClick={() => setVisible(!visible)} className="back"><li id="backNav"><FaBackward style={{fontSize: '30px', textAlign: 'right'}}/><p>Back</p></li></Link> 
                            </ul>
                        </nav>
                    </div>
                    <div class="mobileNav">-
                        <div class="navBottom">
                            <Link to="home" smooth={true} className="home"><FaHome style={{fontSize: '40px'}}/><p>Home</p></Link>
                            <Link onClick={() => setVisible(!visible)} className="back"><FaBackward style={{fontSize: '40px'}}/><p style={{paddingLeft: '5px'}}>Back</p></Link>
                            <img src={logo} alt="profile_picture" class="navTrigger" id="btn"
                                 style={{ transform: isActive ? 'rotateZ(225deg)' : '', opacity: isActive ? '0.8' : '' }}
                                 onClick={rotate}>
                            </img>
                            <Link to="experience" smooth={true} onClick={rotate} className="navInner item_1 experience" style={{ visibility: isActive ? 'visible' : 'hidden' }}><FaBriefcase className="bubble"/></Link>
                            <Link to="skills" smooth={true} onClick={rotate} className="navInner item_2 skills" style={{ visibility: isActive ? 'visible' : 'hidden' }}><FaCogs className="bubble"/></Link>
                            <Link to="about" smooth={true} onClick={rotate} className="navInner item_3 about" style={{ visibility: isActive ? 'visible' : 'hidden' }}><FaAddressCard className="bubble"/></Link>
                            <Link to="projects" smooth={true} onClick={rotate} className="navInner item_4 projects" style={{ visibility: isActive ? 'visible' : 'hidden' }}><FaProjectDiagram className="bubble"/></Link>
                            <Link to="contact" smooth={true} onClick={rotate} className="navInner item_5 contact" style={{ visibility: isActive ? 'visible' : 'hidden' }}><FaAddressBook className="bubble"/></Link> 
                        </div>
                    </div>
                </div>
            }
            {visible && 
                <div>
                    <Menu/>
                </div>
            }
        </>
    );
}