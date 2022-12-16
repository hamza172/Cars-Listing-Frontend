import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import SwitchLanguage from './langSwitch';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';


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
                  <Link to='/' className='no-underline'>Home</Link>
                  <Link to='/all-cars' className='no-underline'>All Cars</Link>
                  <Link to='/all-brands' className='no-underline'>All Brands</Link>
                  <Link to='/hot-cars' className='no-underline'>Hot Cars</Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <Navbar.Toggle onClick={handleShow}/>
            <Link to='/' className='no-underline'><Navbar.Brand className='white-text'>BRAND</Navbar.Brand></Link>
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