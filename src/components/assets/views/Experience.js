import '../css/experienceStyle.css';
import { jobs } from "../js/data.js";

export default function Experience() {
    return ( 
        <div class="experience-container" id="experience">
            <div class="title">
                <span>Experience</span>
                <h2>Work Experience</h2>
            </div>
            <div class="jobs">
                {jobs.map((job) => (
                    <div key={job.id} id={job.id} style={{marginTop: `${job.style}px`}}>
                        <div class="logo">
                            <div class={job.haveIcon} style={{backgroundColor: `${job.color}`}}>{job.icon}</div>
                            <div class="rectangle"></div>
                        </div> 
                        <div class={`triangle ${job.side}`}></div>
                        <div class={`descBox ${job.side}`}>
                            <br></br>
                            <p><strong>{job.title}</strong></p>
                            <p>{job.when}</p>
                            <p><strong>{job.where}</strong></p>
                        </div>
                    </div>
                ))}
                <div class="endCricle"></div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <a href="..\images\Resume.pdf" download>
                    <button className="download-button">Download Resume</button>
                </a>
            </div>
        </div>
    );
}