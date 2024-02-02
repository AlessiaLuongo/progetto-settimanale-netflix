import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const ComponentFooter = () => {
  return (
    <Container className="d-flex justify-content-center">
      <Row className=" justify-content-center">
        <Row className="justify-content-evenly mb-5">
          <Col xs={2} lg={1}>
            <i className="bi bi-facebook"></i>
          </Col>
          <Col xs={2} lg={1}>
            <i className="bi bi-instagram"></i>
          </Col>
          <Col xs={2} lg={1}>
            <i className="bi bi-twitter"></i>
          </Col>
          <Col xs={2} lg={1}>
            <i className="bi bi-youtube"></i>
          </Col>
        </Row>
        <Row className="justify-content-evenly">
          <Col xs={4} md={4} lg={2}>
            <ul className="p-0">
              <li>An item</li>
              <li>A second item</li>
              <li>A third item</li>
              <li>A fourth item</li>
            </ul>
          </Col>
          <Col xs={4} md={4} lg={2}>
            <ul className="p-0">
              <li>An item</li>
              <li>A second item</li>
              <li>A third item</li>
              <li>A fourth item</li>
            </ul>
          </Col>
          <Col xs={4} md={4} lg={2}>
            <ul className="p-0">
              <li>An item</li>
              <li>A second item</li>
              <li>A third item</li>
              <li>A fourth item</li>
            </ul>
          </Col>
        </Row>
        <div className="d-flex flex-column align-items-center">
          <div>
            <Button variant="outline-secondary" className="service-button">
              Service Code
            </Button>
          </div>

          <Row className="align-items-center">
            <Col xs={1}>
              <i className="bi bi-c-circle"></i>
            </Col>
            <Col xs={11}>
              <p>1997-2019 Netflix, inc. i-0d00fca2f9c0de</p>
            </Col>
          </Row>
        </div>
      </Row>
    </Container>
  );
};
export default ComponentFooter;
