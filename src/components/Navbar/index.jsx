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
                <Navbar.Brand id="navTitle" href="./" style= {{ hover: "white" }}>LAURA KANE DIGITAL</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="navLink" style={{ hover: "white" }} href="./">home</Nav.Link>
                        <Nav.Link className="navLink" style={{ hover: "white" }} href="./work">work</Nav.Link>
                        <Nav.Link className="navLink" style={{ hover: "white" }} href="./services">services</Nav.Link>
                        <Nav.Link className="navLink" style={{ hover: "white" }} href="./contact">contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar