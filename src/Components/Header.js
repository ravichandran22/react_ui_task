import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBell, faCog, faHome, faCar, faUserTie, faEnvelope, faHistory } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <h1>Filllo</h1>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"><FontAwesomeIcon icon={faHome} style={{marginRight: "5px"}}/>Home</Nav.Link>
            <Nav.Link href="#link"><FontAwesomeIcon icon={faCar} style={{marginRight: "5px"}}/>Cars</Nav.Link>
            <Nav.Link href="#link"><FontAwesomeIcon icon={faUserTie} style={{marginRight: "5px"}}/>Dealers</Nav.Link>
            <Nav.Link href="#link"><FontAwesomeIcon icon={faEnvelope} style={{marginRight: "5px"}}/>Message</Nav.Link>
            <Nav.Link href="#link"><FontAwesomeIcon icon={faHistory} style={{marginRight: "5px"}}/>History</Nav.Link>
          </Nav>
        </Navbar.Collapse>


        <Nav className="ml-auto">
          <Nav.Link href="#user"><FontAwesomeIcon icon={faUser} /></Nav.Link>
          <Nav.Link href="#notifications"><FontAwesomeIcon icon={faBell} /></Nav.Link>
          <Nav.Link href="#settings"><FontAwesomeIcon icon={faCog} /></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
