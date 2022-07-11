import '../css/navBarStyle.css';
import logo from '../images/pfp.png';
import { Link } from 'react-scroll'
import { FaAddressCard, FaProjectDiagram, FaAddressBook, FaGithub, FaLinkedin, FaInstagram, FaHome } from "react-icons/fa";
import { GiSkills } from "react-icons/gi"
import { MdWork } from "react-icons/md"
import { HiSpeakerphone } from "react-icons/hi"

export default function Navbar() {
    function scrollToTop() { window.scrollTo({ top: 0, behavior: "smooth"}); }

    return (
        <>
            <div class="sidenav">
                <button onClick={scrollToTop}><img src={logo} alt="profile_picture"/></button>
                <h2>Gerred Gruenspan</h2>
                <ul>
                    <Link to="home" activeClassName="active" spy={true} smooth={true}><li><FaHome style={{paddingRight: '5px', marginBottom: '-3px', fontSize: '20px'}}/>Home</li></Link>
                    <Link to="about" spy={true} smooth={true}><li><FaAddressCard style={{paddingRight: '5px', marginBottom: '-3px',fontSize: '20px'}}/>About</li></Link>
                    <Link to="skills" spy={true} smooth={true}><li><GiSkills style={{paddingRight: '5px', marginBottom: '-3px', fontSize: '20px'}}/>Skills</li></Link>
                    <Link to="experience" spy={true} smooth={true}><li><MdWork style={{paddingRight: '5px', marginBottom: '-3px', fontSize: '20px'}}/>Experience</li></Link>
                    <Link to="projects" spy={true} smooth={true}><li><FaProjectDiagram style={{paddingRight: '5px', marginBottom: '-3px', fontSize: '20px'}}/>Projects</li></Link>
                    {/* <Link to="testimonials" spy={true} smooth={true}><li><HiSpeakerphone style={{paddingRight: '5px', marginBottom: '-3px', fontSize: '20px'}}/>Testimonials</li></Link> */}
                    <Link to="contact" spy={true} smooth={true}><li><FaAddressBook style={{paddingRight: '5px', marginBottom: '-3px', fontSize: '20px'}}/>Contact</li></Link>
                    <li>
                        <div class="social_media">
                            <a href="https://github.com/ggruenspan" class="github"><FaGithub style={{marginTop: '7px', fontSize: '23px'}}/></a>
                            <a href="https://www.linkedin.com/in/ggruenspan/" class="linkedin"><FaLinkedin style={{marginTop: '7px', fontSize: '23px'}}/></a>
                            {/* <a href="https://www.instagram.com/ggruenspan/"class="instagram"><FaInstagram style={{paddingRight: '1px', marginTop: '8px', fontSize: '23px'}}/></a> */}
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
}