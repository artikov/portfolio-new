import "./Projects.css"
import Project from './Project/Project'
import {projects} from "../../projects"

const Projects = () => {
  return (
    <div id="projects" className="container">
        <h2 className="bebas-neue-regular">Featured Projects</h2>
        <p className="manrope-regular">Here are some of the selected projects that showcase my passion for front-end development.</p>
        <div className="projects-container">
            {projects.map((project) => <Project key={project.id} data={project} />)}
        </div>
    </div>
  )
}

export default Projects