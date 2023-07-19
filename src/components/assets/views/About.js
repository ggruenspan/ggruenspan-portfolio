import '../css/aboutStyle.css';
import me from '../images/Selfie.jpg';

export default function About() {
    return (
        <div class="about-container" id="about">
            <div class="picture">
                <img src={me} alt="" class="center" height={655}/>
            </div>
            <div class="desc">
                <p style={{fontSize: '36px'}}> <strong>I'm Gerred Gruenspan, an aspiring Front-End / Web / Software Developer from Ontario, Canada.</strong></p>
                    <br></br>
                <p style={{fontSize: '22px'}}> I possess a profound passion for taking on intricate challenges and converting them into refined 
                    applications and visually captivating websites. The logical nature of coding and the intricacies 
                    of program structures captivate me. My commitment lies in crafting efficient code across various 
                    languages, including HTML, CSS, JavaScript, JAVA, C++, and SQL.
                    <br></br><br></br>
                    When I'm not immersed in coding or refining user experiences, I indulge in my other interests. 
                    I find great pleasure in watching basketball & baseball games, exploring the latest automotive videos, 
                    and even getting my hands dirty while fixing my own car whenever possible.
                    <br></br><br></br>
                    I am driven by the constant pursuit of improvement, and I continuously seek opportunities to 
                    enhance my skills and expand my knowledge in the ever-evolving field of development.
                </p>
            </div>
        </div>
    );
}