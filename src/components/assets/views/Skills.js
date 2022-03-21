import '../css/skillsStyle.css';
import { DiJava, DiReact, DiMongodb, DiMysql, DiJavascript} from "react-icons/di";
import { SiCplusplus} from "react-icons/si";


export default function Skills() {
    return ( 
        <div class="skills-container" id="skills">
            <div class="title">
                <span>Skills</span>
                <h2>My Specialty</h2>
            </div>
            <div class="skills">
                <div class="java">
                    <DiJava style={{margin: "10px 120px 20px 60px", fontSize: '75px'}}/>
                    <h3 style={{marginLeft: "75px"}}>Java</h3>
                </div>
                <div class="react">
                    <DiReact style={{margin: "10px 120px 20px 60px", fontSize: '75px'}}/>
                    <h3 style={{marginLeft: "73px"}}>React</h3>
                </div>
                <div class="mongoDB">
                    <DiMongodb style={{margin: "10px 120px 20px 60px", fontSize: '75px'}}/>
                    <h3 style={{marginLeft: "55px"}}>MongoDB</h3>
                </div>
                <div class="sql">
                    <DiMysql style={{margin: "10px 120px 20px 60px", fontSize: '75px'}}/>
                    <h3 style={{marginLeft: "70px"}}>MySQL</h3>
                </div>
                <div class="javascript">
                    <DiJavascript style={{margin: "10px 120px 20px 60px", fontSize: '75px'}}/>
                    <h3 style={{marginLeft: "55px"}}>JavaScript</h3>
                </div>
                <div class="cplusplus">
                    <SiCplusplus style={{margin: "10px 120px 20px 60px", fontSize: '75px'}}/>
                    <h3 style={{marginLeft: "75px"}}>C + + </h3>
                </div>
            </div>
        </div>
    );
}