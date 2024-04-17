import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProjectCard({ project }) {
    return (
        <Card border="dark" style={{ maxWidth: '50rem', maxHeight: '40rem', textAlign: 'center', marginLeft: 50, marginBottom: 10}}>
            <a href={project.deployed} target='blank' id="imageLink">
            <Card.Img variant="bottom" src={project.image} className="projectScreenshot" style= {{ maxHeight: 300, objectFit: 'cover', objectPosition: 'top left', opacity: '0.8' }} />
            </a>
            <Card.Body style={{ fontFamily: "Archivo Black, sans-serif", fontStyle: 'light', textAlign: 'left', backgroundColor: 'var(--blue-color)'}}>
                <Card.Title className="title">{project.title}</Card.Title>
                <Card.Text>
                    {project.description}
                </Card.Text>
                {/* Make these links open on new tab! */}
                <a href={project.deployed} style={{ marginRight: 10 }} target='blank'><Button variant="dark">Deployed Application</Button></a>
                <a href={project.github} target='blank'><Button variant="dark">GitHub Repository</Button></a>
            </Card.Body>
        </Card>
    );
}

export default ProjectCard;