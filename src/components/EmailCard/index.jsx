import Card from 'react-bootstrap/Card';

function EmailCard({ email }) {
    return (
        <Card border="dark" style={{ maxWidth: '50rem', textAlign: 'center', marginLeft: 50, marginBottom: 10}}>
            <a href={email.link} target='blank' id="imageLink">
            <Card.Img variant="bottom" src={email.image} className="emailScreenshot" style= {{ maxHeight: 300, objectFit: 'cover', objectPosition: 'top left', opacity: '0.8' }} />
            </a>
            <Card.Body style={{ fontFamily: "Archivo Black, sans-serif", fontStyle: 'light', textAlign: 'left', backgroundColor: 'var(--blue-color)'}}>
                <Card.Title className="title">{email.title}</Card.Title>
                <Card.Text>
                    {email.description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default EmailCard;