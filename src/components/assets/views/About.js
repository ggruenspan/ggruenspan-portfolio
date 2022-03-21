import '../css/aboutStyle.css';
import { MdOutlineDesignServices, MdWeb } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { HiOutlineDesktopComputer } from "react-icons/hi"

export default function About() {
    return (
        <div class="about-container" id="about">
            <div class="title">
                <span>About</span>
                <h2>Who Am I?</h2>
            </div>
            <div class="desc">
                <p> Hi, my name is Gerred Gruenspan, an aspiring Developer / Engineer from Ontario, Canada.
                    I enjoy taking on complex problems and turning them in to well rounded applications or
                    beautiful websites. I also love the logic of coding and how programs are structured. I
                    always strive to write efficient code, whether it's in HTML, CSS, JAVA, Javascript, C++ or SQL.
                    While I am not coding or pushing pixels, I enjoy watching basketball, 
                    watching videos about cars, or even fixing my own car when I can.
                </p>
            </div>
            <div class="services">
                <div class="grapic">
                    <MdOutlineDesignServices style={{margin: "10px 120px 20px 0px", fontSize: '35px'}}/>
                    <h3 style={{marginRight: "25px"}}>Graphic Design</h3>
                </div>
                <div class="web">
                    <MdWeb style={{margin: "10px 120px 20px 0px", fontSize: '35px'}}/>
                    <h3 style={{marginRight: "50px"}}>Web Design</h3>
                </div>
                <div class="soft">
                    <FaDatabase style={{margin: "10px 120px 20px 0px", fontSize: '35px'}}/>
                    <h3 style={{marginRight: "75px"}}>Software</h3>
                </div>
                <div class="app">
                    <HiOutlineDesktopComputer style={{margin: "10px 120px 20px 0px", fontSize: '35px'}}/>
                    <h3 style={{marginRight: "50px"}}>Application</h3>
                </div>
            </div>
        </div>
    );
}