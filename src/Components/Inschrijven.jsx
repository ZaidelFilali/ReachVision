import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";

function Inschrijven() {
  const location = useLocation();
  const [packageName, setPackageName] = useState("");

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const packageQuery = queryParams.get("package");
    setPackageName(packageQuery || "Onbekend pakket");
  }, [location]);

  return (
    <div id="content">
    <Container className="my-5">
      <h1>Inschrijven voor {packageName}</h1>
      <Form>
        <Form.Group controlId="formName">
          <Form.Label>Naam</Form.Label>
          <Form.Control type="text" placeholder="Vul je naam in" required />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mt-3">
          <Form.Label>Email adres</Form.Label>
          <Form.Control type="email" placeholder="Vul je e-mail in" required />
        </Form.Group>

        <Form.Group controlId="formPhone" className="mt-3">
          <Form.Label>Telefoonnummer</Form.Label>
          <Form.Control type="tel" placeholder="Vul je telefoonnummer in" required />
        </Form.Group>

        <Button variant="primary" className="mt-4" type="submit">
          Inschrijven
        </Button>
      </Form>
    </Container>
    </div>
  );
}

export default Inschrijven;
