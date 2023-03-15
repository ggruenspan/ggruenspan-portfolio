import '../css/homeStyle.css';
import Typewriter from "typewriter-effect";

export default function Home() {
    return (
        <div class="home-container" id="home">
            <div class="typing">
                <p>
                    <strong>
                        I am a 
                        <Typewriter
                            options={{
                                strings: ["Front End Developer", "  Web Developer", " Software Developer"],
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