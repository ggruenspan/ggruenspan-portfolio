import { React, useState } from 'react';
import '../css/navBarStyle.css';
import logo from '../images/Icon.png';
import { Link } from 'react-scroll'
import { FaHome, FaAddressBook, FaCogs, FaBriefcase, FaProjectDiagram, FaAddressCard} from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Navbar() {
    function scrollToTop() { window.scrollTo({ top: 0, behavior: "smooth"}); }
    const [isActive, setIsActive] = useState(false);
    const [isSubNavOpen, setIsSubNavOpen] = useState(false);
    const [isMSubNavOpen, setIsMSubNavOpen] = useState(false);

    function rotate () {
        setIsActive(current => !current);
        setIsMSubNavOpen(false);
    };

    function toggleSubNav() {
        setIsSubNavOpen(current => !current);
    }

    function toggleMSubNav() {
        setIsMSubNavOpen(current => !current);
        setIsActive(false);
    }

    function handleClick(event) {
        event.preventDefault();
        const linkUrl = event.currentTarget.getAttribute('href');
        window.open(linkUrl, '_blank');
    }

    return (
        <>
            <div style={{height: '0px'}}>
                <div class="sidenav">
                    <button onClick={scrollToTop}><img src={logo} alt="profile_picture"/></button>
                    <h2>Gerred Gruenspan</h2>
                    <nav>
                        <ul id="1">
                            <Link to="home" smooth={true} className="home"><li id="homeNav"><FaHome style={{fontSize: '30px', textAlign: 'right'}}/><p>Home</p></li></Link>
                            <Link to="about" smooth={true} className="about"><li id="aboutNav"><FaAddressCard style={{fontSize: '30px', textAlign: 'right'}}/><p>About</p></li></Link>
                            <Link to="skills" smooth={true} className="skills"><li id="skillsNav"><FaCogs style={{fontSize: '30px', textAlign: 'right'}}/><p>Skills</p></li></Link>
                            <Link to="experience" smooth={true} className="experience"><li id="experienceNav"><FaBriefcase style={{fontSize: '30px', textAlign: 'right'}}/><p>Experience</p></li></Link>
                            <Link to="projects" smooth={true} className="projects"><li id="projectsNav"><FaProjectDiagram style={{fontSize: '30px', textAlign: 'right'}}/><p>Projects</p></li></Link>
                            <Link to="contact" smooth={true} className="contact"><li id="contactNav"><FaAddressBook style={{fontSize: '30px', textAlign: 'right'}}/><p>Contact</p></li></Link> 
                            <Link className="socials" onClick={toggleSubNav} onMouseEnter={() => setIsSubNavOpen(true)} onMouseLeave={() => setIsSubNavOpen(false)}>
                                <li id="socialsNav">
                                    <IoShareSocialSharp style={{fontSize: '30px', textAlign: 'right'}}/><p>Socials</p>
                                    <div className="subNav" style={{ visibility: isSubNavOpen ? 'visible' : 'hidden' }}>
                                        <a href="https://www.linkedin.com/in/ggruenspan/" className="linkedin" onClick={handleClick}><li id="linkedinSubNav"><FaLinkedin style={{fontSize: '30px', textAlign: 'right'}}/><p style={{ visibility: isSubNavOpen ? 'visible' : 'hidden' }}>Linkedin</p></li></a>
                                        <a href="https://www.github.com/ggruenspan" className="gitHub" onClick={handleClick}><li id="gitHubSubNav"><FaGithub style={{fontSize: '30px', textAlign: 'right'}}/><p style={{ visibility: isSubNavOpen ? 'visible' : 'hidden' }}>GitHub</p></li></a>
                                        <a href="https://www.instagram.com/ggruenspan/" className="instagram" onClick={handleClick}><li id="instagramSubNav"><FaInstagram style={{fontSize: '30px', textAlign: 'right'}}/><p style={{ visibility: isSubNavOpen ? 'visible' : 'hidden' }}>Instagram</p></li></a> 
                                    </div>
                                </li>
                            </Link>
                        </ul>
                    </nav>
                </div>
                <div class="mobileNav">
                    <div class="navBottom">
                        <Link to="home" smooth={true} className="home"><FaHome style={{fontSize: '40px'}}/><p>Home</p></Link>
                        <Link className="socials" onClick={toggleMSubNav}>
                            <IoShareSocialSharp style={{fontSize: '40px'}}/><p>Socials</p>
                            <div className="subNav" style={{ visibility: isMSubNavOpen ? 'visible' : 'hidden' }}>
                                <a href="https://www.linkedin.com/in/ggruenspan/" className="navInner item_3 linkedin" onClick={handleClick}><FaLinkedin className="bubble"/></a>
                                <a href="https://www.github.com/ggruenspan" className="navInner item_4 gitHub" onClick={handleClick}><FaGithub className="bubble"/></a>
                                <a href="https://www.instagram.com/ggruenspan/" className="navInner item_2 instagram" onClick={handleClick}><FaInstagram className="bubble"/></a> 
                            </div>
                        </Link>


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
        </>
    );
}