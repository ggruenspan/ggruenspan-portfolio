import '../css/homeStyle.css';
import logo from '../images/mainPhoto.JPG';
import Typewriter from "typewriter-effect";

export default function Home() {
    return (
        <div class="home-container" id="home">
                <img src={logo} alt="mainPhoto"/>
                <div class="middle">
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
                </div>
        </div>
    );
}