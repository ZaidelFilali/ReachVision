import React from "react";
import { FaCheck, FaInstagram, FaRocket, FaBullhorn } from "react-icons/fa";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


function Homepagina() {
  return (
    <>
      {/* Hero Section */}
      <div id="Homepagefoto" className="pt-5 text-center">
        <h1 id="Cloud" className="">
          WELKOM BIJ REACHVISION
        </h1>
      </div>

      {/* Main Content */}
      <Container fluid="sm" className="mt-5 text-center">
        <Row>
          <Col>
            <h1 id="Hoofdtext">
              JOUW <span className="text-primary">PARTNER</span> IN BETROUWBARE en, SCHAALBARE <span className="text-primary">MARKETINGSOPLOSSINGEN</span>
            </h1>
          </Col>
        </Row>

        <Row>
          <Col className="mt-4">
            <p>
              ReachVision is er om jouw bedrijf te helpen groeien op Instagram. Wij nemen het werk uit handen en zorgen voor professionele posts, carrousels en reels die jouw merk versterken en jouw doelgroep aanspreken. Daarnaast optimaliseren we je Instagram-profiel, ontwikkelen we een slimme hashtagstrategie en houden we de resultaten bij met maandelijkse rapportages. Of je nu net begint of al verder wilt groeien, met onze pakketten bieden we de juiste ondersteuning. Jouw succes is onze missie – samen tillen we jouw Instagram naar een hoger niveau!
            </p>
          </Col>
          <Col>
            <Card.Img
              id="Kleinefoto"
              src="/images/computer-monitor-in-datacenter.jpg"
              alt="Reach Vision Logo"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>

      {/* Why ReachVision Section */}
      <div id="Container1">
      <Container className="mt-5">
        <div className="pt-5 text-center">
          <h1 id="Cloud">
            <span className="text-dark">WAAROM</span> REACH VISON?
          </h1>
        </div>

        <Row className="text-center mt-5">
          <Col>
            <h2>
              <span className="text-primary">EERLIJKHEID</span> STAAT VOOROP
            </h2>
            <p>
              Wij geloven in transparantie. Bij ReachVision krijg je altijd een eerlijke aanpak, heldere communicatie en geen verborgen kosten.
            </p>
          </Col>
          <Col>
            <h2>
              <span className="text-primary">TOEWIJDING</span> AAN JOUW SUCCES
            </h2>
            <p>
              Jouw groei is onze missie. We zetten ons volledig in om jouw doelen te bereiken en je social media naar een hoger niveau te tillen.
            </p>
          </Col>
          <Col>
            <h2>
              <span className="text-primary">FLEXIBILITEIT</span> STAAT VOOROP
            </h2>
            <p>
              Of je nu je strategie wilt aanpassen of snel iets nieuws wilt uitproberen, wij staan klaar om je te ondersteunen met oplossingen die werken.
            </p>
          </Col>
        </Row>

        <Row className="text-center mt-5">
          <Col>
            <h2>
              <span className="text-primary">FOCUS</span> OP RESULTAAT
            </h2>
            <p>
              We richten ons op wat echt werkt. Door data en trends te analyseren, zorgen we voor meetbare groei die impact maakt.
            </p>
          </Col>
          <Col>
            <h2>
              <span className="text-primary">CREATIVITEIT</span> OP MAAT
            </h2>
            <p>
              Elke post, carrousel en reel wordt ontworpen met jouw merkidentiteit in gedachten. Jouw uniekheid staat centraal in onze strategieën.
            </p>
          </Col>
        </Row>
      </Container>
      </div>

      {/* Marketing Partner Section */}
      <Container id="Container2">
        <div className="pt-5 text-center">
          <h1 id="Cloud">
            EEN MARKETINGS<span className="text-primary">PARTNER</span> DIE JE KAN{" "}
            <span className="text-primary">VERTROUWEN</span>
          </h1>
        </div>
        <Row>
          <Col>
            <Card.Img
              id="Kleinefoto"
              src="/images/harddisks-in-server.jpg"
              alt="Reach Vision Logo"
              className="img-fluid"
            />
          </Col>
          <Col className="d-flex">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit necessitatibus sint blanditiis provident ducimus dolores dicta dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, debitis soluta. Quae soluta minus vitae cum temporibus alias molestiae, consectetur voluptatum explicabo sit laboriosam laudantium! Voluptatum odit sint facilis repellendus.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Pricing Section */}
      <div id="Pricing" className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4">
            Kies het <span className="text-primary">perfecte pakket</span> voor jouw bedrijf
          </h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center">
                  <Card.Title className="mb-3">
                    <FaInstagram className="mr-2" /> Beginner
                  </Card.Title>
                  <Card.Text>
                    Perfect voor beginners die hun Instagram willen laten groeien.
                  </Card.Text>
                  <h3 className="text-primary">€99/maand</h3>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li><FaCheck /> 5 Posts per maand</li>
                    <li><FaCheck /> Basis hashtagstrategie</li>
                    <li><FaCheck /> 1 Maandelijkse rapportage</li>
                  </ul>
                  <Button variant="primary">Selecteer</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center">
                  <Card.Title className="mb-3">
                    <FaRocket className="mr-2" /> Professioneel
                  </Card.Title>
                  <Card.Text>
                    Voor bedrijven die extra impact willen maken op social media.
                  </Card.Text>
                  <h3 className="text-primary">€199/maand</h3>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li><FaCheck /> 10 Posts per maand</li>
                    <li><FaCheck /> Geavanceerde hashtagstrategie</li>
                    <li><FaCheck /> 2 Maandelijkse rapportages</li>
                    <li><FaCheck /> Content planning</li>
                  </ul>
                  <Button variant="primary">Selecteer</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center">
                  <Card.Title className="mb-3">
                    <FaBullhorn className="mr-2" /> Zakelijk
                  </Card.Title>
                  <Card.Text>
                    Voor bedrijven die maximale resultaten willen behalen.
                  </Card.Text>
                  <h3 className="text-primary">€299/maand</h3>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li><FaCheck /> 20 Posts per maand</li>
                    <li><FaCheck /> Uitgebreide hashtagstrategie</li>
                    <li><FaCheck /> Wekelijkse rapportages</li>
                    <li><FaCheck /> Persoonlijk advies</li>
                    <li><FaCheck /> Reel-productie</li>
                  </ul>
                  <Button variant="primary">Selecteer</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Homepagina;
