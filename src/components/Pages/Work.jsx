import ProjectCard from '../ProjectCard'
import projects from '../../projects.json'

const Work = () => {
    return (
        <>
            <h1>WORK</h1>

            {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
            ))}

        </>
    )
}

export default Work;