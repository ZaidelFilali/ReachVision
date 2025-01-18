import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <div id="footer" className="bg-dark text-white py-4">
      <Container>
        <Row className="justify-content-center">
          <Col className="text-center">
            <p>&copy; 2024 ReachVision. Alle rechten voorbehouden.</p>
            <p>
              <a href="/privacy" className="text-white">Privacybeleid</a> |{" "}
              <a href="/terms" className="text-white">Algemene Voorwaarden</a>
            </p>
            <p>KVK Nummer: 95944680</p>
            <div>
              <a href="https://facebook.com" className="text-white mx-2">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" className="text-white mx-2">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" className="text-white mx-2">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" className="text-white mx-2">
                <FaLinkedin />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
