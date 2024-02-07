import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const ComponentProfile = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} sm={12} md={8} lg={6}>
          <h1>Edit Profile</h1>
          <hr />
          <Row>
            <Col xs={4} sm={4} md={4} lg={5}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="profile-logo"
                width="80px"
                height="80px"
                className="my-3"
              />
            </Col>
            <Col xs={8} sm={7} md={8} lg={7}>
              <Accordion defaultActiveKey="0" flush className="my-3">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Strive Student</Accordion.Header>
                  <Accordion.Body>Registered since 2018</Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <h4>Language</h4>
              <NavDropdown title="English" className="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.2">Italiano</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Deutsch</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">French</NavDropdown.Item>
              </NavDropdown>
              <hr />
              <h4>Maturity Settings:</h4>
              <p>All Maturity Ratings</p>
              <p>
                Show titles of <span>all maturity ratings</span> for this
                profile
              </p>
              <Button variant="outline-secondary" className="service-button">
                Edit
              </Button>
              <hr />
              <Form>
                {["checkbox"].map((type) => (
                  <div key={`default-${type}`} className="mb-3">
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={"Autoplay next episode in a series on all devices"}
                    />

                    <Form.Check
                      type={type}
                      label={`disabled ${type}`}
                      id={"Autoplay previews while browsling on all devices"}
                    />
                  </div>
                ))}
              </Form>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="outline-secondary" className="service-button">
                SAVE
              </Button>
            </Col>
            <Col>
              <Button variant="outline-secondary" className="service-button">
                CANCEL
              </Button>
            </Col>
            <Col>
              <Button variant="outline-secondary" className="service-button">
                DELETE PROFILE
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ComponentProfile;
