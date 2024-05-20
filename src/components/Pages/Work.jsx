import ProjectCard from '../ProjectCard'
import projects from '../../projects.json'
import emails from '../../emails.json'
import EmailCard from '../EmailCard'
import Col from 'react-bootstrap/Col';

const Work = () => {
    return (
        <>
            <h1>WORK</h1>
            <Col sm={8}>
            <div>
                    <h3>Jump to:</h3><p><a href="#website-link">Website design</a> - <a href="#email-link">Email design & copywriting</a> - <a href="#social-link">Social media</a></p>
            </div>
            </Col>

            <h2 id="website-link">Website Design</h2>

            {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
            ))}
<br></br>
<hr></hr>
            <h2 id="email-link">Email design & copywriting</h2>
            {emails.map(email => (
                <EmailCard key={email.id} email={email}/>
            ))}
<br></br>
<hr></hr>
            <h2 id="social-link">Social media</h2>
            <p>Coming soon...</p>
        </>
    )
}



export default Work;