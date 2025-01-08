import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hier zou je de logica toevoegen om het formulier naar een server te sturen
    setShowAlert(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div id="content">
    <Container className="mt-5">
      <Row className="text-center">
        <Col>
          <h1>Contacteer Ons</h1>
          <p>Vul het onderstaande formulier in om contact met ons op te nemen.</p>
        </Col>
      </Row>

      {/* Contact Form */}
      <Row className="justify-content-center">
        <Col md={6}>
          {showAlert && (
            <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
              Bedankt voor je bericht! We nemen snel contact met je op.
            </Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Naam</Form.Label>
              <Form.Control
                type="text"
                placeholder="Voer je naam in"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="Voer je e-mail in"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Bericht</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Schrijf je bericht"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Verstuur
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default ContactPage;
