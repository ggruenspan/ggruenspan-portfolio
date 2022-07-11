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
                            <div class={job.haveRect}></div>
                        </div> 
                        <div class="triangle"></div>
                        <div style={{height: `${job.heightBox}px`}} class="descBox">
                            <br></br>
                            <p style={{fontSize: '25px', marginBottom: '20px'}}><strong>{job.title}</strong></p>
                            <p style={{marginLeft: '620px', marginTop: '-65px', textTransform: "uppercase"}}>{job.when}</p>
                            <p style={{marginTop: '20px'}}><strong>{job.where}</strong></p>
                            <p style={{marginRight: '50px', lineHeight: '1.5'}}>{job.desc}</p>
                            <br></br>
                            <p><strong>Key Accomplishments:</strong></p>
                            {job.acomp.map(acomp => {
                                return (
                                    <div class="acomps">
                                        <p> - {acomp.key}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                ))}
                <div class="endCricle"></div>
            </div>
        </div>
    );
}