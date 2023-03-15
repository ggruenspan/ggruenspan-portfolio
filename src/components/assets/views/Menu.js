import React from 'react';
// import Main from "./Main";
import "../css/menuStyle.css";
import logo from "../images/pfp.jpg";
import { FaGithub, FaLinkedin, FaInstagram, FaUserTie } from "react-icons/fa";

export default function App() {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  const [visible, setVisible] = React.useState(false);
  
  return (
    <>
      <div class="container">
        <div class="profile_picture">
            <img src={logo} alt="profile_picture" />
        </div>
        <div class="content">
          <h2>Gerred Gruenspan</h2>
        </div>
        <button class="portfolio" onClick={() => setVisible(!visible)}><FaUserTie className="icon" style={{paddingRight: '5px', marginBottom: '-3px'}}/>Portfolio</button>
        <button class="linkedin" onClick={() => openInNewTab('https://www.linkedin.com/in/ggruenspan/')}><FaLinkedin className="icon" style={{paddingRight: '5px', marginBottom: '-3px'}}/>Linkedin</button>
        <button class="github" onClick={() => openInNewTab('https://github.com/ggruenspan')}><FaGithub className="icon" style={{paddingRight: '5px', marginBottom: '-3px'}}/>GitHub</button>
        <button class="instagram" onClick={() => openInNewTab('https://www.instagram.com/ggruenspan/')}><FaInstagram className="icon" style={{paddingRight: '5px', marginBottom: '-3px'}}/>Instagram</button>
      </div>
      {/* {!visible &&       
        <div class="container">
          <div class="profile_picture">
              <img src={logo} alt="profile_picture" />
          </div>
          <div class="content">
            <h2>Gerred Gruenspan</h2>
          </div>
          <button class="portfolio" onClick={() => setVisible(!visible)}><FaUserTie className="icon" style={{paddingRight: '5px', marginBottom: '-3px'}}/>Portfolio</button>
          <button class="linkedin" onClick={() => openInNewTab('https://www.linkedin.com/in/ggruenspan/')}><FaLinkedin className="icon" style={{paddingRight: '5px', marginBottom: '-3px'}}/>Linkedin</button>
          <button class="github" onClick={() => openInNewTab('https://github.com/ggruenspan')}><FaGithub className="icon" style={{paddingRight: '5px', marginBottom: '-3px'}}/>GitHub</button>
          <button class="instagram" onClick={() => openInNewTab('https://www.instagram.com/ggruenspan/')}><FaInstagram className="icon" style={{paddingRight: '5px', marginBottom: '-3px'}}/>Instagram</button>
        </div>
      }
      {visible && 
        <div>
          <Main/>
        </div>
      } */}
    </>
  );
}