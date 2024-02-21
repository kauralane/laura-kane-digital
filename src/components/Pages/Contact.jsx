import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './contact.css'

const Contact = () => {

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

return (
    <>
    <h1>CONTACT</h1>
        <a style= {{ color: 'black' }} href='mailto:laurakane98@live.co.uk'>
            <h2>EMAIL</h2>
        </a>
        <a style={{ color: 'black' }} href='https://www.linkedin.com/in/laura-kane'>
    <h2>LINKEDIN</h2>
        </a>
        <a style={{ color: 'black' }} href='https://github.com/kauralane'>
    <h2>GITHUB</h2>
        </a>
        <a onClick={handleShow}>
    <h2 id="contactFormLink">CONTACT FORM</h2>
        </a>

        <Modal show={show} onHide={handleClose} style={{ fontFamily: "Archivo Black, sans-serif" }}>
            <Modal.Header closeButton>
                <Modal.Title>Get In Touch</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="name"
                            placeholder="Name"
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="name@example.com"
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="enquiry"
                    >
                        <Form.Label>Enquiry</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="light" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="dark" onClick={handleClose}>
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    </>
)
}

export default Contact