import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MyNavbar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary"> 
        {/* change navbar colours and styling here */}
            <Container>
                <Navbar.Brand href="/">Laura Kane Digital</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">home</Nav.Link>
                        <Nav.Link href="/work">work</Nav.Link>
                        <Nav.Link href="/services">services</Nav.Link>
                        {/* <NavDropdown title="services" id="basic-nav-dropdown">
                            <NavDropdown.Item href="webDev">front-end web development</NavDropdown.Item>
                            <NavDropdown.Item href="#socialMedia">social media</NavDropdown.Item>
                            <NavDropdown.Item href="#email">email marketing</NavDropdown.Item>
                        </NavDropdown> */}
                        <Nav.Link href="/contact">contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar