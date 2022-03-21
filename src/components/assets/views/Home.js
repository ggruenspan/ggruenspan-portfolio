import '../css/homeStyle.css';
import logo from '../images/gerred.png';
import Typewriter from "typewriter-effect";

export default function Home() {
    return (
        <div class="home-container" id="home">
            <p>
                <strong>
                    I am a 
                    <Typewriter
                        options={{
                            strings: ["Front End Developer", "Back End Developer", " Software Developer" , "Software Engineer"],
                            autoStart: true,
                            loop: true
                        }}
                    />
                </strong>
            </p>
            <div>
                <img src={logo} alt="stand_picture"/>
            </div>
        </div>
    );
}