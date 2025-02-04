import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card"

function Navigation() {
  return (
    <Navbar id="Navigation" expand="lg">
    <Container>
    <Nav.Link as={Link} to="/">
      <Navbar.Brand className="d-flex align-items-center" href="#home">
        <Card.Img
          id="logo"
          src="/images/logo.png"
          alt="Reach Vision Logo"
        />
      </Navbar.Brand>
      </Nav.Link>
      <Nav className="ms-auto">
        <Nav.Link as={Link} to="/Diensten">
          <span className="text-white">Diensten</span>
        </Nav.Link>
        <Nav.Link as={Link} to="/OverOns">
          <span className="text-white">Over Ons</span>
        </Nav.Link>
        <Nav.Link as={Link} to="/Contact">
          <span className="text-white">Contact</span>
        </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  );

}

export default Navigation;