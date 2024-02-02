import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import NavDropdown from "react-bootstrap/NavDropdown";

const ComponentFiltro = () => {
  return (
    <Container fluid className="mb-4">
      <Row className="justify-content-start">
        <Col xs={6} sm={2} className="p-0">
          <h1>TV Shows</h1>
        </Col>
        <Col className="d-flex align-items-center">
          <NavDropdown title="Categories" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.2">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Thriller</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Drama</NavDropdown.Item>
          </NavDropdown>
        </Col>
      </Row>
    </Container>
  );
};
export default ComponentFiltro;
