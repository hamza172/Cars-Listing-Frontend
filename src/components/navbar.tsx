import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import SwitchLanguage from './langSwitch';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';


export default function NavBar() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (<>
        <Navbar key='expand' bg="dark" expand={false}>
          <Container >
            <div className="d-flex align-items-center">
          <Navbar.Offcanvas show={show} onHide={handleClose} 
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title >
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <Navbar.Toggle onClick={handleShow}/>
            <Navbar.Brand href="#">BRAND</Navbar.Brand>
            </div>
            <div className="d-flex align-items-center">
            <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2 searchbar-nav"
                    aria-label="Search"
                  />
                  <Button className="search-button-navbar"><BsSearch/></Button>
                </Form>
                    <SwitchLanguage/>
                </div>
          </Container>
        </Navbar>
    </>)
}