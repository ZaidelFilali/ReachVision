import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function OverOnsPage() {
  return (
    <div id="content">
    <Container className="mt-5">
      {/* Over Ons Header */}
      <Row className="text-center">
        <Col>
          <h1>Over ReachVision</h1>
          <p>Leer meer over ons bedrijf, onze missie en ons team.</p>
        </Col>
      </Row>

      {/* Bedrijf Informatie */}
      <Row className="mt-5">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Onze Missie</Card.Title>
              <Card.Text>
                Bij ReachVision zijn we gepassioneerd over het helpen van bedrijven om te groeien door
                krachtige marketingstrategieën. We geloven in transparantie, toewijding en creativiteit om
                de online aanwezigheid van onze klanten te versterken. Onze missie is om bedrijven te helpen
                hun merk te laten groeien op Instagram en andere sociale mediakanalen, door middel van
                op maat gemaakte strategieën en inhoud.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Ons Team */}
      <Row className="mt-5">
        <Col>
          <h2 className="text-center">Ons Team</h2>
          <p className="text-center">Ontmoet de mensen achter ReachVision.</p>
        </Col>
      </Row>

      {/* Teamleden */}
      <Row className="text-center mt-4">
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="/images/team-member1.jpg" alt="Team Member 1" />
            <Card.Body>
              <Card.Title>Jan de Vries</Card.Title>
              <Card.Text>Oprichter en CEO</Card.Text>
              <Button variant="primary">Meer over Jan</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="/images/team-member2.jpg" alt="Team Member 2" />
            <Card.Body>
              <Card.Title>Marie Jansen</Card.Title>
              <Card.Text>Marketing Specialist</Card.Text>
              <Button variant="primary">Meer over Marie</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="/images/team-member3.jpg" alt="Team Member 3" />
            <Card.Body>
              <Card.Title>Pieter Bakker</Card.Title>
              <Card.Text>Social Media Manager</Card.Text>
              <Button variant="primary">Meer over Pieter</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default OverOnsPage;
