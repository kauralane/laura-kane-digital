import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import headshot from '../../assets/images/headshot.png'
import './Home.css'

const Home = () => {
return (
    <>
    <h1>LAURA KANE - DIGITAL PORTFOLIO</h1>
    <h2>ABOUT</h2>
        <Container>
            <Row>
                <Col sm={8}><p>Hi. I'm a London-based freelance social media manager, email designer, and front-end web developer. I have 5 years' experience of copywriting, email design, and content creation. I've recently completed a course in front-end web development meaning I can now also offer website design. Please take a look at my portfolio of work, and if you like what you see, get in touch.</p>
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
