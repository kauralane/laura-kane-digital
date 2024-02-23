import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './index.css'

function MyNavbar() {
    return (
        <Navbar expand="lg" className="customNav" variant="light"> 
        {/* change navbar colours and styling here */}
            <Container>
                <Navbar.Brand id="navTitle" href="./" style={{ color: 'white'}}>LAURA KANE DIGITAL</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="navLink" href="./">home</Nav.Link>
                        <Nav.Link className="navLink" href="./work">work</Nav.Link>
                        <Nav.Link className="navLink" href="./services">services</Nav.Link>
                        <Nav.Link className="navLink" href="./contact">contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;