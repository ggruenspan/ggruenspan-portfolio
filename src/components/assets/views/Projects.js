import '../css/projectsStyle.css';
import { projects, otherProjects } from "../js/data.js";

export default function Projects() {
    function handleClick(event) {
        event.preventDefault();
        const linkUrl = event.currentTarget.getAttribute('href');
        window.open(linkUrl, '_blank');
    }

    return ( 
        <div class="projects-container" id="projects">
            <div class="title">
                <span>My Projects</span>
                <h2>Recent Work</h2>
            </div>
            <div class="grid">
                {projects.map((project) => (
                    <div href={project.link} key={project.image}>
                        <img alt={project.alt} src={project.image} width={project.width}/>
                        <div class="desc">
                            <p>Title: {project.title}</p>
                            <p>Software / Framework: {project.subtitle}</p>
                            <p>Description: {project.description}</p>
                            <p>Github: <a onClick={handleClick} href={project.link}>{project.link}</a></p>
                        </div>
                    </div>
                ))}
            </div>
            <div class="other">
                <h3>Other Projects</h3>
                {otherProjects.map((other) => (
                    <div>
                        <ul class="desc">
                            <p>Title: {other.title}</p>
                            <p>Software / Framework: {other.subtitle}</p>
                            <p>Description: {other.description}</p>
                            <p>Github: <a onClick={handleClick} href={other.link}>{other.link}</a>
                                {other.link2 && <> , <a onClick={handleClick} href={other.link2}>{other.link2}</a></>}
                            </p>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}