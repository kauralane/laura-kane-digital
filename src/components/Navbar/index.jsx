import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './index.css'

function MyNavbar() {
    return (
        <Navbar expand="lg" className="customNav"> 
        {/* change navbar colours and styling here */}
            <Container>
                <Navbar.Brand id="navTitle" href="./">LAURA KANE DIGITAL</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="navLink" href="./">home</Nav.Link>
                        <Nav.Link className="navLink" href="./work">work</Nav.Link>
                        <Nav.Link className="navLink" href="./services">services</Nav.Link>
                        {/* <NavDropdown title="services" id="basic-nav-dropdown">
                            <NavDropdown.Item href="webDev">front-end web development</NavDropdown.Item>
                            <NavDropdown.Item href="#socialMedia">social media</NavDropdown.Item>
                            <NavDropdown.Item href="#email">email marketing</NavDropdown.Item>
                        </NavDropdown> */}
                        <Nav.Link className="navLink" href="/contact">contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar