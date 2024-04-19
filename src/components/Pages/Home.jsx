import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import headshot from '../../assets/images/headshot.png'
import './Home.css'

const Home = () => {
return (
    <>
    <h1>LAURA KANE DIGITAL</h1>
    <h2>ABOUT</h2>
        <Container>
            <Row>
                <Col sm={8}><p>Hi. I'm a London-based freelance social media manager, email designer, and front-end web developer. I have 5 years' experience of copywriting, email design, and content creation. I've recently completed a course in front-end web development meaning I can now also offer website design. Please take a look at the services I offer and my portfolio of work, and if you like what you see, get in touch.</p>
                <p>I can offer a range of services to suit the needs of most small businesses. Whether you're looking for some ad-hoc help with designing and sending emails, or need a full overhaul of your social media content strategy, let's talk.</p>
                    <Col sm={12}>
                        <hr></hr>
                        <p id="cv">
                            <a href="https://docs.google.com/document/d/1gkZi4RWEamijp6D64P_SQmfZ-n2QUU4ePDMipQ44P9k/edit?usp=sharing">DOWNLOAD MY CV</a>
                        </p>
                    </Col>
                </Col>
                <Col sm={4}>
                    <img id="headshot" src={headshot} alt="Photo of Laura Kane's face, smiling."></img>
                </Col>
            </Row>
        </Container>
    </>
)
}

export default Home
