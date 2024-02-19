import ProjectCard from '../ProjectCard'
import projects from '../../projects.json'

const Work = () => {
return (
    <>
        <h1>See examples of my work here.</h1>

{projects.map(project => (
    <Project key={project.id} project={project} />
))}

    </>
)
}

export default Work;