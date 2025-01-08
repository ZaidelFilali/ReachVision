import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Diensten() {
  return (
    <div id="content">
    <Container className="my-5">
      <Row className="text-center mb-5">
        <Col>
          <h1 id="Cloud">
            Kies het <span className="text-primary">perfecte pakket</span> voor jouw bedrijf
          </h1>
          <p>Bekijk onze pakketten en kies wat het beste bij jouw bedrijf past.</p>
        </Col>
      </Row>

      {/* Pricing Section met grote weergave van pakketten */}
      <Row>
        {/* Basis Pakket */}
        <Col md={4} className="mb-4">
          <Card className="h-100 shadow-sm text-center">
            <Card.Body>
              <Card.Title className="mb-3">Basis</Card.Title>
              <Card.Text>
                Perfect voor starters die hun Instagram willen laten groeien.
              </Card.Text>
              <h3 className="text-primary">€99/maand</h3>
              <ul className="list-unstyled mt-3 mb-4">
                <li>✔ 5 Posts per maand</li>
                <li>✔ Basis hashtagstrategie</li>
                <li>✔ 1 Maandelijkse rapportage</li>
              </ul>
              <Button variant="primary" href="/inschrijven?package=basis">Inschrijven</Button> {/* Link naar inschrijfformulier */}
            </Card.Body>
          </Card>
        </Col>

        {/* Pro Pakket */}
        <Col md={4} className="mb-4">
          <Card className="h-100 shadow-sm text-center">
            <Card.Body>
              <Card.Title className="mb-3">Pro</Card.Title>
              <Card.Text>
                Voor bedrijven die extra impact willen maken op social media.
              </Card.Text>
              <h3 className="text-primary">€199/maand</h3>
              <ul className="list-unstyled mt-3 mb-4">
                <li>✔ 10 Posts per maand</li>
                <li>✔ Geavanceerde hashtagstrategie</li>
                <li>✔ 2 Maandelijkse rapportages</li>
                <li>✔ Content planning</li>
              </ul>
              <Button variant="primary" href="/inschrijven?package=pro">Inschrijven</Button> {/* Link naar inschrijfformulier */}
            </Card.Body>
          </Card>
        </Col>

        {/* Premium Pakket */}
        <Col md={4} className="mb-4">
          <Card className="h-100 shadow-sm text-center">
            <Card.Body>
              <Card.Title className="mb-3">Premium</Card.Title>
              <Card.Text>
                Voor bedrijven die maximale resultaten willen behalen.
              </Card.Text>
              <h3 className="text-primary">€299/maand</h3>
              <ul className="list-unstyled mt-3 mb-4">
                <li>✔ 20 Posts per maand</li>
                <li>✔ Uitgebreide hashtagstrategie</li>
                <li>✔ Wekelijkse rapportages</li>
                <li>✔ Persoonlijk advies</li>
                <li>✔ Reel-productie</li>
              </ul>
              <Button variant="primary" href="/inschrijven?package=premium">Inschrijven</Button> {/* Link naar inschrijfformulier */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Diensten;
