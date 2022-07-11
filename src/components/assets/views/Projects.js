import '../css/projectsStyle.css';
import { projects } from "../js/data.js";

export default function Projects() {
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
                            <p>Software: {project.subtitle}</p>
                            <p>Description: {project.description}</p>
                            <p>Github: <a href={project.link}>{project.link}</a></p>
                        </div>
                    </div>
                ))}
            </div>
            <div class="other">
                <h3>Other Projects</h3>
                <h5>All of these can be found on my github - <a href='https://github.com/ggruenspan'>https://github.com/ggruenspan</a></h5>
                <ul>
                    <li>Created scripts for Minecraft Modpack. These scripts were created using Zenscript, to make the 100+ mods work with each other</li>
                </ul>
            </div>
        </div>
    );
}